<template>
  <a class="inf-link"
     :href="`mailto:${emailInfo}`">info@productium.org</a>
</template>

<script>
export default {
  name: "MailtoHref",
  data: () => ({
    emailInfo: 'info@productium.org',
  }),
}
</script>
