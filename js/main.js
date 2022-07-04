//scroll motion
const header = document.querySelector('header');
const visual = document.querySelector('.visual');

window.addEventListener('scroll', (e) => {
  let scrollY = this.scrollY;
  //header
  if (scrollY > 0) {
    header.classList.add('on');
  } else {
    header.classList.remove('on');
  }
})
window.addEventListener('load', (e) => {
  visual.classList.add('on');
})




  let scrollBody = document.querySelector('.visual');
  let maskLeft = scrollBody.querySelector('.left_box');
  let maskRight = scrollBody.querySelector('.right_box');


  let scrollHeight;
  let sectionOffsetTop;
  let sectionScrolTop;
  let scrollRealHeight;
  let winScrollTop;
  let scrollPerecnt;
  let percent;

  function changeOverlap() {

    setProperty();
    motionRender();
  };

  function setProperty() {

    scrollHeight = scrollBody.offsetHeight;
    winScrollTop = window.pageYOffset;
    sectionOffsetTop = scrollBody.getBoundingClientRect().top + window.pageYOffset;
    scrollRealHeight = (scrollHeight - window.innerHeight);
    sectionScrolTop = winScrollTop - sectionOffsetTop;
    scrollPerecnt = sectionScrolTop / scrollRealHeight;
    percent = scrollPerecnt * 100;
  };

  function motionRender() {

    let maskStartValue = 50;
    let maskEndValue = 0;
    let maskVal = Math.max(maskEndValue, maskStartValue - (scrollPerecnt * maskStartValue));
    maskLeft.style.width = maskVal + '%'
    maskRight.style.width = maskVal + '%';
  };

  function init() {
    changeOverlap();
    bindEvent();
  };

  function bindEvent() {
    window.addEventListener('scroll', function () {
      changeOverlap();
    });

    window.addEventListener('resize', function () {
      changeOverlap();
    });

  };

  if (Modernizr.csspositionsticky) {
    init();
  };

