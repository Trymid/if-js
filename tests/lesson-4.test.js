import { sum } from '../src/scripts/lesson-4';

test("When the 'sum' function is run", () => {
  const getRandomNumber = () => {
    return Math.trunc(Math.random() * 100000);
  };

  const firstArgument = getRandomNumber();
  const secondArgument = getRandomNumber();
  const summockFunc = firstArgument + secondArgument;
  console.log(firstArgument, secondArgument, summockFunc);

  expect(firstArgument).toBeDefined();
  expect(firstArgument).not.toBeNull();
  expect(secondArgument).toBeDefined();
  expect(secondArgument).not.toBeNull();
  expect(sum(firstArgument)(secondArgument)).toBe(summockFunc);
});

test("The function changes the color of the 'p' element in accordance with the given order from the array of colors", () => {
  document.body.innerHTML = `<p id="text1">Text 1</p>
                             <p id="text2">Text 2</p>
                             <p id="text3">Text 3</p>`;

  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
  const data = {};

  const body = document.getElementsByTagName('body');
  const paragraphs = document.querySelectorAll("[id *= 'text']");

  for (let i = 1; i <= paragraphs.length; i++) {
    data['text' + i] = [-1, paragraphs[i - 1]];
  }

  function changeTextColor(event) {
    mockFunc();
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

  const mockFunc = jest.fn();

  paragraphs[0].click();
  paragraphs[0].click();
  paragraphs[0].click();
  paragraphs[0].click();
  paragraphs[0].click();
  paragraphs[0].click();

  paragraphs[1].click();
  paragraphs[1].click();

  paragraphs[2].click();

  expect(paragraphs).toBeDefined();
  expect(paragraphs).not.toBeNull();
  expect(colors).toBeDefined();
  expect(data).toBeDefined();
  expect(paragraphs[0].style.color).toBe('magenta');
  expect(paragraphs[1].style.color).toBe('cyan');
  expect(paragraphs[2].style.color).toBe('magenta');
  expect(mockFunc).toHaveBeenCalledTimes(9);
});
