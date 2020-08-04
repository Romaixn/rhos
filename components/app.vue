<template>
  <div>
    <h1>{{ name }}</h1>
    <p>Content</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class App extends Vue {
  name: string = 'App'
}
</script>

<style>

</style>
