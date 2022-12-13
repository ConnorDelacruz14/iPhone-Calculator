let first_value = 0;
let result = 0;
let operator = "=";
let decimal_places = 10;

const number_mapping = {0: 7,
                        1: 8, 
                        2: 9,
                        3: 4,
                        4: 5,
                        5: 6,
                        6: 1,
                        7: 2,
                        8: 3,
                        9: 0
                        }
                       
                        
const numbers = document.getElementsByClassName("number");
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(){
        if (decimal_places = 10){
            result *= decimal_places;
            result += number_mapping[i];
            UpdateDisplayArea(result);
        }
        else {
            result += number_mapping[i] * decimal_places;
            UpdateDisplayArea(result);
        }
    });
}


const operators = document.getElementsByClassName("operator");
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function(){
        first_value = result;
        result = 0;
        operator = operators[i].innerHTML;
    });
}


document.getElementById("clear").addEventListener("click", function(){
    first_value = 0;
    result = 0;
    operator = "=";
    decimal_places = 10;
    UpdateDisplayArea(result);
});


document.getElementById("negate").addEventListener("click", function(){
    result *= -1;
    UpdateDisplayArea(result)
});


document.getElementById("percentage").addEventListener("click", function(){
    result /= 100;
    UpdateDisplayArea(result)
}); 


document.getElementById("decimal").addEventListener("click", function(){
    decimal_places = 0.1;
    UpdateDisplayArea(result.toFixed(1));
});


document.getElementById("equals-button").addEventListener("click", function(){
    switch (operator) {
        case "÷":
            first_value /= result;
            break;
        case "×":
            first_value *= result;
            break;
            case "−":
            first_value -= result;
            break;
        case "+":
            first_value += result;
            break;
        default:
            break;
    }
    UpdateDisplayArea(first_value);
});


function UpdateDisplayArea(value) {
    document.getElementById("display-area").innerHTML = value.toLocaleString();
}
