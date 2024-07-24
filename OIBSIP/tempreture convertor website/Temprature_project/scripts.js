document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitInput').value;

    if (isNaN(temperature)) {
        alert('Please enter a valid number for the temperature.');
        return;
    }

    let resultText = '';

    if (unit === 'Celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        resultText = `${temperature}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K.`;
    } else if (unit === 'Fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        resultText = `${temperature}°F is ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K.`;
    } else if (unit === 'Kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultText = `${temperature}K is ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F.`;
    }

    document.getElementById('result').innerText = resultText;
});
