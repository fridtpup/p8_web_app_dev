    const menuBtn = document.querySelector('#menu');
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const listEl = document.querySelector('.mdc-drawer .mdc-list');
    const mainContentEl = document.querySelector('.main-content');

    menuBtn.addEventListener('click', () => {
        drawer.open = true;
    })

    listEl.addEventListener('click', (event) => {
        drawer.open = false;
    });

    document.body.addEventListener('MDCDrawer:closed', () => {
    mainContentEl.querySelector('input, button').focus();
    });