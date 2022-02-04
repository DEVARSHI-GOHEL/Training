var count = 0;
var res = 0;
var answer = [];

$("document").ready(() => {

    $("#numberHeading").hide();
    $("#main").hide();
    $("#result").hide();

    $(".startBtn").click(() => {
        // console.log("click");
        $("#quizFinish").hide();
        $(".option").removeClass("active");
        $("#result").hide();
        $(".startBtn").hide();
        $("#numberHeading").show();
        $("#main").show();
        $("#finish").hide();
        $("#next").show();
        $("#next").addClass("disabled");
        count = 0;
        res = 0;
        getQuestion();
    });
    
    $(".option").click(function () {
        
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        answer[count] = $(this).html();
        $("#next").removeClass("disabled");
        // console.log(answer)
    });

    $("#next").click(() => {
        count++;
        getQuestion();
        $("#next").addClass("disabled");
        $(".option").removeClass("active");
        if(count >= questions.length-1) {
            $("#next").hide();
            $("#finish").show();
            $("#finish").addClass("disabled");
            $(".option").click(() => {
                $("finish").show();
                $("#finish").removeClass("disabled");
            });
            
        }
    });

    $("#finish").on('click', () =>{
        getResult();
        $("#main").hide();
        $("#quizFinish").show();
        $("#numberHeading").hide();
        $(".startBtn").show();
        $("#firstStart").hide();
    });
    
});

function getResult(){

    console.log(answer);
    for(var i = 0 ; i < 5 ; i++){
        if(answer[i] == questions[i].answer){
            res += 1;
        }

        $("#marks").text(res);
        $("#result").show();
        
    }

}

function getQuestion(){
    $("#number").text(questions[count].no);
    $("#question").text(questions[count].que);
    
    $("#option1").text(questions[count].options[0]);
    $("#option2").text(questions[count].options[1]);
    $("#option3").text(questions[count].options[2]);
    $("#option4").text(questions[count].options[3]);

    
}

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