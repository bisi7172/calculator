"use strict";
/*
let str = "";
let symbolCounter = 1;
let equalCounter = 0;

const displayPara = function (str) {
  document.getElementById("displayPara").textContent = str;
};

const numberFunction = function () {
  if (str.length < 16) {
    str = str + this.value;
    displayPara(str);
  }
  // str = str.slice(10);
  symbolCounter = 0;
};

document.querySelector(".zero").addEventListener("click", numberFunction);

document.querySelector(".one").addEventListener("click", numberFunction);

document.querySelector(".two").addEventListener("click", numberFunction);

document.querySelector(".three").addEventListener("click", numberFunction);

document.querySelector(".four").addEventListener("click", numberFunction);

document.querySelector(".five").addEventListener("click", numberFunction);

document.querySelector(".six").addEventListener("click", numberFunction);

document.querySelector(".seven").addEventListener("click", numberFunction);

document.querySelector(".eight").addEventListener("click", numberFunction);

document.querySelector(".nine").addEventListener("click", numberFunction);

document.querySelector(".point").addEventListener("click", numberFunction);

document.querySelector(".changeSign").addEventListener("click", function () {
  if (str > 0) {
    str = -str;
    document.getElementById("displayPara").textContent = str;
  } else if (str === "") {
    str = "-";
    document.getElementById("displayPara").textContent = str;
  } else {
    str = `${str}`;
    let strSliced = str.slice(1);
    str = +strSliced;
    displayPara(str);
  }
});

document.querySelector(".clearEntry").addEventListener("click", function () {
  str = "";
  displayPara(0);
});

let valPlus = "";
document.querySelector(".plus").addEventListener("click", function () {
  if (symbolCounter === 0) {
    valPlus = Number(str);
    displayPara(`${str}+`);
    str = "";
    valMinus = "";
    valMultiply = "";
    valDivide = "";
  }
  symbolCounter++;
  equalCounter = 0;
});

let valMinus = "";
document.querySelector(".minus").addEventListener("click", function () {
  if (symbolCounter === 0) {
    valMinus = Number(str);
    displayPara(`${str}-`);
    str = "";
    valPlus = "";
    valMultiply = "";
    valDivide = "";
  }
  symbolCounter++;
  equalCounter = 0;
});

let valMultiply = "";
document.querySelector(".multiply").addEventListener("click", function () {
  if (symbolCounter === 0) {
    valMultiply = Number(str);
    displayPara(`${str}x`);
    str = "";
    valPlus = "";
    valMinus = "";
    valDivide = "";
  }
  symbolCounter++;
  equalCounter = 0;
});

let valDivide = "";
document.querySelector(".divide").addEventListener("click", function () {
  if (symbolCounter === 0) {
    valDivide = Number(str);
    displayPara(`${str}÷`);
    str = "";
    valPlus = "";
    valMinus = "";
    valMultiply = "";
  }
  symbolCounter++;
  equalCounter = 0;
});

document.querySelector(".percent").addEventListener("click", function () {
  if (symbolCounter === 0) {
    let ans = (valMultiply * Number(str)) / 100;
    displayPara(ans);
    str = ans;
  }
  // symbolCounter++;
});

document.querySelector(".equal").addEventListener("click", function () {
  if (equalCounter === 0) {
    if (valPlus) {
      let ans = `${valPlus + Number(str)}`;
      ans.length <= 18 ? displayPara(ans) : displayPara(`error`);
      str = ans;
    } else if (valMinus) {
      let ans = `${valMinus - Number(str)}`;
      ans.length <= 18 ? displayPara(ans) : displayPara(`error`);
      str = ans;
    } else if (valMultiply) {
      let ans = `${valMultiply * Number(str)}`;
      ans.length <= 18 ? displayPara(ans) : displayPara(`error`);
      str = ans;
    } else if (valDivide) {
      let ans = `${valDivide / Number(str)}`;
      ans.length <= 18 ? displayPara(ans) : displayPara(`error`);
      str = ans;
    }
  }
  equalCounter++;
});

document.querySelector(".clearAll").addEventListener("click", function () {
  str = "";
  valPlus = "";
  valMinus = "";
  valMultiply = "";
  valDivide = "";
  equalCounter = 0;
  displayPara(0);
});
*/

let str = "";
let counterEqual = 1;
let counterSign = 1;

const display = function (str) {
  document.getElementById(`displayPara`).textContent = str;
};

const number = function () {
  if (str.length < 21) {
    str = str + this.value;
    display(str);
  }
  counterEqual = 0;
  counterSign = 0;
};

const sign = function () {
  if (counterSign === 0) {
    str = str + this.value;
    display(str);
  }
  counterSign++;
};

document.querySelector(`.one`).addEventListener("click", number);
document.querySelector(`.two`).addEventListener("click", number);
document.querySelector(`.three`).addEventListener("click", number);
document.querySelector(`.four`).addEventListener("click", number);
document.querySelector(`.five`).addEventListener("click", number);
document.querySelector(`.six`).addEventListener("click", number);
document.querySelector(`.seven`).addEventListener("click", number);
document.querySelector(`.eight`).addEventListener("click", number);
document.querySelector(`.nine`).addEventListener("click", number);
document.querySelector(`.zero`).addEventListener("click", number);
document.querySelector(`.point`).addEventListener("click", number);

document.querySelector(`.plus`).addEventListener("click", sign);
document.querySelector(`.minus`).addEventListener("click", sign);
document.querySelector(`.multiply`).addEventListener("click", sign);
document.querySelector(`.divide`).addEventListener("click", sign);

document.querySelector(`.changeSign`).addEventListener(`click`, function () {
  if (str === "") {
    str = `-`;
    display(str);
  } else if (str.slice(0) == `-`) {
    str = "";
    display(0);
  }
});

document.querySelector(`.percent`).addEventListener("click", function () {
  if (counterSign === 0) {
    const [part1, part2, part3] = str.split(`*`);
    if (part1 && part2 && !part3) {
      str = (Number(part1) * Number(part2)) / 100;
      display(str);
    }
  }
});

document.querySelector(`.equal`).addEventListener(`click`, function () {
  if (counterEqual === 0) {
    let ans = `${eval(str)}`;

    if (ans.length < 20) {
      str = ans;
      display(str);
    } else {
      str = "";
      display(`error`);
    }
  }
});

document.querySelector(`.allClear`).addEventListener("click", function () {
  str = "";
  display(0);
  counterEqual++;
  counterSign++;
});

document.querySelector(`.delete`).addEventListener("click", function () {
  let c = str.slice(-1);
  if (c.length > 0) {
    if (c == "+" || c == "-" || c == "*" || c == "/") {
      counterSign = 0;
      counterEqual = 0;
    }
  } else {
    counterSign = 1;
    counterSign = 1;
  }
  str = `${str}`;
  if (str.length > 1) {
    str = str.slice(0, -1);
    display(str);
  } else {
    str = "";
    display(0);
  }
});
