/* 
The function recive an objekt with elements and their belonging theme classes.
Condition for change is here, in this function, so all changes will happen at the same time, from the same place.
*/

function changeTheme (changeObject) {

  let myTheme = "winter";

  if (myTheme == "winter") {
    
    for (let x in changeObject) {
      changeObject[x][0].classList.add(changeObject[x][1]);
    };


  } else {
    // If something goes wrong with the change, summer is default
    for (let x in changeObject) {
      changeObject[x][0].classList.add(changeObject[x][2]);
    };
  }

}