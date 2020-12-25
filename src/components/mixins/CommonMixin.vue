<script>
export default {
  name: "CommonMixin",
  methods: {
    isMobile() {
      return this.$device.mobile || this.$device.ipad;
    },
  }
}
</script>