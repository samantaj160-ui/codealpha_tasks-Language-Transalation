async function translateText(){

    // Get input text
    let text = document.getElementById("inputText").value;

    // Get source language
    let source = document.getElementById("sourceLang").value;

    // Get target language
    let target = document.getElementById("targetLang").value;

    // Google Translate API URL
    let url =
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${text}`;

    // Fetch translation
    let response = await fetch(url);

    // Convert response into JSON
    let data = await response.json();

    // Display translated text
    document.getElementById("outputText").value = data[0][0][0];

}