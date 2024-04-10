//Sorting Dropdown Information --------------------------------------------------------------
const sortingDropdown = document.getElementById("sorting-dropdown");
const sortingDropdownToggle = sortingDropdown.querySelector(".dropdown-toggle");
const sortingDropdownMenu = sortingDropdown.querySelector(".dropdown-menu");
const radioInputs = sortingDropdownMenu.querySelectorAll("input[type='radio']");
let currSortingType = radioInputs[0].value;
callSort();

for(let i = 0; i < radioInputs.length; i++){
    radioInputs[i].addEventListener('change', (event) => {
        console.log(event.target.value);
        currSortingType = event.target.value;
        callSort();
    });
}

sortingDropdownToggle.addEventListener('click', () => {
    sortingDropdownMenu.classList.toggle('active');
})
//-------------------------------------------------------------------------------------------


//Genres Dropdown Information Start----------------------------------------------------------
const genresDropdown = document.getElementById('genres-dropdown');
const genresDropdownToggle = genresDropdown.querySelector('.dropdown-toggle');
const genresDropdownMenu = genresDropdown.querySelector('.dropdown-menu'); 
let genreSet = getSet("genres");
createCheckboxes(genreSet, genresDropdownMenu);
const genresCheckboxes = genresDropdownMenu.querySelectorAll("input[type='checkbox']");
let activeGenres = [];

for(let i = 0; i < genresCheckboxes.length; i++){
    genresCheckboxes[i].addEventListener('change', () => {
        updateActiveList(activeGenres, genresCheckboxes)
        filter();
    });
}

genresDropdownToggle.addEventListener('click', () => {
    genresDropdownMenu.classList.toggle('active');
});
//-------------------------------------------------------------------------------------------


//Platforms Dropdown Information ------------------------------------------------------------
const platformsDropdown = document.getElementById('platforms-dropdown');
const platformsDropdownToggle = platformsDropdown.querySelector('.dropdown-toggle');
const platformsDropdownMenu = platformsDropdown.querySelector('.dropdown-menu');
let platformSet = getSet("platforms");
createCheckboxes(platformSet, platformsDropdownMenu);
const platformsCheckboxes = platformsDropdownMenu.querySelectorAll("input[type='checkbox']");
let activePlatforms = [];

for(let i = 0; i < platformsCheckboxes.length; i++){
    platformsCheckboxes[i].addEventListener('change', () => {
        updateActiveList(activePlatforms, platformsCheckboxes);
        filter();
    });
}

platformsDropdownToggle.addEventListener('click', () => {
    platformsDropdownMenu.classList.toggle('active');
});
//-------------------------------------------------------------------------------------------


//Price Dropdown Information ----------------------------------------------------------------
const priceDropdown = document.getElementById('price-dropdown'); 
const priceDropdownToggle = priceDropdown.querySelector('.dropdown-toggle');
const priceDropdownMenu = priceDropdown.querySelector('.dropdown-menu');
const priceInputs = priceDropdownMenu.querySelectorAll("input[type='number']");
let noPriceBound = true;
let minPrice = priceInputs[0].value;
let maxPrice = priceInputs[1].value; 

for(let i = 0; i < priceInputs.length; i++){
    priceInputs[i].addEventListener('input', () => {
        console.log("CHANGE");
        minPrice = priceInputs[0].value;
        maxPrice = priceInputs[1].value;
        if(minPrice == 0 && maxPrice == 0) noPriceBound = true;
        else noPriceBound = false;
        filter();
    })
}
priceDropdownToggle.addEventListener('click', () => {
    priceDropdownMenu.classList.toggle('active');
});
//-------------------------------------------------------------------------------------------

//Metacritic Dropdown Information -----------------------------------------------------------
const metacriticDropdown = document.getElementById("metacritic-dropdown");
const metacriticDropdownToggle = metacriticDropdown.querySelector(".dropdown-toggle");
const metacriticDropdownMenu = metacriticDropdown.querySelector(".dropdown-menu");
const metacriticInputs = metacriticDropdownMenu.querySelectorAll("input[type='number']");
let noMetacriticScoreBound = true;
let minMetacriticScore = 0;
let maxMetacriticScore = 0;


for(let i = 0; i < metacriticInputs.length; i++){
    metacriticInputs[i].addEventListener('input', () => {
        minMetacriticScore = metacriticInputs[0].value;
        maxMetacriticScore = metacriticInputs[1].value;
        noMetacriticScoreBound = (minMetacriticScore == 0 && maxMetacriticScore == 0);
        filter();
    })
}

metacriticDropdownToggle.addEventListener('click', () => {
    metacriticDropdownMenu.classList.toggle('active');
})
//-------------------------------------------------------------------------------------------


//Developer Dropdown Information ------------------------------------------------------------
const developerDropdown = document.getElementById("developer-dropdown");
const developerDropdownToggle = developerDropdown.querySelector(".dropdown-toggle"); 
const developerDropdownMenu = developerDropdown.querySelector(".dropdown-menu");
let developerSet = getSet("developer");
createCheckboxes(developerSet, developerDropdownMenu);
const developerCheckboxes = developerDropdownMenu.querySelectorAll("input[type='checkbox']"); 
let activeDevelopers = [];

for(let i = 0; i < developerCheckboxes.length; i++){
    developerCheckboxes[i].addEventListener('change', () => {
        updateActiveList(activeDevelopers, developerCheckboxes);
        console.log(activeDevelopers);
        filter();
    })
}

developerDropdownToggle.addEventListener('click', () => {
    developerDropdownMenu.classList.toggle('active');
})
//-------------------------------------------------------------------------------------------



/**
 * Updates specific field's activeList array
 * @param {*} activeArray - the active array for a specific field
 * @param {*} checkboxes - the checkboxes created for a specific field
 */
function updateActiveList(activeArray, checkboxes){
    activeArray.length = 0;
    for(let i = 0; i < checkboxes.length; i++){
        let checkbox = checkboxes[i];
        if(checkbox.checked){
            activeArray.push(checkbox.value);
        }
    }
}


/**
 * Gets the set of every possible value of the object's specified field
 * @param {*} field - the object field to find all unique elements
 * @returns the set of every possible value of the object's field
 */
function getSet(field){
    set = new Set();

    for(let i = 0; i < gameObjects.length; i++){
        let currField = gameObjects[i][field];
        if(Array.isArray(currField)){
            for(let j = 0; j < currField.length; j++){
                set.add(currField[j]);
            }
        }else{
            set.add(currField);
        }
    }
    return set;
}


/**
 * Creates checkboxes based on the Unique values
 * @param {*} set - Set of Unique Values to create checkboxes for
 * @param {*} parentDropdownMenu - The parent dropdown menu of the checkboxes
 */
function createCheckboxes(set, parentDropdownMenu){
    for(const elem of set){
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = elem;

        const label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(elem));

        parentDropdownMenu.appendChild(label);
    }
}

