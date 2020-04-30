	//invokes HTTP Request constructor
	var xhttp = new XMLHttpRequest();
		
	function clickedLogIn(){
		console.log("click the button");
		var urlData = "https://delilahhowell.github.io/FinalProject/data/devProfile.json";
		xhttp.open("GET",urlData, true);
		xhttp.send();
	}
	function UpdateBio(){
		var editBio = document.getElementById("editBio");
		var bioText = document.getElementById("bioText");
		var bioInput= editBio.value;
		editBio.value = "";
		bioText.innerText = bioInput;
	}
		
	//data object
	function updateWindow(rawData){
		var data = JSON.parse(rawData);
		var div = document.getElementById("logIn");
		var text = "";
 
		//data
		
		text += `<div class="card">`;
		
		text += `<img src="` + data.info.pic + `"alt = "XX">`;

		text += `<h1 class="cardText">` + data.info.uname + `</h1>`;
		
		text += `<p class="cardText" id="bioText">`+ data.info.bio +`</p>`;
		
		text += `<hr>`;
		
		text += `<div class="input-group cardText">
		<textarea class="form-control" aria-label="With textarea" id="editBio"></textarea>
		<div class="input-group-append">
		<button class="w3-button w3-small" type="button" onclick="UpdateBio()">UpdateBio</button>
		</div>
		</div>
		`;
		
		text += `<hr>`;

		
		text +=` <p class="cardText">`+ data.info.university +`</p>`;
		
		text +=`<a href="`+data.info.github+`" target="_blank"><i class="fa fa-github"></i> DelilahHowell</a>`;
		
		text +=`<a href="`+data.info["dev-10"]+`" target="_blank"><i class="fa fa-github"></i> Dev-10</a>`;
		
		text +=`<a href="`+data.info.codepen+`"target="_blank"><i class="fa fa-codepen"></i> @Delilah_howell</a>`;
		
		text +=`<a href="`+data.info.dev09+`"target="_blank"><i class="fa fa-codepen"></i> Dev-09</a>`;
		
		
		div.innerHTML = text;
	}
	
	
	xhttp.onload = function(){
		updateWindow(xhttp.responseText)
	}