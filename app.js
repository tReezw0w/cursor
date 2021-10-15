let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = y.clientY;

    console.log(x, y)

}