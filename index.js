let leftBoneco = 40;
let rightObstaculo = -30;
let passo = 5;
const forRight = 39;
const forLeft = 37;
const Jump = 38;
function pula() {
  let boneco = document.getElementById("boneco");
  let obstaculo = document.getElementById("obstaculo");
  let cenario = document.querySelector("#cenario");
  switch (event.keyCode) {
    case Jump:
      boneco.style.animationName = "pulo";
      setTimeout(
        () => (document.getElementById("boneco").style.animationName = "none"),
        1000
      );
      break;
    case forRight:
      // leftBoneco += passo;
      // boneco.style.left = `${leftBoneco}px`;
      rightObstaculo += passo;
      obstaculo.style.right = `${rightObstaculo}px`;
      // let novo = document.createElement("div");
      // novo.id = "obstaculo";
      // cenario.append(novo);
      // console.log(cenario, obstaculo);
      break;
    case forLeft:
      // leftBoneco -= passo;
      // boneco.style.left = `${leftBoneco}px`;
      rightObstaculo -= passo;
      obstaculo.style.right = `${rightObstaculo}px`;
      break;
  }
}
document.addEventListener("keydown", pula);
