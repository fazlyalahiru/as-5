//common function to get input field value
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    console.log(isNaN(inputFieldValue));
    if (isNaN(inputFieldValue) == false) {
        if (inputFieldValue > 0) {
            return inputFieldValue;
        } else {
            alert('Please Enter a positive number');
        }
    } else {
        alert('Enter a valid number');
    }
}

//Common function to set area value
function setElementValueById(value, cardTitle) {
    const cardTitleValue = document.getElementById(cardTitle).innerText;
    const areaContainer = document.getElementById('area-result-container');
    const areaValue = document.createElement('li');
    areaValue.style.listStyleType = 'number';
    const text = cardTitleValue + ' ' + value + `cm <sup>2</sup> <button class="btn btn-primary"id="area-button">Convert to m <sup>2</sup></button>`;
    areaValue.innerHTML = text;
    areaContainer.appendChild(areaValue);
}

// Random color generator
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}



