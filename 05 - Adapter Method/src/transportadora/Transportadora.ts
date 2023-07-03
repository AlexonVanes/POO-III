import Token from "../utils/Token";
import TransportadoraTransporter from "./TransportadoraTransporter";


export default class Transportadora implements TransportadoraTransporter{
    
    private token : Token;

    authToken(): Token{
        return new Token()
    }

    send(): void{
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token)
        console.log("Enviando mercadoria via Transportadora...")
    }

    receive(): void{
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token)
        console.log("Recebendo mercadoria via Transportadora...")
    }

}