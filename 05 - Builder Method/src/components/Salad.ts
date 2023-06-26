export default class Salad{
    constructor(private _salada : string){}

    get salada() : string{
        return this._salada;
    }
    set salada(salada : string){
        this._salada = salada
    }
}