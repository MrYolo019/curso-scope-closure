// function name(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    } 
    return countCoins();
} 

function createPetList(newPet) {
    let mascotas = [];
    mascotas.push["michi"];
  
    function addPets() {
      newPet = mascotas.push('newpet');
    }
    return addpets();
  }
   
  