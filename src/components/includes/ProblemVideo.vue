<template>
  <div class="problem-video-right">
    <video :width="width" :height="height"
           controls="controls" poster="/video/videoPoster.png">
      <source src="/video/productView.mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: "ProblemVideo",
  props: {
    width: String,
    height: String,
  }
}
</script>