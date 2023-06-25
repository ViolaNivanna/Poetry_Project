/* 
The function recive an objekt with elements and their belonging theme classes.
Condition for change is here, in this function, so all changes will happen at the same time, from the same place.
One if for winter and summer, repetative code in the if, to be sure all get the change.
*/

function changeTheme () {

  // The current date and the dates for vernal equinox and autumnal equinox
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const toSummer = new Date(currentYear, 2, 20, 23, 59, 59);
  const toWinter = new Date(currentYear, 8, 22, 23, 59, 59);


  // For the poems
  const bodyElement = document.body;
  const headerElement = document.querySelector("header");
  const pictureDiv = document.getElementById("pictureTheme");
  const divElements = document.getElementsByTagName("div");
  const h3Elements = document.getElementsByTagName("h3");
  const pElements = document.getElementsByTagName("p");
  const btnElements = document.getElementsByTagName("button");
  const inputElements = document.querySelectorAll("input");

  // If current date is during the winter time, then winter theme
  if (currentDate > toWinter || currentDate < toSummer) {

    // The body
    bodyElement.style.backgroundColor = "rgb(189, 212, 229)";

    // The header title
    headerElement.style.color = "rgb(189, 212, 229)";

    // The home page picture
    if (pictureDiv != null) {
      pictureDiv.classList.add("winterPicture");
    }

    // The div elements: Overlayed haiku and about section background and a links color, Poem card
    for(let i = 0; i < divElements.length; i++){
      let boolOverlayed = divElements[i].classList.contains("overlaidHaiku");
      let boolAbout = divElements[i].classList.contains("aboutsection");
      let boolLinks = divElements[i].classList.contains("aboutPoems");
      let boolPoemCard = divElements[i].classList.contains("poemCard");
      if (boolOverlayed) {
        divElements[i].style.backgroundColor = "rgba(240, 248, 255, 0.726)";
      }
      if (boolAbout) {
        divElements[i].style.backgroundColor = "rgb(162, 175, 229)";
      }
      if (boolLinks) {
        let aElements = divElements[i].querySelectorAll("a"); 
        for (let j = 0; j < aElements.length; j++) {
          if (aElements[j] != null) {
            aElements[j].style.color = "rgb(81, 75, 155)";
          }
        }
      }
      if (boolPoemCard) {
        divElements[i].style.backgroundColor = "rgba(162, 175, 229, 0.441)";
      }
    }

    // The h3 elements: Poem title and no results, a element header "Poem"
    for(let i = 0; i < h3Elements.length; i++){
      let boolTitle = h3Elements[i].classList.contains("poemTitle");
      let boolNoRes = h3Elements[i].classList.contains("noResults");
      let boolName = h3Elements[i].classList.contains("poemsName");
      if (boolTitle || boolNoRes) {
        h3Elements[i].style.color = "rgb(81, 75, 155)";
      }
      if (boolNoRes) {
        h3Elements[i].style.backgroundColor = "rgba(162, 175, 229, 0.441)";
      }
      if (boolName) {
        let aElement = h3Elements[i].querySelector("a"); 
        if (aElement != null) {
          aElement.style.color = "rgb(189, 212, 229)";
        }
      }
    }

    // The p elements: Poem date and keywords
    for(let i = 0; i < pElements.length; i++){
      let boolDate = pElements[i].classList.contains("poemDate");
      let boolKeywords = pElements[i].classList.contains("poemKeywords");
      if (boolDate || boolKeywords) {
        pElements[i].style.color = "rgba(81, 75, 155, 0.830)";
      }
    }

    // The button elements: Search and Poem read more/less button
    for(let i = 0; i < btnElements.length; i++){
      let boolSearchBtn = btnElements[i].classList.contains("searchButton");
      let boolReadBtn = btnElements[i].classList.contains("readButton");
      if (boolSearchBtn) {
        btnElements[i].style.backgroundColor = "rgb(189, 212, 229)";
        btnElements[i].style.borderColor = "rgb(205, 234, 255)";
      }
      if (boolReadBtn) {
        btnElements[i].style.backgroundColor = "rgb(162, 175, 229)";
        btnElements[i].style.borderColor = "rgb(230, 245, 255)";
      }
    }

    // The input elements: Search function
    for(let i = 0; i < inputElements.length; i++){
      let boolSearchInput = inputElements[i].classList.contains("input");
      if (boolSearchInput) {
        inputElements[i].style.backgroundColor = "rgb(189, 212, 229)";
        inputElements[i].style.borderColor = "rgb(205, 234, 255)";
      }
    }


  } else {
    /* 
    If not winter, then summer
    and if something goes wrong with the change, summer is default 
    */

    // The body
    bodyElement.style.backgroundColor = "rgb(202, 229, 189)";

    // The header
    headerElement.style.color = "rgb(202, 229, 189)";

    // The home page picture
    if (pictureDiv != null) {
      pictureDiv.classList.add("summerPicture");
    }

    // The div elements: Overlayed haiku and about section background and a links color
    for(let i = 0; i < divElements.length; i++){
      let boolOverlayed = divElements[i].classList.contains("overlaidHaiku");
      let boolAbout = divElements[i].classList.contains("aboutsection");
      let boolLinks = divElements[i].classList.contains("aboutPoems");
      let boolPoemCard = divElements[i].classList.contains("poemCard");
      if (boolOverlayed) {
        divElements[i].style.backgroundColor = "rgba(202, 229, 189, 0.767)";
      }
      if (boolAbout) {
        divElements[i].style.backgroundColor = "rgb(187, 184, 148)";
      }
      if (boolLinks) {
        let aElements = divElements[i].querySelectorAll("a"); 
        for (let j = 0; j < aElements.length; j++) {
          if (aElements[j] != null) {
            aElements[j].style.color = "rgb(90, 83, 16)";
          }
        }
      }
      if (boolPoemCard) {
        divElements[i].style.backgroundColor = "rgba(187, 184, 148, 0.441)";
      }
    }

    // The h3 elements: Poem title and no results, a element header "Poem"
    for(let i = 0; i < h3Elements.length; i++){
      let boolTitle = h3Elements[i].classList.contains("poemTitle");
      let boolNoRes = h3Elements[i].classList.contains("noResults");
      let boolName = h3Elements[i].classList.contains("poemsName");
      if (boolTitle || boolNoRes) {
        h3Elements[i].style.color = "rgb(90, 83, 16)";
      }
      if (boolNoRes) {
        h3Elements[i].style.backgroundColor = "rgba(187, 184, 148, 0.441)";
      }
      if (boolName) {
        let aElement = h3Elements[i].querySelector("a"); 
        if (aElement != null) {
          aElement.style.color = "rgb(202, 229, 189)";
        }
      }
    }

    // The p elements: Poem date and keywords
    for(let i = 0; i < pElements.length; i++){
      let boolDate = pElements[i].classList.contains("poemDate");
      let boolKeywords = pElements[i].classList.contains("poemKeywords");
      if (boolDate || boolKeywords) {
        pElements[i].style.color = "rgba(90, 83, 16, 0.830)";
      }
    }

    // The button elements: Poem read more/less button
    for(let i = 0; i < btnElements.length; i++){
      let boolSearchBtn = btnElements[i].classList.contains("searchButton");
      let boolReadBtn = btnElements[i].classList.contains("readButton");
      if (boolSearchBtn) {
        btnElements[i].style.backgroundColor = "rgb(202, 229, 189)";
        btnElements[i].style.borderColor = "rgb(202, 229, 189)";
      }
      if (boolReadBtn) {
        btnElements[i].style.backgroundColor = "rgb(187, 184, 148)";
        btnElements[i].style.borderColor = "rgb(230, 255, 235)";
      }
    }

    // The input elements: Search function
    for(let i = 0; i < inputElements.length; i++){
      let boolSearchInput = inputElements[i].classList.contains("input");
      if (boolSearchInput) {
        inputElements[i].style.backgroundColor = "rgb(202, 229, 189)";
        inputElements[i].style.borderColor = "rgb(202, 229, 189)";
      }
    }

  }

}