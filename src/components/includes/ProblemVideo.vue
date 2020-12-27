<template>
  <div class="problem-video-right">
    <iframe width="560" height="315"
            src="https://www.youtube.com/embed/2DsDvnzlICE"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
<!--    <video :width="width" :height="height"-->
<!--           controls="controls" poster="/video/videoPoster.png">-->
<!--      <source src="/video/productView.mp4">-->
<!--    </video>-->
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

<!-- https://support.google.com/youtube/answer/171780 -->