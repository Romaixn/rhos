<template>
  <div>
    <h1>{{ app.name }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import App from '~/components/app.vue'

@Component
export default class Window extends Vue {
  app: App = new App()
}
</script>

<style>

</style>
