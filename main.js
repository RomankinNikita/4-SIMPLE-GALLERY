let timeCount = 3;
let pageNumber = 0;
let timer;

const stopTimerBtn = document.querySelector('#stop');
const playTimerBtn = document.querySelector('#play');
const prevPageBtn = document.querySelector('#prev');
const nextPageBtn = document.querySelector('#next');
const pages = document.querySelectorAll('.page');
let page = document.querySelector('.active');

const switchPage = (mod) => {
  clearTimeout(timer);
  page.classList.remove('active');
  pageNumber = mod === 1 ? pageNumber + 1 : mod === -1 ? pageNumber - 1 : 0;
  page = pages[pageNumber];
  page.classList.add('active');
  timeCount = 3;
  setTimeBackCount();
};

const setTimeBackCount = () => {
  page.textContent = `${pageNumber + 1} page (${timeCount})`
  timeCount--;
  if (timeCount < 0) {
    if (pageNumber < pages.length - 1) {
      switchPage(1);
    } else {
      let isRestart = confirm('Продолжить пролистывание?');
      if (isRestart) {
        switchPage(0);
      } else {
        window.close();
      }

    }
  } else {
    timer = setTimeout(setTimeBackCount, 1000);
  }
};
setTimeBackCount();

stopTimerBtn.onclick = () => {
  clearTimeout(timer);
};
playTimerBtn.onclick = () => {
  setTimeBackCount();
};
prevPageBtn.onclick = () => {
  if (pageNumber > 0) {
    clearTimeout(timer);
    page.classList.remove('active');
    pageNumber = pageNumber - 1;
    page = pages[pageNumber];
    page.classList.add('active');
    timeCount = 3;
    setTimeBackCount();
  }
}
nextPageBtn.onclick = () => {
  if (pageNumber < pages.length - 1) {
    clearTimeout(timer);
    page.classList.remove('active');
    pageNumber = pageNumber + 1;
    page = pages[pageNumber];
    page.classList.add('active');
    timeCount = 3;
    setTimeBackCount();
  }
}