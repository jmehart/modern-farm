const fieldArray = []

//The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?)
export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        for (const object of seedObject) {
            fieldArray.push(object)
        }
    } else {
        fieldArray.push(seedObject)
    }
}

//returns a copy of the array of plants
export const usePlants = () => {
    return fieldArray
}