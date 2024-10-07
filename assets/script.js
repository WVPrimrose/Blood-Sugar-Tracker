// Note: each row is will contain an arrary: date, time, and blood sugar reading
const currentRow = document.getElementById('row')
console.log(currentRow)
// variable to find add reading button
const addReading = document.getElementById('add_reading')


// create function to add row each time event listener is being clicked

function addRow() {
    // variables to create new row
    const addNewRow = document.createElement('tr')
    const dateData = document.createElement('td')
    const timeData = document.createElement('td')
    const readingData = document.createElement('td')
    const todayDate = document.createElement('p')
    todayDate.dayjs()
    const todayTime = document.createElement('p')
    todayTime.dayjs()
    const readingInput = document.createElement('input')

    addNewRow.setAttribute(
        'style',
        'border: 1px solid black; height: 25px;'
    )
    dateData.setAttribute(
        'style',
        'border: 1px solid black;'
    )

    timeData.setAttribute(
        'style',
        'border: 1px solid black;'
    )

    readingData.setAttribute(
        'style',
        'border: 1px solid black;'
    )
    
    todayDate.setAttribute(
        'style',
        'text-align: center'
    )

    todayTime.setAttribute(
        'style',
        'text-align: center'
    )

    readingInput.setAttribute(
        'style',
        'text-align: center'
    )
    readingData.append(readingInput)
    timeData.append(todayTime)
    dateData.append(todayDate)
    addNewRow.append(dateData, timeData, readingData)
    currentRow.append(addNewRow)
}

// event listener to make the button functional
addReading.addEventListener('click', addRow)