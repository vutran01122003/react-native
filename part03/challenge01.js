function printForecast(arr) {
    let forecastString = '';

    for (let i = 0; i < arr.length; i++) {
        const temperature = arr[i];
        const daysInFuture = i + 1;
        forecastString += `... ${temperature}°C in ${daysInFuture} day${daysInFuture > 1 ? 's' : ''} `;
    }

    console.log(forecastString);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
