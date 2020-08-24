//Fonctionalité 1 --------------------

var footer = document.getElementsByTagName('footer');
    var i = 1
footer[0].addEventListener("click", function() {
    console.log('clique numéro ' + i);
    i+=1;
})

//Fonctionalité 2 --------------------


var hamburger = document.getElementsByClassName('navbar-toggler');

var removed = function() {
    document.getElementById('navbarHeader').classList.toggle('collapse')};

    hamburger[0].addEventListener("click", removed)

//Fonctionalité 3 --------------------

var edit = document.getElementsByClassName('btn btn-sm btn-outline-secondary');


var putInRed = function() {
    document.getElementsByClassName('card-text')[0].style.color = "red"};

    edit[0].addEventListener("click", putInRed);

//Fonctionalité 4 --------------------

var edit = document.getElementsByClassName('btn btn-sm btn-outline-secondary');


var putInGreen = function() {
    if 
    (document.getElementsByClassName('card-text')[1].style.color === "green")
    {document.getElementsByClassName('card-text')[1].style.color = "";}
    else
    document.getElementsByClassName('card-text')[1].style.color = "green"
};

    edit[1].addEventListener("click", putInGreen);

//Fonctionalité 5 --------------------

var navbar = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];

var toDestroyLink = document.getElementsByTagName('link')[0];

var Destroy = function() { 
    
        if(document.getElementsByTagName('link')[0]) {
            toDestroyLink.remove()

        }else {
            document.head.appendChild(toDestroyLink)
        }

        };

navbar.addEventListener("dblclick", Destroy);

//Fonctionalité 6 --------------------

var view = document.getElementsByClassName('btn btn-sm btn-success');
console.log(view.length);



 function shrink(j) {
    document.getElementsByClassName('card-text')[j].remove();
    document.getElementsByClassName('card-img-top')[j].style.width = '20%';
    }

    for (var j = 0; j < view.length; j++){
        view[j].addEventListener("mouseover", function() {
            shrink(j);
          });
    }
