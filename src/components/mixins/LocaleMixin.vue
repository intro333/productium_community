
<script>
export default {
  name: "LocaleMixin",
  methods: {
    changeLocale(locale) {
      this.$root.$i18n.locale = locale;
    },
    isRussianLocale() {
      return this.$root.$i18n.locale === 'ru';
    },
  }
}
</script>