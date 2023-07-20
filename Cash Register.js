const currencyMoney = {"PENNY": 1,"NICKEL": 5,"DIME": 10,"QUARTER": 25,"ONE": 100,"FIVE": 500,"TEN": 1000,"TWENTY": 2000,"ONE HUNDRED": 10000
}


function checkCashRegister(price, cash, cid) {

let remainingChange = cash * 100 - price * 100;

let remainingChangeCheck = remainingChange;

let change = [];
let status = '';

let cidSum = 0;
let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

filteredCid.forEach(elem => {
let currency = elem[0];
let currencySum = elem[1] * 100;
cidSum += currencySum;
let amount = 0;
while (remainingChange >= currencyMoney[currency] && currencySum > 0) {
amount += currencyMoney[currency];
remainingChange -= currencyMoney[currency];
currencySum -= currencyMoney[currency];
    }



if (amount !== 0) {
change.push([currency, amount / 100]);
    }
  });



if (remainingChange > 0) {
status = 'INSUFFICIENT_FUNDS';
change = []; 



  } else if (remainingChange == 0 && remainingChangeCheck == cidSum) {
status = 'CLOSED';
change = cid;



  } else {
status = 'OPEN';
  }



return { 'status': status, 'change': change };
}











console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));