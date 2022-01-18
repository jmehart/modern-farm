import { addPlant } from "./field"
import { createAsparagus } from "./seeds/asparagus"
import { createCorn } from "./seeds/corn"
import { createPotato } from "./seeds/potato"
import { createSoybean } from "./seeds/soybean"
import { createSunflower } from "./seeds/sunflower"
import { createWheat } from "./seeds/wheat"

export const plantSeeds = (yearlyPlanArray) => {
    for (const row of yearlyPlanArray) {
        for (const plant of row) {
            // if plant type = plantSeedFunction
            // createPlant()
            // add seed to fieldArray
            if (plant.type === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            } else if (plant.type === "Corn") {            
                const cornSeed = createCorn()
                addPlant(cornSeed) 
            } else if (plant.type === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            } else if (plant.type === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            } else if (plant.type === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            } else if (plant.type === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
        }
    }
}