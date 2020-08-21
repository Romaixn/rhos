<template>
  <div class="rhos">
    <div class="rhos-content">
      <Nuxt />
      <ActivityBar />
    </div>
  </div>
</template>

<script>
import ActivityBar from '@/layouts/activity'

export default {
  components: {
    ActivityBar
  }
}
</script>

<style>
.rhos {
  height: 100%;
}

.rhos-content {
  height: 100%;
  display: grid;
  grid-template-areas: "desktop" "activitybar";
  grid-template-rows: calc(100% - 3rem) 3rem;
}
</style>
