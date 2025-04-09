window.onload = () => {
  const startScreen = document.getElementById("start-screen");
  const uiBar = document.getElementById("ui-bar");
  const canvas = document.getElementById("game-canvas");

  startScreen.style.display = "flex";
  uiBar.style.display = "none";
  canvas.style.display = "none";

  document.getElementById("start-button").onclick = () => {
    startScreen.style.display = "none";
    uiBar.style.display = "flex";
    resizeCanvas();
    centerCamera();
    canvas.style.display = "block";
    gameState.gameStarted = true;
    updateUI();
    drawWorld();

    // Camera movement loop
    setInterval(updateCamera, 16); // ~60 FPS
  };

  window.addEventListener("keydown", (e) => {
    switch (e.key.toLowerCase()) {
      case "w": gameState.camera.moving.up = true; break;
      case "s": gameState.camera.moving.down = true; break;
      case "a": gameState.camera.moving.left = true; break;
      case "d": gameState.camera.moving.right = true; break;
    }
  });

  window.addEventListener("keyup", (e) => {
    switch (e.key.toLowerCase()) {
      case "w": gameState.camera.moving.up = false; break;
      case "s": gameState.camera.moving.down = false; break;
      case "a": gameState.camera.moving.left = false; break;
      case "d": gameState.camera.moving.right = false; break;
    }
  });

  canvas.addEventListener("mousemove", (e) => {
    const margin = 30;
    const { offsetX, offsetY } = e;

    gameState.camera.moving.left = offsetX < margin;
    gameState.camera.moving.right = offsetX > canvas.width - margin;
    gameState.camera.moving.up = offsetY < margin;
    gameState.camera.moving.down = offsetY > canvas.height - margin;
  });

  canvas.addEventListener("mouseleave", () => {
    gameState.camera.moving = { up: false, down: false, left: false, right: false };
  });
};
