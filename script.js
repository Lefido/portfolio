


// Variable général - Header

 var header = document.querySelector('header');

 var myName = document.querySelector('.myname');
 var myJob = document.querySelector('.myjob');
//  var react = document.querySelector('.react');
//  var js = document.querySelector('.js');
//  var node = document.querySelector('.node');
//  var php = document.querySelector('.php');
//  var mySql = document.querySelector('.mysql');

 var maxHeader_X = header.offsetWidth;
 var maxHeader_Y = header.offsetHeight;

 console.log("hauteur " + maxHeader_Y)

 // Controle si la taille de la fenettre à été modifiée
window.onresize = function() {

    if (maxHeader_X != header.offsetWidth ) {
        maxHeader_X = header.offsetWidth;
        console.log(maxHeader_X);
    }

    if (maxHeader_Y != header.offsetHeight ) {
        maxHeader_Y = header.offsetHeight;
        console.log(maxHeader_Y);
    }
    
}

// Positionnement des éléments du Header

 myName.style.top = "45%"; 
 myName.style.left = "45%";

 myJob.style.top = "55%"; 
 myJob.style.left = "55%"; 

//  node.style.top = "45%"; 
//  node.style.left = "20%";

//  js.style.top = "45%"; 
//  js.style.left = "50%";

//  php.style.top = "45%"; 
//  php.style.left = "80%";


//  react.style.top = "50%"; 
//  react.style.left = "35%";
 
//  mySql.style.top = "50%"; 
//  mySql.style.left = "65%";

// Ajout les élément du Header dans un tableau 

var tabHeader = [];

class Header {
    constructor(objet) {
        this.objet = objet
        this.x = this.objet.offsetLeft
        this.y = this.objet.offsetTop
        this.vx = rnd(4)
        this.vy = rnd(4)
        // this.r = rnd(360)
        // this.r_v = 1 + rnd(5)
        this.size = 20 + rnd(10)
        this.size_v = 0.2
        this.cos = rnd(360)
        this.sin = rnd(360)
        this.color = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`

    }
}

var objetHeader = document.querySelectorAll('.objet-header');

objetHeader.forEach(objet => {
    monObjet = new Header(objet);
    tabHeader.push(monObjet);
})


console.log(tabHeader);

setInterval(animHeader, 1000/60);


function animHeader() {

    for (objet of tabHeader) {

        // Rotation
        // objet.r += objet.r_v;

        // objet.objet.style.transform = `rotate(${objet.r}deg)`

        // if (objet.objet.r > 360) {
        //     objet.objet.r = 1
        // } 

        // Zoom

        objet.size = objet.size + objet.size_v

        if (objet.size >= 40 || objet.size <= 20) {
            objet.size_v = - objet.size_v
        }

        objet.objet.style.fontSize = objet.size + "px";

        // Déplacement

        objet.x = objet.x + objet.vx;

        if (objet.x >= maxHeader_X - objet.objet.offsetWidth || objet.x <= objet.objet.offsetWidth) {
            objet.vx = - objet.vx

        }

        objet.y = objet.y + objet.vy;
        if (objet.y >= maxHeader_Y - objet.objet.offsetHeight || objet.y <= objet.objet.offsetHeight) {
            objet.vy = - objet.vy
        }


        objet.cos = objet.cos + 0.01;
        objet.sin = objet.sin + 0.01;

        if (objet.cos > 360) {objet.cos = 0}
        if (objet.sin > 360) {objet.sin = 0}

        objet.x = maxHeader_X / 2 + (maxHeader_X/4) * Math.cos(objet.cos);
        objet.y = maxHeader_Y / 2 + (maxHeader_Y/4) * Math.sin(objet.sin);

        objet.objet.style.color = objet.color;

        objet.objet.style.left = objet.x + "px";
        objet.objet.style.top = objet.y + "px";

    }


}

function rnd(valeur) {
    return 1 + Math.floor(Math.random() * valeur);
}







