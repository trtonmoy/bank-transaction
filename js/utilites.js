function getInputValueById (inputId) {
    const getInput = document.getElementById(inputId) ;
    const lastValue = getInput.value ;
    const convertedValue = parseFloat(lastValue) ;
    getInput.value = '' ;
    return convertedValue ;
}

function getTextValue (inputId) {
    const getElemet = document.getElementById(inputId) ;
    const lastElement = getElemet.innerText ;
    const convertedElement = parseFloat(lastElement) ;
    return convertedElement ;
}

function setUpdatedValue (inputId, updatedValue) {
    const callInput = document.getElementById(inputId) ;
    callInput.innerText = updatedValue ;
}

