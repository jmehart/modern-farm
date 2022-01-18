export const catalog = (harvestedPlants) => {
    for (const food of harvestedPlants) {
        return `<section class = "plant">${food.type}</section>`
    }
}