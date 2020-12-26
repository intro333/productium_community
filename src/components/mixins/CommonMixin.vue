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
      return this.$device.mobile || this.$device.ipad;
    },
  }
}
</script>