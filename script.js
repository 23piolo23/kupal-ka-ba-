let noCount = 0;

function yes() {
    
    document.getElementById('yesSound').play();

    document.getElementById("question").innerText =
        "TALAGANG KUPAL KANG HAYOP KA 😂 ";
    document.getElementById("result").innerText =
        "Salamat sa katotohanan boss 😂";
}

function no() {
    noCount++; // LOOP COUNTER

    if (noCount === 1) {
        document.getElementById("question").innerText =
            "ulol kupal ka eh?";
    } else if (noCount === 2) {
        document.getElementById("question").innerText =
            "Wala laki mong kupal 😏";
    } else if (noCount === 3) {
        document.getElementById("question").innerText =
            "Talagang kupal ka talaga 😈";
    } else {
        // LOOP FOREVER
        document.getElementById("question").innerText =
            "KUPAL KA PA RIN BOSS!!";
    }

}

