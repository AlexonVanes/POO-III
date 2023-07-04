import IPlatform from "../platforms/IPlatform";
import ITransmission from "./ITransmission";

export default class Live implements ITransmission{

   //no constructor faz nossa ponta direto para a abstração, assim aceita qualquer transmissão.
    constructor(private platform: IPlatform){}

    broadcastring(): void {
        console.log("Iniciando a Transmissão!")
    }
    result(): void {
       console.log("***** No Ár **********");

    }
}