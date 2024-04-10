
/**
 * Invokes the appropriate sort function based on the current Sorting Type
 */
function callSort(){

    if(currSortingType == "title-A-Z"){
        sort("title", true);
    }else if(currSortingType == "title-Z-A"){
        sort("title", false);
    }else if(currSortingType == "price-asc"){
        sort("price", true);
    }else if(currSortingType == "price-desc"){
        sort("price", false);
    }else if(currSortingType == "metacriticScore-asc"){
        sort("metacriticScore", true);
    }else if(currSortingType == "metacriticScore-desc"){
        sort("metacriticScore", false);
    }else if(currSortingType == "releaseDate-asc"){
        sort("releaseDate", true);
    }else if(currSortingType == "releaseDate-desc"){
        sort("releaseDate", false);
    } //Todo
}


/**
 * Sorts the filteredCardsArr 
 * @param {*} sortBy - the object field to be sorted by
 * @param {*} lowestFirst - boolean value to know whether to sort in ascending or descending order
 */
function sort(sortBy, lowestFirst){
    for(let i = 0; i < filteredCardsArr.length; i++){
        let extreme = i; //The index of either min or max element in gameObjects that comes after i
        for(let j = i + 1; j < filteredCardsArr.length; j++){
            if(lowestFirst){
                if(filteredCardsArr[extreme][sortBy] > filteredCardsArr[j][sortBy]) extreme = j;
            }else{
                if(filteredCardsArr[extreme][sortBy] < filteredCardsArr[j][sortBy]) extreme = j;
            }
        }
        swapInFilteredCardsArr(i, extreme);
    }
    showCards();
}


/**
 * Swaps the elements in index1 and index2 in filteredCardsArr
 * @param {*} index1 
 * @param {*} index2 
 */
function swapInFilteredCardsArr(index1, index2){
    let temp = filteredCardsArr[index1];
    filteredCardsArr[index1] = filteredCardsArr[index2];
    filteredCardsArr[index2] = temp;
}