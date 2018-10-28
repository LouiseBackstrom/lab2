    var url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean";
    var i = 0;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var Questions = JSON.parse(this.responseText);
            
        document.getElementById("btn1").addEventListener("click", function() {
            document.getElementById("btn1").innerHTML = "Next Question";
            
            document.getElementById("questions").innerHTML = Questions.results[i].question;
            
            document.getElementById("answer").innerHTML =         
            Questions.results[i].correct_answer;
            i++;
            
            document.getElementById("answer").style.visibility = "hidden";
            });    
            
        document.getElementById("btn2").addEventListener("click", function() {
            if (document.getElementById("answer").style.visibility == "hidden")
            document.getElementById("answer").style.visibility = "visible";
            });
        
        document.getElementById("btn3").addEventListener("click", function() {
            if (document.getElementById("answer").style.visibility == "hidden")
            document.getElementById("answer").style.visibility = "visible";
            
            });
        };
    }
    
    var correctAnswer = JSON.stringify({
        "correct_answer": " "
    });
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send(correctAnswer); 