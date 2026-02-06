let display=document.getElementById("display");
function appendToDisplay(input){
    display.value+=input;
}
document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
        appendToDisplay(event.key);
        break;
      case "Enter":
        calculate();
        break;
      case "Backspace":
        display.value = display.value.slice(0, -1);
        break;
      default:
        break;
    }
  });
  
  
function calculate(){
    display.value=eval(display.value);
}