<template>
  <div>
    <h1>Coucou</h1>
    {{ apps }}
  </div>
</template>

<script>
export default {
  name: 'Desktop',
  async asyncData ({ $content }) {
    const { apps } = await $content.fetch()
    return { apps }
  }
}
</script>

<style>

</style>
