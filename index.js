const body = document.querySelector("body");
const container = document.querySelector(".container");
const nextBtn = document.querySelector(".next-btn");
const startBtn = document.querySelector(".start-btn");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const ans = document.querySelectorAll(".ans");

// Random Shuffling of question

let qustNum = Math.floor(Math.random() * 1)  
let score = 0;


function welcomeMessage(){
    alert("Please be select option carefully as you can on a button only one time! Thank you!")
}

window.addEventListener('load', loadGame);
function loadGame(){
    hideAllExceptStartBtn();
    welcomeMessage();
}

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", nextQuestion);

function startGame(){
    question.classList.remove("hide");
    answers.classList.remove('hide');
    nextBtn.classList.remove("hide");
    startBtn.classList.add("hide");
    nextQuestion();
    optionSelected();
}

function setAbleButton(){
    for(let i=0; i<ans.length; i++){
        ans[i].disabled = false;
    }
}

function hideAllExceptStartBtn(){
    question.classList.add("hide");
    answers.classList.add('hide');
    nextBtn.classList.add("hide");
}

function nextQuestion(){
    setAbleButton();
    if(qustNum >= questions.length){
        hideAllExceptStartBtn();   
        gameEnd(); 
    }else{
        // Setting new question
        question.textContent = questions[qustNum].q;
        //  Setting quesion's options
        ans[0].textContent = questions[qustNum].options[0]["1"];
        ans[0].dataset.attrib = questions[qustNum].options[0]["correct"];
        ans[1].textContent = questions[qustNum].options[1]["2"];
        ans[1].dataset.attrib = questions[qustNum].options[1]["correct"];
        ans[2].textContent = questions[qustNum].options[2]["3"];
        ans[2].dataset.attrib = questions[qustNum].options[2]["correct"];
        ans[3].textContent = questions[qustNum].options[3]["4"];
        ans[3].dataset.attrib = questions[qustNum].options[3]["correct"];   
        qustNum++;
    }
}

function optionSelected(){
    ans.forEach(button => {
        button.addEventListener('click', () => {
            if(button.dataset.attrib == "true"){
                body.style.backgroundColor = "skyblue";
                score++;
            }
            else{
                body.style.backgroundColor = "red";
            }
            for(let i=0; i<ans.length; i++)
                ans[i].disabled = true;
        })
    })
    
}

const questions = [
    {
        q: "7 x 8 = ?",
        options: [
            {"1": "78", "correct": "fasle"},
            {"2": "56", "correct": "true"},
            {"3": "89", "correct": "fasle"},
            {"4": "45", "correct": "fasle"}
        ] 
    },
    {
        q: "JavaScript is fun?? ",
        options: [
            {"1": "no", "correct": "false"},
            {"2": "yess", "correct": "true"},
            {"3": "don't know", "correct": "fasle"},
            {"4": "not", "correct": "false"}
        ]
    },
    {
        q: "Web is easy ?? ",
        options: [
            {"1": "yess", "correct": "true"},
            {"2": "no", "correct": "false"},
            {"3": "don't know", "correct": "fasle"},
            {"4": "not", "correct": "false"}
        ]
    },
    {
        q: "Meaning of the word 'offend'? ",
        options: [
            {"1": "decieve", "correct": "false"},
            {"2": "depict", "correct": "false"},
            {"3": "upset", "correct": "true"},
            {"4": "jung", "correct": "false"}
        ]
    },
    {
        q: "Which of the following is a noun?",
        options: [
            {"1": "pleasure", "correct": "true"},
            {"2": "pressurize", "correct": "false"},
            {"3": "sometimes", "correct": "fasle"},
            {"4": "quickly", "correct": "false"}
        ]
    }
];



function gameEnd(){
    const text = document.createElement("div");
    text.innerHTML = "Buddy, Thank you for playing! <br><br> You score is : " + score+ " out of 5 !";
    text.style.fontSize = "26px";
    text.style.color = "Green";
    body.style.backgroundColor = "deeppink";
    container.append(text);
}