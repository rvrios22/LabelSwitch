const labels = [
    {
        nut: 'your mummy',
        servings: 'd',
        servingSize: 'd',
        calories: 'd',
        fatGrams: 'd',
        fatPercent: 'd',
        satFatGrams: 'd',
        satFatPercet: 'd',
        transFatGrams: 'd',
        cholesterolGrams: 'd',
        choleserolPercet: 'd',
        sodiumGrams: 'd',
        sodiumPercet: 'd',
        carbGrams: 'd',
        carbPercent: 'd',
        fiberPercent: 'd',
        sugarsGrams:'d',
        addedSugarsGrams: 'd',
        addedSugarsPercet: 'd',
        proteinGrams: 'd',
        vitDGrams: 'd',
        vitDPercent: 'd',
        calGrams: 'd',
        calPercent: 'd',
        ironGrams: 'd',
        ironPercent: 'd',
        potassiumGrams: 'd',
        potassiumPercent: 'd',
    },
    {
        nut: 'my mummy',
        servings: 'w',
        servingSize: 'w',
        calories: 'w',
        fatGrams: 'w',
        fatPercent: 'w',
        satFatGrams: 'w',
        satFatPercet: 'w',
        transFatGrams: 'w',
        cholesterolGrams: 'w',
        choleserolPercet: 'w',
        sodiumGrams: 'w',
        sodiumPercet: 'w',
        carbGrams: 'w',
        carbPercent: 'w',
        fiberPercent: 'w',
        sugarsGrams:'w',
        addedSugarsGrams: 'w',
        addedSugarsPercet: 'w',
        proteinGrams: 'w',
        vitDGrams: 'w',
        vitDPercent: 'w',
        calGrams: 'w',
        calPercent: 'w',
        ironGrams: 'w',
        ironPercent: 'w',
        potassiumGrams: 'w',
        potassiumPercent: 'w',
    },
    {
        nut: 'our mummy',
        servings: 't',
        servingSize: 't',
        calories: 't',
        fatGrams: 't',
        fatPercent: 't',
        satFatGrams: 't',
        satFatPercet: 't',
        transFatGrams: 't',
        cholesterolGrams: 't',
        choleserolPercet: 't',
        sodiumGrams: 't',
        sodiumPercet: 't',
        carbGrams: 't',
        carbPercent: 't',
        fiberPercent: 't',
        sugarsGrams:'t',
        addedSugarsGrams: 't',
        addedSugarsPercet: 't',
        proteinGrams: 't',
        vitDGrams: 't',
        vitDPercent: 't',
        calGrams: 't',
        calPercent: 't',
        ironGrams: 't',
        ironPercent: 't',
        potassiumGrams: 't',
        potassiumPercent: 't',
    }
]

let labelInfo = []
let servings = []
let servingSize = []
let calories = []
let fatGrams = []
let fatPercent = []
let satFatGrams = []
let satFatPercet = []
let transFatGrams = []
let cholesterolGrams = []
let choleserolPercet = []
let sodiumGrams = []
let sodiumPercet = []
let carbGrams = []
let carbPercent = []
let fiberPercent = []
let sugarsGram = []
let addedSugarsGrams = []
let addedSugarsPercet = []
let proteinGrams = []
let vitDGrams = []
let vitDPercent = []
let calGrams = []
let calPercent = []
let ironGrams = []
let ironPercent = []
let potassiumGrams = []
let potassiumPercent = []

labels.forEach(item => {
    labelInfo.push(item.nut)
    servings.push(item.servings)
    servingSize.push(item.servingSize)
    calories.push(item.calories)
    fatGrams.push(item.fatGrams)
    fatPercent.push(item.fatPercent)
    satFatGrams.push(item.satFatGrams)
    satFatPercet.push(item.satFatPercet)
    transFatGrams.push(item.transFatGrams)
    cholesterolGrams.push(item.cholesterolGrams)
    choleserolPercet.push(item.choleserolPercet)
    sodiumGrams.push(item.sodiumGrams)
    sodiumPercet.push(item.sodiumPercet)
    carbGrams.push(item.carbGrams)
    carbPercent.push(item.carbPercent)
    fiberPercent.push(item.fiberPercent)
    sugarsGram.push(item.sugarsGrams)
    addedSugarsGrams.push(item.addedSugarsGrams)
    addedSugarsPercet.push(item.addedSugarsPercet)
    proteinGrams.push(item.proteinGrams)
    vitDGrams.push(item.vitDGrams)
    vitDPercent.push(item.vitDPercent)
    calGrams.push(item.calGrams)
    calPercent.push(item.calPercent)
    ironGrams.push(item.ironGrams)
    ironPercent.push(item.ironPercent)
    potassiumGrams.push(item.potassiumGrams)
    potassiumPercent.push(item.potassiumPercent)
    
})


const changeLabel = () => {
    let text = document.getElementById('nut').innerHTML

    if(text == labelInfo[0]){
        document.getElementById('nut').innerHTML = labelInfo[1]
        document.getElementById('servings').innerHTML = servings[1]
        document.getElementById('servingSize').innerHTML = servingSize[1]
        document.getElementById('calories').innerHTML = calories[1]
        document.getElementById('fatGrams').innerHTML = fatGrams[1]
        document.getElementById('fatPercent').innerHTML = fatPercent[1]
        document.getElementById('satFatGrams').innerHTML = satFatGrams[1]
        document.getElementById('satFatPercent').innerHTML = satFatPercet[1]
        document.getElementById('transFatGrams').innerHTML = transFatGrams[1]
        document.getElementById('cholesterolGrams').innerHTML = cholesterolGrams[1]
        document.getElementById('cholesterolPercent').innerHTML = choleserolPercet[1]
        document.getElementById('sodiumGrams').innerHTML = sodiumGrams[1]
        document.getElementById('sodiumPercent').innerHTML = sodiumPercet[1]
        document.getElementById('carbGrams').innerHTML = carbGrams[1]
        document.getElementById('carbPercent').innerHTML = carbPercent[1]
        document.getElementById('fiberPercent').innerHTML = fiberPercent[1]
        document.getElementById('sugarsGrams').innerHTML = sugarsGram[1]
        document.getElementById('addedSugarsGrams').innerHTML = addedSugarsGrams[1]
        document.getElementById('addedSugarsPercent').innerHTML = addedSugarsPercet[1]
        document.getElementById('proteinGrams').innerHTML = proteinGrams[1]
        document.getElementById('vitDGrams').innerHTML = vitDGrams[1]
        document.getElementById('vitDPercent').innerHTML = vitDPercent[1]
        document.getElementById('calGrams').innerHTML = calGrams[1]
        document.getElementById('calPercent').innerHTML = calPercent[1]
        document.getElementById('ironGrams').innerHTML = ironGrams[1]
        document.getElementById('ironPercent').innerHTML = ironPercent[1]
        document.getElementById('potassiumGrams').innerHTML = potassiumGrams[1]
        document.getElementById('potassiumPercent').innerHTML = potassiumPercent[1]
    } else if (text == labelInfo[1]) {
        document.getElementById('nut').innerHTML = labelInfo[2]
        document.getElementById('servings').innerHTML = servings[2]
        document.getElementById('servingSize').innerHTML = servingSize[2]
        document.getElementById('calories').innerHTML = calories[2]
        document.getElementById('fatGrams').innerHTML = fatGrams[2]
        document.getElementById('fatPercent').innerHTML = fatPercent[2]
        document.getElementById('satFatGrams').innerHTML = satFatGrams[2]
        document.getElementById('satFatPercent').innerHTML = satFatPercet[2]
        document.getElementById('transFatGrams').innerHTML = transFatGrams[2]
        document.getElementById('cholesterolGrams').innerHTML = cholesterolGrams[2]
        document.getElementById('cholesterolPercent').innerHTML = choleserolPercet[2]
        document.getElementById('sodiumGrams').innerHTML = sodiumGrams[2]
        document.getElementById('sodiumPercent').innerHTML = sodiumPercet[2]
        document.getElementById('carbGrams').innerHTML = carbGrams[2]
        document.getElementById('carbPercent').innerHTML = carbPercent[2]
        document.getElementById('fiberPercent').innerHTML = fiberPercent[2]
        document.getElementById('sugarsGrams').innerHTML = sugarsGram[2]
        document.getElementById('addedSugarsGrams').innerHTML = addedSugarsGrams[2]
        document.getElementById('addedSugarsPercent').innerHTML = addedSugarsPercet[2]
        document.getElementById('proteinGrams').innerHTML = proteinGrams[2]
        document.getElementById('vitDGrams').innerHTML = vitDGrams[2]
        document.getElementById('vitDPercent').innerHTML = vitDPercent[2]
        document.getElementById('calGrams').innerHTML = calGrams[2]
        document.getElementById('calPercent').innerHTML = calPercent[2]
        document.getElementById('ironGrams').innerHTML = ironGrams[2]
        document.getElementById('ironPercent').innerHTML = ironPercent[2]
        document.getElementById('potassiumGrams').innerHTML = potassiumGrams[2]
        document.getElementById('potassiumPercent').innerHTML = potassiumPercent[2]
    } else{
        document.getElementById('nut').innerHTML = labelInfo[0]
        document.getElementById('nut').innerHTML = labelInfo[0]
        document.getElementById('servings').innerHTML = servings[0]
        document.getElementById('servingSize').innerHTML = servingSize[0]
        document.getElementById('calories').innerHTML = calories[0]
        document.getElementById('fatGrams').innerHTML = fatGrams[0]
        document.getElementById('fatPercent').innerHTML = fatPercent[0]
        document.getElementById('satFatGrams').innerHTML = satFatGrams[0]
        document.getElementById('satFatPercent').innerHTML = satFatPercet[0]
        document.getElementById('transFatGrams').innerHTML = transFatGrams[0]
        document.getElementById('cholesterolGrams').innerHTML = cholesterolGrams[0]
        document.getElementById('cholesterolPercent').innerHTML = choleserolPercet[0]
        document.getElementById('sodiumGrams').innerHTML = sodiumGrams[0]
        document.getElementById('sodiumPercent').innerHTML = sodiumPercet[0]
        document.getElementById('carbGrams').innerHTML = carbGrams[0]
        document.getElementById('carbPercent').innerHTML = carbPercent[0]
        document.getElementById('fiberPercent').innerHTML = fiberPercent[0]
        document.getElementById('sugarsGrams').innerHTML = sugarsGram[0]
        document.getElementById('addedSugarsGrams').innerHTML = addedSugarsGrams[0]
        document.getElementById('addedSugarsPercent').innerHTML = addedSugarsPercet[0]
        document.getElementById('proteinGrams').innerHTML = proteinGrams[0]
        document.getElementById('vitDGrams').innerHTML = vitDGrams[0]
        document.getElementById('vitDPercent').innerHTML = vitDPercent[0]
        document.getElementById('calGrams').innerHTML = calGrams[0]
        document.getElementById('calPercent').innerHTML = calPercent[0]
        document.getElementById('ironGrams').innerHTML = ironGrams[0]
        document.getElementById('ironPercent').innerHTML = ironPercent[0]
        document.getElementById('potassiumGrams').innerHTML = potassiumGrams[0]
        document.getElementById('potassiumPercent').innerHTML = potassiumPercent[0]
    }
}