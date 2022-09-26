const labels = [
    {
        nut: 'your mummy',
        servings: '',
        servingSize: '',
        calories: '',
        fatGrams: '',
        fatPercent: '',
        satFatGrams: '',
        satFatPercet: '',
        transFatGrams: '',
        cholesterolGrams: '',
        choleserolPercet: '',
        sodiumGrams: '',
        sodiumPercet: '',
        carbGrams: '',
        carbPercent: '',
        fiberPercent: '',
        sugarsGrams:'',
        addedSugarsGrams: '',
        addedSugarsPercet: '',
        proteinGrams: '',
        vitDGrams: '',
        vitDPercent: '',
        calGrams: '',
        calPercent: '',
        ironGrams: '',
        ironPercent: '',
        potassiumGrams: '',
        potassiumPercent: '',
    },
    {
        nut: 'my mummy'
    }
]

let labelInfo = []
labels.forEach(item => {
    labelInfo.push(item.nut)
})

console.log(labelInfo)

const changeLabel = () => {
    let text = document.getElementById('nut').innerHTML

    if(text == labelInfo[0]){
        document.getElementById('nut').innerHTML = labelInfo[1]
    } else{
        document.getElementById('nut').innerHTML = labelInfo[0]
    }
}