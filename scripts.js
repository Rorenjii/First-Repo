function addFour() {
	var summonerName = $("#summonerName").val();
	var apiKey = $("#apiKey").val();
	$.ajax({
		url: "172.58.86.174:8080/api/" + summonerName,
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
