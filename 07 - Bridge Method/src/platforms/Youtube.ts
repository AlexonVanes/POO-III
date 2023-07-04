import IPlatform from "./IPlatform";

export default class Youtube implements IPlatform{

    constructor(){
        console.log("Youtube: Configurando Plataforma!")
        this.configureRMTP();
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: Configurando Broadcasting!")
        
    }
    authToken(): void {
        console.log("Youtube: Autorizando Plataforma")
        
    }

}