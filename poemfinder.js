/*
The function recive a search word and check if there is a match with title or keywords in a poem array
The matching poems are added to an array, which is returned.
*/

function poemfinder(poemArray, searchWord) {

  const resultsArray = [];
  const theWord = searchWord.toLowerCase().replace(/\s/g, "");

  for (let i = 0; i < poemArray.length; i ++) {

    const poemTitle = poemArray[i].title.toLowerCase().replace(/\s/g, "");
    const keyArray = poemArray[i].keywords;

    // If poem title match search word, add to results array
    // Else if search word is haiku or free/free verse, add to results array
    // Else search word match one of the keywords, add to results array

    if (theWord == poemTitle) {
      resultsArray.push(poemArray[i]);

    } else if (theWord == "haiku") {
      if (poemArray[i].poemType == "haiku") {
        resultsArray.push(poemArray[i]);
      }

    } else if (theWord == "free" || theWord == "freeverse") {
      if (poemArray[i].poemType == "free") {
        resultsArray.push(poemArray[i]);
      }

    } else {
      for (let j = 0; j < keyArray.length; j ++) {

        let currKey = keyArray[j].toLowerCase().replace(/\s/g, "");

        if (theWord == currKey) {
          resultsArray.push(poemArray[i]);
        }
      }
    }
  }

  return resultsArray;

}