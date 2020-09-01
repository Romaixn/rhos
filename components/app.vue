<template>
  <div>
    <h1>{{ app }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Application } from '@/core/applications'

@Component
export default class App extends Vue {
  @Prop({ type: Object, required: true }) readonly app!: Application
}
</script>

<style>

</style>
