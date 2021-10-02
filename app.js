var primaryValue=document.querySelector("#primary-input");
var currentValue=document.querySelector("#secondary-input");
var numberOfQuant=document.querySelector("#quant");
var calcBtn=document.querySelector("#calc-btn");
var result=document.querySelector("#output");


calcBtn.addEventListener('click',userInput);


function userInput(){
    var pValue=Number(primaryValue.value);
    //console.log(pValue);
    var cValue=Number(currentValue.value);
    var nQuant=Number(numberOfQuant.value);
    calcProfitLoss(pValue,cValue,nQuant);
}
function calcProfitLoss(p,c,n){
    if (p > c) {
        var loss = (p - c) * n;
        var lossPercentage = (loss / p) * 100;
    
        printOutput(
          `Oops!, the loss is ${loss} and the percent is ${lossPercentage}%`
        );
      } else if (c > p) {
        var profit = (c - p) * n;
        var profitPercentage = (profit / p) * 100;
    
        printOutput( `Congrats!, the profit is ${profit} and the percent is ${profitPercentage}%`);
      } 
      else {
        printOutput(`Hey,There is no profit And Loss`);
      }
    }
    function printOutput(msg) {
        result.innerHTML=msg;
      }



