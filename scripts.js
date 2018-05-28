function addFour() {
	var summonerName = $("#summonerName").val();
	var apiKey = $("#apiKey").val();
	$.ajax({
		url: "http://172.58.86.174:8080/api/" + summonerName,
		success : function(result){
			$("h2").append(result);
		},
		error : function(xhr,status,error){
			$("h2").append(status);
			$("h2").append(error);
		}
	});
	return true;
}

function areStringsForNoobs() {
	if (!addFour()) {
		console.log("Strings are for EVERYONE!");
		return false;
	} else { 
		console.log("Strings are for n00bs");
		return true;
	}
}

function capitalString(){
    var input = document.getElementById("stringTest").value;
    var lowerCaseWords = input.toLowerCase().split(" ");
    return (function(words){
        var correctString = "";
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            var letters = word.split("");
            var correctWord = (function(letters){
                var correctWord = "";
                for (var j = 0; j < letters.length; j++) {
                    var letter = letters[j];
                    var correctLetter = "";
                    if (j === 0) {
                        correctLetter = letter.toUpperCase();
                    } else {
                        correctLetter = letter;
                    }
                    correctWord += correctLetter;
                }
                return correctWord;
            })(letters);
            correctString += correctWord;
            if (i !== words.length - 1) {
                correctString += " ";
            }

        }
        printResult(correctString);
    })(lowerCaseWords);
}

function titleCase() {
    var str = document.getElementById("stringTest").value;
    var lower = str.toLowerCase(0);
    var split = lower.split(" ");
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].replace(split[i].charAt(0), "");
    }
    printResult(split.join(" "));
}

function printResult(str){
    document.getElementById("result").innerHTML = str;
}
