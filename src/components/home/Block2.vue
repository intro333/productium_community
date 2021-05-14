<template>
  <div>
    <div :class="['content-base-box']">
      <div :class="['content-base', 'home-block2']" id="homeBlock2">
        <div class="header-left-box">
          <span class="header-left-big header-left-big2">we have a problem</span>
          <span class="header-left-little">{{ $t("block2.problem") }}</span>
        </div>
        <div id="aboutProject"
             class="problem-video-box content-hide-mobile">
          <ProblemSolveText :action="openProductium" />
          <ProblemVideo width="540" height="538" />
        </div>
      </div>
    </div>
    <div id="aboutProject2"
         class="content-hide-desktop">
      <ProblemVideo width="375" height="360" />
      <div :class="['content-base-box']">
        <div :class="['content-base', 'home-block2']">
          <ProblemSolveText :action="openProductium" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from "@/components/mixins/CommonMixin";
import ProblemVideo from "@/components/includes/ProblemVideo";
import ProblemSolveText from "@/components/includes/ProblemSolveText";

export default {
  name: "Block2",
  mixins: [CommonMixin],
  components: {
    ProblemVideo,
    ProblemSolveText
  }
}
</script>