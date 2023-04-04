const buttons = document.querySelectorAll(".btn3_container");

buttons.forEach(button => {
  button.addEventListener("click", function (event) {
    let main = this.querySelector('.main');
    let on = this.querySelector('.btn1');
    let off = this.querySelector('.btn2');
    if (main.classList.contains("active")) {
      main.classList.remove("active");
      on.innerText = "";
      off.innerText = "OFF";
    } else {
      main.classList.add("active");
      off.innerText = "";
      on.innerText = "ON";
    }
  });
});

let ranger1 = document.getElementById('ranger1');
let range1 = document.getElementById('range1');
let range1Dec = document.getElementById('range1Dec');
let range1Inc = document.getElementById('range1Inc');

// Add event listeners for range1Inc and range1Dec
range1Dec.addEventListener('click', () => {
  let rangeValue = parseInt(ranger1.value);
  if (rangeValue <= 0) {
    return false;
  } else {
    rangeValue--;
    ranger1.value = rangeValue;
    updateRangeValue(rangeValue);
  }
});

range1Inc.addEventListener('click', () => {
  let rangeValue = parseInt(ranger1.value);
  if (rangeValue >= 12) {
    return false;
  } else if (rangeValue >= 0) {
    rangeValue++;
    ranger1.value = rangeValue;
    updateRangeValue(rangeValue);
  }
});

// Add input event listener for ranger1
ranger1.addEventListener('input', (e) => {
  let rangeValue = parseInt(e.target.value);
  updateRangeValue(rangeValue);
});

// Call updateRangeValue to set initial value
updateRangeValue(parseInt(ranger1.value));

function updateRangeValue(value) {
  if (value < 10) {
    range1.textContent = "0" + value;
  } else {
    range1.textContent = value;
  }
}

let ranger2 = document.getElementById('ranger2');
let range2 = document.getElementById('range2');
let range2Dec = document.getElementById('range2Dec');
let range2Inc = document.getElementById('range2Inc');

// Add event listeners for range2Inc and range2Dec
range2Dec.addEventListener('click', () => {
  let rangeValue2 = parseInt(ranger2.value);
  if (rangeValue2 <= 0) {
    return false;
  } else {
    rangeValue2--;
    ranger2.value = rangeValue2;
    updateRangeValue2(rangeValue2);
  }
});

range2Inc.addEventListener('click', () => {
  let rangeValue2 = parseInt(ranger2.value);
  if (rangeValue2 >= 7) {
    return false;
  } else {
    rangeValue2++;
    ranger2.value = rangeValue2;
    updateRangeValue2(rangeValue2);
  }
});

// Add input event listener for ranger2
ranger2.addEventListener('input', (e) => {
  let rangeValue2 = parseInt(e.target.value);
  updateRangeValue2(rangeValue2);
});

// Call updateRangeValue2 to set initial value
updateRangeValue2(parseInt(ranger2.value));

function updateRangeValue2(value) {
  if (value < 10) {
    range2.textContent = "0" + value;
  } else {
    range2.textContent = value;
  }
}
