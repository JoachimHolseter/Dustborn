const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const marsTexture = new Image();
marsTexture.src = "assets/images/t_mars_01.png";
let marsPattern = null;

marsTexture.onload = () => {
  marsPattern = ctx.createPattern(marsTexture, "repeat");
  if (gameState.gameStarted) {
    resizeCanvas();
    centerCamera();
    drawWorld();
  }
};

window.resizeCanvas = function () {
  const topBarHeight = 50;
  const sidePanelWidth = 288; // adjusted for padding and borders

  const width = window.innerWidth - sidePanelWidth * 2;
  const height = window.innerHeight - topBarHeight;

  canvas.width = width;
  canvas.height = height;

  canvas.style.position = "fixed";
  canvas.style.left = `${sidePanelWidth}px`;
  canvas.style.top = `${topBarHeight}px`;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
};


function drawWorld() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (marsPattern) {
    ctx.save();
    const offsetX = -gameState.camera.x % marsTexture.width;
    const offsetY = -gameState.camera.y % marsTexture.height;
    ctx.translate(offsetX, offsetY);
    ctx.fillStyle = marsPattern;
    ctx.fillRect(-offsetX, -offsetY, canvas.width + marsTexture.width, canvas.height + marsTexture.height);
    ctx.restore();
  }

  // TODO: draw buildings, colonists, etc.
}

function updateCamera() {
  const move = gameState.camera.moving;

  if (move.up) gameState.camera.y = Math.max(gameState.camera.y - gameState.camera.speed, gameState.camera.bounds.minY);
  if (move.down) gameState.camera.y = Math.min(gameState.camera.y + gameState.camera.speed, gameState.camera.bounds.maxY);
  if (move.left) gameState.camera.x = Math.max(gameState.camera.x - gameState.camera.speed, gameState.camera.bounds.minX);
  if (move.right) gameState.camera.x = Math.min(gameState.camera.x + gameState.camera.speed, gameState.camera.bounds.maxX);

  drawWorld();
}

window.addEventListener("resize", () => {
  if (gameState.gameStarted) {
    resizeCanvas();
    drawWorld();
  }
});
