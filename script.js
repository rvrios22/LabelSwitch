const labels = [
    {
        nutName: 'Wok Fried Beans',
        servings: '8',
        servingSize: '2/3 cup (55g)',
        calories: '230',
        fatGrams: '8g',
        fatPercent: '10%',
        satFatGrams: '1g',
        satFatPercet: '5%',
        transFatGrams: '0g',
        cholesterolGrams: '160mg',
        choleserolPercet: '0%',
        sodiumGrams: '160mg',
        sodiumPercet: '7%',
        carbGrams: '37g',
        carbPercent: '13%',
        fiberGrams: '4g',
        sugarsGrams:'12g',
        addedSugarsGrams: '10g',
        addedSugarsPercet: '20%',
        proteinGrams: '3g',
        vitDGrams: '2mcg',
        vitDPercent: '10%',
        calGrams: '260mg',
        calPercent: '20%',
        ironGrams: '8mg',
        ironPercent: '45%',
        potassiumGrams: '235mg',
        potassiumPercent: '6%',
    },
    {
        nutName: 'Packer Jacks',
        servings: '12',
        servingSize: '1/8 cup (25g)',
        calories: '250',
        fatGrams: '10g',
        fatPercent: '15%',
        satFatGrams: '3g',
        satFatPercet: '10%',
        transFatGrams: '3g',
        cholesterolGrams: '200mg',
        choleserolPercet: '1%',
        sodiumGrams: '200mg',
        sodiumPercet: '10%',
        carbGrams: '45g',
        carbPercent: '15%',
        fiberGrams: '2g',
        sugarsGrams:'20g',
        addedSugarsGrams: '18g',
        addedSugarsPercet: '30%',
        proteinGrams: '1g',
        vitDGrams: '0mcg',
        vitDPercent: '0%',
        calGrams: '20mg',
        calPercent: '1%',
        ironGrams: '10mg',
        ironPercent: '50%',
        potassiumGrams: '240mg',
        potassiumPercent: '7%',
    },
    {
        nutName: 'Binnie Toast Brunch',
        servings: '8',
        servingSize: '1 cup (73g)',
        calories: '200',
        fatGrams: '5g',
        fatPercent: '7%',
        satFatGrams: '0g',
        satFatPercet: '0%',
        transFatGrams: '0g',
        cholesterolGrams: '120mg',
        choleserolPercet: '0%',
        sodiumGrams: '120mg',
        sodiumPercet: '4%',
        carbGrams: '25g',
        carbPercent: '13%',
        fiberGrams: '7g',
        sugarsGrams:'10g',
        addedSugarsGrams: '3g',
        addedSugarsPercet: '10%',
        proteinGrams: '5g',
        vitDGrams: '4mcg',
        vitDPercent: '17%',
        calGrams: '300mg',
        calPercent: '25%',
        ironGrams: '10mg',
        ironPercent: '50%',
        potassiumGrams: '170mg',
        potassiumPercent: '3%',
    },
    {
        nutName: 'Bold Fish',
        servings: '6',
        servingSize: '1/3 cup (35g)',
        calories: '220',
        fatGrams: '10g',
        fatPercent: '15%',
        satFatGrams: '2g',
        satFatPercet: '7%',
        transFatGrams: '1g',
        cholesterolGrams: '180mg',
        choleserolPercet: '1%',
        sodiumGrams: '190mg',
        sodiumPercet: '10%',
        carbGrams: '40g',
        carbPercent: '22%',
        fiberGrams: '3g',
        sugarsGrams:'3g',
        addedSugarsGrams: '1g',
        addedSugarsPercet: '7%',
        proteinGrams: '4g',
        vitDGrams: '3mcg',
        vitDPercent: '15%',
        calGrams: '290mg',
        calPercent: '26%',
        ironGrams: '9mg',
        ironPercent: '47%',
        potassiumGrams: '257mg',
        potassiumPercent: '7%',
    }
]

let nutName = []
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
let fiberGrams = []
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
    nutName.push(item.nutName)
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
    fiberGrams.push(item.fiberGrams)
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
    let text = document.getElementById('nutName').innerHTML

    if(text == nutName[0]){
        document.body.style.backgroundColor = '#F9CE2D'
        document.getElementById('nutName').innerHTML = nutName[1]
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
        document.getElementById('fiberGrams').innerHTML = fiberGrams[1]
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
    } else if (text == nutName[1]) {
        document.body.style.backgroundColor = '#0CEB6A '
        document.getElementById('nutName').innerHTML = nutName[2]
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
        document.getElementById('fiberGrams').innerHTML = fiberGrams[2]
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
    } else if (text == nutName[2]) {
        document.body.style.backgroundColor = '#FFE800'
        document.getElementById('nutName').innerHTML = nutName[3]
        document.getElementById('servings').innerHTML = servings[3]
        document.getElementById('servingSize').innerHTML = servingSize[3]
        document.getElementById('calories').innerHTML = calories[3]
        document.getElementById('fatGrams').innerHTML = fatGrams[3]
        document.getElementById('fatPercent').innerHTML = fatPercent[3]
        document.getElementById('satFatGrams').innerHTML = satFatGrams[3]
        document.getElementById('satFatPercent').innerHTML = satFatPercet[3]
        document.getElementById('transFatGrams').innerHTML = transFatGrams[3]
        document.getElementById('cholesterolGrams').innerHTML = cholesterolGrams[3]
        document.getElementById('cholesterolPercent').innerHTML = choleserolPercet[3]
        document.getElementById('sodiumGrams').innerHTML = sodiumGrams[3]
        document.getElementById('sodiumPercent').innerHTML = sodiumPercet[3]
        document.getElementById('carbGrams').innerHTML = carbGrams[3]
        document.getElementById('carbPercent').innerHTML = carbPercent[3]
        document.getElementById('fiberGrams').innerHTML = fiberGrams[3]
        document.getElementById('sugarsGrams').innerHTML = sugarsGram[3]
        document.getElementById('addedSugarsGrams').innerHTML = addedSugarsGrams[3]
        document.getElementById('addedSugarsPercent').innerHTML = addedSugarsPercet[3]
        document.getElementById('proteinGrams').innerHTML = proteinGrams[3]
        document.getElementById('vitDGrams').innerHTML = vitDGrams[3]
        document.getElementById('vitDPercent').innerHTML = vitDPercent[3]
        document.getElementById('calGrams').innerHTML = calGrams[3]
        document.getElementById('calPercent').innerHTML = calPercent[3]
        document.getElementById('ironGrams').innerHTML = ironGrams[3]
        document.getElementById('ironPercent').innerHTML = ironPercent[3]
        document.getElementById('potassiumGrams').innerHTML = potassiumGrams[3]
        document.getElementById('potassiumPercent').innerHTML = potassiumPercent[3]
    } else{
        document.body.style.backgroundColor = '#d65504'
        document.getElementById('nutName').innerHTML = nutName[0]
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
        document.getElementById('fiberGrams').innerHTML = fiberGrams[0]
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