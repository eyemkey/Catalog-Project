const sortOptionsMenu = document.getElementById("sort-options")
sort("title", true);


sortOptionsMenu.addEventListener('change', () => {
    callSort();
})

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

function sort(sortBy, lowestFirst){
    console.log(filteredCardsArr);
    for(let i = 0; i < filteredCardsArr.length; i++){
        let extreme = i; //The index of either min or max element in titles that comes after i
        for(let j = i + 1; j < filteredCardsArr.length; j++){
            if(lowestFirst){
                if(filteredCardsArr[extreme][sortBy] > filteredCardsArr[j][sortBy]) extreme = j;
            }else{
                if(filteredCardsArr[extreme][sortBy] < filteredCardsArr[j][sortBy]) extreme = j;
            }
        }
        swapInFilteredCardsArr(i, extreme);
    }
    console.log(filteredCardsArr);
    showCards();
}

function swapInFilteredCardsArr(index1, index2){
    let temp = filteredCardsArr[index1];
    filteredCardsArr[index1] = filteredCardsArr[index2];
    filteredCardsArr[index2] = temp;
}