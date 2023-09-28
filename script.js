// basic selector variables.
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const peraA = document.getElementById('vala');
const peraB = document.getElementById('valb');
const peraC = document.getElementById('valc');
const peraD = document.getElementById('vald');
const peranx = document.getElementById('positivex');
const perapx = document.getElementById('negetivex');

// variable for use.
const color = "#cbcbcb";

// making variable a, b and c.
var a, b, c;
// on changing the input fields the value of that field will become the value of variable a.
const vala = (vala) => {
    return (a = vala);
};

// on changing the input fields the value of that field will become the value of variable b.
const valb = (valb) => {
    return (b = valb);
};

// on changing the input fields the value of that field will become the value of variable c.
const valc = (valc) => {
    return (c = valc);
};

// function to check wether the give function contains decimal or not.
function isDecimal(num) {
    return (num % 1);
}

// add an event listner whenever the solve button got pressed.
btn.addEventListener("click", () => {
    // check for all the input value of a, b and c to be undefined or empty.
    if ((a == undefined || a == "") || (b == "" && b == undefined) || (c == "" && c == undefined)) {
        alert("Please update the given fields to proceed further!");
    }
    // check for the input value of a to be undefined or empty.
    else if (a == undefined || a == "") {
        alert("Please fill the details properly!");
    }

    // check for the input value of b to be undefined or empty.
    else if (b == undefined || b == "") {
        alert("Please fill the details properly!");
    }

    // check for the input value of c to be undefined or empty.
    else if (c == undefined || c == "") {
        alert("Please fill the details properly!");
    }

    // check for the input value of a to be not equal to zero.
    else if (a == "0") {
        alert('The given equation is not quadratic');
    }

    // if all the value are typed and the value of a is not zero then this will work.
    else {
        // declared a discriminant
        const discriminent = () => {
            return b ** 2 - 4 * a * c;
        };

        // it will find the value of negitive x when the value of discriment is greater than or equal to zero.
        const negX = () => {
            let d = Math.sqrt(discriminent());
            let ans = ((-b - d) / (2 * a));
            if (isDecimal(d)) {
                return (`(${-b}-√${discriminent()})/${(2 * a)}`);
            } else if (isDecimal(ans)) {
                return (`${(-b - d)}/${(2 * a)}`);
            } else {
                return ans;
            }
        };


        // it will find the value of negitive x when the value of discriment is lessthan zero.
        const negetiveX = () => {
            let d = `${Math.sqrt(-discriminent())}`;
            if (isDecimal(d)) {
                d = `√${-discriminent()}`;
                return `(${-b}-${d}i)/${2 * a}`;
            } else {
                return `(${-b}-${d}i)/${2 * a}`;
            }
        }


        // it will find the value of negitive x when the value of discriment is greater than or equal to zero.
        const posX = () => {
            let d = Math.sqrt(discriminent());
            let ans = ((-b + d) / (2 * a));
            if (isDecimal(d)) {
                return (`(${-b}+√${discriminent()})/${(2 * a)}`);
            } else if (isDecimal(ans)) {
                return (`${(-b + d)}/${(2 * a)}`);
            } else {
                return ans;
            }
        };

        // it will find the value of negitive x when the value of discriment is lessthan zero.
        const positiveX = () => {
            let d = `${Math.sqrt(-discriminent())}`;
            if (isDecimal(d)) {
                d = `√${-discriminent()}`;
                return `(${-b}+${d}i)/${2 * a}`;
            } else {
                return `(${-b}+${d}i)/${2 * a}`;
            }
        }

        if (discriminent() > 0) {
            peraA.innerHTML = `${a}`;
            peraB.innerHTML = `${b}`;
            peraC.innerHTML = `${c}`;
            peraD.innerHTML = `${discriminent()}`;
            peranx.innerHTML = `${posX()}`;
            perapx.innerHTML = `${negX()}`;
            showAnswer();
        } else if (discriminent() === 0) {
            peraA.innerHTML = `${a}`;
            peraB.innerHTML = `${b}`;
            peraC.innerHTML = `${c}`;
            peraD.innerHTML = `${discriminent()}`;
            peranx.innerHTML = `${posX()}`;
            perapx.innerHTML = `${negX()}`;
            showAnswer();
        } else {
            peraA.innerHTML = `${a}`;
            peraB.innerHTML = `${b}`;
            peraC.innerHTML = `${c}`;
            peraD.innerHTML = `${(discriminent())}`;
            perapx.innerHTML = `${positiveX()}`;
            peranx.innerHTML = `${negetiveX()}`;
            showAnswer();
        }
    }
});

const showAnswer = () => {
    document.getElementById('boxPera').classList.remove('hidden');
    document.getElementById('btn2').classList.remove('hide');
    document.getElementById('btn').classList.add('hide');
    document.getElementById('equationbox').style.pointerEvents = "none";
    document.getElementById('equationbox').style.backgroundColor = color;
    document.getElementById('box').style.backgroundColor = color;
    document.querySelectorAll('.inp').forEach((element) => {
        element.style.backgroundColor = color;
    });
};

const hideAnswer = () => {
    document.getElementById('boxPera').classList.add('hidden');
    document.getElementById('btn2').classList.add('hide');
    document.getElementById('btn').classList.remove('hide');
    document.getElementById('equationbox').style.pointerEvents = "";
    document.getElementById('equationbox').style.backgroundColor = "white";
    document.getElementById('box').style.backgroundColor = "white";
    document.querySelectorAll('.inp').forEach((element) => {
        element.style.backgroundColor = "white";
        element.value = "";
    });
    vala("");
    valb("");
    valc("");
};

btn2.addEventListener('click', () => {
    hideAnswer();
});


