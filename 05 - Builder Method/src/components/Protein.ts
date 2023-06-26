export default class Protein{
    constructor(private _proteina: string, private _qtd : number){}
        get qtd() : number{
            return this._qtd;
        }
        set qtd(qtd : number){
            this._qtd = qtd;
        }

        get proteina() : string{
            return this._proteina;
        }
        set proteina(proteina : string){
            this._proteina = proteina
        }
}