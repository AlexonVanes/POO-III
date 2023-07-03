import Token from "../utils/Token";


export default interface TransportadoraTransporter{
    authToken() : Token;
    send(): void;
    receive(): void;
}