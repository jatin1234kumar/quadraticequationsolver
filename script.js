// basic selector variables.
const equationBox = document.getElementById("equationbox");
const inputFields = document.querySelectorAll(".inp");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

const box = document.getElementById("box");
const boxPera = document.getElementById("boxPera");
const peraA = document.getElementById("vala");
const peraB = document.getElementById("valb");
const peraC = document.getElementById("valc");
const peraD = document.getElementById("vald");
const peranx = document.getElementById("positivex");
const perapx = document.getElementById("negetivex");

// variable for use.
const desabledColor = "#cbcbcb";
const enabledColor = "#ffffff";

// making variable a, b and c.
let a, b, c;
// on changing the input fields the value of that field will become the value of variable a.
function val(e) {
  if (e.id == "a") {
    a = e.value;
  } else if (e.id == "b") {
    b = e.value;
  } else {
    c = e.value;
  }
}

// function to check wether the give function contains decimal or not.
function isDecimal(num) {
  return num % 1;
}

// add an event listner whenever the solve button got pressed.
btn.addEventListener("click", (e) => {
  // check for all the input value of a, b and c to be undefined or empty.
  if (
    a == undefined ||
    a == "" ||
    (b == "" && b == undefined) ||
    (c == "" && c == undefined)
  ) {
    alert("Please update the given fields to proceed further!");
  }
  // check for the input value of a to be undefined or empty.
  else if (a == undefined || a == "") {
    alert("Please fill the value of a properly!");
  }

  // check for the input value of b to be undefined or empty.
  else if (b == undefined || b == "") {
    alert("Please fill the value of b properly!");
  }

  // check for the input value of c to be undefined or empty.
  else if (c == undefined || c == "") {
    alert("Please fill the vlaue of c properly!");
  }

  // check for the input value of a to be not equal to zero.
  else if (a == "0") {
    alert("The given equation is not quadratic");
  }

  // if all the value are typed and the value of a is not equal to zero then the else code will work.
  else {
    e.preventDefault();

    // declared a discriminant
    function discriminent() {
      return b ** 2 - 4 * a * c;
    }

    function hideAnswer() {
      boxPera.classList.add("hidden");
      btn2.classList.add("hide");
      btn.classList.remove("hide");
      equationBox.style.pointerEvents = "";
      equationBox.style.backgroundColor = enabledColor;
      box.style.backgroundColor = enabledColor;
      inputFields.forEach((element) => {
        element.style.backgroundColor = enabledColor;
        element.value = "";
      });
      a = "";
      b = "";
      c = "";
    }

    function showAnswer() {
      peraA.innerHTML = `${a}`;
      peraB.innerHTML = `${b}`;
      peraC.innerHTML = `${c}`;
      peraD.innerHTML = `${discriminent()}`;

      boxPera.classList.remove("hidden");
      btn2.classList.remove("hide");
      btn.classList.add("hide");
      equationBox.style.pointerEvents = "none";
      equationBox.style.backgroundColor = desabledColor;
      box.style.backgroundColor = desabledColor;
      inputFields.forEach((element) => {
        element.style.backgroundColor = desabledColor;
      });
    }

    // it will find the value of negitive x when the value of discriment is greater than or equal to zero.
    const realNegX = () => {
      let d = Math.sqrt(discriminent());
      let ans = (-b - d) / (2 * a);
      if (isDecimal(d)) {
        return `(${-b}-√${discriminent()})/${2 * a}`;
      } else if (isDecimal(ans)) {
        return `${-b - d}/${2 * a}`;
      } else {
        return ans;
      }
    };

    // it will find the value of negitive x when the value of discriment is lessthan zero.
    const imagineryNegitiveX = () => {
      let d = `${Math.sqrt(-discriminent())}`;
      if (isDecimal(d)) {
        d = `√${-discriminent()}`;
        return `(${-b}-${d}i)/${2 * a}`;
      } else {
        return `(${-b}-${d}i)/${2 * a}`;
      }
    };

    // it will find the value of negitive x when the value of discriment is greater than or equal to zero.
    const realPosX = () => {
      let d = Math.sqrt(discriminent());
      let ans = (-b + d) / (2 * a);
      if (isDecimal(d)) {
        return `(${-b}+√${discriminent()})/${2 * a}`;
      } else if (isDecimal(ans)) {
        return `${-b + d}/${2 * a}`;
      } else {
        return ans;
      }
    };

    // it will find the value of negitive x when the value of discriment is lessthan zero.
    const imagineryPositiveX = () => {
      let d = `${Math.sqrt(-discriminent())}`;
      if (isDecimal(d)) {
        d = `√${-discriminent()}`;
        return `(${-b}+${d}i)/${2 * a}`;
      } else {
        return `(${-b}+${d}i)/${2 * a}`;
      }
    };

    if (discriminent() > 0) {
      peranx.innerHTML = `${realPosX()}`;
      perapx.innerHTML = `${realNegX()}`;
      showAnswer();
    } else if (discriminent() === 0) {
      peranx.innerHTML = `${realPosX()}`;
      perapx.innerHTML = `${realNegX()}`;
      showAnswer();
    } else {
      perapx.innerHTML = `${imagineryPositiveX()}`;
      peranx.innerHTML = `${imagineryNegitiveX()}`;
      showAnswer();
    }
    btn2.addEventListener("click", () => {
      hideAnswer();
    });
  }
});
