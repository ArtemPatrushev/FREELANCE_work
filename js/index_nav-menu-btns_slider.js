'use strict';

// получить лого в header, при нажатии - смена back-a
// c btn работать через id

// чтобы анимация скрывалась, надо всем элементам слелать wrapper

const delay = 500;

const PAGES = Object.freeze({
    MAIN: 0,
    DESIGNER: 1,
    ENGINEER: 2,
    TOPMANAGER: 3
});

let currentPage = PAGES.MAIN;

const designer = {
    header: document.querySelector('.characters_header-top_designer'),
    text: document.querySelector('.characters_text_designer'),
    wellImg: document.querySelector('.characters_well-types_designer'),
    sellText: document.querySelector('.characters_well-types_designer-item'),
    speech: document.querySelector('.designer_speech'),
    img: document.querySelector('.designer2'),
    videoBack: document.querySelector('.designer_video-back')
};

const engineer = {
    header: document.querySelector('.characters_header-top_engineer'),
    text: document.querySelector('.characters_text_engineer'),
    wellImg: document.querySelector('.characters_well-types_engineer'),
    wellText: document.querySelector('.characters_well-types_engineer-item'),
    speech: document.querySelector('.engineer_speech'),
    img: document.querySelector('.engineer2'),
    videoBack: document.querySelector('.engineer_video-back')
};

const topManager = {
    header: document.querySelector('.characters_header-top_top-manager'),
    text: document.querySelector('.characters_text_top-manager'),
    wellImg: document.querySelector('.characters_well-types_top-manager'),
    wellText: document.querySelector('.characters_well-types_top-manager-item'),
    speech: document.querySelector('.top-manager_speech'),
    img: document.querySelector('.top-manager2'),
    videoBack: document.querySelector('.top-manager_video-back')
};

const mainPage = {
    headerTop: document.querySelector('.main_header-top'),
    headerBottom: document.querySelector('.main_header-bottom'),
    text: document.querySelector('.main_text'),
    wellsType: document.querySelector('.main_wells'),
    wellTypesLine: document.querySelector('.main_well-types_line'),
    button: document.querySelector('.main_more-info_btn'),
    specificationsText: document.querySelector('.main_more-info_text'),
    personImages: document.querySelector('.main_person-images')
};

const indexMainContent = document.querySelector('.main');
const indexCharactersContent = document.querySelector('.characters');
const mainBackground = document.querySelector('.fullscreen-back');   // back не меняется
const navMenuBtns = document.querySelectorAll('.top-menu_btns');
// const mainHeader = document.querySelector('.main_header-top');


navMenuBtns.forEach(elem => {
    elem.addEventListener('click', handleClick);
})


function handleClick(clickEventBtn) {
    const clickedBtn = clickEventBtn.target;
    const btnId = clickedBtn.id;
    mainBackground.style.background = 'rgba(239, 239, 239, 0.9)';  // back
    
    // сделать функцию, которая все отключит перед работой --- в конце прописать
    changeSlide(btnId);
}

function changeSlide(btnId) {
    if (currentPage === PAGES.MAIN) {     
        mainOff();
    } // дописать дргуие также

    if (btnId === 'designerBtn') {
        designerOn();


        // for (let key in designer) {
        //     designer[key].style.display = 'block';
        // }

        // for (let key in engineer) {
        //     engineer[key].style.display = 'none';
        // }

        // for (let key in topManager) {
        //     topManager[key].style.display = 'none';
        // }

    } else if (btnId === 'engineerBtn') {

        for (let key in designer) {
            designer[key].style.display = 'none';
        }

        for (let key in engineer) {
            engineer[key].style.display = 'block';
        }

        for (let key in topManager) {
            topManager[key].style.display = 'none';
        }

    } else {

        for (let key in designer) {
            designer[key].style.display = 'none';
        }

        for (let key in engineer) {
            engineer[key].style.display = 'none';
        }

        for (let key in topManager) {
            topManager[key].style.display = 'block';
        }
    }
}

function designerOn() {                // черновик
    for (let key in mainPage) {
        mainPage[key].classList.add('slide-out-bottom');
    }
    setTimeout(function () {
        indexMainContent.style.display = 'none';
        indexCharactersContent.style.display = 'flex';
    }, delay);
    for (let key in designer) {
        designer[key].style.display = 'block';
    }
    // for (let key in engineer) {
    //     engineer[key].style.display = 'none';               
    // }
    // for (let key in topManager) {
    //     topManager[key].style.display = 'none';
    // }
    currentPage = PAGES.DESIGNER;
}


function mainOn() {

}

function mainOff() {
    // indexMainContent.style.display = 'none';
    // indexCharactersContent.style.display = 'flex';
}

function designerOn() {
 // на включение тоже setTimeOut, тк на выключении он тоже есть (чтобы не пересеклись)
}

function designerOff() {

}
function engineerOn() {

}

function engineerOff() {

}
function topManagerOn() {

}

function topManagerOff() {

}

// информация о текущей странице - кудв пихать эту переменную, где ее менять?    --- проверяем в changeSlide, меняем на включениях (текущее включение)
// анимация не скрывается за блоком, а едет по всей странице      --- сделать всем wrapper

