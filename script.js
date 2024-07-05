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


4ujhs16mqb10rqf55n01p2fqqba1otkqbynaav7wvnwtocwjsp
gg09da5d8zi9o1h6bfrqs6q9915xj9vc4zie8tzxmfcen50lr7
ixbvatt7safp3k143ddlb7e107u2uk2zzo7ytkj4jcy9ornz97
9gs5zm0zwj63gfgtyk0on4ixb7emyb1laess0flk57f419kp8b
k6t9hh4jmyxiza78gwy1lcuufzzcs608xurcp2j8dgw32xd4mx
v4hagmfz2xtxuwmemc1zttjw7yspiu39zojue523dt3td8q43k
mgf18s79lgziswziyopalr3x6ykwzw0g8ve585o6gg84cp82rf
f4gadt6n3hxaojn38q4c69tvlq4ifv4miwjnauckqb5lhvp27z
jylfdd76jnhva6xdhoo9ywu4yw01uyvk0lmy2pon7jc2w1nxza
i7p91sfrhope1mv80w7zybnp7agenblxeobig5qg7ecp5b0xz3
k6hnkl3mxic96di8gc4yhepylyacmx8z6xjqru8arxvdp7i4p9
w7fwa9z95x2w76asfosnppalff970lif6cksftt48fw33oltq1
m8yiocknjjnvjbv8fhmrupg3ndu3t401qrs9zfmybehmz196ws
iseelrosb98p5x1ez4guxxq5ouny7pm45zn80fcuz4ix5o4q8w
3pxd4myhy07xmf7ixhrbydugnqevt0elartq72udafop9vzhjw
bw59mwxnq6z9uy29pyiwyzbwbr3uo1vpefmc9ph5my4m5di3r3
t487fgo3g1xv0p0tt50oitg5dqq9ncatymbvulojjiuwtxd4y5
9rd19augbnhg6u9000ks9sgwr0wa3i4dn9mv7d5x60x0srd66j