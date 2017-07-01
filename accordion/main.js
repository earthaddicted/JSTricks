var titles = document.querySelectorAll('.accordion-title');

function initAccordion(accClass) {
    titles.forEach(function (elem, index, array) {
        var newClassesActive, innerNewClasses;
        elem.addEventListener('click', function () {
            var classesArr = elem.getAttribute('class').split(' ');
            var activeIndex = classesArr.indexOf(accClass);
            // remove class active for all
            array.forEach(function (innerElem) {
                var innerClassesArr = innerElem.getAttribute('class').split(' ');
                var innerActiveIndex = innerClassesArr.indexOf(accClass);
                if (innerActiveIndex !== -1) {
                    innerClassesArr.splice(innerActiveIndex, 1);
                    setNewClasses(innerNewClasses, innerClassesArr, innerElem);
                }
            });
            // add class active for elem
            if (activeIndex === -1) {
                classesArr.push(accClass);
                setNewClasses(newClassesActive, classesArr, elem);
            }
        });
    });

    function setNewClasses(newClasses, array, element) {
        newClasses = array.join(' ');
        element.setAttribute('class', newClasses);
    }
}
initAccordion('active');
