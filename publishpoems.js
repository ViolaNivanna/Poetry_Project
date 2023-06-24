// Function for readabe date
function readableDate(poemDate){
  let poemDay = poemDate.getDate();
  let poemMonth = poemDate.getMonth()+1;
  const poemYear = poemDate.getFullYear();
    
  if(poemDay < 10) poemDay = "0" + poemDay;
  if(poemMonth < 10) poemMonth = "0" + poemMonth;

  return poemDay + ". " + poemMonth + ". " + poemYear;
}


// Function to create elements for parts of the poem objects and connect them to a css class
function showPoemPart(theClassName, elementType, partOfPoem){

  // Creating the poem part in html with class and element type
  const attPoem = document.createAttribute("class");
  attPoem.value = theClassName;
  const thePart = document.createElement(elementType);
  thePart.innerHTML = partOfPoem;
  thePart.setAttributeNode(attPoem);

  // Returning the poem element so it can be added to the card, not directly at the page
  return thePart; 
}


// Giving the text a div, and handle text details like left align and long text
function poemTextDetails(card, poem) {

  let textdiv = showPoemPart("poemTextdiv", "div", "");
  textdiv.appendChild(showPoemPart("poemText", "p", poem.text));
  card.appendChild(textdiv);


  // If the poem should be aligned to the left, else centered
  if (poem.alignText == "left") {
    textdiv.style.textAlign = "left";
  }


  // Finding the amount of breaks, which will tell somthing about the hight/length of the text
  let breaks = 0;
  for(let l = 0; l < poem.text.length; l ++){
    if (poem.text[l] == "<"){
      breaks ++;
    }
  }

  // If the text is too long, hide the rest and make the "Read more" button available
  if(breaks > 20) {
    textdiv.style.height = "10rem";
    textdiv.style.overflow = "hidden";
    const moreButton = moreOrLess(card, "Read more");
    moreButton.addEventListener("click", function(){moreText(textdiv, moreButton)});
  }
}

// Button for "Read more" and "Read less"
function moreOrLess(cardElement, readML) {
  
  // Dots marking there is more to read, placed before button
  const dots = document.createElement("p");
  dots.setAttribute("id", "dots");
  dots.innerHTML = "(...)";
  dots.style.marginTop = "0.5rem";
  dots.style.marginBottom = "0rem";
  cardElement.appendChild(dots);

  // Creating the button
  const readAtt = document.createAttribute("class");
  readAtt.value = "readButton";
  const readButton = document.createElement("BUTTON");
  readButton.setAttributeNode(readAtt);
  readButton.innerHTML = readML;
  cardElement.appendChild(readButton);

  return readButton;
}

// Functions connected to eachother, read more and read less buttons
function moreText(theTextdiv, theButton) {
  document.getElementById("dots").innerHTML = "";
  theTextdiv.style.height = "fit-content";
  theButton.innerHTML = "Read less";
  theButton.addEventListener("click", function(){lessText(theTextdiv, theButton)});
}
function lessText(theTextdiv, theButton) {
  document.getElementById("dots").innerHTML = "(...)";
  theTextdiv.style.height = "10rem";
  theButton.innerHTML = "Read more";
  theButton.addEventListener("click", function(){moreText(theTextdiv, theButton)});
}


// Function createing and publishing one poem in a card div
// This is the function used in the html files
function addPoemToPage(thePoem){
    
  // Creating a card div for the poem
  const attCard = document.createAttribute("class");
  attCard.value = "poemCard";
  const theCard = document.createElement("div");
  theCard.setAttributeNode(attCard);
  document.body.appendChild(theCard);

  // Making the keywords into one string
  let theKeywords = " | ";
  for(let k = 0; k < thePoem.keywords.length; k++){
    theKeywords += thePoem.keywords[k] + " | ";
  }

  // Adding all parts of the poem objects to the card
  theCard.appendChild(showPoemPart("poemTitle", "h3", thePoem.title));
  poemTextDetails(theCard, thePoem);
  theCard.appendChild(showPoemPart("poemDate", "p", readableDate(thePoem.myDate)));        
  theCard.appendChild(showPoemPart("poemKeywords", "p", theKeywords));

  // Returning the card div so the entire poem can be added to other divs (search functionality)
  return theCard;
}