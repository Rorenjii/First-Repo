function addFour() {
	var summonerName = $("#summonerName").value();
	var apiKey = $("#apiKey").value();
	$.ajax({
		url: "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + summonerName + "?api_key=" + apiKey,
		success : function(result){
			$("h2").html(result);
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
