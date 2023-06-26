export { sum, changeTextColor, colors, data, paragraphs, body };


const sum = (param1) => {
  if (param1 !== undefined) {
    return (param2) => {
      if (param2 !== undefined) {
        return param1 + param2;
      } else {
        console.log("Invalid input data")
      }
    }
  } else {
    console.log("Invalid input data")
  }
}


const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const data = {};

const body = document.getElementsByTagName('body');
const paragraphs = document.querySelectorAll("[id *= 'text']");

for (let i = 1; i <= paragraphs.length; i++) {
  data['text' + i] = [-1, paragraphs[i - 1]];
}

function changeTextColor(event) {
  const targetParagraph = event.target;

  if (data[targetParagraph.id]) {
    data[targetParagraph.id][0] += 1;
    targetParagraph.style.color = colors[data[targetParagraph.id][0]];
    if (data[targetParagraph.id][0] === colors.length - 1) {
      data[targetParagraph.id][0] = -1;
    }
  }
}
body[0].addEventListener('click', (event) => {
  changeTextColor(event);
});
