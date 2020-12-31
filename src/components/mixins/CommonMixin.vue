<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CommonMixin",
  computed: {
    screen() {
      return this.isMobile() ? 'mobile' : 'desktop';
    },
    flipValue() {
      return this.getMembersCount();
    },
  },
  methods: {
    ...mapActions(['setOpenAuthWindowState', 'setIsOpenPopupReadiness', 'setMembersCount', 'setMembersCountCookie']),
    ...mapGetters(['getReadyPercent', 'getMembersCount', 'getMembersCountCookie']),
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
    changeFlipValue() {
      const mcCookie = this.getMembersCountCookie();
      if (!this.isFlipValue) {
        this.isFlipValue = true;
        const newValue = this.flipValue + 1;
        if (mcCookie && (parseInt(mcCookie) >= this.flipValue)) {
          /* Если не менялось кол-во участников, перелистывать не нужно */
        } else {
          /* Если в Бд добавилось кол-во уч-ов, то нужно их обновить */
          this.setMembersCount(newValue);
          this.setMembersCountCookie(newValue);
        }
      }
    }
  }
}
</script>