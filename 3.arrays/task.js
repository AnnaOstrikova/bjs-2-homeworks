function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
    }else{
    return array1.every(function(element, index) {
      return element === array2[index];
    });
  }
}
 
function getUsersNamesInAgeRange(users, gender) {
    if (gender === "женский"){
      let womenUsers = users.filter(user => user.gender === "женский");
      let totalAgeWomen =womenUsers.map(womenUser => womenUser.age);
      let averageAgeWomen = totalAgeWomen.reduce((acc, item, index, arr) => {
          acc += item;
          if(index === arr.length - 1){
            return acc/arr.length;
          }
          return acc;
      },0);
      return averageAgeWomen;
    }
    if (gender === "мужской"){
      let menUsers = users.filter(user => user.gender === "мужской");
      let totalAgeMen =menUsers.map(menUser => menUser.age);
      let averageAgeMen = totalAgeMen.reduce((acc, item, index, arr) => {
        acc += item;
        if(index === arr.length - 1){
          return acc/arr.length;
        }
        return acc;
      },0);
      return averageAgeMen;
    }else{
      return 0;
    }   
}
