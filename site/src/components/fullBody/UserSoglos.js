import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/reduxHooks";

function UserSoglos(){

    const navigate = useNavigate()
    const {nameTheSite} = useAppSelector ((store) => store.user)

    function navigateMain(){
        navigate('/')
    }

    return <div className="bg-img">
        <div className="page-wrapper">
            <div className="page-wrapper_inner">
                <div className="container useragreement-block">
                    <div className="docs-popup">
                        <div className="docs-popup-wrapper">
                            <div className="docs-popup-wrapper-title">
                                Пользовательское соглашение <CloseIcon onClick={navigateMain} style={{width:"30px", height:"30px", cursor:'pointer'}}></CloseIcon>
                            </div>
                            <div className="docs-popup-wrapper-description">
                                <div className="jspContainer">
                                    <div className="jspPane">
                                    <p><b>1. Термины и определения</b><br/>
                                    В настоящем Пользовательском соглашении используются следующие термины и определения:<br/>
                                    1.1. Сайт – совокупность программных и аппаратных средств, объединенных в пределах
                                    пространства
                                    доменного имени {nameTheSite.name}, обеспечивающих взаимодействие между Пользователями.<br/>
                                    1.2. Пользователь - физическое или юридическое лицо, зарегистрированное на Сайте и
                                    использующее его
                                    от своего имени.<br/>
                                    1.3. Учетная запись (аккаунт) - уникальная запись Пользователя, которая создается на Сайте
                                    при
                                    регистрации, защищена пользовательским паролем.<br/>
                                    1.4. Покупатель - Пользователь, осуществляющий поиск Продавцов в рамках любых ресурсов а так
                                    же Сайта, с целью заказа
                                    определенного вида работ.<br/>
                                    1.5. Продавец - Пользователь, предоставляющий услуги выполнения различного рода работ.<br/>
                                    1.6. Контент - данные, информация, материалы, документы, файлы, сообщения и т.п. в
                                    электронной
                                    форме, расположенные на Сайте.<br/>
                                    <b>2. Описание услуг</b><br/>
                                    Биржа {nameTheSite.name} предлагает Пользователям доступ к широкому спектру сервисов, без
                                    перерывов, за исключением времени проведения необходимых ремонтных и регламентных работ. Все
                                    существующие на данный момент сервисы, а также любое развитие их и/или добавление новых
                                    является
                                    предметом настоящего Соглашения. Вы понимаете и соглашаетесь с тем, что все сервисы
                                    предоставляются
                                    по принципу "как есть" и что Администрация не несет ответственности ни за какие задержки,
                                    сбои,
                                    неверную или несвоевременную доставку, удаление или несохранность какой-либо
                                    пользовательской
                                    персональной информации.<br/>
                                    <b>3. Предмет соглашения</b><br/>
                                    3.1. Пользователь, прошедший регистрацию, имеет возможность использовать Сайт и получает
                                    право на
                                    следующие виды услуг:<br/>
                                    3.1.1. Проведение сделок.<br/>
                                    3.1.2. Поиск Продавцов для выполнения различного рода работ.<br/>
                                    <b>4.Предоставление услуг</b><br/>
                                    4.1. Персонал Сайта обладает правом на следующие действия:<br/>
                                    4.1.1. Отказать Пользователю в предоставлении услуг без указания причин в следующих
                                    случаях:<br/>
                                    4.1.1.1. Нарушения Пользователем условий настоящего Соглашения либо действующих правил.<br/>
                                    4.1.1.2. Невыполнения Пользователем финансовых обязательств перед Сайтом и/или третьими
                                    лицами.<br/>
                                    4.1.1.3. Наличия претензий в адрес Пользователя, подкрепленных доказательствами в рамках
                                    Сайта.<br/>
                                    4.1.1.4. Возникновения у персонала Сайта сомнений в надлежащем использовании Сайта
                                    Пользователем.<br/>
                                    4.1.1.5. Попытки со стороны Пользователя причинения любого вида ущерба Сайту.<br/>
                                    4.1.1.6. Отказа Пользователя от выполнения каких-либо требований со стороны персонала
                                    Сайта.<br/>
                                    4.1.1.7. Проявления неуважения со стороны Пользователя по отношению к персоналу Сайта и/или
                                    другим
                                    Пользователям Сайта.<br/>
                                    4.1.2. Удалить любую информацию со страниц Сайта без указания причин либо отказать в её
                                    размещении.<br/>
                                    4.1.3. Требовать от Пользователя предъявления документов, удостоверяющих личность, а также
                                    предоставления дополнительных данных, идентифицирующих Пользователя, в следующих
                                    случаях:<br/>
                                    4.1.3.1. При наличии оснований предполагать, что Пользователь нарушает действующее
                                    законодательство, условия настоящего Соглашения, права и интересы персонала Сайта и/или
                                    третьих
                                    лиц.<br/>
                                    4.1.3.2. Иных случаях необходимости идентификации Пользователя по усмотрению персонала
                                    Сайта.<br/>
                                    4.1.4. Приостановить работу программного и/или аппаратного обеспечения Сайта в целях
                                    обновления, а
                                    также проведения профилактических работ.<br/>
                                    4.1.5. Не обслуживать запросы к Сайту с анонимных прокси-серверов.<br/>
                                    <b>5. Права и Обязанности Пользователя Сайта</b><br/>
                                    5.1.Пользователь Сайта {nameTheSite.name} имеет следующие права и обязанности:<br/>
                                    5.1.1. Регистрировать только одну Учетную Запись.<br/>
                                    5.1.2. Предоставить достоверные персональные данные и в дальнейшем поддерживать их в
                                    актуальном
                                    состоянии.<br/>
                                    5.1.3. Следовать предписаниям и строго соблюдать действующие правила, определяющие порядок
                                    использования Сайта.<br/>
                                    5.1.4. Не использовать Сайт в противоправных целях.<br/>
                                    5.1.5. Не совершать противозаконных действий с использованием Сайта.<br/>
                                    5.1.6. Не разглашать конфиденциальную информацию, используемую для доступа к Учетной
                                    Записи.<br/>
                                    5.2. Пользователям Сайта {nameTheSite.name} запрещено:<br/>
                                    5.2.1. Использовать в своих сообщениях нецензурных слов, брани, оскорбительных для других
                                    Пользователей.<br/>
                                    5.2.2. Использовать чужие работы, не имеющие отношения к Вашему личному портфолио<br/>
                                    5.2.3. Понижать/повышать рейтинг несанкционированными методами (при помощи отзывов,
                                    рекомендаций,
                                    рекламных сообщений в блогах, проектах, личных сообщениях, комментариях).<br/>
                                    5.2.4. Нарушать права несовершеннолетних лиц и/или причинение им вреда в любой форме.<br/>
                                    5.2.5. Загружать, посылать, передавать или любым другим способом размещать контент, который
                                    Вы не
                                    имеете права делать доступным по закону Российской Федерации или согласно каким-либо
                                    контрактным отношениям.<br/>
                                    5.2.6. Нарушения любым способом нормальной работы сайта {nameTheSite.name};<br/>
                                    5.2.7. Размещения ссылок на ресурсы, содержание которых противоречит действующему
                                    законодательству
                                    России;<br/>
                                    5.2.8. Массовая публикация сообщений (комментариев, отзывов, личных сообщений пользователям)
                                    рекламного характера (спам) и флуда;<br/>
                                    5.2.9. Размещение и пропаганда порнографии и детской эротики, а также реклама интимных
                                    услуг<br/>
                                    5.2.10 Переводы доступны пользователю, после того как он пополнит счет на сайте, именно что
                                    сумма
                                    пополнения устанавливается для каждого индивидуально, в зависимости от проведенной(их) им
                                    сделок.
                                    Средства получены иным путем (переводом от других пользователей, проведением сделок),
                                    учитываться
                                    не будут.<br/>
                                    5.2.11 Администрация сервиса, обязует себя установить сумму минимального пополнения исходя
                                    из сделок на сайте на момент перевода,
                                    для доступа пользователю к переводам валюты сайта другим пользователям и доп. функциям
                                    сервиса. Так же минимальня сумма пополнения нужна для верификации личности.<br/>
                                    5.2.12 В случае нарушения данных условий и прочих обязательств по данному Соглашению
                                    Администрация ресурса
                                    {' '} {nameTheSite.name} (или представители администрации в лице модераторов) имеют право:<br/>
                                    предупредить вас в письменном виде;<br/>
                                    заблокировать ваш аккаунт;<br/>
                                    обнулить ваш рейтинг.<br/>
                                    5.2.13 Все реальные платежи которые поступают на баланс сервиса являются пожертвованием на
                                    развитие проэкта, взамен на это, Администрация сервиса пополняет счет пользователя который
                                    пожертвовал
                                    n-ю сумму, на сумму равну пожертвованием пользователя.<br/>
                                    <b>6. Ответственность сторон</b><br/>
                                    6.1. Персонал Сайта не несет ответственность:<br/>
                                    6.1.1. За действия Пользователей, нарушающие действующее законодательство.<br/>
                                    6.1.2. За информацию и материалы, размещаемые Пользователями в рамках Сайта.<br/>
                                    6.1.3. За качество товаров и услуг, предоставляемых Пользователями и самим сервисом
                                    {' '} {nameTheSite.name}<br/>
                                    6.1.4. За какой-либо ущерб и/или упущенную выгоду Пользователей и/или третьих лиц в
                                    результате
                                    использования или невозможности использования Сайта.<br/>
                                    6.1.5 За незнание правил сервиса, а так же за незнание тех. или иных пунктов которые
                                    касаются самого пользователя. PS: Незнание закона не освобождает от ответственности.
                                    6.2. Пользователь несет ответственность:<br/>
                                    6.2.1. За все действия, осуществленные от имени Пользователя в рамках Сайта.<br/>
                                    6.2.2. За качество и своевременность выполнения принятых в рамках Сайта обязательств.<br/>
                                    6.2.3. За безопасность конфиденциальной информации, используемой для доступа к Учетной
                                    Записи.<br/>
                                    6.2.4. В случае блокировок/подозрений пользователя(лей) в Frod платеже, для разблокировки счёта, проводится повторная транзакция на ту же сумму (последняя сумма), что была проведена перед блокировкой с иной Банковской карты. Если у пользователя нет такой возможности, Администрация обязует себя удалить платежные данные пользователя, по запросу самого пользователя, для проведения транзакции с той же карты, что была совершена перед блокировкой.<br/>
                                    6.3 В соответствии с правилами проведения платежей на сервисе, во избежания отмыва/мошенничества через сервис, пользователь обязан проводить все транзакции с реквизитов которые были внесены изначально.<br/>
                                    <b>7. Расторжение Соглашения</b><br/>
                                    Вы согласны с тем, что Сайт {nameTheSite.name} оставляет за собой право прекратить действие Вашей
                                    Учетной записи и удалить любой контент по любой причине, в том числе при неиспользовании
                                    доступа
                                    или при нарушении правил Соглашения.<br/>
                                    7.1. Персонал Сайта обладает правом в одностороннем порядке вносить изменения в настоящее
                                    Соглашение, а также действующие правила.<br/>
                                    7.2. Использование Сайта после внесения изменений означает безусловное принятие (акцепт)
                                    Пользователем условий обновленной редакции Соглашения.<br/>
                                    7.3. Персонал Сайта обладает правом в одностороннем порядке аннулировать Соглашение, если
                                    Учетная
                                    запись Пользователя не использовалась более 12 календарных месяцев подряд. Под
                                    использованием
                                    Учетной Записи подразумевается авторизация Пользователя на Сайте. 7.4. {nameTheSite.name} может в
                                    любой
                                    момент закрыть любой из своих сервисов, с или без предварительного уведомления. {nameTheSite.name}
                                    также не несет никакой ответственности за прекращение доступа к своим сервисам.<br/>
                                    <b>8. Принятие условий Соглашения</b><br/>
                                    8.1. Безусловным принятием (акцептом) условий настоящего Соглашения является регистрация на
                                    Сайте.<br/>
                                    8.2. Принятие условий настоящего Соглашения означает безусловное принятие Пользователем
                                    условий
                                    Политики конфиденциальности, а также остальных действующих правил.<br/>
                                    <b>9. Освобождение от гарантий</b><br/>
                                    9.1. Вы понимаете и соглашаетесь с тем, что:<br/>
                                    9.1.1. Вы используете сервисы {nameTheSite.name} на Ваш собственный риск. Службы предоставляются
                                    "как
                                    есть". {nameTheSite.name} не принимает на себя никакой ответственности, в том числе и за
                                    соответствие
                                    сервисов цели пользователя;<br/>
                                    9.1.2. {nameTheSite.name} не гарантирует, что: сервисы будут соответствовать Вашим требованиям;
                                    сервисы
                                    будут предоставляться непрерывно, быстро, надежно и без ошибок; результаты, которые могут
                                    быть
                                    получены с использованием сервисов, будут точными и надежными; качество какого-либо
                                    продукта,
                                    услуги, информации и пр., полученного с использованием сервиса, будет соответствовать Вашим
                                    ожиданиям; все ошибки в программах будут исправлены;<br/>
                                    9.1.3. Любые материалы, полученные Вами с использованием сервисов {nameTheSite.name}, Вы можете
                                    использовать на свой собственный страх и риск, на Вас возлагается ответственность за любой
                                    ущерб,
                                    который может быть нанесен Вашему компьютеру и Вашим данным в результате загрузки этих
                                    материалов;
                                    Валюта на сайте является крипто-валютой и не имеет реальной ценности. Валюту может
                                    приобрести любой пользователь,
                                    как с помощю сделок, так и купив ее за реальные деньги.<br/>
                                    9.1.4.{nameTheSite.name} не несет ответственности за любые прямые или непрямые убытки, произошедшие
                                    из-за: использования либо невозможности использования сервисов; несанкционированного доступа
                                    к
                                    Вашим коммуникациям; заявления или поведение любого третьего лица в сервисах.<br/>
                                    <b>10. Сервисы, сайты и контент третьих лиц</b><br/>
                                    10.1. Сервисы Сайта могут содержать ссылки на другие сервисы и сайты в сети Интернет
                                    (сервисы и
                                    сайты третьих лиц), включая услуги онлайн-общения (электронная почта, Skype, ICQ),
                                    конструктор
                                    договоров и т.п. Указанные третьи лица и их контент не проверяются на соответствие тем или
                                    иным
                                    требованиям (достоверности, полноты, законности и т.п.). Сервис находится в бета тесте,
                                    вывoды на
                                    реальные электронные кошельки, банковские карты и тп. не возможны. Биржа {nameTheSite.name} не
                                    несет
                                    ответственность за любую информацию, материалы, размещенные на сервисах и сайтах третьих
                                    лиц, к
                                    которым Пользователь получает доступ с использованием сервисов Сайта, в том числе, за любые
                                    мнения
                                    или утверждения, выраженные на сервисах и сайтах третьих лиц, рекламу и т.п., а также за
                                    доступность таких сервисов и сайтов или контента и последствия их использования
                                    Пользователем.<br/>
                                    10.2. Ссылка (в любой форме) на любой сайт, продукт, услугу, любую информацию коммерческого
                                    или
                                    некоммерческого характера, размещенная на Сайте, не является одобрением или рекомендацией
                                    данных
                                    продуктов (услуг, деятельности), за исключением случаев, когда на это прямо указывается
                                    Сайтом.<br/>
                                    <b>11. Порядок рассмотрения споров</b><br/>
                                    11.1. Соглашение является юридически обязывающим договором между Вами и {nameTheSite.name} и
                                    регламентирует использование Вами сервисов {nameTheSite.name}. Соответствующими договорами на Вас
                                    также
                                    могут быть наложены дополнительные обязательства, связанные с использованием других
                                    сервисов, а
                                    также контента или программного обеспечения, принадлежащего третьей стороне.<br/>
                                    11.2. Вы и {nameTheSite.name} соглашаетесь на то, что все возможные споры по поводу Соглашения
                                    будут
                                    разрешаться по нормам российского права.<br/>
                                    11.3. Ничто в Соглашении не может пониматься как установление между Вами и {nameTheSite.name}{' '}
                                    агентских
                                    отношений, отношений товарищества, отношений по совместной деятельности, отношений личного
                                    найма,
                                    либо каких-то иных отношений, прямо не предусмотренных Соглашением.<br/>
                                    11.4. Признание судом какого-либо положения Соглашения недействительным или не подлежащим
                                    принудительному исполнению не влечет недействительности или неисполнимости иных положений
                                    Соглашения.<br/>
                                    11.5. Бездействие со стороны {nameTheSite.name} в случае нарушения Вами либо иными пользователями
                                    положений Соглашения не лишает {nameTheSite.name} права предпринять соответствующие действия в
                                    защиту
                                    своих интересов позднее, а также не означает отказа {nameTheSite.name} от своих прав в случае
                                    совершения в последующем подобных либо сходных нарушений.<br/>
                                    <b>12. Вступление соглашения в силу и действие</b><br/>
                                    12.1. Соглашение вступает в силу с момента акцепта настоящей оферты Покупателем.
                                    Безусловным принятием (акцептом) условий настоящей оферты Соглашения считается
                                    осуществление Покупателем регистрации на Сайте путем заполнения регистрационной
                                    формы и выражения согласия с условиями Соглашения при нажатии кнопки
                                    «Зарегистрироваться», размещенной на странице Сайта с регистрационной формой.
                                    Безусловным принятием (акцептом) всех условий предоставления Платных услуг также
                                    считается осуществление Покупателем платежа в счет оплаты Платной услуги.<br/>
                                    12.2. Соглашение заключается на неопределенный срок и может быть расторгнуто по
                                    инициативе любой из Сторон в любое время. Для этого Продавец размещает
                                    уведомление о расторжении Соглашения на Сайте и/или направляет Покупательу на его
                                    Профиль (или регистрационные данные) соответствующее уведомление, с момента
                                    такого размещения/направления такого уведомления Соглашение считается
                                    расторгнутым. Покупатель может расторгнуть Соглашение путем запроса на удаление
                                    своего Профиля с Сайта, при этом далее обработка персональных данных
                                    осуществляется согласно пунктам 4.8. - 4.11. данного соглашения.<br/>
                                    12.3. Настоящее Соглашение распространяет свое действие на Покупательов,
                                    осуществивших регистрацию до даты опубликования настоящего Соглашения на Сайте.<br/>
                                    12.4. Пользователь обязуется самостоятельно знакомиться с условиями Соглашения. Если
                                    Пользователь не согласен с условиями настоящего Соглашения, то он должен немедленно
                                    удалить свой Профиль с Сайта, в противном случае продолжение использования
                                    Пользователем Сайта означает, что Пользователь согласен с условиями Соглашения.<br/>
                                    12.5. При определении сроков определение времени совершения Стороной или
                                    третьими лицами действия (бездействия) исчисляется по Московскому времени.<br/>
                                    <b>13. Прочие условия</b><br/>
                                    13.1. Стороны договорились, что при исполнении (изменении, дополнении,
                                    прекращении) Соглашения допускается использование подписей представителей
                                    Сторон, а также их печатей, с помощью средств факсимильной связи, механического или
                                    иного копирования, электронно-цифровой подписи либо иного аналога
                                    собственноручной подписи руководителей и печатей организаций. Стороны
                                    подтверждают, что документы к Соглашению, подписанные и оформленные указанным
                                    в настоящем пункте способом, имеют юридическую силу и обязательны для исполнения
                                    Сторонами.<br/>
                                    13.2. Стороны признают любую информацию, касающуюся заключения Соглашения,
                                    включая любые приложения и дополнения к нему, коммерческой тайной и обязуются
                                    строго сохранять конфиденциальный характер такой информации, не разглашая ее
                                    третьим лицам без предварительного письменного на то согласия другой Стороны, за
                                    исключением случаев, когда это необходимо для целей Соглашения или для раскрытия
                                    соответствующим государственным органам в случаях, определенных законом.
                                    Указанное положение не относится к общеизвестной или общедоступной информации.
                                    Стороны считают конфиденциальной всю деловую информацию, передаваемую друг
                                    другу, как-то: информация об их клиентах, партнерах, бизнес – планах, ценах,
                                    финансовом состоянии и т.д. Стороны не должны открывать такую информацию кому
                                    бы то ни было, за исключением случаев, когда это необходимо для надлежащего
                                    выполнения их обязательств по Соглашению, или если такая информация является
                                    общедоступной, или по взаимному согласованию Сторон.<br/>
                                    13.3. Любые уведомления, запросы или иные сообщения (корреспонденция),
                                    представляемые Сторонами друг другу должны быть оформлены в письменном виде и
                                    направлены получающей Стороне по почте, путем направления заказной
                                    корреспонденции, по электронной почте, факсу или с курьером, как будет сочтено
                                    целесообразным. Датой получения корреспонденции считается момент получения
                                    почтового отправления, в том числе заказной корреспонденции, электронного
                                    подтверждения доставки при отправлении электронной почтой или по факсу, или день
                                    доставки в случае отправления корреспонденции с курьером.
                                    При рассмотрении споров в cуде переписка Сторон по электронной почте,
                                    факсимильные сообщения будут признаны Сторонами достаточными доказательствами,
                                    если настоящим Соглашением прямо не предусмотрен иной способ направления
                                    корреспонденции.<br/>
                                    <b>14. Прекращение действия учетной записи Пользователя</b><br/>
                                    14.1. Пользователь согласен с тем, что Общество оставляет за собой право прекратить
                                    действие учетной записи Пользователя на {nameTheSite.name} в любое время без
                                    предварительного уведомления Пользователя.<br/>
                                    14.2. Прекращение действия учетной записи может быть произведено в связи
                                    со следующими причинами: а) нарушение положений настоящего Соглашения,
                                    а также дополнений к нему, являющихся их неотъемлемой частью; б)
                                    по соответствующему запросу органов власти, согласно законодательству
                                    Российской Федерации; в) в случае распространения Пользователем
                                    неподтвержденной негативной информации об Обществе; г) в связи
                                    с непредвиденными проблемами технического характера или обстоятельствами,
                                    связанными с безопасностью и т.п.<br/>
                                    14.3. Общество вправе удалить учетную запись Пользователя на {nameTheSite.name} и/или
                                    приостановить, ограничить или прекратить доступ к любому из Сервисов, если
                                    Общество обнаружит в действиях Пользователя признаки нарушения условий
                                    настоящего Соглашения, без объяснения причин таких действий.<br/>
                                    <b>15. Исключительные права на содержание Сервисов и контент</b><br/>
                                    15.1. Пользователь обязуется не воспроизводить, не копировать, не повторять,
                                    не продавать и не перепродавать, а также не использовать для каких-либо
                                    коммерческих целей и не доводить до всеобщего сведения, не распространять
                                    программы {nameTheSite.name}, целиком либо какие-либо части Сервисов {nameTheSite.name}{' '}
                                    (включая контент, доступный Пользователю посредством Сервисов), или доступ
                                    к ним, кроме тех случаев, когда Пользователь предварительно получил такое
                                    разрешение от Общества.<br/>
                                    15.2. Все объекты, доступные при помощи Сервисов и {nameTheSite.name}, в том числе
                                    элементы дизайна, текст, графические изображения, иллюстрации, видео, программы
                                    для ЭВМ, базы данных, музыка, звуки и другие объекты (далее — содержание
                                    Сервисов), а также любой контент, размещенный на Сервисах и {nameTheSite.name},
                                    являются объектами исключительных прав Правообладателя, и других
                                    правообладателей.<br/>
                                    15.3. Использование контента, а также каких-либо иных элементов Сервисов
                                    и {nameTheSite.name} возможно только в рамках функционала, предлагаемого тем или
                                    иным Сервисом. Никакие элементы содержания Сервисов и {nameTheSite.name}, а также
                                    любой контент, размещенный в Сервисах и {nameTheSite.name}, не могут быть
                                    использованы иным образом без предварительного разрешения правообладателя.
                                    Под использованием подразумеваются, в том числе: воспроизведение, копирование,
                                    переработка, распространение на любой основе, отображение во фрейме и т.д.
                                    Исключение составляют случаи, прямо предусмотренные законодательством РФ.<br/>
                                    15.4. Использование Пользователем элементов содержания Сервисов, а также любого
                                    контента для личного некоммерческого использования, допускается при условии
                                    сохранения всех знаков охраны авторского права, смежных прав, товарных знаков,
                                    других уведомлений об авторстве, сохранения имени (или псевдонима)
                                    автора/наименования правообладателя в неизменном виде, сохранении
                                    соответствующего объекта в неизменном виде. Исключение составляют случаи,
                                    прямо предусмотренные законодательством РФ.<br/>
                                    <b>16. Иные положения</b><br/>
                                    16.1. Настоящее Соглашение представляет собой договор между Пользователем
                                    и Обществом относительно порядка использования Сервисов {nameTheSite.name}{' '}
                                    и заменяет собой все предыдущие соглашения между Пользователем и Обществом
                                    по вышеуказанным вопросам.<br/>
                                    16.2. Настоящее Соглашение регулируется и толкуется в соответствии
                                    с законодательством Российской Федерации. Вопросы, не урегулированные
                                    настоящим Соглашением, подлежат разрешению в соответствии
                                    с законодательством Российской Федерации. Все возможные споры, вытекающие
                                    из отношений, регулируемых настоящим Соглашением, разрешаются в порядке,
                                    установленном действующим законодательством Российской Федерации, по нормам
                                    российского права. Везде по тексту настоящего Соглашения, если явно не указано
                                    иное, под термином «законодательство» понимается как законодательство
                                    Российской Федерации.<br/>
                                    16.3. Ввиду безвозмездности услуг, оказываемых в рамках настоящего Соглашения,
                                    нормы о защите прав потребителей, предусмотренные законодательством
                                    Российской Федерации, не могут быть применимыми к отношениям между
                                    Пользователем (Продавцом и/или Покупателем) и Обществом.<br/>
                                    16.4. Ничто в Соглашении не может пониматься как установление между
                                    Пользователем и Обществом отношений товарищества, отношений по совместной
                                    деятельности, отношений личного найма, либо каких-то иных отношений, прямо
                                    не предусмотренных Соглашением.<br/>
                                    16.5. Если по тем или иным причинам одно или несколько положений настоящего
                                    Соглашения будут признаны недействительными или не имеющими юридической
                                    силы, это не оказывает влияния на действительность или применимость остальных
                                    положений Соглашения.<br/>
                                    16.6. Бездействие со стороны Общества в случае нарушения Пользователем либо
                                    иными пользователями положений Соглашений не лишает Общества права
                                    предпринять соответствующие действия в защиту своих интересов позднее, а также
                                    не означает отказа Общества от своих прав в случае совершения в последующем
                                    подобных либо сходных нарушений.<br/>
                                    16.7. Любой реальный платеж, перевод реальных средств сайту, являются добровольныммы,
                                    администрация може только проинформировать о минимальном пополнении счет или же дать советы
                                    как это сделать. Никто никаким образом не принуждает и не заставляет кого либо переводить
                                    средства сайту, это чисто добровольное и осознанное решение пользователя.<br/>
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default UserSoglos