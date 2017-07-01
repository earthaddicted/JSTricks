initAccordion('accordion', 'accordion-title', 'active');

function initAccordion(parentClass, titleClass, accClass) {
  var mainArr = document.querySelectorAll('.' + parentClass);

  mainArr.forEach(function (mainElem) {
    mainElem.addEventListener('click', function (e) {
      var titlesArr = mainElem.querySelectorAll('.' + titleClass);
      var innerNewClassesArr, newThatClassesArr;
      var that = e.target;

      // if click on title  - begin
      if (that.className.indexOf(titleClass) !== -1) {
        var thatClassesArr = that.className.split(' ');
        var thatIndexActive= thatClassesArr.indexOf(accClass);
        // if elem-target has class active - remove it
        if (thatIndexActive !== -1) {
          thatClassesArr.splice(thatIndexActive, 1);
        }
        else {
          // remove class active for all
          titlesArr.forEach(function (elem, index, array) {
            var classArr = elem.className.split(' ');
            var indexElActive = classArr.indexOf(accClass);
            if (indexElActive !== -1) {
              classArr.splice(indexElActive, 1);
              setNewClasses(innerNewClassesArr, classArr, elem);
            }
          });
          thatClassesArr.push(accClass);
        }
        //add class active elem-target
        setNewClasses(newThatClassesArr, thatClassesArr, that);
      }
    });
  })

  function setNewClasses(newClasses, array, element) {
    newClasses = array.join(' ');
    element.setAttribute('class', newClasses);
  }
}

