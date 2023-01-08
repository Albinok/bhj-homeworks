const menuLink = Array.from(document.getElementsByClassName('menu__link'));
let openElemMenu;

menuLink.forEach(element => {
  element.onclick = () => {
    let elemMenu = element.closest('.menu__item').querySelector(".menu .menu_sub");

    if (elemMenu) {
      if (openElemMenu !== undefined && openElemMenu !== elemMenu) {
        openElemMenu.className = "menu menu_sub";
      }

      elemMenu.className += ' menu_active';
      openElemMenu = elemMenu;

      return false;
    }
  }    
})