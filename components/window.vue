<template>
  <div>
    <app :app="app" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Application } from '@/core'

@Component
export default class Window extends Vue {
  @Prop({ type: Object, required: true }) readonly app!: Application
}
</script>

<style>

</style>
