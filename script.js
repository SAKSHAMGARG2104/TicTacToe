const boxes = document.querySelectorAll(".boxs");
const winnerMessage = document.querySelector(".winnermsg");
const resetbtn = document.querySelector(".reset");
const newgamebtn = document.querySelector(".newgame");

let dcnt = 0;
let checkwinerflag = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// console.log(boxes);
const newGameStart = () => {
    first = true;
    boxes.forEach((box) => {
        box.innerText = "";
    })
    dcnt = 0;
    checkwinerflag = true;
    enablebox();
}
const resetGame = () => {
    first = true;
    newGameStart();
    enablebox();
    checkwinerflag=true;
    dcnt = 0;
}


const enablebox = () => {
    for (let i of boxes) {
        i.disabled = false;
        i.innerText = "";
    }
}

const disablebox = () => {
    for (let i of boxes) {
        i.disabled = true;
    }
}

// modal code
let overlay = document.querySelector('.modal');
let modal = document.querySelector('.mainmodal');
const onmodal = () => {
    modal.classList.add("active");
    overlay.classList.add("overlay");
};

const closmodal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('overlay');
}

const showwiner = (a, b) => {
    onmodal();
    winnerMessage.innerText = `Winner is ${a} against ${b}`;
    winnerMessage.style.color = "#00ff6a";
    checkwinerflag = false;
    disablebox();
}

const drawGmae = () => {
    onmodal();
    winnerMessage.innerText = "It's a draw!";
    winnerMessage.style.color = "blue";
    disablebox();
}

const checkwiner = () => {
    for (const arr of winpattern) {
        let pos1 = boxes[arr[0]].innerText;
        let pos2 = boxes[arr[1]].innerText;
        let pos3 = boxes[arr[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                let loser = pos1 === 'X' ? 'O' : 'X';
                showwiner(pos1, loser);
            }
        }
    }
}

resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", newGameStart);

// main function starts here
let first = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (first) {
            box.innerText = "X";
            first = !first;
        }
        else {
            box.innerText = "O";
            first = !first;
        }

        box.disabled = true;
        checkwiner();
        dcnt++;
        if (dcnt == boxes.length && checkwinerflag) {
            drawGmae();
        }
    })
})

