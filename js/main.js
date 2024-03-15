let health = 100; // declarar
let xp = 1;
const btnFight = document.getElementById("btnFight");
 
btnFight.addEventListener('click', ()=>{
fight(1);
});
 
const uiText = document.getElementById("ui");
const fightScreen = document.getElementById("fightScreen");
 
const enemies = [
    { name: "Slow John",
      chance: 1
    },
    {
        name: "Ayoub",
        chance: 5
    }
]
uiText.innerText = "Salud: " + health + " Experiencia:" + xp;
 
function fight(index) {
    let chanceEnemy = enemies[index].chance;
    let fightResult = Math.random()*chanceEnemy - Math.random()*xp;
 
    if (fightResult <= 0) {
        fightScreen.innerText = "¡Has ganado a " + enemies[index].name +"!";
        xp++;
        console.log(xp);
    }
   
    else {
        fightScreen.innerText = "¡Has perdido contra " + enemies[index].name + "!";
    }
 
   
}