let elInput = document.getElementsByClassName("form-input");
let elImg1 = document.getElementsByClassName("hide-img");

const typeFunction = () => {
    elInput = document.getElementById("input").getAttribute("type");
    if(elInput === "password"){
        document.getElementById("input").setAttribute("type", "text");
        document.getElementById("img1").classList.add("hide-img-1");
    }else{
        document.getElementById("input").setAttribute("type", "password");
    }
}

const hideFunction = () => {
    elInput = document.getElementById("input").getAttribute("type");
    if(elInput === "text"){
        document.getElementById("input").setAttribute("type", "password");
        document.getElementById("img1").classList.remove("hide-img-1");
    }else{
        document.getElementById("input").setAttribute("type", "text");
    }
}