async function translateText() {

    let text = document.getElementById("inputText").value.trim();
    let source = document.getElementById("sourceLang").value;
    let target = document.getElementById("targetLang").value;
    let output = document.getElementById("outputText");

    if(text === ""){
        alert("Please enter text.");
        return;
    }

    output.value = "Translating...";

    try{

       let url =
`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;

        let response = await fetch(url);
        let data = await response.json();

        output.value = data[0][0][0];

    }
    catch(error){

        output.value =
        "Translation failed. Please check internet connection.";

    }
}

function copyText(){

    let text =
    document.getElementById("outputText").value;

    navigator.clipboard.writeText(text);

    alert("Translation copied!");
}

function speakText(){

    let text =
    document.getElementById("outputText").value;

    if(text===""){
        alert("Nothing to speak.");
        return;
    }

    let speech =
    new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(speech);
}
