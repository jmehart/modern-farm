console.log("Welcome to the main module")


import { addPlant, usePlants } from "./field.js";
import { createPlan } from "./plan.js";

const yearlyPlan = createPlan()
console.log(yearlyPlan)


import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

const soybeanSeed = createSoybean()
console.log(soybeanSeed)

const sunflowerSeed = createSunflower()
console.log(sunflowerSeed)

const wheatSeed = createWheat()
console.log(wheatSeed)

const potatoSeed = createPotato()
console.log(potatoSeed)



const seedObject = {type: "corn"}

addPlant(seedObject)
//console.log(addPlant)

const plantVariable = usePlants()
console.log(plantVariable)