import Token from "../utils/Token";
import CorreiosTransporter from "./CorreiosTransporter";


export default class Correios implements CorreiosTransporter{
    private token : Token;
    authToken(): Token {
        return new Token()
    }

    sendCorreios(): void{
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token)
        console.log("Enviando mercadoria via Correios...")
    }

    receiveCorreios(): void{
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token)
        console.log("Recebendo mercadoria via Correios...")
    }

}