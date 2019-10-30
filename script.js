const button = document.getElementById('maxProfit');
const inputs = document.querySelectorAll('.form-control');
let prices = [];
let days;

button.addEventListener('click', () => {
    getAllValues();
    console.log(prices, days);
    clearAll();
});

const getAllValues = () => {
    for (let i = 0; i < inputs.length; i++) {
        days=+1;
        if(inputs[i].value >= 1) {
            prices.push(parseInt(inputs[i].value));
        };
        days = prices.length;
    };
    let maxProfit = maxProfitOptimized(prices, days);
    
};

const clearAll = () => {
    prices = [];
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

}


// const maxProfitInefficient = (prices, days) => {
//     //set base case
//     let Rv = [];
//     Rv[0] = 0;
//
//     //for nested for loop to determine the next Rv
//     for(let i = 1; i < days; i++) {
//         Rv[i] = Rv[i - 1];
//         for(let j = 0; j <= 1; j++) {
//             Rv[i] = Math.max(Rv[i], prices[i] - prices[j]);
//         }
//
//     }
//     //return revenue.
//     return Rv[days - 1];
// }
//
// let ineffecientLo = maxProfitInefficient(sampleAPrices, sampleADays);
// console.log('Max profit', ineffecientLo);


const maxProfitOptimized = (prices, days) => {
    //set base case
    let Rv = [];
    Rv[0] = 0;

    //set a minimum value
    let min_value = prices[0];

    for(let i = 1; i < days; i++) {
        min_value = Math.min(min_value, prices[i - 1]);
        Rv[i] = Math.max(Rv[i - 1], prices[i] - min_value);
    }
    //return revenue.
    return Rv[days - 1];

}



