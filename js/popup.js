const morePopup = document.getElementById("more-popup");
const morePopupContent = morePopup.querySelector('.popup-content')
const morePopupClose = morePopupContent.querySelector(".close");

const editPopup = document.getElementById('edit-popup');
const editPopupContent = editPopup.querySelector('.popup-content');
const editPopupClose = editPopupContent.querySelector('.close');
const editSubmitEditBtn = editPopupContent.querySelector('#submitEdit');


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


/**
 * Opens a popup window for the specified game to get more info
 * @param {*} cardId - the specified card to get the object information 
 */
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


/**
 * Opens the Edit Popup window for the specified card
 * @param {*} cardId - the specified card ID to get the card's data
 */
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
            }else if(key == "platforms" || key == "genres"){
                for(let i = 0; i < card[key].length; i++){
                    input.value += card[key][i]; 
                    if(i + 1 < card[key].length) input.value += ", ";
                }
            }
            else{
                input.value = card[key];
            }
        }
    }
}


/**
 * Edits the specified card with the values inserted in the input boxes
 * @param {*} cardId The ID of the card in filteredCardsArr to be edited
 */
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
                card[key] = input.value.split(",");
                for(let currCard of card[key]){
                    currCard = currCard.replace(/\s/, '');
                }
            }
            else{
                card[key] = input.value;
            }
        }
    }
    close();
}

/**
 * Closes the Edit Popup Window
 */
function close(){
    currEditCardID = -1;
    editPopup.style.display = 'none';
    showCards();
}