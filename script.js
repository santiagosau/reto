document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("encryptButton").addEventListener("click", function() {
        try {
            encrypt();
        } catch (error) {
            console.error("Error al encriptar:", error);
        }
    });

    document.getElementById("decryptButton").addEventListener("click", function() {
        try {
            decrypt();
        } catch (error) {
            console.error("Error al desencriptar:", error);
        }
    });
});

function encrypt() {
    var inputText = document.getElementById("inputText").value.toLowerCase(); // Convertir a minúsculas
    var outputText = "";

    for (var i = 0; i < inputText.length; i++) {
        var char = inputText.charAt(i);

        switch (char) {
            case 'e':
                outputText += 'enter';
                break;
            case 'i':
                outputText += 'imes';
                break;
            case 'o':
                outputText += 'ober';
                break;
            case 'a':
                outputText += 'ai';
                break;
            case 'u':
                outputText += 'ufat';
                break;
            default:
                outputText += char;
        }
    }
    document.getElementById("outputText").value = outputText;
}

function decrypt() {
    var inputText = document.getElementById("inputText").value.toLowerCase(); // Convertir a minúsculas
    var outputText = inputText;

    outputText = outputText.replace(/enter/g, 'e');
    outputText = outputText.replace(/imes/g, 'i');
    outputText = outputText.replace(/ober/g, 'o');
    outputText = outputText.replace(/ai/g, 'a');
    outputText = outputText.replace(/ufat/g, 'u');

    document.getElementById("outputText").value = outputText;
}

