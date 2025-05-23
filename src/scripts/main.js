// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery} from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 10, 3)
let vase = makePottery("vase", 7, 20)
let plate = makePottery("plate", 2, 1)
let ashtry = makePottery("ashtray", 3, 1)
let bookend = makePottery("bookend", 3, 4)
let statue = makePottery("statue", 5, 7)

let finMug = firePottery(mug, 2000)
let finVase = firePottery(vase, 2100)
let finPlate = firePottery(plate, 2300)
let finBookend = firePottery(bookend, 2000)
let finStatue = firePottery(statue, 2300)

toSellOrNotToSell(finMug)
toSellOrNotToSell(finVase)
toSellOrNotToSell(finPlate)
toSellOrNotToSell(finBookend)
toSellOrNotToSell(finStatue)


const finalList= PotteryList()
console.log(finalList)
const potteryHTMLRef= document.querySelector(".potteryList")
potteryHTMLRef.innerHTML= finalList
//console.log(finVase)
//console.log(finPlate)
//console.log(finBookend)
///console.log(finStatue)




//In the `main.js` module, invoke the `toSellOrNotToSell` function
 //for each of the 5 pieces of pottery you created. 
//Ensure you provide the required value as an argument.
// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

