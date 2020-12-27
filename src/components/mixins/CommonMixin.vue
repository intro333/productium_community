<script>
export default {
  name: "CommonMixin",
  computed: {
    screen() {
      return this.isMobile() ? 'mobile' : 'desktop';
    }
  },
  methods: {
    isMobile() {
      return this.$device.mobile;
      // return this.$device.mobile || this.$device.ipad;
    },
    bodyLock(isOpen) {
      const pHome = document.getElementById('pHome');
      if (pHome) {
        if (isOpen) { /* Залочить body */
          pHome.classList.add("modal-open");
          if (this.isMobile()) {
            pHome.classList.add("modal-open-mobile");
          }
        } else { /* Разлочить body */
          pHome.classList.remove("modal-open");
          if (this.isMobile()) {
            pHome.classList.remove("modal-open-mobile");
            window.scrollTo( 0, this.pageYOffset );
          }
        }
      }
    },
  }
}
</script>