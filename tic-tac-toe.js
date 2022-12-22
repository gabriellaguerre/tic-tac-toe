window.addEventListener("DOMContentLoaded", () => {

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

    const buttonX = document.getElementById("x")
    buttonX.addEventListener("click", () => {
        const chosen = document.getElementById("choosen")
        chosen.innerText = 'Player 1 has chosen: X';

        a0.addEventListener("click", () => {
            if (!localStorage.getItem("a0")) {
                a0.innerText = 'X'
                localStorage.setItem("a0", "X")
            }

        })
        a1.addEventListener("click", () => {
            if (!localStorage.getItem("a1")) {
                a1.innerText = 'X'
                localStorage.setItem("a1", "X")
            }

        })
        a2.addEventListener("click", () => {
            if (!localStorage.getItem("a2")) {
                a2.innerText = 'X'
                localStorage.setItem("a2", "X")
            }

        })
        a3.addEventListener("click", () => {
            if (!localStorage.getItem("a3")) {
                a3.innerText = 'X'
                localStorage.setItem("a3", "X")
            }

        })
        a4.addEventListener("click", () => {
            if (!localStorage.getItem("a4")) {
                a4.innerText = 'X'
                localStorage.setItem("a4", "X")
            }

        })
        a5.addEventListener("click", () => {
            if (!localStorage.getItem("a5")) {
                a5.innerText = 'X'
                localStorage.setItem("a5", "X")
            }

        })
        a6.addEventListener("click", () => {
            if (!localStorage.getItem("a6")) {
                a6.innerText = 'X'
                localStorage.setItem("a6", "X")
            }

        })
        a7.addEventListener("click", () => {
            if (!localStorage.getItem("a7")) {
                a7.innerText = 'X'
                localStorage.setItem("a7", "X")
            }

        })
        a8.addEventListener("click", () => {
            if (!localStorage.getItem("a8")) {
                a8.innerText = 'X'
                localStorage.setItem("a8", "X")
            }

        })



    })

    const buttonO = document.getElementById("o")
    buttonO.addEventListener("click", () => {
        const chosen = document.getElementById("choosen")
        chosen.innerText = 'Player 1 has chosen: O'

        a0.addEventListener("click", () => {
            if (!localStorage.getItem("a0")) {
                a0.innerText = 'O'
                localStorage.setItem("a0", "O")
            }

        })
        a1.addEventListener("click", () => {
            if (!localStorage.getItem("a1")) {
                a1.innerText = 'O'
                localStorage.setItem("a1", "O")
            }

        })
        a2.addEventListener("click", () => {
            if (!localStorage.getItem("a2")) {
                a2.innerText = 'O'
                localStorage.setItem("a2", "O")
            }

        })
        a3.addEventListener("click", () => {
            if (!localStorage.getItem("a3")) {
                a3.innerText = 'O'
                localStorage.setItem("a3", "O")
            }

        })
        a4.addEventListener("click", () => {
            if (!localStorage.getItem("a4")) {
                a4.innerText = 'O'
                localStorage.setItem("a4", "O")
            }

        })
        a5.addEventListener("click", () => {
            if (!localStorage.getItem("a5")) {
                a5.innerText = 'O'
                localStorage.setItem("a5", "O")
            }

        })
        a6.addEventListener("click", () => {
            if (!localStorage.getItem("a6")) {
                a6.innerText = 'O'
                localStorage.setItem("a6", "O")
            }

        })
        a7.addEventListener("click", () => {
            if (!localStorage.getItem("a7")) {
                a7.innerText = 'O'
                localStorage.setItem("a7", "O")
            }

        })
        a8.addEventListener("click", () => {
            if (!localStorage.getItem("a8")) {
                a8.innerText = 'O'
                localStorage.setItem("a8", "O")
            }

        })
    })


})
