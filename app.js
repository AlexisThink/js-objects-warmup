function getFirstLetterFromFirstName(array){
    var name ="";
    var nameUp ="";
    var vowel;
    var finalList = [];

    for (var i = 0; i < array.length; i++){
        var current = array[i];

        name = current.firstName;
        nameUp = name.toUpperCase();
        vowel = nameUp.slice(0, 1);

        finalList.push(vowel);
        console.log(finalList);
    }
    return finalList
}

var names = [{
    firstName: "pedro",
    lastName: "Paramo"
  }, {
    firstName: "chuck",
    lastName: "Norris"
  }, {
    firstName: "vicente",
    lastName: "Fernandez"
  }, {
    firstName: "electric",
    lastName: "Blue"
  }];
  
  getFirstLetterFromFirstName(names); // => ["P", "C", "V", "E"]