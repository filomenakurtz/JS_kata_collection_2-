
//Sum 


function add(a, b) {

    return a + b;
}

console.log (add(4,5));

// multiply 



function multiply(a, b) {

    let result = 0;
    let counter = 0;
    while (counter < b) {

        result = add(result, a);
        counter = counter + 1;

    }
    return result;

}
answer = multiply(3, 5);
console.log(answer);

// power/exponentiation


// Factorial

function factorial (num) {
    let result = num;
    if (num ===0 ||num===1){
        return 1;
    }
      while(num > 1) {
        num --;
        result = num*result;
      }

    return result;
}

console.log(factorial(5));