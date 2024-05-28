const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mysrc = myImage.getAttribute("src");
  if (mysrc === "images/firefox-logo.png") {
    myImage.setAttribute("src", "images/chrome-logo.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-logo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername(){
    const myName = prompt("Please enter your name");
    if (!myName){
        setUsername();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;}
}

if (!localStorage.getItem("name")){
    setUsername();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = ()=>{
    setUsername();
}