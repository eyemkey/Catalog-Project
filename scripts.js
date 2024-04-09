document.addEventListener("DOMContentLoaded", showCards);


const cardContainer = document.getElementById("card-container");
const morePopup = document.getElementById("more-popup");
const morePopupContent = morePopup.querySelector('.popup-content')
const morePopupClose = morePopupContent.querySelector(".close");

const editPopup = document.getElementById('edit-popup');
const editPopupContent = editPopup.querySelector('.popup-content');
const editPopupClose = editPopupContent.querySelector('.close');
const editSubmitEditBtn = editPopupContent.querySelector('#submitEdit');

let filteredCardsArr = [...titles];



morePopupClose.addEventListener('click', () => {
    const paragraphTags = morePopupContent.querySelectorAll("p");
    paragraphTags[0].innerHTML = "Price: ";
    paragraphTags[1].innerHTML = "Genres: ";
    paragraphTags[2].innerHTML = "Platforms: "; 
    paragraphTags[3].innerHTML = "Metacritic Score: "; 
    paragraphTags[4].innerHTML = "Publisher: "; 
    paragraphTags[5].innerHTML = "Developer: "; 
    paragraphTags[6].innerHTML = "Date of Release: ";

    morePopup.style.display = 'none';
});

editPopupClose.addEventListener('click', () => {
    editPopup.style.display = 'none';
});

editPopupClose.addEventListener('click', () => {close()});
editSubmitEditBtn.addEventListener('click', () => {edit(currEditCardID)});

// This function adds cards the page to display the data in the array
function showCards() {

    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for(let i = 0; i < filteredCardsArr.length; i++){
        let title = filteredCardsArr[i];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, i); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}


function editCardContent(card, newTitle, cardId) {
    card.style.display = "block";

    card.id = cardId; //Assign ID to each card

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle.title;

    
    const moreButton = card.querySelector(".moreBtn");
    moreButton.addEventListener('click', () => {showMore(cardId)});

    const editButton = card.querySelector(".editBtn");
    editButton.addEventListener('click', () => {openEditPopup(cardId)});

    const removeButton = card.querySelector(".removeBtn");
    removeButton.addEventListener('click', () => {removeElement(cardId)});


    //Assign the source for the image
    const cardImage = card.querySelector("img");
    cardImage.src = newTitle.imagePath;


    const paragraphTags = card.querySelectorAll("p"); // 0->price, 1->genres, 2->platforms
    paragraphTags[0].innerHTML += "$" + newTitle.price;
    

    for(let i = 0; i < newTitle.genres.length; i++){
        paragraphTags[1].innerHTML += newTitle.genres[i];
        if(i + 1 < newTitle.genres.length) {
            paragraphTags[1].innerHTML += ", ";
        }
    }

    for(let i = 0; i < newTitle.platforms.length; i++){
        paragraphTags[2].innerHTML += newTitle.platforms[i];
        if(i + 1 < newTitle.platforms.length) paragraphTags[2].innerHTML += ", ";
    }

}



// This calls the addCards() function when the page is first loaded

function removeLastCard() {
    
    // titles.pop(); // Remove last item in titles array
    let elem = filteredCardsArr.pop();
    removeFromTitles([elem]);
    showCards(); // Call showCards again to refresh
}

function removeSelectedCards(id){
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

    removeFromTitles(deletedCards);
    filteredCardsArr = tempFilteredTitlesArr;
    showCards();
}



function filter(filterBy, filterValue, isMoreID = 0){
    let tempArr = [];
    for(let i = 0; i < titles.length; i++){
        let currElem = titles[i][filterBy];

        if(isMoreID > 0){
            if(currElem > filterValue) tempArr.push(titles[i]);
        }else if(isMoreID < 0){
            if(currElem < filterValue) tempArr.push(titles[i]);
        }else{
            if(titles[i][filterBy] == filterValue){
                tempArr.push(titles[i]);
            }
        }   
    }
    titles = tempArr;
    showCards();
}




function removeElement(titleId){
    console.log("Remove at " + titleId);
    let temp = [];
    for(let i = 0; i < filteredCardsArr.length; i++){
        if(i == titleId){
            removeFromTitles([filteredCardsArr[titleId]]);
        }else{
            temp.push(filteredCardsArr[i]);
        }
    }

    filteredCardsArr = temp;
    showCards();
}

function removeId(id){
    let idFound = false;
    for(let i = 0; i < filteredCardsIdArr.length-1; i++){
        if(!idFound && filteredCardsIdArr[i] == id){
            idFound = true;
        }
        if(idFound){
            filteredCardsIdArr[i] = filteredCardsIdArr[i + 1];
        }
    }
    console.log(filteredCardsIdArr);
    filteredCardsIdArr.pop();
}


function showMore(cardId){
    console.log(cardId);
    morePopup.style.display = 'block';
    
    let title = filteredCardsArr[cardId];
    
    const h3 = morePopupContent.querySelector("h3").innerHTML = title["title"];

    morePopupContent.querySelector('img').src = title.imagePath;
    const paragraphTags = morePopupContent.querySelectorAll("p");

    paragraphTags[0].innerHTML += "$" + title["price"];
    for(let i = 0; i < title.genres.length; i++){
        paragraphTags[1].innerHTML += title.genres[i];
        if(i + 1 < title.genres.length) paragraphTags[1].innerHTML += ", ";
    }

    for(let i = 0; i < title.platforms.length; i++){
        paragraphTags[2].innerHTML += title.platforms[i];
        if(i + 1 < title.platforms.length) paragraphTags[2].innerHTML += ", ";
    }

    paragraphTags[3].innerHTML += title.metacriticScore;
    paragraphTags[4].innerHTML += title.publisher;
    paragraphTags[5].innerHTML += title.developer;
    paragraphTags[6].innerHTML += title.releaseDate.toLocaleDateString();

}

function openEditPopup(cardId){
    currEditCardID = cardId;
    editPopup.style.display = 'block';
    let card = filteredCardsArr[cardId];

    for(const key in card){
        if(card.hasOwnProperty(key) && key != 'imagePath'){
            console.log(key);
            let input = editPopupContent.querySelector('#' + key);
            if(key == "releaseDate"){
                input.value = card[key].toLocaleDateString();
            } 
            else{
                input.value = card[key];
            }
        }
    }
}

function edit(cardId){
    console.log('edit');
    let card = filteredCardsArr[cardId];
    console.log(card);
    for(const key in card){
        console.log(1);
        if(card.hasOwnProperty(key) && key != 'imagePath'){
            let input = editPopupContent.querySelector('#' + key);

            if(key == 'releaseDate'){
                card[key] = convertToDate(input.value);
            }
            else if(key == 'genres' || key == 'platforms'){
                card[key] = input.value.split(", ");
            }
            else{
                card[key] = input.value;
            }
        }
    }
    close();
}

function convertToDate(str){
    let arr = str.split('/');
    return new Date(arr[2] + '-' + arr[0] + '-' + arr[1]);
}

function close(){
    currEditCardID = -1;
    editPopup.style.display = 'none';
    showCards();
}


function filter(){
    filteredCardsArr.length = 0;
    for(let i = 0; i < titles.length; i++){
        let title = titles[i];
        let containsGenres = contains(activeGenres, title.genres);
        let containsPlatforms = contains(activePlatforms, title.platforms);
        let containsDeveloper = contains(activeDevelopers, [title.developer]);
        let inPriceRange = noPriceBound || (title.price >= minPrice && title.price <= maxPrice);
        let inMetacriticScoreRange = noMetacriticScoreBound || (title.metacriticScore >= minMetacriticScore && title.metacriticScore <= maxMetacriticScore);
        if(containsGenres && containsPlatforms && containsDeveloper && inPriceRange && inMetacriticScoreRange){
                filteredCardsArr.push(title);
        }
    }
    callSort();
    showCards();
}

function contains(searchArray, targetsArr){
    if(searchArray.length == 0) return true;
    for(let target of targetsArr){
        for(let elem of searchArray){
            if (elem == target) return true;
        }
    }
    return false;
}
