export const catalog = (harvestedFoodArray) => {
    let templateString = ""
    for (const food of harvestedFoodArray) {

        templateString += `<section class ="plant">${food.type}</section>`
    }
    return templateString
}


