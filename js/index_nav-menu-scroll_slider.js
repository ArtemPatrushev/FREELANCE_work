'use strict';

// при скроле, если курсор на персонаже, то диалоговое окно остается на экране // наверно, не получио его в объекты персонажей, поэтому не ставится none

let isScrolling = false;

window.onwheel = function (event) {
    let delta = event.deltaY;
    if (Math.abs(delta) > 70 && !isScrolling) {
        isScrolling = true;

        setTimeout(function () {
            isScrolling = false;
        }, 300);

        if (delta > 0)
            toNextSlide();
        else
            toPrevSlide();
    }
}

function toNextSlide() {
    if (currentPage === PAGES.MAIN) {
        mainOff();
        designerOn();
    } else if (currentPage === PAGES.DESIGNER) {
        designerOff();
        engineerOn();
    } else if (currentPage === PAGES.ENGINEER) {
        engineerOff();
        topManagerOn();
    }
    // else if (currentPage === PAGES.TOPMANAGER) {
    //     topManagerOff();
    //     mainOn()
    // }
}

function toPrevSlide() {
    // if (currentPage === PAGES.MAIN) {
    //     mainOff();
    //     topManagerOn();
    // } 
    if (currentPage === PAGES.DESIGNER) {
        designerOff();
        mainOn()
    } else if (currentPage === PAGES.ENGINEER) {
        engineerOff();
        designerOn();
    } else if (currentPage === PAGES.TOPMANAGER) {
        topManagerOff();
        engineerOn();
    }
}