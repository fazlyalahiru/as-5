// Triangle Area Calculation
document.getElementById('btn-triangle-calculate').addEventListener('click', function () {
    const triangleValueOne = getInputFieldValueById('input-triangle-one');
    const triangleValueTwo = getInputFieldValueById('input-triangle-two');
    const triangleArea = 0.5 * triangleValueOne * triangleValueTwo;
    if (isNaN(triangleArea) == false) {
        setElementValueById(triangleArea.toFixed(2), 'triangle-title');
    }
})

// Rectangle Area Calulation
document.getElementById('btn-rectangle-calculate').addEventListener('click', function () {
    const rectangleValueOne = getInputFieldValueById('input-rectangle-one');
    const rectangleValueTwo = getInputFieldValueById('input-rectangle-two');
    const rectangleArea = rectangleValueOne * rectangleValueTwo;
    if (isNaN(rectangleArea) == false) {
        setElementValueById(rectangleArea.toFixed(2), 'rectangle-title');
    }
})

// Parallelogram Area Calulation
document.getElementById('btn-parallelogram-calculate').addEventListener('click', function () {
    const parallelogramValueOne = getInputFieldValueById('input-parallelogram-one');
    const parallelogramValueTwo = getInputFieldValueById('input-parallelogram-two');
    const parallelogramArea = parallelogramValueOne * parallelogramValueTwo;
    if (isNaN(parallelogramArea) == false) {
        setElementValueById(parallelogramArea.toFixed(2), 'parallelogram-title');
    }

})

// Rhombus Area Calulation
document.getElementById('btn-rhombus-calculate').addEventListener('click', function () {
    const rhombusValueOne = getInputFieldValueById('input-rhombus-one');
    const rhombusValueTwo = getInputFieldValueById('input-rhombus-two');
    const rhombusArea = .5 * rhombusValueOne * rhombusValueTwo;
    if (isNaN(rhombusArea) == false) {
        setElementValueById(rhombusArea.toFixed(2), 'rhombus-title');
    }
})

// RPentagon Area Calulation
document.getElementById('btn-pentagon-calculate').addEventListener('click', function () {
    const pentagonValueOne = getInputFieldValueById('input-pentagon-one');
    const pentagonValueTwo = getInputFieldValueById('input-pentagon-two');
    const pentagonArea = 0.5 * pentagonValueOne * pentagonValueTwo;
    if (isNaN(pentagonArea) == false) {
        setElementValueById(pentagonArea.toFixed(2), 'pentagon-title');
    }

})

// Ellipse Area Calulation
document.getElementById('btn-ellipse-calculate').addEventListener('click', function () {
    const ellipseValueOne = getInputFieldValueById('input-ellipse-one');
    const ellipseValueTwo = getInputFieldValueById('input-ellipse-two');
    const pi = 3.1416;
    const ellipseArea = pi * ellipseValueOne * ellipseValueTwo;
    if (isNaN(ellipseArea) == false) {
        setElementValueById(ellipseArea.toFixed(2), 'ellipse-title');
    }

})

// Trianle Random Color
document.getElementById('triangle-bg').addEventListener('mouseover', function () {
    document.getElementById('triangle-bg').style.backgroundColor = randomColor();
});

// Rectangle Random color
document.getElementById('rectangle-bg').addEventListener('mouseover', function () {
    document.getElementById('rectangle-bg').style.backgroundColor = randomColor();
});

// Parallelogram Random Color
document.getElementById('parallelogram-bg').addEventListener('mouseover', function () {
    document.getElementById('parallelogram-bg').style.backgroundColor = randomColor();
});

// Rhombus Random Color
document.getElementById('rhombus-bg').addEventListener('mouseover', function () {
    document.getElementById('rhombus-bg').style.backgroundColor = randomColor();
});

// Pentagon Random Color
document.getElementById('pentagon-bg').addEventListener('mouseover', function () {
    document.getElementById('pentagon-bg').style.backgroundColor = randomColor();
});

// Ellipse Random Color
document.getElementById('ellipse-bg').addEventListener('mouseover', function () {
    document.getElementById('ellipse-bg').style.backgroundColor = randomColor();
});