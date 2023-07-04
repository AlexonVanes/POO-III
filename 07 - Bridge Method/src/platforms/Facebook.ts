import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform{

    constructor(){
        console.log("Facebook: Configurando Plataforma!")
        this.configureRMTP();
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando Broadcasting!")
        
    }
    authToken(): void {
        console.log("Facebook: Autorizando Plataforma")
        
    }

}