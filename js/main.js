let player = {
  name: "",
  health: 100,
  damage: 10,
  heal: 10,
};

let rival = {
  name: "Rival",
  health: 100,
  damage: 10,
  heal: 10,
};

// Elementos de la interfaz de usuario (UI)
let ui = document.getElementById("ui");
let fightScreen = document.getElementById("fightScreen");
let btnFight = document.getElementById("btnFight");
let btnRegister = document.getElementById("btnRegister");
let gamePanel = document.querySelector(".gamePanel");
let datos_player = document.getElementById("datos_player");
let rivalName = document.getElementById("rivalName");
let rivalHealth = document.getElementById("rivalHealth");
let rivalDamage = document.getElementById("rivalDamage");
let rivalHeal = document.getElementById("rivalHeal");
let playerName = document.getElementById("playerName");
let playerHealth = document.getElementById("playerHealth");
let playerDamage = document.getElementById("playerDamage");
let playerHeal = document.getElementById("playerHeal");
let rivalTurn = false;
let playerTurn = true;

// Eventos de los botones de la interfaz de usuario
btnRegister.addEventListener("click", () => {
  player.name = document.getElementById("name").value;
  playerName.textContent = `Nombre: ${player.name}`;
  playerHealth.textContent = `Salud: ${player.health}`;
  playerDamage.textContent = `Daño: ${player.damage}`;
  playerHeal.textContent = `Curación: ${player.heal}`;
  rivalName.textContent = `Nombre: ${rival.name}`;
  rivalHealth.textContent = `Salud: ${rival.health}`;
  rivalDamage.textContent = `Daño: ${rival.damage}`;
  rivalHeal.textContent = `Curación: ${rival.heal}`;
  datos_player.style.display = "none";
  gamePanel.style.display = "block";
});

// Evento del botón de pelea
btnFight.addEventListener("click", () => {
  if (playerTurn) {
    fight(player, rival);
  }
});

// Función para simular la pelea
function fight(player, rival) {
  if (playerTurn) {
    let rivalDamage = Math.floor(Math.random() * rival.damage);
    rivalHealth.textContent = `Salud: ${(rival.health -= rivalDamage)}`;
    rivalDamage.textContent = `Daño: ${rivalDamage}`;
    rivalTurn = true;
    playerTurn = false;
  }

  if (rivalTurn) {
    let playerDamage = Math.floor(Math.random() * player.damage);
    playerHealth.textContent = `Salud: ${(player.health -= playerDamage)}`;
    playerDamage.textContent = `Daño: ${playerDamage}`;
    rivalTurn = false;
    playerTurn = true;
  }

  if (player.health <= 0) {
    alert("Has perdido");
  }

  if (rival.health <= 0) {
    alert("Has ganado");
  }
}
