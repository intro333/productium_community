<script>
import {mapActions} from "vuex";

export default {
  name: "CommonMixin",
  computed: {
    screen() {
      return this.isMobile() ? 'mobile' : 'desktop';
    }
  },
  methods: {
    ...mapActions(['setOpenAuthWindowState', 'setIsOpenPopupReadiness']),
    isMobile() {
      return this.$device.mobile;
      // return this.$device.mobile || this.$device.ipad;
    },
    bodyLock(isOpen) {
      // if (this.isMobile()) {
      //   const pHome = document.getElementById('pHome');
      //   if (pHome) {
      //     if (isOpen) { /* Залочить body */
      //       pHome.classList.add("modal-open-mobile");
      //     } else { /* Разлочить body */
      //       pHome.classList.remove("modal-open-mobile");
      //       window.scrollTo( 0, this.pageYOffset );
      //     }
      //   }
      // } else {
        if (isOpen) { /* Залочить body */
          document.body.classList.add("modal-open");
        } else { /* Разлочить body */
          document.body.classList.remove("modal-open");
        }
      // }

    },
    scrollToBlock(_id, ) {
      const block = document.getElementById(_id);
      if (block) {
        block.scrollIntoView({
          behavior: 'smooth',
          // block: 'center'
        });
      }
    },
    openProductium() {
      window.open('http://productium.org/', '_blank');
    },
  }
}
</script>