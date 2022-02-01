var questions = [
    {
        "no": 1,
        "que": "Who is prime minister of India:",
        "answer": "Narendra Modi",
        "options": [
            "Vakaiya Naidu",
            "Narendra Modi",
            "Yogi Adityanath",
            "Vijay Rupani"
        ]
    },
    {
        "no": 2,
        "que": "Galileo was an Italian astronomer who",
        "answer": "All of the above",
        "options": [
            "developed the telescope",
            "discovered four satellites of Jupiter",
            "the Law of the Pendulum",
            "All of the above"
        ]
    },
    {
        "no": 3,
        "que": "The Indian Air Force celebrated its Golden Jubilee in",
        "answer": "1982",
        "options": [
            "1964",
            "1972",
            "1982",
            "1960"
        ]
    },
    {
        "no": 4,
        "que": "How many human players are there on each side in a polo match?",
        "answer": "04",
        "options": [
            "11",
            "09",
            "16",
            "04"
        ]
    },
    {
        "no": 5,
        "que": "What band was Harry Styles in before his solo career?",
        "answer": "One Direction",
        "options": [
            "One Direction",
            "BTS",
            "Two Direction",
            "Backstreet Boys"
        ]
    }
];

var answer = []
var count = 0;
var res = 0;

$("document").ready(() => {

    $("#main").hide();
    $("#result").hide();
    $("#numberHeading").hide();
    buttonManager();

    $("#startBtn").click(() => {
        
        $("#main").show();
        $("#finish").hide();
        $(".start_page").hide();
        $("#quizHeading").hide();
        $("#numberHeading").show();
        getQuestion(questions,count);
        
        $(".option").click(function () {
            // console.log(this);
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            answer[count] = $(this).html();
            // console.log(answer)
        });

        $('#next').click(function () {
            if (count > answer.length - 1) {
                alert("No answer selected");
            }
            else {
                count++;
                getQuestion(questions, count);
                $(".option").removeClass("active");
                buttonManager(count);
                selectedAnswer(questions, count);
            }
        });
    });
    $("#finish").click(() => {
        if ( count > answer.length - 1){
            alert("No answer selected");
        }else{
            $("#main").hide();
            $("#result").show();
            $("#numberHeading").text("You completed the quiz!!");
            generateResult(questions);
            $("#startBtn").show();
        }
    });
});

function buttonManager(count){
    // console.log(count)
    if(count > 0){
        if(count == 4){
            $("#next").hide();
            $("#finish").show();
        }
    }
}

function generateResult(questions){
    // console.log(answer)
    for(var i = 0 ; i < answer.length ; i++){
        // console.log(answer[i]);
        // console.log(questions[i].answer);
        
        if(answer[i] == questions[i].answer){
            res += 1;
            // console.log(res);
        }
    }
    
    $("#marks").text(res);
    var percentage = res / 5 * 100;
    $("#percentage").text(percentage + "%");
}

function getQuestion(questions, count){
    var question = questions[count];
    $("#number").text(question.no);
    $("#question").text(question.que);
    $("#option1").text(question.options[0]);
    $("#option2").text(question.options[1]);
    $("#option3").text(question.options[2]);
    $("#option4").text(question.options[3]);    
}

function selectedAnswer(question) {
    var question = questions[count];

    for (var i = 0; i < 4; i++) {
        var a = document.getElementById("options").children;
        if (a[i].innerHTML == answer[count]) {
            $("#options").children("button")[i].classList.add("active");
        }
        else {
            $("#options").children("button")[i].classList.remove("active");
        }
    }
}