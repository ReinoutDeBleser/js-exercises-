/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// Listen for changes in the input field
// display the number of characters entered in the counter span.
// As soon as 10 characters have been entered,
// don't allow any more characters to be typed.
document.getElementById("pass-one").setAttribute("maxlength", "10");
document.getElementById("pass-one").addEventListener("input", function (){
    let value = document.getElementById("pass-one").value;
    let length = value.length
    console.log(length);
    let counter = document.getElementById("counter");
    counter.innerHTML = length + "/10";
})
