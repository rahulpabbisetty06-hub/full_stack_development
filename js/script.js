let heading = document.getElementById("selecting-id");
console.log(heading);

let para = document.getElementsByClassName("selecting-class");
console.log(para);

const tag = document.getElementsByTagName("div");
console.log(tag);

let firstheading = document.querySelector("h1");
console.log(firstheading.textContent);

let firstclass = document.querySelector(".selecting-class");
console.log(firstclass.textContent);

let firstid = document.querySelector("#selecting-id");
console.log(firstid);

let allparas = document.querySelectorAll("p");
console.log(allparas);

let contentdiv = document.getElementById("content");
contentdiv.innerHTML = "<p>this is changed by innerHTML</p>";
contentdiv.innerText = "Bye!";

function updateimage(){
    let imgelement = document.getElementById("example-image");
    let imgsrc=imgelement.getAttribute("src");
    console.log(imgsrc);
    let imgalt=imgelement.getAttribute("alt");
    console.log(imgalt);
    let imgset = imgelement.setAttribute("src","../images/logo.jpg");
    let imgaltset = imgelement.setAttribute("alt","updated image");
    let imgheight = imgelement.setAttribute("height","200px");
}

/*let headstyle = document.getElementById("styling");
headstyle.style.backgroundcolor="green";
headstyle.style.color="white";
headstyle.style.textAlign="center";
console.log(headstyle.style);*/

let headstyle = document.getElementById("styling");

headstyle.style.backgroundColor = "green";
headstyle.style.color = "white";
headstyle.style.textAlign = "center";

console.log(headstyle.style);