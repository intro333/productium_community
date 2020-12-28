<template>
  <div>
    <div :class="['content-base-box']">
      <div :class="['content-base', 'home-block2']" id="homeBlock2">
        <div class="header-left-box">
          <span class="header-left-big">we have a problem</span>
          <span class="header-left-little">устал от кучи скриншотов с правками, метками и постоянным вопросом как это систематизировать?</span>
        </div>
        <div class="problem-video-box content-hide-mobile">
          <ProblemSolveText />
          <ProblemVideo width="540" height="538" />
        </div>
      </div>
    </div>
    <div class="content-hide-desktop">
      <ProblemVideo width="375" height="360" />
      <div :class="['content-base-box']">
        <div :class="['content-base', 'home-block2']">
          <ProblemSolveText />
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