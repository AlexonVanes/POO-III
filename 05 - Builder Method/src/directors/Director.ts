import IBuilder from "../builders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    constructorHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG)
        this.builder.setBread(Bread.PaoHotDog)
        this.builder.addProtein(new Protein ("Vina", 65))
        this.builder.addSalad(new Salad ("tomate"))
        this.builder.addSalad(new Salad ("alface"))
        this.builder.addSalad(new Salad ("repolho"))
        this.builder.addSalad(new Salad ("pimentao"))
        this.builder.addSalad(new Salad ("pure"))
        this.builder.addSauces(new Sauce ("Catchup"))
        this.builder.addSauces(new Sauce ("maionese natural"))
    }

    constructorHamburger(){
        this.builder.setSanduicheType(SanduicheType.HAMBURGER)
        this.builder.setBread(Bread.PaoHamburger)
        this.builder.addProtein(new Protein ("Hamburger", 125))
        this.builder.addSalad(new Salad ("tomate"))
        this.builder.addSalad(new Salad ("alface"))
        this.builder.addSalad(new Salad ("queijo cheedar"))
        this.builder.addSalad(new Salad ("pimentao"))
        this.builder.addSalad(new Salad ("pure"))
        this.builder.addSauces(new Sauce ("Catchup"))
        this.builder.addSauces(new Sauce ("maionese natural"))
        this.builder.addSauces(new Sauce ("Mostarda"))
    }
}