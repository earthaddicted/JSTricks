/*
 * TASK 2
 * Сделайте класс, который будет иметь метод topStyle
 * метод topStyle принимает объект с CSS стилями и добавляет в <head>
 *   новый элемент с данными стилями
 *
 *
 * */
// .topStyle('fetch', {backgroundColor:'blue'});

class StyleService {
  topStyle(elemSelector, styles) {
    let head = document.querySelector('head');
    let styleTag = document.createElement('style');
    styleTag.innerHTML = "." + elemSelector + "{";
    head.appendChild(styleTag);
    for (var key in styles) {
      var keyArr = key.split('');
      var newArr = keyArr.map(elem => {
        var hasUpLetter = /[A-Z]/.test(elem);
        return hasUpLetter ? "-" + elem.toLowerCase() : elem;
      });
      newArr = newArr.join('');
      styleTag.innerHTML += `${newArr}:${styles[key]};`;

    }
    styleTag.innerHTML += '}'

  }
}
const styleService = new StyleService();
styleService.topStyle('fetch', {backgroundColor: 'blue', marginTop: '40px'});
