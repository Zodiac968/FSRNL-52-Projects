text = document.getElementById("inputbox");
numBtns = document.getElementsByClassName("num-btn");
calcBtn = document.getElementById("calculate")


function calculate(expression) {
    for(let c in expression){
        if(isNaN(c) && c != '+' && c!='-' && c!='x' && c!='/') {
            return 'Error';
        }
    }
    let expr = expression.replace("x", '*');
    let res = 0;
    try {
        res = eval(expr);
    } catch {
        res = "Error"
    }
    return res;
}

function numBtnClick(value){
    if(value == "="){
        text.value = calculate(text.value);
        return
    }
    if(text.value == "Error"){
        text.value = '';
    }
    if(value == "Del"){
        text.value = text.value.slice(0, -1);
        return
    }
    if(value == "C"){
        text.value = '';
        return
    }
    text.value += value;
}

for(let numBtn of numBtns){
    numBtn.addEventListener('click', (event) => { numBtnClick(event.target.value); })
}