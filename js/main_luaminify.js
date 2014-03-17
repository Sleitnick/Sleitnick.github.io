var minifyButton, input;


function Minify(newInput) {
	var minify = luamin.minify(newInput);
	Rainbow.color(minify, "lua", function(htmlText) {
		document.getElementById("code-output").innerHTML = htmlText;
	});
}


function OnClick() {
	Minify(input.value);
}


function OnLoad() {
	minifyButton = document.getElementById("minify-button");
	input = document.getElementById("code-input");
	minifyButton.onclick = OnClick;
}

window.onload = OnLoad;