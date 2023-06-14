/* 
The function takes an array with all the poems as parameter, and what poemtype is wanted
Then the poems of the wanted poem type is added in a new array
This new array is returned
*/

function wantedPoems(fullArray, wantedType){

    const wantedArray = [];

    for(let i = 0; i < fullArray.length; i ++){
        if(fullArray[i].poemType == wantedType){
            wantedArray.push(fullArray[i]);
        }
    }

    return wantedArray;
}