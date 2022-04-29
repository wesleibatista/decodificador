function checkText() {
    const TEXT = document.querySelector("#input").value.split(" ").join("");
    const PATERN = "abcdefghijklmnopqrstuvwxyz";
    let isValid;

    for(let i = 0; i < TEXT.length; i++) {
        for(let j = 0; j < PATERN.length; j++) {
            if(TEXT[i] === PATERN[j]) {
                isValid = true;
                break;
            } else {
                isValid = false;
            }
        }
        if(!isValid) {
            return false;
        }
    }
    return isValid;
}

function encrypts() {
    const TEXT = document.querySelector("#input").value;
    const OUTPUT_NONE = document.querySelector("#output-none");
    const OUTPUT = document.querySelector("#output");
    let textOutput = document.querySelector("#text-output");
    const ENCRYPTED_TEXT = [];

    if(checkText() === false) {
        OUTPUT.style.display = "none";
        OUTPUT_NONE.style.display = "flex";
        return alert("Apenas letras minúsculas e sem acento!");
    }

    for(let i = 0; i < TEXT.length; i++) {
        switch(TEXT[i]) {
            case "a":
                ENCRYPTED_TEXT.push("ai");
                break;
            
            case "e":
                ENCRYPTED_TEXT.push("enter");
                break;
            
            case "i":
                ENCRYPTED_TEXT.push("imes");
                break;
            
            case "o":
                ENCRYPTED_TEXT.push("ober");
                break;
            
            case "u":
                ENCRYPTED_TEXT.push("ufat");
                break;
            
            default:
                ENCRYPTED_TEXT.push(TEXT[i]);
                break;
        }
    }

    OUTPUT_NONE.style.display = "none";
    OUTPUT.style.display = "flex";
    textOutput.value = ENCRYPTED_TEXT.join("");
}

function decrypts() {
    const TEXT = document.querySelector("#input").value;
    const OUTPUT_NONE = document.querySelector("#output-none");
    const OUTPUT = document.querySelector("#output");
    let textOutput = document.querySelector("#text-output");
    const DECRYPTED_TEXT = [];

    if(checkText() === false) {
        OUTPUT.style.display = "none";
        OUTPUT_NONE.style.display = "flex";
        return alert("Apenas letras minúsculas e sem acento!");
    }

    for(let i = 0; i < TEXT.length; i++) {
        if(TEXT.substr(i, 2) === "ai") {
            DECRYPTED_TEXT.push("a");
            i++;
        } else if(TEXT.substr(i, 5) === "enter") {
            DECRYPTED_TEXT.push("e");
            i += 4;
        } else if(TEXT.substr(i, 4) === "imes") {
            DECRYPTED_TEXT.push("i");
            i += 3;
        } else if(TEXT.substr(i, 4) === "ober") {
            DECRYPTED_TEXT.push("o");
            i += 3;
        } else if(TEXT.substr(i, 4) === "ufat") {
            DECRYPTED_TEXT.push("u");
            i += 3;
        } else {
            DECRYPTED_TEXT.push(TEXT[i]);
        }
    }

    OUTPUT_NONE.style.display = "none";
    OUTPUT.style.display = "flex";
    textOutput.value = DECRYPTED_TEXT.join("");
}

function copies() {
    const VALUE = document.querySelector("#text-output");
    navigator.clipboard.writeText(VALUE.value);
}

const CRYPTO = document.querySelector("#encrypt");
const DECRYPTO = document.querySelector("#decrypt");
const COPY = document.querySelector("#copy");

CRYPTO.onclick = encrypts;
DECRYPTO.onclick = decrypts;
COPY.onclick = copies;
