const labels = [
    {
        nut: 'your mummy'
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
    let i = 0
    console.log('before',i)
    document.getElementById('nut').innerHTML = labelInfo[i]
    i += 1
    if(i == 1){
        document.getElementById
    }


}