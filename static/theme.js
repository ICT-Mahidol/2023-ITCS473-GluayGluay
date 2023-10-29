var currentTheme = document.getElementById("currentTheme").value;
var navElements = document.getElementsByClassName("navbar");
var cardElements = document.getElementsByClassName("card");
var buttonElements = document.querySelectorAll("button");
var textareaElements = document.querySelectorAll("textarea");
var selectElements = document.querySelectorAll("select");
var labelElements = document.querySelectorAll("label");
var liElements = document.querySelectorAll(".list-group-item");
var spanElements = document.querySelectorAll("span");
var inputElements = document.querySelectorAll("input");


var element = document.getElementById("color0");
if (element) {
  element.style.border = "none";
}
if (currentTheme === "color1") {
  document.body.style.setProperty("background-color", "#FAE9B2", "important");

  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.setProperty(
      "background-color",
      "#C58840",
      "important"
    );
  }

  for (var i = 0; i < cardElements.length; i++) {
    cardElements[i].style.setProperty(
      "background-color",
      "#E5BA73",
      "important"
    );
  }
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].style.setProperty(
      "background-color",
      "#FAE9B2",
      "important"
    );
    buttonElements[i].style.setProperty("color", "#8785A2", "important");
    buttonElements[i].style.setProperty(
      "border",
      "2px solid #8785A2",
      "important"
    );
  }
  if(textareaElements){
    for (var i = 0; i < textareaElements.length; i++) {
      textareaElements[i].style.setProperty(
        "background-color",
        "rgb(255 226 148)",
        "important"
      );
    }
  }
  if(selectElements){
    for (var i = 0; i < selectElements.length; i++) {
      selectElements[i].style.setProperty(
        "background-color",
        "rgb(255 226 148)",
        "important"
      );
    }
  }
  if(labelElements){
    for (var i = 0; i < labelElements.length; i++) {
      labelElements[i].style.setProperty(
        "background-color",
        "rgb(255 223 125)",
        "important"
      );
    }
  }
  if(liElements){
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].style.setProperty(
        "background-color",
        "rgb(255 238 187)",
        "important"
      );
    }
  }
  if(spanElements){
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].style.setProperty(
        "background-color",
        "rgb(255 223 125)",
        "important"
      );
    }
  }
  if(inputElements){
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].style.setProperty(
        "background-color",
        "rgb(255 238 187)",
        "important"
      );
    }
  }

  if(document.getElementById("color1")){
    document.getElementById("color1").style.setProperty("border", "2px solid black");
  }
 
  

  
} else if (currentTheme === "color2") {


  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.setProperty(
      "background-color",
      "#A6E2E8",
      "important"
    );
  }
  document.body.style.setProperty("background-color", "#CBF1F5", "important");

  for (var i = 0; i < cardElements.length; i++) {
    cardElements[i].style.setProperty(
      "background-color",
      "#E3FDFC",
      "important"
    );
  }
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].style.setProperty(
      "background-color",
      "#71C8CE",
      "important"
    );
    buttonElements[i].style.setProperty("color", "white", "important");
  }

  if(textareaElements){
    for (var i = 0; i < textareaElements.length; i++) {
      textareaElements[i].style.setProperty(
        "background-color",
        "#E3FDFD",
        "important"
      );
    }
  }
  if(selectElements){
    for (var i = 0; i < selectElements.length; i++) {
      selectElements[i].style.setProperty(
        "background-color",
        "#E3FDFD",
        "important"
      );
    }
  }
  if(labelElements){
    for (var i = 0; i < labelElements.length; i++) {
      labelElements[i].style.setProperty(
        "background-color",
        "#E3FDFD",
        "important"
      );
    }
  }
  if(liElements){
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].style.setProperty(
        "background-color",
        "#E3FDFD",
        "important"
      );
    }
  }
  if(spanElements){
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].style.setProperty(
        "background-color",
        "#E3FDFD",
        "important"
      );
    }
  }
  if(inputElements){
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].style.setProperty(
        "background-color",
        "#E3FDFD",
        "important"
      );
    }
  }
  if(document.getElementById("color2")){
    document.getElementById("color2").style.setProperty("border", "2px solid black");
  }


} else if (currentTheme === "color3") {
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.setProperty(
      "background-color",
      "#FEC7C7",
      "important"
    );
  }
  document.body.style.setProperty("background-color", "#FFE2E1", "important");

  for (var i = 0; i < cardElements.length; i++) {
    cardElements[i].style.setProperty(
      "background-color",
      "#FEC7C2",
      "important"
    );
  }
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].style.setProperty(
      "background-color",
      "#FDC7C7",
      "important"
    );
    buttonElements[i].style.setProperty("color", "#8785A2", "important");
    buttonElements[i].style.setProperty(
      "border",
      "2px solid #8785A2",
      "important"
    );
  }
  if(textareaElements){
    for (var i = 0; i < textareaElements.length; i++) {
      textareaElements[i].style.setProperty(
        "background-color",
        "#F6F6F6",
        "important"
      );
    }
  }
  if(selectElements){
    for (var i = 0; i < selectElements.length; i++) {
      selectElements[i].style.setProperty(
        "background-color",
        "#F6F6F6",
        "important"
      );
    }
  }
  if(labelElements){
    for (var i = 0; i < labelElements.length; i++) {
      labelElements[i].style.setProperty(
        "background-color",
        "#F6F6F6",
        "important"
      );
    }
  }
  if(liElements){
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].style.setProperty(
        "background-color",
        "#F6F6F6",
        "important"
      );
    }
  }
  if(spanElements){
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].style.setProperty(
        "background-color",
        "#F6F6F6",
        "important"
      );
    }
  }
  if(inputElements){
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].style.setProperty(
        "background-color",
        "#F6F6F6",
        "important"
      );
    }
  }
  if(document.getElementById("color3")){
    document.getElementById("color3").style.setProperty("border", "2px solid black");
  }
} else if (currentTheme === "color4") {
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.setProperty(
      "background-color",
      "#86A788",
      "important"
    );
  }
  document.body.style.setProperty("background-color", "#EAF3E8", "important");

  for (var i = 0; i < cardElements.length; i++) {
    cardElements[i].style.setProperty(
      "background-color",
      "#D1E3C7",
      "important"
    );
  }
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].style.setProperty(
      "background-color",
      "#B2C7BA",
      "important"
    );
    buttonElements[i].style.setProperty("color", "white", "important");
    buttonElements[i].style.setProperty(
      "border",
      "2px solid #86A788",
      "important"
    );
  }
  if(textareaElements){
    for (var i = 0; i < textareaElements.length; i++) {
      textareaElements[i].style.setProperty(
        "background-color",
        "rgb(235, 243, 232)",
        "important"
      );
    }
  }
  if(selectElements){
    for (var i = 0; i < selectElements.length; i++) {
      selectElements[i].style.setProperty(
        "background-color",
        "#EBF3E8",
        "important"
      );
    }
  }
  if(labelElements){
    for (var i = 0; i < labelElements.length; i++) {
      labelElements[i].style.setProperty(
        "background-color",
        "#EBF3E8",
        "important"
      );
    }
  }
  if(liElements){
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].style.setProperty(
        "background-color",
        "rgb(235, 243, 232)",
        "important"
      );
    }
  }
  if(spanElements){
    for (var i = 0; i < spanElements.length; i++) {
      spanElements[i].style.setProperty(
        "background-color",
        "#EBF3E8",
        "important"
      );
    }
  }
  if(inputElements){
    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].style.setProperty(
        "background-color",
        "#EBF3E8",
        "important"
      );
    }
  }
  if(document.getElementById("color4")){
    document.getElementById("color4").style.setProperty("border", "2px solid black");
  }
}
