var currentTheme = document.getElementById("currentTheme").value;
var navElements = document.getElementsByClassName("navbar");
var cardElements = document.getElementsByClassName("card");
var buttonElements = document.getElementsByClassName("btn");

document.getElementById("color0").style.border = "none";

if (currentTheme === "color1") {
    for (var i = 0; i < navElements.length; i++) {
        navElements[i].style.setProperty(
          "background-color",
          "#C58840",
          "important"
        );
      }
      document.body.style.setProperty("background-color", "#FAE9B2", "important");
    
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
        buttonElements[i].style.setProperty("border", "2px solid #8785A2", "important");
    
      }
      document
        .getElementById("color1")
        .style.setProperty("border", "2px solid black");
  } else if (currentTheme === "color2") {
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.setProperty(
      "background-color",
      "#A6E2E8",
      "important"
    );
  }
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
  document
    .getElementById("color2")
    .style.setProperty("border", "2px solid black");

  document.body.style.setProperty("background-color", "#CBF1F5", "important");
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
    buttonElements[i].style.setProperty("border", "2px solid #8785A2", "important");

  }
  document
    .getElementById("color3")
    .style.setProperty("border", "2px solid black");
}else if (currentTheme === "color4") {
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
      buttonElements[i].style.setProperty("border", "2px solid #86A788", "important");
  
    }
    document
      .getElementById("color4")
      .style.setProperty("border", "2px solid black");
  }
  
