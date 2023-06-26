import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";


export default class Sanduiche{

    private _bread: Bread;
    private _proteina: Protein[] = [];
    private _sanduicheType: SanduicheType;
    private _salada: Salad[] =[];
    private _molho: Sauce[] = [];


    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }

    public get protein(): Protein[] {
        return this._proteina;
    }
    public set protein(value: Protein[]) {
        this._proteina = value;
    }

    public get sanduicheType(): SanduicheType {
        return this._sanduicheType;
    }
    public set sanduicheType(value: SanduicheType) {
        this._sanduicheType = value;
    }

    public get salada(): Salad[] {
        return this._salada;
    }
    public set salada(value: Salad[]) {
        this._salada = value;
    }

    public get molho(): Sauce[] {
        return this._molho;
    }
    public set molho(value: Sauce[]) {
        this._molho = value;
    }

    public addSalad(salada : Salad){
        this._salada.push(salada)
    }
    public addSauces(molho : Sauce){
        this._molho.push(molho)
    }
    public addProtein(proteina : Protein){
        this._proteina.push(proteina)
    }
}

