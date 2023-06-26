import Bread from "../components/Bread"
import Protein from "../components/Protein"
import Salad from "../components/Salad"
import SanduicheType from "../components/SanduicheType"
import Sauce from "../components/Sauce"
import Sanduiche from "../products/Sanduiche"

export default interface IBuilder{
    reset(): void
    getSanduiche() : Sanduiche
    setSanduicheType(sanduicheType : SanduicheType)
    setBread(bread : Bread)
    addProtein(proteina : Protein)
    addSalad(salada: Salad)
    addSauces(sauce: Sauce)
}   