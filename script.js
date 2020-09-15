function Hamburger(){

}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with sauce: “ + ${hamburger.getPrice()}`);
console.log(`Callories with sauce: “ + ${hamburger.getCallories()}`);