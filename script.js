// basic selector variables.
const equationBox = document.getElementById("equationbox");
const inputFields = document.querySelectorAll(".inp");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

const box = document.getElementById("box");
const boxPera = document.getElementById("boxPera");

// variable for use.
const desabledColor = "#cbcbcb";
const enabledColor = "#ffffff";

// making variable a, b and c.
let a, b, c;
// on changing the input fields the value of that field will become the value of variable a.
function val(e) {
  if (e.id == "a") {
    a = e.value;
  }
  else if (e.id == "b") {
    b = e.value;
  }
  else {
    c = e.value;
  }
}

// function to check wether the give function contains decimal or not.
function isDecimal(num) {
  return num % 1;
}

// typing animation function
function typeParagraph(element, lines, speed = 40, lineDelay = 200) {
  element.innerHTML = "";
  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) return;

    let line = lines[lineIndex];
    let i = 0;
    let span = document.createElement("span");
    element.appendChild(span);

    let interval = setInterval(() => {
      span.innerHTML = line.substring(0, i) + `<span class="typing"></span>`;
      i++;
      if (i > line.length) {
        clearInterval(interval);
        span.innerHTML = line; // final cleanup
        element.appendChild(document.createElement("br"));
        lineIndex++;
        setTimeout(typeLine, lineDelay);
      }
    }, speed);
  }

  typeLine();
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
  else if (a == "0") {
    alert("The given equation is not quadratic");
  }
  else {
    e.preventDefault();

    // declared a discriminant
    function discriminent() {
      return b ** 2 - 4 * a * c;
    }

    function hideAnswer() {
      boxPera.classList.add("hidden");
      boxPera.innerHTML = ""; // clear instantly
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

    function showAnswer(posx, negx) {
      const lines = [
        `Coefficient of x² (a) = ${a}`,
        `Coefficient of x (b) = ${b}`,
        `Value of Constant (c) = ${c}`,
        `Discriminant of the equation (D) = ${discriminent()}`,
        `So, Value of x are = ${posx} & ${negx}`,
      ];

      boxPera.classList.remove("hidden");
      btn2.classList.remove("hide");
      btn.classList.add("hide");
      equationBox.style.pointerEvents = "none";
      equationBox.style.backgroundColor = desabledColor;
      box.style.backgroundColor = desabledColor;
      inputFields.forEach((element) => {
        element.style.backgroundColor = desabledColor;
      });

      // start typing animation
      typeParagraph(boxPera, lines);
    }

    // find roots
    const realNegX = () => {
      let d = Math.sqrt(discriminent());
      let ans = (-b - d) / (2 * a);
      if (isDecimal(d)) {
        return `(${-b}-√${discriminent()})/${2 * a}`;
      }
      else if (isDecimal(ans)) {
        return `${-b - d}/${2 * a}`;
      }
      else {
        return ans;
      }
    };

    const imagineryNegitiveX = () => {
      let d = `${Math.sqrt(-discriminent())}`;
      if (isDecimal(d)) {
        d = `√${-discriminent()}`;
        return `(${-b}-${d}i)/${2 * a}`;
      }
      else {
        return `(${-b}-${d}i)/${2 * a}`;
      }
    };

    const realPosX = () => {
      let d = Math.sqrt(discriminent());
      let ans = (-b + d) / (2 * a);
      if (isDecimal(d)) {
        return `(${-b}+√${discriminent()})/${2 * a}`;
      }
      else if (isDecimal(ans)) {
        return `${-b + d}/${2 * a}`;
      }
      else {
        return ans;
      }
    };

    const imagineryPositiveX = () => {
      let d = `${Math.sqrt(-discriminent())}`;
      if (isDecimal(d)) {
        d = `√${-discriminent()}`;
        return `(${-b}+${d}i)/${2 * a}`;
      }
      else {
        return `(${-b}+${d}i)/${2 * a}`;
      }
    };

    if (discriminent() >= 0) {
      showAnswer(realPosX(), realNegX());
    }
    else {
      showAnswer(imagineryPositiveX(), imagineryNegitiveX());
    }

    btn2.addEventListener("click", () => {
      hideAnswer();
    });
  }
});
