<template>
  <q-page class="flex flex-center">
    <div>
      <h1>Dashboard</h1>
      <div>Current Gold: {{ gold }}</div>
    </div>
  </q-page>
</template>
  
<script>
import { useGoldStore } from 'stores/goldStore'
import { mapState } from 'pinia'

export default {
  name: 'DashboardPage',
  data () {
    return {
      intervalId: null
    }
  },
  computed: {
    ...mapState(useGoldStore, ['gold'])
  },
  mounted () {
    const goldStore = useGoldStore ()
    this.useGoldStore = goldStore
    startGameLoop (this)
  },
  beforeUnmount () {
    stopGameLoop (this)
  }
}

function startGameLoop (context) {
  context.intervalId = setInterval(() => {
    context.useGoldStore.addGold(10)
  }, 1000)
}

function stopGameLoop (context) {
  if (context.intervalId !== null) {
    clearInterval(context.intervalId)
  }
}
</script>
  
<style scoped>

</style>
  