import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
const potteryArray = usePottery() // Get the array from your function
  let potteryString = ""  
    for (const pots of potteryArray) {
        potteryString +=`
         <section class="pottery" id="pottery--1">
     <h2 class="pottery__shape">${pots.shape}</h2>
     <div class="pottery__properties">
       Item weighs ${pots.weight} grams and is ${pots.height} cm in height
     </div>
     <div class="pottery__price">Price is ${pots.price}</div>
   </section>`

}
return potteryString
}

//1. Create a `scripts/PotteryList.js` module.
//?1. Define and export a `PotteryList` function.
//1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
//1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
//   ```html
//1. The `PotteryList` function must then return a single string that contains ALL of the pottery HTML representation.