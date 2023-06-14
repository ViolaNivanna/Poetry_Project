// This document is making poem objects and an array to hold them all.

// Poem object constructor
function PoemObject(title, text, myDate, keywords, poemType) {
  this.title = title;
  this.text = text;
  this.myDate = myDate;
  this.keywords = keywords;
  this.poemType = poemType;
}

// Function creating all poem objects and returning an array containing the poems
function allPoemsArray() {

  // Creating the array that are going to hold all the poems
  const theArray = [];

  // The poems
  // First poem
  const poemText1 = "word word <br> word word word <br> word";
  const date1 = new Date("2022-03-25");
  const poemKey1 = ["life", "beauty", "happiness"];
  const poemType1 = "haiku";
  const testPoem1 = new PoemObject("Title 1", poemText1, date1, poemKey1, poemType1);
  theArray.push(testPoem1);

  // Second poem
  const poemText2 = "text text <br> text text text <br> text text text text <br> text text text text text <br> text text text text <br> text";
  const date2 = new Date("2001-08-12");
  const poemKey2 = ["life", "beauty", "love"];
  const poemType2 = "free";
  const testPoem2 = new PoemObject("Title 2", poemText2, date2, poemKey2, poemType2);
  theArray.push(testPoem2);

  // Third poem
  const poemText3 = "writing <br> writing writing writing <br> writing writing";
  const date3 = new Date("2012-11-03");
  const poemKey3 = ["darkness", "beauty", "romance", "mystery"];
  const poemType3 = "haiku";
  const testPoem3 = new PoemObject("Title 3", poemText3, date3, poemKey3, poemType3);
  theArray.push(testPoem3);

  // Fourth poem
  const poemText4 = "something <br> something something <br> something something something";
  const date4 = new Date("2012-12-03");
  const poemKey4 = ["darkness"];
  const poemType4 = "haiku";
  const testPoem4 = new PoemObject("Title 4", poemText4, date4, poemKey4, poemType4);
  theArray.push(testPoem4);

  // Fifth poem
  const poemText5 = "telling telling  telling <br> telling  telling telling  telling telling  telling telling  telling <br> telling  telling telling  telling telling  telling telling  telling telling  telling telling  telling <br> telling  telling telling  telling telling  telling telling  telling telling  telling telling  hei";
  const date5 = new Date("2018-12-03");
  const poemKey5 = ["beauty", "romance", "mystery"];
  const poemType5 = "free";
  const testPoem5 = new PoemObject("Title 5", poemText5, date5, poemKey5, poemType5);
  testPoem5.alignText = "left";
  theArray.push(testPoem5);

  // Fifth poem
  const poemText6 = "read <br> read read <br> read <br> read read read <br> read <br> read read read <br> read <br> read read read <br> read read <br> read read read <br> read<br> read read read read <br> read <br> read read <br> read read read <br> read<br> read read read read <br> read <br> read read <br> read read read <br> read<br> read read read read <br> read <br> read read <br> read read read <br> read<br> read read read read <br> read  read read read read<br> read read <br> read read read <br> read<br> read read read read <br> read <br> read read <br> read read read <br> read<br> read read read read <br> read <br> read read <br> read read read <br> read<br> read read read read <br> read <br> read read <br> read read read <br> read<br> read read read read <br> read <br> read read <br> read read read <br> read read read read read<br> read read read read <br> read <br> read read read read <br> read  read read read read <br> read<br> read read read read <br> read  read read read read hei";
  const date6 = new Date("2017-10-03");
  const poemKey6 = ["beauty", "romance", "love"];
  const poemType6 = "free";
  const testPoem6 = new PoemObject("Title 6", poemText6, date6, poemKey6, poemType6);
  theArray.push(testPoem6);
  
  // Sorting the array so the newest is first and oldest last
  theArray.sort(function(a,b){return (b.myDate) - (a.myDate)});

  return theArray;
}