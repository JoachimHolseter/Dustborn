const gameState = {
    resources: {
      oxygen: 100,
      water: 100,
      food: 100,
      power: 100
    },
    gridSize: 10,
    tileSize: 64,
    buildings: [],
    colonists: []
  };
  
  function updateUI() {
    document.getElementById("oxygen").innerText = `${gameState.resources.oxygen}%`;
    document.getElementById("water").innerText = `${gameState.resources.water}%`;
    document.getElementById("food").innerText = `${gameState.resources.food}%`;
    document.getElementById("power").innerText = `${gameState.resources.power}%`;
  }