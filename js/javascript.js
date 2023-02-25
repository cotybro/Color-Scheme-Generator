const colorPicker = document.getElementById('colorPicker')
colorPicker.value = '#3D4B60'
const getColorBtn = document.getElementById('getColor')
const selectScheme = document.getElementById('selectScheme')
selectScheme.value = 'monochrome'
const colorArray = []

// Get Color Palette From API
getColorBtn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker.value.slice(1)}&mode=${selectScheme.value}`)
    .then(response => response.json())
    .then(data => {
        colorArray.splice(0, colorArray.length)
        data.colors.forEach((color, index) => {
            colorArray.push(data.colors[index].hex.value)
        })
        updateColorPalette()
    })
})

// Update Color Palette
function updateColorPalette() {
    // Color Palette
    document.getElementById('colorOne').style.backgroundColor = colorArray[0]
    document.getElementById('colorTwo').style.backgroundColor = colorArray[1]
    document.getElementById('colorThree').style.backgroundColor = colorArray[2]
    document.getElementById('colorFour').style.backgroundColor = colorArray[3]
    document.getElementById('colorFive').style.backgroundColor = colorArray[4]

    // Hex Codes
    hexOne.innerHTML = colorArray[0]
    hexTwo.innerHTML = colorArray[1]
    hexThree.innerHTML = colorArray[2]
    hexFour.innerHTML = colorArray[3]
    hexFive.innerHTML = colorArray[4]
}

// Copy To Clipboard
document.getElementById('colorOne').addEventListener('click', () => {
    navigator.clipboard.writeText(colorArray[0])
    hexOne.innerHTML = 'Copied!'
    hexOne.style.color = 'red'
    hexOne.style.textDecoration = 'underline'
    setTimeout(() => {
        hexOne.innerHTML = colorArray[0]
        hexOne.style.color = '#D5D4D8'
        hexOne.style.textDecoration = 'none'
    }, 1000)
    
})

document.getElementById('colorTwo').addEventListener('click', () => {
    navigator.clipboard.writeText(colorArray[1])
    hexTwo.innerHTML = 'Copied!'
    hexTwo.style.color = 'red'
    hexTwo.style.textDecoration = 'underline'
    setTimeout(() => {
        hexTwo.innerHTML = colorArray[1]
        hexTwo.style.color = '#D5D4D8'
        hexTwo.style.textDecoration = 'none'
    }, 1000)
})

document.getElementById('colorThree').addEventListener('click', () => {
    navigator.clipboard.writeText(colorArray[2])
    hexThree.innerHTML = 'Copied!'
    hexThree.style.color = 'red'    
    hexThree.style.textDecoration = 'underline'
    setTimeout(() => {
        hexThree.innerHTML = colorArray[2]
        hexThree.style.color = '#D5D4D8'
        hexThree.style.textDecoration = 'none'
    }, 1000)
})

document.getElementById('colorFour').addEventListener('click', () => {
    navigator.clipboard.writeText(colorArray[3])
    hexFour.innerHTML = 'Copied!'
    hexFour.style.color = 'red'
    hexFour.style.textDecoration = 'underline'
    setTimeout(() => {
        hexFour.innerHTML = colorArray[3]
        hexFour.style.color = '#D5D4D8'
        hexFour.style.textDecoration = 'none'
    }, 1000)
})

document.getElementById('colorFive').addEventListener('click', () => {
    navigator.clipboard.writeText(colorArray[4])
    hexFive.innerHTML = 'Copied!'
    hexFive.style.color = 'red'
    hexFive.style.textDecoration = 'underline'
    setTimeout(() => {
        hexFive.innerHTML = colorArray[4]
        hexFive.style.color = '#D5D4D8'
        hexFive.style.textDecoration = 'none'
    }, 1000)
})
