oeil();
load();

function oeil(){
    var icon4 = document.getElementById("icon-user4");
    var pass4 = document.getElementById("amdp")
    var affichage4 = true;
    icon4.onclick = function () {
        if (affichage4 === true) {
            pass4.type = "text"
        } else {
            pass4.type = 'password'
        }
        affichage4 = !affichage4
    }

    var icon5 = document.getElementById("icon-user5");
    var pass5 = document.getElementById("mdp")
    var affichage5 = true;
    icon5.onclick = function () {
        if (affichage5 === true) {
            pass5.type = "text"
        } else {
            pass5.type = 'password'
        }
        affichage5 = !affichage5
    }
}

function uploadPhoto() {
    document.querySelector("#prompt3").style.display = "none";
    let reads = new FileReader();
    let f = document.getElementById('file').files[0];
    reads.readAsDataURL(f);
    reads.onload = function() {
        document.getElementById('img3').src = this.result;
        document.querySelector("#img3").style.display = "block";
        localStorage.removeItem('image');
        localStorage.setItem('image', this.result);
    };
}

function load() {
    let tmp = localStorage.getItem('image');
    if (tmp){
        document.getElementById('img3').src = tmp;
        document.querySelector("#prompt3").remove();
        document.querySelector("#img3").style.display = "block";

    }
}
