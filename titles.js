let titles = [
    {title: "God of War", price: 19.99, platforms: ["PS4", "PC"], metacriticScore: 94, genres: ["Action"], publisher: "Sony Interactive Entertainment", developer: "SCE Santa Monica", releaseDate: new Date("2018-04-20"), imagePath: "./images/god-of-war.jpg"},
    {title: "Marvel's Spider-Man Remastered", price: 49.99, platforms: ["PS5","PS4", "PC"], metacriticScore: 87, genres: ["Action"], publisher: "Playstation PC", developer: "Nixxes Software", releaseDate: new Date("2022-08-12"), imagePath: "./images/spider-man.jpg" },
    {title: "Uncharted 4: A Thief's End", price: 19.99, platforms: ["PS4", "PC"], metacriticScore: 93, genres: ["Action"], publisher: "Sony Interactive Entertainment", developer: "Naughty Dog", releaseDate: new Date("2016-05-10"), imagePath: "./images/uncharted-4.jpg" },
    {title: "Grand Theft Auto V", price: 39.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 97, genres: ["Action", "Adventure"], publisher: "Rockstar Games", developer: "Rockstar North", releaseDate: new Date("2014-11-18"), imagePath: "./images/gta-v.jpg" },
    {title: "Horizon Zero Dawn", price: 19.99, platforms: ["PS4", "PC"], metacriticScore: 89, genres: ["Action", "RPG"], publisher: "Sony Interactive Entertainment", developer: "Guerrilla", releaseDate: new Date("2017-02-28"), imagePath: "./images/horizon-zero-dawn.jpg" },
    {title: "God of War Ragnarök", price: 69.99, platforms: ["PS5", "PS4"], metacriticScore: 94, genres: ["Action"], publisher: "Sony Interactive Entertainment", developer: "SCE Santa Monica", releaseDate: new Date("2022-11-09"), imagePath: "./images/god-of-war-ragnarok.jpg"}, 
    {title: "Marvel's Spider-Man 2", price: 69.99, platforms: ["PS5"], metacriticScore: 90, genres: ["Action"], publisher: "Sony Interactive Entertainment", developer: "Insomniac Games", releaseDate: new Date("2023-10-20"), imagePath: "./images/spider-man-2.jpg"}, 
    {title: "Marvel's Spider-Man: Miles Morales", price: 49.99, platforms: ["PS5", "PS4", "PC"], metacriticScore: 85, genres: ["Action"], publisher: "Playstation Studios", developer: "Insomniac Games", releaseDate: new Date("2020-11-22"), imagePath: "./images/spider-man-miles-morales.jpg"}, 
    {title: "Horizon Forbidden West", price: 49.99, platforms: ["PS5", "PS4", "PC"], metacriticScore: 88, genres: ["Action"], publisher: "Playstation Studios", developer: "Guerrilla", releaseDate: new Date("2022-02-18"), imagePath: "./images/horizon-forbidden-west.jpg"}, 
    {title: "Bloodborne", price: 19.99, platforms: ["PS4"], metacriticScore: 92, genres: ["Action", "RPG"], publisher: "SCEA", developer: "From Software", releaseDate: new Date("2015-03-24"), imagePath: "./images/bloodborne.jpg"}, 
    {title: "Elden Ring", price: 59.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 96, genres: ["RPG"], publisher: "Bandai Namco Games", developer: "From Software", releaseDate: new Date("2012-02-25"), imagePath: "./images/elden-ring.jpg"}, 
    {title: "Mortal Kombat X", price: 19.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 83, genres: ["Fighting"], publisher: "Warner Bros. Interactive Entertainment", developer: "NetherRealm Studios", releaseDate: new Date("2015-04-15"), imagePath: "./images/mortal-kombat-x.jpg"}, 
    {title: "Mortal Kombat 1", price: 69.99, platforms: ["PS5", "PC", "XBOX Series X"], metacriticScore: 83, genres: ["Fighting"], publisher: "Warner Bros. Games", developer: "NetherRealm Studios", releaseDate: new Date("2023-09-19"), imagePath: "./images/mortal-kombat-1.png"}, 
    {title: "Tekken 7", price: 49.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 82, genres: ["Fighting", "Action"], publisher: "Bandai Namco Games", developer: "Bandai Namco Games", releaseDate: new Date("2017-06-02"), imagePath: "./images/tekken-7.jpg"}, 
    {title: "Tekken 8", price: 69.99, platforms: ["PS5", "PC", "XBOX Series X"], metacriticScore: 90, genres: ["Fighting", "Action"], publisher: "Bandai Namco Games", developer: "Bandai Namco Games", releaseDate: new Date("2024-01-26"), imagePath: "./images/tekken-8.jpg"}, 
    {title: "The Last of Us Part I", price: 69.99, platforms: ["PS5", "PC"], metacriticScore: 89, genres: ["Action"], publisher: "Sony Interactive Entertainment", developer: "Naughty Dog", releaseDate: new Date("2022-09-02"), imagePath: "./images/the-last-of-us-part-i.jpg"}, 
    {title: "The Last of Us Part II", price: 39.99, platforms: ["PS4"], metacriticScore: 93, genres: ["Action", "Adventure"], publisher: "Sony Interactive Entertainment", developer: "Naughty Dog", releaseDate: new Date("2020-06-19"), imagePath: "./images/the-last-of-us-part-ii.jpg"}, 
    {title: "Ghost of Tsushima", price: 69.99, platforms: ["PS5", "PS4", "PC"], metacriticScore: 87, genres: ["RPG"], publisher: "Playstation Studios", developer: "Sucker Punch", releaseDate: new Date("2021-08-20"), imagePath: "./images/ghost-of-tsushima.jpg"}, 
    {title: "Gran Turismo 7", price: 69.99, platforms: ["PS5", "PS4"], metacriticScore: 87, genres: ["Driving", "Racing"], publisher: "Playstation Studios", developer: "Polyphony Digital", releaseDate: new Date("2022-03-04"), imagePath: "./images/gran-turismo-7.jpg"}, 
    {title: "InFamous: Second Son", price: 19.99, platforms: ["PS4"], metacriticScore: 80, genres: ["Action", "Adventure"], publisher: "Sony Interactive Entertainment", developer: "Sucker Punch", releaseDate: new Date("2014-03-21"), imagePath: "./images/infamous-second-son.jpg"}, 
    {title: "Detroit: Become Human", price: 19.99, platforms: ["PS4", "PC"], metacriticScore: 78, genres: ["Action", "Adventure"], publisher: "Sony Interactive Entertainment", developer: "Quantic Dream", releaseDate: new Date("2018-05-25"), imagePath: "./images/detroit.jpg"}, 
    {title: "The Witcher 3: Wild Hunt", price: 39.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 92, genres: ["RPG"], publisher: "Warner Bros. Interactive Entertainment", developer: "CD Projekt Red Studio", releaseDate: new Date("2015-05-19"), imagePath: "./images/witcher-3.jpg"}, 
    {title: "Assassin’s Creed Unity", price: 29.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 72, genres: ["Action", "Adventure", "RPG"], publisher: "Ubisoft", developer: "Ubisoft Montreal", releaseDate: new Date("2014-11-11"), imagePath: "./images/assassins-creed-unity.jpg"}, 
    {title: "Assassin’s Creed Syndicate", price: 29.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 76, genres: ["Action", "Adventure"], publisher: "Ubisoft", developer: "Ubisoft Quebec", releaseDate: new Date("2015-10-23"), imagePath: "./images/assassins-creed-syndicate.jpg"}, 
    {title: "Assassin’s Creed Valhalla", price: 59.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 80, genres: ["RPG"], publisher: "Ubisoft", developer: "Ubisoft Montreal", releaseDate: new Date("2020-11-10"), imagePath: "./images/assassins-creed-valhalla.jpg"}, 
    {title: "Cuphead", price: 19.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 86, genres: ["2D Platformer"], publisher: "Studio MDHR", developer: "Studio MDHR", releaseDate: new Date("2017-09-27"), imagePath: "./images/cuphead.jpg"}, 
    {title: "Dark Souls Remastered", price: 39.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 84, genres: ["RPG"], publisher: "Bandai Namco Games", developer: "QLOC", releaseDate: new Date("2018-05-25"), imagePath: "./images/dark-souls-remastered.jpg"}, 
    {title: "Control", price: 29.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 82, genres: ["Action"], publisher: "Remedy Entertainment", developer: "505 Games", releaseDate: new Date("2019-08-27"), imagePath: "./images/control.jpg"}, 
    {title: "Red Dead Redemption 2", price: 59.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 97, genres: ["Action", "Adventure"], publisher: "Rockstar Games", developer: "Rockstar Games", releaseDate: new Date("2018-10-26"), imagePath: "./images/rdr2.jpg"}, 
    {title: "Hogwarts Legacy", price: 69.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 84, genres: ["RPG"], publisher: "Warner Bros. Interactive Entertainment", developer: "Portkey Games", releaseDate: new Date("2023-02-07"), imagePath: "./images/hogwarts-legacy.jpg"}, 
    {title: "Cyberpunk 2077", price: 59.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 89, genres: ["Action", "RPG"], publisher: "Warner Bros. Interactive Entertainment", developer: "CD Projekt Red Studio", releaseDate: new Date("2020-12-10"), imagePath: "./images/cyberpunk-2077.jpg"}, 
    {title: "The Elder Scrolls V: Skyrim", price: 39.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 96, genres: ["Action", "RPG"], publisher: "Bethesda Softworks", developer: "Bethesda Game Studios", releaseDate: new Date("2011-11-11"), imagePath: "./images/skyrim.jpg"}, 
    {title: "Shadow of the Tomb Raider", price: 39.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 75, genres: ["Action"], publisher: "Square Enix", developer: "Eldos Montreal", releaseDate: new Date("2018-09-13"), imagePath: "./images/shadow-of-the-tomb-raider.jpg"}, 
    {title: "Sekiro: Shadows Die Twice", price: 59.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 90, genres: ["Action", "Adventure"], publisher: "Activision", developer: "From Software", releaseDate: new Date("2019-03-22"), imagePath: "./images/sekiro.jpg"}, 
    {title: "Call of Duty: Black Ops 3", price: 59.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 81, genres: ["Action", "Shooter"], publisher: "Activision", developer: "Treyarch", releaseDate: new Date("2015-11-06"), imagePath: "./images/cod-black-ops-iii.jpg"}, 
    {title: "A Way Out", price: 29.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 78, genres: ["Action", "Adventure"], publisher: "Electronic Arts", developer: "Hazelight", releaseDate: new Date("2018-03-23"), imagePath: "./images/a-way-out.png"}, 
    {title: "Resident Evil Village", price: 39.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 84, genres: ["Action", "Horror"], publisher: "Capcom", developer: "Capcom", releaseDate: new Date("2021-05-07"), imagePath: "./images/resident-evil-vii.jpg"}, 
    {title: "Star Wars Jedi: Fallen Order", price: 39.99, platforms: ["PS5", "PS4", "PC", "XBOX Series X", "XBOX One"], metacriticScore: 84, genres: ["Action", "Adventure"], publisher: "Electronic Arts", developer: "Respawn Entertainment", releaseDate: new Date("2019-11-15"), imagePath: "./images/jedi-fallen-order.jpg"}, 
    {title: "Dark Souls III", price: 59.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 89, genres: ["Action", "Adventure", "RPG"], publisher: "Bandai Namco Games", developer: "From Software", releaseDate: new Date("2016-04-12"), imagePath: "./images/dark-souls-iii.jpg"}, 
    {title: "Call of Duty WWII", price: 59.99, platforms: ["PS4", "PC", "XBOX One"], metacriticScore: 79, genres: ["Action", "Shooter"], publisher: "Activision", developer: "Sledgehammer Gammes", releaseDate: new Date("2017-11-03"), imagePath: "./images/cod-wwii.jpg"}, 

    
]



function removeFromTitles(cards){
    let k = 0; 
    let tempTitles = [];
    for(let i = 0; i < titles.length; i++){
        if(titles[i] != cards[k]){
            tempTitles.push(titles[i]);
        }else{
            k++;
        }
    }

    titles = tempTitles;
}


