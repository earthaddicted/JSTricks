var colors = [
  {style: '#222'},
  {style: '#22a'},
  {style: '#27b'},
  {style: '#ccc'},
  {style: '#001'}
];

// button.onclick = function () {
//
//   root.style.backgroundColor = root.style.backgroundColor === 'red' ? 'black' : 'red';
// };
var counter = 0;
setInterval(function () {
  root.style.backgroundColor = colors[counter].style;
  root.textContent = counter;
  if (counter === colors.length - 1) {
    counter = 0;
  }
  else {
    counter++;
    console.log(colors[counter]);

  }
},1000);
