document.addEventListener("DOMContentLoaded", showCards);


const cardContainer = document.getElementById("card-container");
const morePopup = document.getElementById('popup');
const morePopupContent = document.getElementById('popup-content')
const morePopupClose = document.getElementById('close');

morePopupClose.addEventListener('click', () => {
    const paragraphTags = morePopupContent.querySelectorAll("p");
    paragraphTags[0].innerHTML = "Price: ";
    paragraphTags[1].innerHTML = "Genres: ";
    paragraphTags[2].innerHTML = "Platforms: "; 
    paragraphTags[3].innerHTML = "Metacritic Score: "; 
    paragraphTags[4].innerHTML = "Publisher: "; 
    paragraphTags[5].innerHTML = "Developer: "; 
    paragraphTags[6].innerHTML = "Date of Release";
    

    console.log(paragraphTags);

    morePopup.style.display = 'none';
});


// This function adds cards the page to display the data in the array
function showCards() {

    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

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

    const removeButton = card.getElementsByClassName("removeBtn")[0];
    console.log(removeButton);
    removeButton.addEventListener('click', () => {console.log("AAA"); removeElement(cardId)});

    const moreButton = card.getElementsByClassName("moreBtn")[0];
    console.log(moreButton); 
    moreButton.addEventListener('click', () => {showMore(cardId)});


    //Assign the source for the image
    const cardImage = card.querySelector("img");
    cardImage.src = newTitle.imagePath;


    const paragraphTags = card.querySelectorAll("p"); // 0->price, 1->genres, 2->platforms
    paragraphTags[0].innerHTML += "$" + newTitle.price;
    

    for(let i = 0; i < newTitle.genres.length; i++){
        paragraphTags[1].innerHTML += newTitle.genres[i];
        if(i + 1 < newTitle.genres.length) paragraphTags[i].innerHTML += ", ";
    }

    for(let i = 0; i < newTitle.platforms.length; i++){
        paragraphTags[2].innerHTML += newTitle.platforms[i];
        if(i + 1 < newTitle.platforms.length) paragraphTags[2].innerHTML += ", ";
    }

}



// This calls the addCards() function when the page is first loaded

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function removeSelectedCards(){
    let tempTitlesArr = [];
    for(let i = 0; i < cardContainer.children.length; i++){
        let currChild = cardContainer.children[i];
        const checkbox = currChild.querySelector("input[type='checkbox']");
        console.log(checkbox);

        if(!checkbox.checked){
            tempTitlesArr.push(titles[i]);
        }
    }

    titles = tempTitlesArr;
    showCards();
}

function sort(sortBy, lowestFirst){
    console.log(lowestFirst);
    for(let i = 0; i < titles.length; i++){
        let extreme = i; //The index of either min or max element in titles that comes after i
        for(let j = i + 1; j < titles.length; j++){
            if(lowestFirst){
                if(titles[extreme][sortBy] > titles[j][sortBy]) extreme = j;
            }else{
                if(titles[extreme][sortBy] < titles[j][sortBy]) extreme = j;
            }
        }
        swapInTitles(i, extreme);
    }
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

function swapInTitles(index1, index2){
    let temp = titles[index1];
    titles[index1] = titles[index2];
    titles[index2] = temp;
}


function removeElement(titleId){
    console.log("Remove called");
    let i = titleId;
    while(i < titles.length-1){
        titles[i] = titles[i + 1];
        i++;
    }
    removeLastCard();
}


function showMore(cardId){
    morePopup.style.display = 'block';
    
    let title = titles[cardId];
    
    const h3 = morePopupContent.querySelector("h3").innerHTML = title["title"];

    morePopupContent.querySelector('img').src = title.imagePath;
    const paragraphTags = morePopup.querySelectorAll("p");

    paragraphTags[0].innerHTML += "$" + title["price"];
    for(let i = 0; i < title.genres.length; i++){
        paragraphTags[1].innerHTML += title.genres[i];
        if(i + 1 < title.genres.length) paragraphTags[1].innerHTML += ", ";
    }

    for(let i = 0; i < title.platforms.length; i++){
        paragraphTags[2].innerHTML += title.platforms[i];
        if(i + 1 < title.platforms.length) paragraphTags[2].innerHTML += ", ";
    }

    paragraphTags[3].innerHTML += title["metacriticScore"];
    paragraphTags[4].innerHTML += title["publisher"];
    paragraphTags[5].innerHTML += title["developer"];
    paragraphTags[6].innerHTML += title["releaseDate"];

}