
export const firePottery = (piece, temperature) => {
   piece.fired = true
   if (temperature > 2200) {
      piece.cracked = true
   } else {
      piece.cracked = false
   } return piece

}





// Define a `scripts/Kiln.js` module.
//1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
//1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
// 1. An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
//1. A number specifying the firing temperature of the kiln.
//1. The function must add a new property of `fired` with the value of `true` to the object.
//1. The function must add a new property of `cracked` to the object.
// 1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
//1. If the temperature of the kiln is at, or below, 2200 degrees then `cracked` property must have a value of `false`.
//1. After both of the new properties have been added, return the augmented object.