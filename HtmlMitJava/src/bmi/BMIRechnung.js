let rechnen = () =>{
    let gewicht = parseFloat(document.getElementById("gewicht").value);
    let groesse = parseInt(document.getElementById("groesse").value);
    let groesse1 = groesse * groesse;
    let rechnung = Math.round((gewicht/ groesse1) * 10000);
    let ausgabe = document.getElementById("ergebnis");
    ausgabe.value = rechnung;
    ausgabe.style.fontSize = "3em";

    if(rechnung > 30){
        let text = "Sie haben Starkes übergewicht";
        let aussage = document.getElementById("text");
        ausgabe.value = text;
    }

    if(rechnung > 30 || rechnung < 18.5){
        ausgabe.style.backgroundColor = "red";
    } else {
        ausgabe.style.backgroundColor = "green";
    }
}