let principalAmount = document.getElementById("pa");
let rateOfInterest = document.getElementById("ri");
let timePeriod = document.getElementById("tp");
let frequencySelect = document.getElementById("freq");
let resultDisplay = document.getElementById("result");

function getFrequencyValue(freqType) {
    switch (freqType) {
        case "Yearly": return 1;
        case "Half Yearly": return 2;
        case "Quaterly": return 4;
        default: return 1;
    }
}

function calculateCI() {
    let P = parseFloat(principalAmount.value);
    let r = parseFloat(rateOfInterest.value) / 100;
    let t = parseFloat(timePeriod.value);
    let n = getFrequencyValue(frequencySelect.value);

    let A = P * Math.pow(1 + r / n, n * t);
    let CI = A - P;

    resultDisplay.innerText = `Compound Interest: ₹${CI.toFixed(2)}`;
}

principalAmount.addEventListener("input", calculateCI);
rateOfInterest.addEventListener("input", calculateCI);
timePeriod.addEventListener("input", calculateCI);
frequencySelect.addEventListener("change", calculateCI);


calculateCI();
