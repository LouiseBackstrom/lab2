    var answerUser = " "; 
    var i = 0;
    var url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=boolean";
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var Questions = JSON.parse(this.responseText); 
            
        document.getElementById("true").addEventListener("click", function() {
            if (document.getElementById("answer").style.visibility == "hidden")
            document.getElementById("answer").style.visibility = "visible";
            
            document.getElementById("answer").innerHTML =         
            Questions.results[i].correct_answer;
            });
            
        document.getElementById("false").addEventListener("click", function() {
            if (document.getElementById("answer").style.visibility == "hidden")
            document.getElementById("answer").style.visibility = "visible";
            
            document.getElementById("answer").innerHTML =         
            Questions.results[i].correct_answer;
            });
            
        document.getElementById("next").addEventListener("click", function() {
            document.getElementById("next").innerHTML = "Next Question";
            
            document.getElementById("questions").innerHTML = Questions.results[i].question;
            i++;
            document.getElementById("answer").style.visibility = "hidden";
            });
        };
    }
    
    var correctAnswer = JSON.stringify({
        "correct_answer": "answerUser"
    });
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send(correctAnswer); 