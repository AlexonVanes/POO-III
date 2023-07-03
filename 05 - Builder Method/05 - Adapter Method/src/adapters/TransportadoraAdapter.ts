import CorreiosTransporter from "../correios/CorreiosTransporter";
import Transportadora from "../transportadora/Transportadora";
import Token from "../utils/Token";


export default class TransportadoraAdapter implements CorreiosTransporter{
 
    private token : Token;

    constructor(private transportadora: Transportadora){
        console.log("Adaptando Transportadora generica em Correios...")
    }

    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        return this.transportadora.send();
    }

    receiveCorreios(): void {
        return this.transportadora.receive();
    }
}