let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

function tirage() {
    const index = Math.floor(Math.random() * mangas.length);
    
    const gagnant = mangas[index];
    
    document.getElementById("affichage").innerText = "Le gagnant est :";
    document.getElementById("aleatoire").innerText = gagnant;
}