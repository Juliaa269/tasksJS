function Hamburger(){

}

Hamburder.SIZE_SMALL = {
    price: 50,
    calories: 20
}

Hamburder.SIZE_MIDDLE = {
    price: 75,
    calories: 30
}

Hamburder.SIZE_BIG = {
    price: 100,
    calories: 40
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with sauce: “ + ${hamburger.getPrice()}`);
console.log(`Callories with sauce: “ + ${hamburger.getCallories()}`);