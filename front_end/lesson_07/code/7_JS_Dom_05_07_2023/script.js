// С помощью метода getElementById мы получаем ссылку на тот элемент,
// id которого передадим в качестве параметров метода  - однострочный комментарий
/* 
aa
aa  --- многострочный комментарий
aa
aa
*/
// const - константа, переприсваивать зачение запрещено
// let - переменная, переприсваивать зачение можно

let posTop = 0;
let posLeft = 0;
const box = document.getElementById("box");
const t = setInterval(moveRight, 20);

function moveRight() {
    ++posLeft;
  if (posLeft == 149) {
    clearInterval(t);
    t1 = setInterval(moveDown, 20);
    clearInterval(t4);
  }
  box.style.left = posLeft + "px";
}
function moveDown() {
    ++posTop;
  if (posTop == 149) {
    clearInterval(t1);
    t2 = setInterval(moveLeft, 20);

  }

  box.style.top = posTop + "px";
}
function moveLeft() {
    --posLeft;
  if (posLeft == 1) {
    clearInterval(t2);
    t3 = setInterval(moveUp, 20);
  }

  box.style.left = posLeft + "px";
}
function moveUp() {
    --posTop;
  if (posTop == 1) {
    clearInterval(t3);
    t4 = setInterval(moveRight, 20);
  }

  box.style.top = posTop + "px";
}
