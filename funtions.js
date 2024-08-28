const textInput = document.querySelector(".input_text");
const outputText = document.querySelector(".text_encrip");

function btnEncrip() {
    const textToEncrypt = textInput.value;
    const encryptedText = encriptation(textToEncrypt);
    outputText.textContent = encryptedText;
    textInput.value = "";
    outputText.style.backgroundImage = "none"
}

function encriptation(stringEncriptada) {
    
    let datos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < datos.length; i++){
        if (stringEncriptada.includes(datos[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(datos[i][0], datos[i][1])
        }
    }
    
    return stringEncriptada;
}

function btnunEncrip() {
    const textToEncrypt = textInput.value;
    const encryptedText = unEncriptation(textToEncrypt);
    outputText.textContent = encryptedText;
    textInput.value = "";
    outputText.style.backgroundImage = "none"
}

function unEncriptation(stringunEncriptada) {
    
    let datos = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringunEncriptada = stringunEncriptada.toLowerCase()

    for(let i = 0; i < datos.length; i++){
        if (stringunEncriptada.includes(datos[i][1])) {
            stringunEncriptada = stringunEncriptada.replaceAll(datos[i][1], datos[i][0])
        }
    }

    return stringunEncriptada;
}

function btnCopy() {
    const textToCopy = document.getElementById('result').value;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
}
