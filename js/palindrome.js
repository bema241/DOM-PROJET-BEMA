function palindrome() {

    const motOriginal = document.getElementById("id-mot-saisi").value;
    

    const motMin = motOriginal.toLowerCase();
    

    const motInverse = motMin.split("").reverse().join("");
    
    const zoneResultat = document.getElementById("resultat");

    
    if (motMin === motInverse && motMin !== "") {
        zoneResultat.innerText = "C'est un palindrome !";
    } else {
        zoneResultat.innerText = "Ce n'est pas un palindrome.";
    }
}