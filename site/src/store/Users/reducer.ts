import { IAction } from '../utils';
import { reducerTypes } from './types';
import { IUser } from '../../interfaces/users';
import { IDeal } from '../../interfaces/deal';
import { IRefill } from '../../interfaces/refill';
import { ITransfer } from '../../interfaces/transfer';
import { INameSite } from '../../interfaces/nameSite';
import { ITransferToUser } from '../../interfaces/transferToUser';
import { IDealMessage } from '../../interfaces/dealMessage';
import { IWalletSite } from '../../interfaces/wallet';
import { IAdminChat } from '../../interfaces/adminChat';
import { IMessageToAdmin } from '../../interfaces/messageToAdmin';

export interface IUsersReducer {
    user: IUser | {};
    deals: IDeal[];
    refill: IRefill | {};
    myRefills: IRefill[];
    checkAlertSystemMessage: boolean;
    updateHeaderAlert: boolean;
    transfers: ITransfer[] | [];
    transfersToUser: ITransferToUser[] | [];
    dealMessages: IDealMessage[] | [];
    allUsers: any | [];
    allDeals: IDeal[] | [];
    allRefills: IRefill[] | [];
    allTransfers: ITransfer[] | [];
    allTransfersToUser: ITransferToUser[] | [];
    fixSumSystemMessage: [];
    nameTheSite: INameSite;
    criptoWallet: IWalletSite;
    adminChat: IAdminChat[] | [];
    adminMessage: IMessageToAdmin[] | [];
    messageToAdmin: IMessageToAdmin[] | [];
}

export const INITIAL: IUsersReducer = {
    user: {
        id: 1,
        email: 'user104@gmail.com',
        password: '1234567a',
        role: 'ADMIN',
        score: 10000,
        nickname: 'Sasha',
        systemMessage: 'true',
        checkRu: 'true',
        minimumTransferAmount: 5000,
        sumTransferAmoumt: 1000,
        completed: 0,
    },
    deals: [],
    refill: {},
    myRefills: [],
    checkAlertSystemMessage: false,
    updateHeaderAlert: false,
    transfers: [],
    transfersToUser: [],
    dealMessages: [],
    allUsers: [
        {
            id: 1,
            email: 'user104@gmail.com',
            password: '1234567a',
            role: 'ADMIN',
            score: 10000,
            nickname: 'Sasha',
            systemMessage: 'true',
            checkRu: 'true',
            minimumTransferAmount: 5000,
            sumTransferAmoumt: 1000,
            completed: 0,
        },
    ],
    allDeals: [],
    allRefills: [],
    allTransfers: [],
    allTransfersToUser: [],
    fixSumSystemMessage: [],
    nameTheSite: {
        name: localStorage.getItem('siteName') || '',
    },
    criptoWallet: {
        wallet: localStorage.getItem('siteWallet') || '',
    },
    adminChat: [
        {
            id: 12,
            nickname: 'ivarBolles',
            email: 'string',
            statusForUser: 1,
            deleteChatTime: 'string',
            rate: 1,
            newMessage: 1,
            userId: 1,
            createdAt: 'string',
            updatedAt: 'string',
        },
    ],
    adminMessage: [{
        id: 1,
        nickname: "location",
        email: "string",
        administratorName: "location",
        role: "string",
        statusForUser: 1,
        time: "string",
        message: "string",
        chatId: 1,
        image: "string",
        createdAt: "string",
        updatedAt: "string"
    }],
    messageToAdmin: [{
        id: 1,
        nickname: "231",
        email: "string",
        administratorName: "location",
        role: "string",
        statusForUser: 1,
        time: "string",
        message: "string",
        chatId: 1,
        image: "string",
        createdAt: "string",
        updatedAt: "string"
    }],
};

export const UserReducer = (state = INITIAL, { type, payload }: IAction) => {
    switch (type) {
        case reducerTypes.GET_USER:
            return { ...state, user: payload };
        case reducerTypes.GET_DEAL:
            return { ...state, deals: payload };
        case reducerTypes.GET_REFILL:
            return { ...state, refill: payload };
        case reducerTypes.GET_MY_REFILLS:
            return { ...state, myRefills: payload };
        case reducerTypes.GET_CHECK_SYSTEM:
            return { ...state, checkAlertSystemMessage: payload };
        case reducerTypes.GET_UPDATE_HEADER_ALERT:
            return { ...state, updateHeaderAlert: payload };
        case reducerTypes.GET_TRANSFERS:
            return { ...state, transfers: payload };
        case reducerTypes.GET_TRANSFERS_TO_USER:
            return { ...state, transfersToUser: payload };
        case reducerTypes.GET_DEAL_MESSAGES:
            return { ...state, dealMessages: payload };
        case reducerTypes.GET_ALL_USERS:
            return { ...state, allUsers: payload };
        case reducerTypes.GET_ALL_DEALS:
            return { ...state, allDeals: payload };
        case reducerTypes.GET_ALL_REFILLS:
            return { ...state, allRefills: payload };
        case reducerTypes.GET_ALL_TRANSFERS:
            return { ...state, allTransfers: payload };
        case reducerTypes.GET_ALL_TRANSFERS_TO_USER:
            return { ...state, allTransfersToUser: payload };
        case reducerTypes.GET_FIX_SUM_SYSTEM_MESSAGE:
            return { ...state, fixSumSystemMessage: payload };
        case reducerTypes.GET_NAME_THE_SITE:
            return { ...state, nameTheSite: payload };
        case reducerTypes.GET_CRIPTO_WALLET:
            return { ...state, criptoWallet: payload };
        case reducerTypes.GET_ADMIN_CHAT:
            return { ...state, adminChat: payload };
        case reducerTypes.GET_ADMIN_MESSAGE:
            return { ...state, adminMessage: payload };
        case reducerTypes.GET_MESSAGE_TO_ADMIN:
            return { ...state, messageToAdmin: payload };
        default:
            return state;
    }
};
