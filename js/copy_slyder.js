'use strict';

// получить лого в header, при нажатии - смена back-a
// c btn работать через id
// создать 3 объекта для каждого персонажа, в которых в свойствах бужут храниться все перменные

const PAGES = Object.freeze({
    MAIN: 0,
    DESIGNER: 1,
    ENGINEER: 2,
    TOPMANAGER: 3
});

let currentPage = PAGES.MAIN;

const designer = {
    const designerMainHeader = document.querySelector('.characters_header-top_designer');
    const designerMainText = document.querySelector('.characters_text_designer');
    const designerMainWellImg = document.querySelector('.characters_well-types_designer');
    const designerMainWellText = document.querySelector('.characters_well-types_designer-item');
    const designerMainSpeech = document.querySelector('.designer_speech');
    const designerMainImg = document.querySelector('.designer2');
    const designerMainVideoBack = document.querySelector('.designer_video-back');
}


const mainBackground = document.querySelector('.fullscreen-back');   // back не меняется
const navMenuBtns = document.querySelectorAll('.top-menu_btns');
const indexMainContent = document.querySelector('.main');
const indexCharactersContent = document.querySelector('.characters');
const mainHeader = document.querySelector('.main_header-top');

const engineerMainHeader = document.querySelector('.characters_header-top_engineer');
const topManagerMainHeader = document.querySelector('.characters_header-top_top-manager');

const engineerMainText = document.querySelector('.characters_text_engineer');
const topManagerMainText = document.querySelector('.characters_text_top-manager');

const engineerMainWellImg = document.querySelector('.characters_well-types_engineer');
const topManagerMainWellImg = document.querySelector('.characters_well-types_top-manager');

const engineerMainWellText = document.querySelector('.characters_well-types_engineer-item');
const topManagerMainWellText = document.querySelector('.characters_well-types_top-manager-item');

const engineerMainSpeech = document.querySelector('.engineer_speech');
const topManagerMainSpeech = document.querySelector('.top-manager_speech');

const engineerMainImg = document.querySelector('.engineer2');
const topManagerMainImg = document.querySelector('.top-manager2');

const engineerMainVideoBack = document.querySelector('.engineer_video-back');
const topManagerMainVideoBack = document.querySelector('.top-manager_video-back');

navMenuBtns.forEach(elem => {
    elem.addEventListener('click', handleClick);
})

function handleClick(clickEventBtn) {
    const clickedBtn = clickEventBtn.target;
    const btnText = clickedBtn.textContent;
    mainBackground.style.background = 'rgba(239, 239, 239, 0.9)';  // back
    indexMainContent.style.display = 'none';
    indexCharactersContent.style.display = 'flex';
    // сделать функцию, которая все отключит перед работой --- в конце прописать
    changeSlide(btnText);
}

function changeSlide(btnText) {
    if (btnText === 'Сотрудник проектного института') {

        // здесь можно вызвать функцию, которая будет проверять display none или block - надо ли?

        // затем проверяем какие элементы на странице --- в соответствие с этим подключаем анимации (или прям по отдельности давать анимации или всем кроме выходящего элемента давать анимацию, чтобы убиралось) --- после анимации display block на setTimeOut --- затем подключаем анимацию на появление
        // логика для дизайнера: проверили на display всех, затем сли у кого-то flex, то none + анимация на убирание после этого анимация на появление на timeout (для каждого персонажа свое условие if от текста на кнопке)



        // c помощью for in перебирать объект с персонажем и ставить ему блок или ноне
        engineerMainHeader.style.display = 'none';
        topManagerMainHeader.style.display = 'none';
        designerMainHeader.style.display = 'block';

        engineerMainText.style.display = 'none';
        topManagerMainText.style.display = 'none';
        designerMainText.style.display = 'block';

        engineerMainWellImg.style.display = 'none';
        topManagerMainWellImg.style.display = 'none';
        designerMainWellImg.style.display = 'block';

        engineerMainWellText.style.display = 'none';
        topManagerMainWellText.style.display = 'none';
        designerMainWellText.style.display = 'block';

        engineerMainSpeech.style.display = 'none';
        topManagerMainSpeech.style.display = 'none';
        designerMainSpeech.style.display = 'block';

        engineerMainImg.style.display = 'none';
        topManagerMainImg.style.display = 'none';
        designerMainImg.style.display = 'block';

        engineerMainVideoBack.style.display = 'none';
        topManagerMainVideoBack.style.display = 'none';
        designerMainVideoBack.style.display = 'block';
    } else if (btnText === 'Инженер службы бурения') {
        engineerMainHeader.style.display = 'block';
        topManagerMainHeader.style.display = 'none';
        designerMainHeader.style.display = 'none';

        engineerMainText.style.display = 'block';
        topManagerMainText.style.display = 'none';
        designerMainText.style.display = 'none';

        engineerMainWellImg.style.display = 'block';
        topManagerMainWellImg.style.display = 'none';
        designerMainWellImg.style.display = 'none';

        engineerMainWellText.style.display = 'block';
        topManagerMainWellText.style.display = 'none';
        designerMainWellText.style.display = 'none';

        engineerMainSpeech.style.display = 'block';
        topManagerMainSpeech.style.display = 'none';
        designerMainSpeech.style.display = 'none';

        engineerMainImg.style.display = 'block';
        topManagerMainImg.style.display = 'none';
        designerMainImg.style.display = 'none';

        engineerMainVideoBack.style.display = 'block';
        topManagerMainVideoBack.style.display = 'none';
        designerMainVideoBack.style.display = 'none';
    } else {
        engineerMainHeader.style.display = 'none';
        topManagerMainHeader.style.display = 'block';
        designerMainHeader.style.display = 'none';

        engineerMainText.style.display = 'none';
        topManagerMainText.style.display = 'block';
        designerMainText.style.display = 'none';

        engineerMainWellImg.style.display = 'none';
        topManagerMainWellImg.style.display = 'block';
        designerMainWellImg.style.display = 'none';

        engineerMainWellText.style.display = 'none';
        topManagerMainWellText.style.display = 'block';
        designerMainWellText.style.display = 'none';

        engineerMainSpeech.style.display = 'none';
        topManagerMainSpeech.style.display = 'block';
        designerMainSpeech.style.display = 'none';

        engineerMainImg.style.display = 'none';
        topManagerMainImg.style.display = 'block';
        designerMainImg.style.display = 'none';

        engineerMainVideoBack.style.display = 'none';
        topManagerMainVideoBack.style.display = 'block';
        designerMainVideoBack.style.display = 'none';
    }
}

