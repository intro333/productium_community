<template>
  <div :class="['content-base-box',
                'scrollbar-hidden block-scroll-container']"
       id="homeBlock5">
    <div :class="['content-base', 'home-full-video']">
      <video id="video2"
             :height="625"
             loop
             autoplay
             muted
      >
        <source src="https://a.slack-edge.com/e0d52/marketing/img/integrations-lp/slack-integrations-gdrive.mp4"
                type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockFullVideo",

}
</script>
