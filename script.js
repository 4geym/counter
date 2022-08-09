// 
const btnInc = document.getElementById("btnInc");
const btnDec = document.getElementById("btnDec");
const btnRes = document.getElementById("btnRes");
const htmlCounter = document.getElementById("counter");
let counter = 0;
// 
btnInc.addEventListener("click", () => {
    htmlCounter.innerHTML = counter;
})
btnDec.addEventListener("click", () => {
    htmlCounter.innerHTML = counter;
})
btnRes.addEventListener("click", () => {
    htmlCounter.innerHTML = counter;
})
// 
function increment() {
    counter += 1;
}
function decrement() {
    counter -= 1;
}
function reset() {
    counter = 0;
}