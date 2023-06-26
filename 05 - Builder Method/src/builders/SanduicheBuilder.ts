import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";
import Salad from "../components/Salad";
import Protein from "../components/Protein";
import Bread from "../components/Bread";

export default class SanduicheBuilder implements IBuilder{
    setBread(bread : Bread) {
        this.sanduiche.bread = bread;
    }
    private sanduiche = new Sanduiche()

    reset(): void{
        this.sanduiche = new Sanduiche();
    }
    getSanduiche() {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value : SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }

    addSalad(salada: Salad){
        this.sanduiche.addSalad(salada)
    }
    addSauces(molho: Sauce){
        this.sanduiche.addSauces(molho)
    }
    addProtein(proteina: Protein){
        this.sanduiche.addProtein(proteina)
    }
    
}