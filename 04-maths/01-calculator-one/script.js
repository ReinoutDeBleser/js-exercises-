/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("addition").addEventListener("click", function() {
            let x = parseInt(document.getElementById("op-one").value);
            let y = parseInt(document.getElementById("op-two").value);
            let z = x + y;
            console.log(x+y);
            document.getElementById("target").innerHTML = z;
            //document.getElementById("target").innerHTML = x + y;
            // perform an addition
    });
    document.getElementById("subtraction").addEventListener("click", function() {
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        let z = x - y;
        console.log(x-y);
        document.getElementById("target").innerHTML = z;
        console.log(z);
        //document.getElementById("target").innerHTML=  x - y;
        // perform an substraction
    });


    document.getElementById("multiplication").addEventListener("click", function() {
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        let z = x * y;
        console.log(x*y);
        document.getElementById("target").innerHTML = z;
        console.log(z);
        //document.getElementById("target").attribute= (x * y);
        // perform an multiplication
    });

   document.getElementById("division").addEventListener("click", function(){
        let x = parseInt(document.getElementById("op-one").value);
        let y = parseInt(document.getElementById("op-two").value);
        let z = x / y;
        console.log(x/y);
        document.getElementById("target").innerHTML = z;
        console.log(z);
        //document.getElementById("target").attribute = (x /y);
        // perform an division
    });
})();
