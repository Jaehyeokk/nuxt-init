export default {
  data() {
    return {
      bodyScrollTop: 0,
    };
  },

  methods: {
    // 스크롤 비활성화
    disableBodyScroll() {
      const body = document.querySelector('body');
      this.bodyScrollTop = window.pageYOffset;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${this.bodyScrollTop}px`;
      body.style.width = '100%';
    },
    // 스크롤 활성화
    enableBodyScroll() {
      const body = document.querySelector('body');
      body.style.removeProperty('overflow');
      body.style.removeProperty('position');
      body.style.removeProperty('top');
      body.style.removeProperty('width');
      window.scrollTo(0, this.bodyScrollTop);
    },
  },
};
