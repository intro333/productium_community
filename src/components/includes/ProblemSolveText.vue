<template>
  <div class="problem-video-left-box">
    <span class="problem-video-title">Productium</span>
    <span class="problem-video-text">решает все эти проблемы и дает возможность легко обсуждать дизайн, формировать задачи и идеи с клиентом либо командой, онлайн либо офлайн</span>
    <div @click="action && action()"
         class="problem-beta-box">
      <span class="problem-beta-text">Бета-версия</span>
      <div class="problem-beta-img"></div>
<!--      <img src="@/assets/img/home/arrowLine.svg"-->
<!--           class="problem-beta-img"-->
<!--           alt="">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "ProblemSolveText",
  props: {
    action: Function
  }
}
</script>