import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


export const plantSeeds = (plan) => {
    for (const row of plan) {
        for (const plant of row) {
            // if plant type = plantSeedFunction
            // createPlant()
            // add seed to fieldArray
            if (plant === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } else if (plant === "Corn") {            
                const cornSeed = createCorn()
                addPlant(cornSeed) 
            } else if (plant === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } else if (plant === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } else if (plant === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            } else if (plant === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
        }
    }

}