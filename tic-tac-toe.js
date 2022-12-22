window.addEventListener("DOMContentLoaded", () => {
    let chosen;
    let choice;
    let choice2;
    let count = 0;

    const a0 = document.getElementById("a0");
    const a1 = document.getElementById("a1");
    const a2 = document.getElementById("a2");
    const a3 = document.getElementById("a3");
    const a4 = document.getElementById("a4");
    const a5 = document.getElementById("a5");
    const a6 = document.getElementById("a6");
    const a7 = document.getElementById("a7");
    const a8 = document.getElementById("a8");

    const button = document.getElementById("startGame")
    button.addEventListener("click", () => {
        a0.innerText = '';
        a1.innerText = '';
        a2.innerText = '';
        a3.innerText = '';
        a4.innerText = '';
        a5.innerText = '';
        a6.innerText = '';
        a7.innerText = '';
        a8.innerText = '';
        chosen.innerText = '';
        count = 0;

        localStorage.removeItem("a0");
        localStorage.removeItem("a1");
        localStorage.removeItem("a2");
        localStorage.removeItem("a3");
        localStorage.removeItem("a4");
        localStorage.removeItem("a5");
        localStorage.removeItem("a6");
        localStorage.removeItem("a7");
        localStorage.removeItem("a8");
    })

    a0.addEventListener("click", () => {
        if (count % 2 === 0) {
            a0.innerText = choice;
        } else {
            a0.innerText = choice2;
        }
        localStorage.setItem("a0", `${a0.innerText}`)
        count++
    })

    a1.addEventListener("click", () => {
        if (count % 2 === 0) {
            a1.innerText = choice;
        } else {
            a1.innerText = choice2;
        }
        localStorage.setItem("a1", `${a1.innerText}`)
        count++
    })

    a2.addEventListener("click", () => {
        if (count % 2 === 0) {
            a2.innerText = choice;
        } else {
            a2.innerText = choice2;
        }
        localStorage.setItem("a2", `${a2.innerText}`)
        count++
    })

    a3.addEventListener("click", () => {
        if (count % 2 === 0) {
            a3.innerText = choice;
        } else {
            a3.innerText = choice2;
        }
        localStorage.setItem("a3", `${a3.innerText}`)
        count++
    })

    a4.addEventListener("click", () => {
        if (count % 2 === 0) {
            a4.innerText = choice;
        } else {
            a4.innerText = choice2;
        }
        localStorage.setItem("a4", `${a4.innerText}`)
        count++
    })

    a5.addEventListener("click", () => {
        if (count % 2 === 0) {
            a5.innerText = choice;
        } else {
            a5.innerText = choice2;
        }
        localStorage.setItem("a5", `${a5.innerText}`)
        count++
    })

    a6.addEventListener("click", () => {
        if (count % 2 === 0) {
            a6.innerText = choice;
        } else {
            a6.innerText = choice2;
        }
        localStorage.setItem("a6", `${a6.innerText}`)
        count++
    })

    a7.addEventListener("click", () => {
        if (count % 2 === 0) {
            a7.innerText = choice;
        } else {
            a7.innerText = choice2;
        }
        localStorage.setItem("a7", `${a7.innerText}`)
        count++
    })

    a8.addEventListener("click", () => {
        if (count % 2 === 0) {
            a8.innerText = choice;
        } else {
            a8.innerText = choice2;
        }
        localStorage.setItem("a8", `${a8.innerText}`)
        count++
    })

    const buttonX = document.getElementById("x")
    buttonX.addEventListener("click", () => {
        chosen = document.getElementById("choosen")
        choice = 'X'
        chosen.innerText = `Player 1 has chosen: ${choice}`;
        choice2 = 'O'
    })

    const buttonO = document.getElementById("o")
    buttonO.addEventListener("click", () => {
        chosen = document.getElementById("choosen")
        choice = 'O'
        chosen.innerText = `Player 1 has chosen: ${choice}`;
        choice2 = 'X'
    })


})
