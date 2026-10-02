
shuffleQ2();
function shuffleQ2() {

    let q2Choices = ["Venezuela", "Chile", "Canada", "Suriname", "Argentina"];
    q2Choices = shuffleArray(q2Choices);
    console.log(q2Choices);

    for (let i of q2Choices) {
        let q2Radio = document.createElement("input");
        q2Radio.type = "radio";
        q2Radio.name = "peru_borders"
        q2Radio.value = i;

        let q2Label = document.createElement("label");
        q2Label.textContent = i;

        q2Label.prepend(q2Radio);

        document.querySelector("#q2Div").append(q2Label);
     }



    // let q2Radio = document.createElement("input");
    // q2Radio.type = "radio";
    // q2Radio.name = "peru_borders"
    // q2Radio.value = q2Choices[i];

    // let q2Label = document.createElement("label");
    // q2Label.textContent = "Which of these countries borders Peru";

    // q2Label.append(q2Radio);

    // document.querySelector("#q2_break").append(q2Label);
}

function gradeQuiz() {
    let score = 0;
    let q1Answer = "Russia";
    let q2Answer = "Chile";
    let q3Answer = "South_Sudan";
    let q4Answer = 7;
    let q5Answers = ["Portugal", "France", "Greece"];
    let userAnswerQ1 = document.querySelector("#basic-input").value;
    let userAnswerQ2 = document.querySelector("input[name=peru_borders]:checked").value;
    let userAnswerQ3 = document.querySelector("#South_Sudan").value;
    let userAnswerQ4 = document.querySelector("#age-input").value;
    let userAnswerQ5 = document.querySelectorAll("input[name=eu_countries]:checked");


    let tempArray = ["", "", "", ];
    if (userAnswerQ5.length != 3) {
    } else {
        for (let i = 0; i < userAnswerQ5.length; i++) {
        
        temp = userAnswerQ5[i];
        tempArray[i] = temp.value;
        console.log(temp);

    }
    userAnswerQ5=tempArray;
    console.log("poov " + userAnswerQ5);
    }
    




    if (q1Answer == userAnswerQ1) {
        alert("1 is correct!");
        score +=20;
    } else {
        alert("1 is wrong!!!!");
    }
    if (q2Answer == userAnswerQ2) {
        alert("2 is correct!");
        score +=20;

    } else {
        alert("2 is wrong!!!!");
    }
        if (q3Answer == userAnswerQ3) {
        alert("3 is correct!");
            score +=20;

    } else {
        alert("3 is wrong!!!!");
    }
        if (q4Answer == userAnswerQ4) {
        alert("4 is correct!");
                score +=20;

    } else {
        alert("4 is wrong!!!!");
    }
        if (q5Answers[0] == userAnswerQ5[0] & q5Answers[1] == userAnswerQ5[1] & q5Answers[2] == userAnswerQ5[2]) {
        alert("5 is correct!");
                score +=20;

    } else {
        alert("5 is wrong!!!!");
    }

    alert("Your score is: "+ score + "/100");
    if(score >= 80) {
        alert("Good job you got 80% or higher on the quiz, you have a good knowledge of geography!")
    }

    console.log(q1Answer);
    console.log(q2Answer);
    console.log(q3Answer);
    console.log(q4Answer);
    console.log(q5Answers);
    console.log(userAnswerQ1);
    console.log(userAnswerQ2);
    console.log(userAnswerQ3);
    console.log(userAnswerQ4);
    console.log(userAnswerQ5);



    
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [ array[i], array[j] ] = [ array[j], array[i] ];
     }
    return array;
}

let submit = document.querySelector("#submit_button");

submit.addEventListener("click", gradeQuiz);

