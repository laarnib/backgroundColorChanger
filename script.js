const container = document.querySelector('#container');
let button = document.querySelector('.button');

// Create p elements that will display the rgb and hex values of the 
// generated background color
let rgbLabel = document.createElement('p');
let hexLabel = document.createElement('p');

// Converts values to hexadecimal
function convertToHex(value) {
    let hex = value.toString(16);
    return hex;
}

// Generates a random color
function generateColor() {
    return Math.floor(Math.random() * 256);
}

// Changes the color of the background
function changeBackgroundColor() {
    let r, g, b;
    
    r = generateColor();
    g = generateColor();
    b = generateColor();

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    // Convert values to hex
    let r_hex = convertToHex(r);
    let g_hex = convertToHex(g);
    let b_hex = convertToHex(b);
    
    // Remove visibility of h1 for a cleaner page
    document.querySelector('h1').classList.add('invisible');

    // Print color values in rgb and hex format
    rgbLabel.innerText = `rgb(${r},${g},${b})`;
    hexLabel.innerText =  `#${r_hex}${g_hex}${b_hex}`;

    /* Change color of labels and background of button 
    to either white or black based on generated background color */
    let sumOfRgb = r + g + b;
    if (sumOfRgb >= 320 && g > 200) {
        button.classList.remove('button-light-border');
        rgbLabel.classList.remove('white-text');
        hexLabel.classList.remove('white-text');
        rgbLabel.classList.add('black-text');
        hexLabel.classList.add('black-text');
    }
    else if (r <= 75 && (r === g && g === b))  {
        rgbLabel.classList.remove('black-text');
        hexLabel.classList.remove('black-text');
        rgbLabel.classList.add('white-text');
        hexLabel.classList.add('white-text');
        button.classList.add('button-light-border');
    }
    else {
        button.classList.remove('button-light-border');
        rgbLabel.classList.remove('black-text');
        hexLabel.classList.remove('black-text');
        rgbLabel.classList.add('white-text');
        hexLabel.classList.add('white-text');
    }
}

// Set margin for color value labels
rgbLabel.style.marginBottom = '10px';
hexLabel.style.marginTop = 0;

// Add color value labels to the container
container.appendChild(rgbLabel);
container.appendChild(hexLabel);

button.addEventListener('click', changeBackgroundColor);