console.log("Welcome to the main module")

import { catalog } from "./catalog.js"
import { addPlant, usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";

const yearlyPlan = createPlan()
console.log(yearlyPlan)


import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";


/* 
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
*/



//const seedObject = {type: "corn"}

const plantingSeeds = addPlant()
console.log(plantingSeeds)


const plantVariable = usePlants()
console.log(plantVariable)


plantSeeds(yearlyPlan)
console.log(usePlants())


const harvestVariable = harvestPlants(plantVariable)
console.log(harvestVariable)


const catalogVariable = catalog(harvestVariable)
console.log(catalogVariable)


document.querySelector(".container").innerHTML += catalogVariable