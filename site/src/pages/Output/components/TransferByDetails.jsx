import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { axiosCreateUserTransfer, axiosGetUserTransfers } from '../../../api/axios';
import { transferStatusMock } from '../../../components/mock/OutputMock';
import { useAppSelector } from '../../../store/reduxHooks';
import { reducerTypes } from '../../../store/Users/types';
import { paymant } from '../../../components/mock/OutputMock';

function TransferByDetails() {
    const { user, transfers, nameTheSite } = useAppSelector((store) => store.user);
    const [dataId, setDataId] = useState();
    const [score, setScore] = useState(0);
    const [currentPaymant, setCurrentPaymant] = useState(paymant[0]);
    const [checkFirstOpen, setCheckFirstOpen] = useState(false);
    const [walletNumber, setWalletNumber] = useState('');
    const [visibleWalletError, setVisibleWalletError] = useState(true);
    const dispatch = useDispatch();
    const SSizeBlockV1 = {
        width: '80px',
        display: 'flex',
        justifyContent: 'center',
    };
    const SSizeBlockV2 = {
        width: '231px',
        display: 'flex',
        justifyContent: 'center',
    };
    const SSizeBlockV3 = {
        width: '280px',
        display: 'flex',
        justifyContent: 'center',
    };
    const SSizeBlockV4 = {
        width: '170px',
        display: 'flex',
        justifyContent: 'center',
    };

    async function createTransfer() {
        if (user?.systemMessage === 'true') return alert('Ваш аккаунт не верифицирован');
        if (user?.score < score) return alert('Недостаточно средств');
        const result = await axiosCreateUserTransfer(currentPaymant.paymentSystem, walletNumber, score, user?.email, user?.nickname, user?.password);
        if (typeof result === 'string') {
            alert(result);
        } else {
            dispatch({
                type: reducerTypes.GET_USER,
                payload: result.user,
            });
            getUserTransfers();
            alert('Перевод создан');
        }
    }

    function validateWallet(e) {
        setCheckFirstOpen(true);
        let wallet = e.target.value;
        setWalletNumber(wallet);
        setVisibleWalletError(currentPaymant?.validate(wallet));
    }

    async function getUserTransfers() {
        let result = await axiosGetUserTransfers(user?.email);
        if (result) {
            dispatch({
                type: reducerTypes.GET_TRANSFERS,
                payload: result,
            });
        }
    }

    function setPaymentSystemAndPlaceholder(paymantSys) {
        const temporaryPaymant = paymant.filter((item) => item.paymentSystem === paymantSys)[0];
        setCurrentPaymant(temporaryPaymant);
    }

    useEffect(() => {
        setDataId((Math.random() * 1000).toFixed(0));
    }, []);

    useEffect(() => {
        if (checkFirstOpen) {
            setVisibleWalletError(currentPaymant?.validate(walletNumber));
        }
        // eslint-disable-next-line
    }, [currentPaymant]);

    useEffect(() => {
        getUserTransfers();
        // eslint-disable-next-line
    }, [user, user.email]);

    return (
        <div className="flex-box-1">
            <div className="nav-account__content">
                <div className="nav-account__operation operation">
                    <div className="operation__heading">Операция №{dataId}</div>
                    <div className="form-operation">
                        <div className="form-operation__input-section">
                            <div className="form-operation__item">
                                <Form.Label htmlFor="inputPassword5">Платежная система:</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={(e) => setPaymentSystemAndPlaceholder(e.target.value)}>
                                    <option>Сбербанк</option>
                                    <option>Альфа-банк</option>
                                    <option>РОСБАНК</option>
                                    <option>Газпромбанк</option>
                                    <option>Тинькофф Банк</option>
                                    <option>МКБ</option>
                                    <option>Qiwi Wallet</option>
                                    <option>YandexMoney</option>
                                    <option>Webmoney</option>
                                    <option>Monero (XMR)</option>
                                    <option>Bitcoin (BTC)</option>
                                    <option>Ethereum (ETH)</option>
                                </Form.Select>
                            </div>
                            <div className="form-operation__item">
                                <Form.Label htmlFor="inputPassword5">Номер банковской карты / счета / кошелька</Form.Label>
                                <div className="outputBlock">
                                    <input className="inputLable" onChange={(e) => validateWallet(e)} type="text" id="inputText" placeholder={currentPaymant.placeholder} value={walletNumber} />
                                    {!visibleWalletError ? <div style={{ color: 'red' }}>{currentPaymant.error}</div> : ''}
                                </div>
                            </div>
                            <div className="form-operation__item">
                                <Form.Label htmlFor="inputPassword5">Cумма</Form.Label>
                                <Form.Control onChange={(e) => setScore(Number(e.target.value))} type="number" id="inputText" placeholder="0" />
                            </div>
                        </div>
                        <button className="btn-orange" onClick={() => createTransfer()}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
            <div className="account-wrap__about-info">
                <p>{nameTheSite.name} не является банком, платежной системой или другой финансовой организацией и не ведет расчетные счета пользователей.</p>
                <p>Кабинет {nameTheSite.name} обеспечивает лишь удобство расчетов между клиентами.</p>
            </div>
            <div className="account-wrap__time-info">Перевод осуществляется в течении 24 ч</div>
            <div className="alert-block">
                {transfers ? (
                    <>
                        <div className="output-description-info-block">
                            <div style={SSizeBlockV1} className="output-id dilit-block">
                                ID
                            </div>
                            <div style={SSizeBlockV2} className="output-date dilit-block">
                                Платежная система
                            </div>
                            <div style={SSizeBlockV3} className="output-date">
                                Номер банковской карты{' '}
                            </div>
                            <div style={SSizeBlockV4} className="output-sum">
                                Сумма
                            </div>
                            <div style={SSizeBlockV2} className="output-sum">
                                Время перевода
                            </div>
                            <div style={SSizeBlockV2} className="output-sum">
                                Состояние перевода{' '}
                            </div>
                        </div>
                        {transfers
                            ?.sort((a, b) => a.id - b.id)
                            ?.map((item, index) => (
                                <div style={{ justifyContent: 'space-around' }} className="flex-info-block" key={index}>
                                    <div style={SSizeBlockV1} className="output-id dilit-block">
                                        {item.id}
                                    </div>
                                    <div style={SSizeBlockV2} className="output-date dilit-block">
                                        {item.paymantSystem}
                                    </div>
                                    <div style={SSizeBlockV3} className="output-date">
                                        {item.walletNumber}
                                    </div>
                                    <div style={SSizeBlockV4} className="output-sum">
                                        {item.score}
                                    </div>
                                    <div style={SSizeBlockV2} className="output-sum">
                                        {item.time}
                                    </div>
                                    <div style={SSizeBlockV2} className="output-sum">
                                        {transferStatusMock[item?.status === 0 ? item?.status : item?.status - 1]}
                                    </div>
                                </div>
                            ))}
                    </>
                ) : (
                    <p className="text-alert">История выводов по реквизитам пуста</p>
                )}
            </div>
        </div>
    );
}

export default TransferByDetails;
