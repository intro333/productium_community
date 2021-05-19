
<script>
export default {
  name: "LocaleMixin",
  methods: {
    changeLocale(locale) {
      this.$root.$i18n.locale = locale;
    },
    isRussianLocale() {
      console.log('locale', this.$root.$i18n.locale);
      return this.$root.$i18n.locale === 'ru';
    },
  }
}
</script>