    var url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean";
    var i = 0;

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var Questions = JSON.parse(this.responseText);
        
        //Knapp som startar quizen. Texten ändras från "Start Quiz" till "Next Question" när man trycker på den första gången. Fortsättningsvis visar den nästa fråga när man klickar på den.     
        document.getElementById("btn1").addEventListener("click", function() {
            document.getElementById("btn1").innerHTML = "Next Question";
            
            //Hämtar fråga från API.
            document.getElementById("questions").innerHTML = Questions.results[i].question;
            
            //Hämtar svar från API.
            document.getElementById("answer").innerHTML =         
            Questions.results[i].correct_answer;
            i++;
            
            //Gömmer svaret.
            document.getElementById("answer").style.visibility = "hidden";
            });    
        
        //Knapp som väljer svaret true när man klickar på den. Den gör även att svaret på frågan visas.     
        document.getElementById("btn2").addEventListener("click", function() {
            if (document.getElementById("answer").style.visibility == "hidden")
            document.getElementById("answer").style.visibility = "visible";
            });
            
        //Knapp som väljer svaret false när man klickar på den. Den gör även att svaret på frågan visas.
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
    xmlhttp.send(correctAnswer);//Svar skickas tillbaka. 