import '../scss/main.scss';
(() => {
  class MatchMedia {
    constructor(root, options) {
      const o = {
        breakPoint: 767
      }

      Object.assign(o, options);

      this.root = root;
      this.text = document.querySelector('.text');
      this.breakPoint = window.matchMedia('(max-width: ' + o.breakPoint + 'px)');

      this.breakPoint.addListener(() => {
        this.checkBreakPoint(this.breakPoint)
      });
      this.init();
    }

    init() {
      this.checkBreakPoint(this.breakPoint)
    }

    checkBreakPoint(breakPoint) {
      if (breakPoint.matches) {
        this.root.classList.add('is-narrow');
        this.text.innerHTML = 'Narrow';
        return;
      }
      this.root.classList.remove('is-narrow');
      this.text.innerHTML = 'Wide';
    }
  }

  new MatchMedia(document.querySelector('body'));
})();