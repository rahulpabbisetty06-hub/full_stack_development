function handleInlineClick(){
    alert("Inline handler");
}

document.getElementById("onEventButton").onclick=function(){
    alert("on event handler");
}

document.getElementById("addEventListenerButton").addEventListener("click",()=>{
    alert("add Event Listener");
});


document.getElementById("exampleButton").addEventListener("click",function(event){
    console.log("event type:",event.type);
    console.log("event target:",event.target);
    console.log("event target tagname:",event.target.tagName);
    console.log("current target:",event.currentTarget);
    console.log("current target tagname:",event.currentTarget.tagName);
    console.log("timestamp:",event.timeStamp);
    console.log("clientX:",event.clientX);
    console.log("clienty:",event.clientY);
    console.log(event);
});

document.getElementById("exampleThisButton").addEventListener("click",function(event){
    console.log("this refers to",this);
    console.log(this.id);
    console.log(this.textContent);
    console.log(this.className);
    console.log(this.classList);

});


//mouse events demonstration
const eventArea = document.getElementById("eventArea");

// Mouse Over Event
eventArea.addEventListener("mouseover", function () {
  console.log("Mouse over the area");
  this.style.backgroundColor = "lightblue";
});

// Mouse Out Event
eventArea.addEventListener("mouseout", function () {
  console.log("Mouse out of the area");
  this.style.backgroundColor = "#f0f0f0";
});

// Mouse Down Event
eventArea.addEventListener("mousedown", function (event) {
  console.log("Mouse button down", "Button:", event.button);
  this.style.backgroundColor = "lightgreen";
});

// Mouse Up Event
eventArea.addEventListener("mouseup", function () {
  console.log("Mouse button released");
  this.style.backgroundColor = "lightblue";
});

// Click Event
eventArea.addEventListener("click", function () {
  console.log("Area clicked");
});

//keyboard events demonstration
const inputfield= document.getElementById("inputField");
inputfield.addEventListener("keydown",function(event){
    console.log(`key down:${event.key} code:${event.code}`);
});
inputfield.addEventListener("keyup",function(event){
    console.log(`key up:${event.key}`);
    if(event.key === "Enter"){
        console.log("Enter pressed");
        alert("Command executed");
    }
})


//form events
document
  .getElementById("exampleForm")
  .addEventListener("submit", function (event) {
    console.log("Form submitted!");
    event.preventDefault(); // Prevents the form from submitting normally
  });

document.getElementById("textInput").addEventListener("input", function () {
  console.log("Text input changed:", this.value);
});

document.getElementById("emailInput").addEventListener("change", function () {
  console.log("Email input changed:", this.value);
});

document.getElementById("passwordInput").addEventListener("focus", function () {
  console.log("Password input focused");
});

document.getElementById("passwordInput").addEventListener("blur", function () {
  console.log("Password input lost focus");
});

document
  .getElementById("checkboxInput")
  .addEventListener("change", function () {
    console.log("Checkbox state:", this.checked ? "Checked" : "Unchecked");
  });

document.getElementById("fileInput").addEventListener("change", function () {
  console.log("Selected file:", this.files[0].name);
  console.log("The file object:", this.files[0]);
});


//window events
// Window load event
window.addEventListener("load", function () {
  console.log("Window fully loaded");
  alert("Window is loaded!");
});

// Window resize event
window.addEventListener("resize", function () {
  console.log(
    "Window resized to:",
    window.innerWidth + "x" + window.innerHeight
  );
});

// Window scroll event
window.addEventListener("scroll", function () {
  console.log(
    "Window scrolled to:",
    window.pageXOffset + ", " + window.pageYOffset
  );
});

// Before unload event
window.addEventListener("beforeunload", function (event) {
  // Prompt the user with a choice to leave the page
  var confirmationMessage = "Are you sure you want to leave?";
  event.returnValue = confirmationMessage; // Standard for most browsers
  return confirmationMessage; // For some older browsers
});

