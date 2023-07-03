import Token from "../utils/Token";


export default interface CorreiosTransporter{
    authToken() : Token;
    sendCorreios(): void;
    receiveCorreios(): void;
}