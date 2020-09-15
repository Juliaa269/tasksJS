function Hamburger(){

}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
}

Hamburger.SIZE_MIDDLE = {
    price: 75,
    calories: 30
}

Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40
}

Hamburger.TOPPING_CHEESE = {
    price = 10,
    calories = 20
}

Hamburger.TOPPING_SALAD = {
    price = 20,
    calories = 5
}

Hamburger.TOPPING_POTATO = {
    price = 15,
    calories = 10
}

Hamburger.TOPPING_SAUCE = {
    price = 15,
    calories = 0
}

Hamburger.TOPPING_MAYO = {
    price = 20,
    calories = 5
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with sauce: “ + ${hamburger.getPrice()}`);
console.log(`Callories with sauce: “ + ${hamburger.getCallories()}`);