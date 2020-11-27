document.addEventListener("DOMContentLoaded", function () {
    let connexion = new MovieDB();
    connexion.requeteDernierFilm();
});

class MovieDB {
    constructor() {
        //console.log("new MovieDB");
        this.apiKey = "cd592c8a9a57d4083deb5883d72f062d";
        this.lang = "fr-CA";
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/";
        this.nbFilm = 8;
    }

    requeteDernierFilm() {
        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend", this.retourDernierFilm.bind(this));
        requete.open("GET", this.baseUrl + "movie/now_playing?api_key=" + this.apiKey + "&language=" + this.lang + "&page=1");
        requete.send();
    }

    retourDernierFilm(event) {
        //console.log("retourDernierFilm");
        let target = event.currentTarget;
        let data = JSON.parse(target.responseText).results;
        //console.log(data);
        this.afficheDernierFilm(data);
    }

    afficheDernierFilm(data) {
        //console.log("afficheDernierFilm");
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].overview);
        }
    }
}



