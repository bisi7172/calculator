"use strict";

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

const percent = function () {
  if (counterSign === 0) {
    const [part1, part2, part3] = str.split(`*`);
    if (part1 && part2 && !part3) {
      str = (Number(part1) * Number(part2)) / 100;
      display(str);
    }
  }
};

const equal = function () {
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
};

const del = function () {
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
};

const allClear = function () {
  str = "";
  display(0);
  counterEqual++;
  counterSign++;
};

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (!isNaN(e.key) || e.key === ".") {
    if (str.length < 21) {
      str = str + e.key;
      display(str);
    }
    counterEqual = 0;
    counterSign = 0;
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    if (counterSign === 0) {
      // add str.length < 21 here and the above sign function also
      str = str + e.key;
      display(str);
    }
    counterSign++;
  } else if (e.key === "=" || e.key === "Enter") {
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
  } else if (e.key === "Backspace") {
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
  } else if (e.key === "Delete") {
    str = "";
    display(0);
    counterEqual++;
    counterSign++;
  } else if (e.key === "%") {
    if (counterSign === 0) {
      const [part1, part2, part3] = str.split(`*`);
      if (part1 && part2 && !part3) {
        str = (Number(part1) * Number(part2)) / 100;
        display(str);
      }
    }
  }
});

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

document.querySelector(`.percent`).addEventListener("click", percent);

document.querySelector(`.equal`).addEventListener(`click`, equal);

document.querySelector(`.allClear`).addEventListener("click", allClear);

document.querySelector(`.delete`).addEventListener("click", del);
// changes