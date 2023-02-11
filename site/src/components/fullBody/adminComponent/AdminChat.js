import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams, Link } from "react-router-dom"
import { axiosGetAdminChats, axiosGetMessagestoAdmin } from "../../../api/axios"
import { useAppSelector } from "../../../store/reduxHooks"
import { reducerTypes } from "../../../store/Users/types"
import { socketAdmin } from "../AdminPanel"
import { adminChatStatusMock } from "../../mock/OutputMock"

function AdminChat() {

  const { email } = useParams()
  const dispatch = useDispatch();
  const statebackground = !!localStorage.getItem('backroundImg')
  const { adminChat, user, adminMessage } = useAppSelector((store) => store.user)
  const [statusForUserChat, setStatusForUserChat] = useState(1)
  const [currentChat, setCurrentChat] = useState(null)
  const [message, setMessage] = useState('')
  const [adminName, setAdminName] = useState('ЛизОчка')
  const navigate = useNavigate()

  async function getAllChats() {
    if (!user?.email) return alert('Войдите в аккаунт');
    const data = await axiosGetAdminChats(user?.email, user?.password);
    if (data) {
      dispatch({
        type: reducerTypes.GET_ADMIN_CHAT,
        payload: data,
      });
    }
  }

  async function getMessages() {
    if (!currentChat?.email) return;
    const data = await axiosGetMessagestoAdmin(currentChat?.email);
    if (data) {
      dispatch({
        type: reducerTypes.GET_ADMIN_MESSAGE,
        payload: data.sort((a, b) => a.id - b.id),
      });
    }
  }

  function sendMessageToAdmin() {
    if (!message) return alert('Сообщение не может быть пустым')
    if (!user?.email) return alert('Войдите в аккаунт');
    if (!currentChat?.id) return alert('Чат не найден')
    if (!adminName) return alert('Введите имя админимстратора')
    const time = new Date().toLocaleString().replaceAll(',', '')
    socketAdmin.emit("sendMessageFromAdmin", { administratorName: adminName, time, message, id: currentChat?.id, adminEmail: user?.email, adminPassword: user?.password });
    setMessage('')
  }

  function updateAdminChatStatus() {
    if (!user?.email) return alert('Войдите в аккаунт');
    if (!currentChat?.email) return alert('Чат не найден')
    socketAdmin.emit("updateAdminChatStatus", { status: Number(statusForUserChat), email: currentChat?.email, adminEmail: user?.email, adminPassword: user?.password });
  }

  useEffect(() => {
    const temporaryChat = adminChat?.filter(item => item.email === email)[0]
    if (temporaryChat) {
      setCurrentChat(temporaryChat)
      setStatusForUserChat(temporaryChat?.statusForUser)
    }
    // eslint-disable-next-line 
  }, [adminChat])

  useEffect(() => {
    if (currentChat?.email) {
      socketAdmin.emit("join", { name: currentChat?.email, room: currentChat?.email });
    }
  }, [user]);

  useEffect(() => {
    getAllChats();
    // eslint-disable-next-line 
  }, [user])

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line 
  }, [currentChat])

  useEffect(() => {
    socketAdmin.on("messageToAdmin", ({ data }) => {
      dispatch({
        type: reducerTypes.GET_ADMIN_MESSAGE,
        payload: [...adminMessage, data]
      });
    });
    // eslint-disable-next-line
  }, [adminMessage]);

  useEffect(() => {
    socketAdmin.on("updateChatStatus", ({ data }) => {
      if (data) {
        console.log(1)
        console.log(1, data)
      }
    });
    // eslint-disable-next-line
  }, []);

  return <>
    <div style={{ display: 'flex', minHeight: '100vh', justifyContent: "center", }} className={!statebackground ? 'styleAdminPanel' : 'styleAdminPanel2'}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", background: "rgba(17, 17, 18, 0.65)" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: '10px', color: 'white' }}>
          <div onClick={() => navigate("/adminPanel")} className="tabl-flex-admin-button-global2">
            Вернуться назад
          </div>
        </div>

        <div style={{ marginTop: '20px', color: "white" }}>
          <div style={{ borderRadius: "5px" }} className="tabl-flex-admin">
            <div style={{ textAlign: 'center', width: '50px' }} className="output-id">ID</div>
            <div style={{ textAlign: 'center', width: '155px' }} className="output-sum">Имя пользователя</div>
            <div style={{ textAlign: 'center', width: '210px' }} className="output-sum">Почта пользователя</div>
            <div style={{ textAlign: 'center', width: '155px' }} className="output-sum">Статус для пользователя</div>
            <div style={{ textAlign: 'center', width: '155px' }} className="output-sum">Время прошлого удаления чата</div>
            <div style={{ textAlign: 'center', width: '120px' }} className="output-date">Оценка</div>
            <div style={{ textAlign: 'center', width: '100px' }} className="output-date">Новые сообщения</div>
          </div>
          {<div style={{ marginTop: '5px', borderRadius: '5px' }} className="tabl-flex-admin-user" key={currentChat?.email}>
            <div style={{ width: '50px', minHeight: '48px', display: "flex", alignItems: "center", justifyContent: "center" }} className="output-id">{currentChat?.id}</div>
            <div style={{ width: '155px', minHeight: '48px', display: "flex", alignItems: "center", justifyContent: "center" }} className="output-sum">{currentChat?.nickname}</div>
            <div style={{ width: '210px', minHeight: '48px', display: "flex", alignItems: "center", justifyContent: "center", overflowWrap: "anywhere" }} className="output-sum">{currentChat?.email}</div>
            <div style={{ width: '155px', minHeight: '48px', display: "flex", alignItems: "center", justifyContent: "center" }} className="output-sum">{adminChatStatusMock[statusForUserChat - 1]}</div>
            <div style={{ width: '155px', minHeight: '48px', display: "flex", alignItems: "center", justifyContent: "center" }} className="output-sum">{currentChat?.deleteChatTime}</div>
            <div style={{ width: '120px', minHeight: '48px', display: "flex", alignItems: "center", justifyContent: "center" }} className="output-date">{currentChat?.rate}</div>
            <div style={{ width: '100px', minHeight: '48px', display: "flex", alignItems: "center", justifyContent: "center", overflowWrap: "anywhere" }} className="output-sum">{currentChat?.newMessage}</div>
          </div>}
          <div className='pages-user-box-2'>
            <div style={{ flexDirection: "column" }} className='pages-user-block'>
              <h6 style={{ margin: "0", textAlign: "center" }}>Изменение статуса для пользователя</h6>
              <select
                onChange={(e) => setStatusForUserChat(Number(e.target.value))}
                style={{ color: "white", borderRadius: "5px" }}
                className="tabl-flex-admin-user-scores "
                name="select"
                value={String(statusForUserChat || 1)}>
                <option value="1">{adminChatStatusMock[0]}</option>
                <option value="2">{adminChatStatusMock[1]}</option>
              </select>
              <button onClick={updateAdminChatStatus}>Изменить</button>
            </div>
          </div>
        </div>

        <div style={{ color: 'white' }}>
          <h1>Чат с {currentChat?.nickname}</h1>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {adminMessage?.map(item => <div key={item?.id}>
              {item?.role === "USER" ? <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p>
                  {item?.nickname}: {item?.message} {item?.time}
                </p>
              </div>
                : <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>
                    {item?.administratorName}: {item?.message} {item?.time}
                  </p>
                </div>}
            </div>)}
            <div>
              <input
                type='text'
                placeholder="Введите сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
              </input>
              <button onClick={sendMessageToAdmin}>Отправить</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
}

export default AdminChat