const genresDropdown = document.getElementById('genres-dropdown');
const genresDropdownToggle = genresDropdown.querySelector('.dropdown-toggle');
const genresDropdownMenu = genresDropdown.querySelector('.dropdown-menu'); 
let genreSet = initializeSet("genres");
createCheckboxes(genreSet, genresDropdownMenu);
const genresCheckboxes = genresDropdownMenu.querySelectorAll("input[type='checkbox']");
let activeGenres = [];


const platformsDropdown = document.getElementById('platforms-dropdown');
const platformsDropdownToggle = platformsDropdown.querySelector('.dropdown-toggle');
const platformsDropdownMenu = platformsDropdown.querySelector('.dropdown-menu');
let platformSet = initializeSet("platforms");
createCheckboxes(platformSet, platformsDropdownMenu);
const platformsCheckboxes = platformsDropdownMenu.querySelectorAll("input[type='checkbox']");
let activePlatforms = [];


const priceDropdown = document.getElementById('price-dropdown'); 
const priceDropdownToggle = priceDropdown.querySelector('.dropdown-toggle');
const priceDropdownMenu = priceDropdown.querySelector('.dropdown-menu');
const priceInputs = priceDropdownMenu.querySelectorAll("input[type='number']");
let noPriceBound = true;
let minPrice = priceInputs[0].value;
let maxPrice = priceInputs[1].value; 


const metacriticDropdown = document.getElementById("metacritic-dropdown");
const metacriticDropdownToggle = metacriticDropdown.querySelector(".dropdown-toggle");
const metacriticDropdownMenu = metacriticDropdown.querySelector(".dropdown-menu");
const metacriticInput = metacriticDropdownMenu.querySelector("input[type='number']");
let minMetacriticScore = 0;


const developerDropdown = document.getElementById("developer-dropdown");
const developerDropdownToggle = developerDropdown.querySelector(".dropdown-toggle"); 
const developerDropdownMenu = developerDropdown.querySelector(".dropdown-menu");
let developerSet = initializeSet("developer");
createCheckboxes(developerSet, developerDropdownMenu);
const developerCheckboxes = developerDropdownMenu.querySelectorAll("input[type='checkbox']"); 
let activeDevelopers = [];


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


metacriticInput.addEventListener('input', () => {
    minMetacriticScore = metacriticInput.value;
    filter();
});

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


for(let i = 0; i < developerCheckboxes.length; i++){
    developerCheckboxes[i].addEventListener('change', () => {
        updateActiveList(activeDevelopers, developerCheckboxes);
        console.log(activeDevelopers);
        filter();
    })
}

for(let i = 0; i < platformsCheckboxes.length; i++){
    platformsCheckboxes[i].addEventListener('change', () => {
        updateActiveList(activePlatforms, platformsCheckboxes);
        filter();
    });
}

for(let i = 0; i < genresCheckboxes.length; i++){
    genresCheckboxes[i].addEventListener('change', () => {
        updateActiveList(activeGenres, genresCheckboxes)
        filter();
    });
}

genresDropdownToggle.addEventListener('click', () => {
    genresDropdownMenu.classList.toggle('active');
});

platformsDropdownToggle.addEventListener('click', () => {
    platformsDropdownMenu.classList.toggle('active');
});

priceDropdownToggle.addEventListener('click', () => {
    console.log('aa')
    priceDropdownMenu.classList.toggle('active');
});

metacriticDropdownToggle.addEventListener('click', () => {
    metacriticDropdownMenu.classList.toggle('active');
})

developerDropdownToggle.addEventListener('click', () => {
    developerDropdownMenu.classList.toggle('active');
})
sortingDropdownToggle.addEventListener('click', () => {
    sortingDropdownMenu.classList.toggle('active');
})


function updateActiveList(array, checkboxes){
    array.length = 0;
    for(let i = 0; i < checkboxes.length; i++){
        let checkbox = checkboxes[i];
        if(checkbox.checked){
            array.push(checkbox.value);
        }
    }
}

function updateActiveGenres(){
    activeGenres = [];
    for(let i = 0; i < genresCheckboxes.length; i++){
        let checkbox = genresCheckboxes[i];
        if(checkbox.checked){
            activeGenres.push(checkbox.value);
        }
    }
    console.log(activeGenres);
}


function initializeSet(field){
    set = new Set();

    for(let i = 0; i < titles.length; i++){
        let currField = titles[i][field];
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

function createCheckboxes(set, parentDropdownMenu){
    for(const elem of set){
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = elem;

        const label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(elem));

        parentDropdownMenu.appendChild(label);

        // <div id="genres-dropdown" class="dropdown">
        //      <button class="dropdown-toggle">Select Genres</button>
        //      <div class="dropdown-menu">
        //          <label><input type="checkbox"/>Genre</label>        
        //      </div>
        //</div>
    }
}

