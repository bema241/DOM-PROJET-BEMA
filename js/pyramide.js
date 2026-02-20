function construirePyramide() {
    const nbLignes = parseInt(document.getElementById("ligne-pyramide").value);
    const zonePyramide = document.getElementById("pyramide");
    
    let contenuPyramide = "";
    const caracteres = "########################################"; 

    for (let i = 1; i <= nbLignes; i++) {
        contenuPyramide += caracteres.slice(0, i) + "<br>";
    }

    zonePyramide.innerHTML = contenuPyramide;
}