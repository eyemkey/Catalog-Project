document.addEventListener("DOMContentLoaded", showCards);

const cardContainer = document.getElementById("card-container");

let filteredCardsArr = [...gameObjects]; //The array of the filtered cards

const searchBox = document.getElementById("searchBox");
let searchBoxValue = searchBox.value;

searchBox.addEventListener('input', () => {
    searchBoxValue = searchBox.value;
    filter();
})


/**
 * Displays the filteredCardArr on to the page
 */
function showCards() {

    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for(let i = 0; i < filteredCardsArr.length; i++){
        let card = filteredCardsArr[i];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, card, i); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

/**
 * Edits the values in the Card
 * @param {*} card - the new Card Object to be edited
 * @param {*} gameObject - the Game Object to insert into card
 * @param {*} cardId - the ID of the card in the filteredCardsArr
 */
function editCardContent(card, gameObject, cardId) {
    card.style.display = "block";

    card.id = cardId; //Assign ID to each card

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = gameObject.title;

    
    const moreButton = card.querySelector(".moreBtn");
    moreButton.addEventListener('click', () => {showMore(cardId)});

    const editButton = card.querySelector(".editBtn");
    editButton.addEventListener('click', () => {openEditPopup(cardId)});

    const removeButton = card.querySelector(".removeBtn");
    removeButton.addEventListener('click', () => {removeElement(cardId)});


    //Assign the source for the image
    const cardImage = card.querySelector("img");
    cardImage.src = gameObject.imagePath;

    const paragraphTags = card.querySelectorAll("p");
    paragraphTags[0].innerHTML += "$" + gameObject.price; //paragraph[0] -> price
    
    //paragraph[1] -> genres
    for(let i = 0; i < gameObject.genres.length; i++){
        paragraphTags[1].innerHTML += gameObject.genres[i];
        if(i + 1 < gameObject.genres.length) {
            paragraphTags[1].innerHTML += ", ";
        }
    }

    //paragraph[2] -> platforms
    for(let i = 0; i < gameObject.platforms.length; i++){
        paragraphTags[2].innerHTML += gameObject.platforms[i];
        if(i + 1 < gameObject.platforms.length) paragraphTags[2].innerHTML += ", ";
    }
}


/**
 * Removes the Last displayed card
 */
function removeLastCard() {
    let elem = filteredCardsArr.pop();
    removeFromGameObjects([elem]);
    showCards(); // Call showCards again to refresh
}

/**
 * Removes all the cards that has their checkboxes checked
 */
function removeSelectedCards(){
    let tempFilteredTitlesArr = [];
    let deletedCards = [];
    for(let i = 0; i < cardContainer.children.length; i++){
        let currChild = cardContainer.children[i];
        const checkbox = currChild.querySelector("input[type='checkbox']");
        console.log(checkbox);

        if(!checkbox.checked){
            tempFilteredTitlesArr.push(filteredCardsArr[i]);
        }else{
            deletedCards.push(filteredCardsArr[i]);
        }
        
    }

    removeFromGameObjects(deletedCards);
    filteredCardsArr = tempFilteredTitlesArr;
    showCards();
}


/**
 * Removes a specified element from the filteredCardsArr and titles
 * @param {*} cardId the id of the game to be removed
 */
function removeElement(cardId){
    console.log("Remove at " + cardId);
    let temp = [];
    for(let i = 0; i < filteredCardsArr.length; i++){
        if(i == cardId){
            removeFromGameObjects([filteredCardsArr[cardId]]);
        }else{
            temp.push(filteredCardsArr[i]);
        }
    }

    filteredCardsArr = temp;
    showCards();
}


/**
 * Converts an string into a Date
 * @param {*} str - A date in mm/dd/yyyy format 
 * @returns a Date() object with the same value as str
 */
function convertToDate(str){
    let arr = str.split('/');
    return new Date(arr[2] + '-' + arr[0] + '-' + arr[1]);
}



/**
 * Updates filtered cards Array with objects that satisfy the filters applied
 */
function filter(){
    console.log("filter");
    filteredCardsArr.length = 0;
    for(let i = 0; i < gameObjects.length; i++){
        //Filters Applied --------------------------------------------------
        let title = gameObjects[i];
        let containsGenres = contains(activeGenres, title.genres);
        let containsPlatforms = contains(activePlatforms, title.platforms);
        let containsDeveloper = contains(activeDevelopers, [title.developer]);
        let inSearch = searchBoxValue == "" ? true : isInSearch(title.title);
        let inPriceRange = noPriceBound || (title.price >= minPrice && title.price <= maxPrice);
        let inMetacriticScoreRange = noMetacriticScoreBound || (title.metacriticScore >= minMetacriticScore && title.metacriticScore <= maxMetacriticScore);
        //------------------------------------------------------------------
        

        if(containsGenres && containsPlatforms && containsDeveloper && inPriceRange && inMetacriticScoreRange && inSearch){
                filteredCardsArr.push(title);
        }
    }
    callSort();
    showCards();
}

/**
 * Tells whether the searched Value is in the specified title
 * @param {*} title - The title of the game to be looked at 
 * @returns true if searchBoxValue is a substring of title else false
 */
function isInSearch(title){
    const lowerCaseTitle = title.toLowerCase(); 
    const lowercaseSearchBoxValue = searchBoxValue.toLowerCase();
    return lowerCaseTitle.includes(lowercaseSearchBoxValue);
}

/**
 * Tells us whether searchArray contanis any elem from targetsArr
 * @param {*} searchArray Array to be searched for targets
 * @param {*} targetsArr The targets to be looked for
 * @returns true if searchArr contains any elem from targetsArr else false
 */
function contains(searchArray, targetsArr){
    if(searchArray.length == 0) return true;
    for(let target of targetsArr){
        for(let elem of searchArray){
            if (elem == target) return true;
        }
    }
    return false;
}


function clearFilters(){
    console.log("Clear");
    // radioInputs[0].checked;
    // currSortingType = radioInputs[0].value;

    activeGenres.length = 0; 
    for(let i = 0; i < genresCheckboxes.length; i++){
        genresCheckboxes[i].checked = false;
    }

    activePlatforms.length = 0;
    for(let i = 0; i < platformsCheckboxes.length; i++){
        platformsCheckboxes[i].checked = false;
    }

    for(let i = 0; i < priceInputs.length; i++){
        priceInputs[i].value = 0;
    }
    minPrice = 0;
    maxPrice = 0;
    noPriceBound = true;


    for(let i = 0; i < metacriticInputs; i++){
        metacriticInputs[i].value = 0;
    }
    minMetacriticScore = 0; 
    maxMetacriticScore = 0; 
    noMetacriticScoreBound = true;


    activeDevelopers.length = 0;
    for(let i = 0; i < developerCheckboxes.length; i++){
        developerCheckboxes[i].checked = false;
    }

    callSort(); 
    filter();

}