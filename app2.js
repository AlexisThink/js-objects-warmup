function getImageNamesFromObject(objeto){
var arrayKeys = Object.keys(objeto); //Array con Keys del Objeto
var finalList =  [];
var listResultados = [];

for (var i = 0; i < arrayKeys.length; i++){
    var current = arrayKeys[i];

    if (current.startsWith("img") === true){
        finalList.push(i);
    }
}

for (var j = 0; j < finalList.length; j++){
    var current = finalList[j];
    listResultados.push(objeto[arrayKeys[current]]);
}
console.log(listResultados);
// console.log(finalList);
// console.log(objeto[arrayKeys[1]]);
}

var jennyObj = {
    name: "jenny",
    img_40x40: "selfy-ig-profile.png",
    job: 'seamstress',
    age:  28,
    profileActive: false,
    img_40x40: "thumnail-me.jpg",
    img_100x100: "jenny-profile.jpg",
    img_244x244: "frend-kitkat.jpg",
    img_200x200: "penguin-hat.png",
 }
 
 var rufusDolanObj = {
    name: "rufus",
    img_50x50: "srs-photo.png",
    job: 'cook',
    age:  48,
    hasFace: false,
    img_100x100: "glamour-shot.png",
    img_300x200: "at-the-game.png",
 }
 var userImageList1 = getImageNamesFromObject(jennyObj)
 var userImageList2 = getImageNamesFromObject(rufusDolanObj)
 //=> ["srs-photo.png", "glamour-shot.png", "at-the-game.png"]