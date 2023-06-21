
export { sum, addProduct };

function ordinarySum(x, y) {
  return x + y;
}

function cur(f) {
  return function (x) {
    return function (y) {
      return f(x, y);
    };
  };
}
const sum = cur(ordinarySum);

// const COLORS = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// const DATA = {};
//
// const BODY = document.getElementsByTagName('body');
// const PARAGRAPHS = document.querySelectorAll("[id *= 'text']");
//
// for (let i = 1; i <= PARAGRAPHS.length; i++) {
//   DATA['text' + i] = [-1, PARAGRAPHS[i - 1]];
// }
//
// function changeTextColor(event) {
//   const targetParagraph = event.target;
//
//   if (DATA[targetParagraph.id]) {
//     DATA[targetParagraph.id][0] += 1;
//     targetParagraph.style.color = COLORS[DATA[targetParagraph.id][0]];
//     if (DATA[targetParagraph.id][0] === COLORS.length - 1) {
//       DATA[targetParagraph.id][0] = -1;
//     }
//   }
// }
// BODY[0].addEventListener('click', (event) => {
//   changeTextColor(event);
// });


function addProduct(name, price) {
  const productNameRegexNoSpace = /^\S*$/gi;

  if (!productNameRegexNoSpace.test(name)) {
    return false;
  }
  return typeof price === 'number';
}