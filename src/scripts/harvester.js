export const harvestPlants = (fieldArray) => {
    const seedArray = []
    for (const plant of fieldArray) {
        let output = "";

        if (plant.type === "Corn") {
            output = plant.output / 2;
            console.log(output)
        } else
        {
            output = plant.output;
            console.log(output)
        }
        
        for (let i=0; i < output; i++) {
            seedArray.push(plant)
        }
    }
    return seedArray
}