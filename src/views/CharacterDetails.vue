<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useCharacters from '@/composables/useCharacters'

const route = useRoute()
const { fetchCharacter, currentCharacter } = useCharacters()

onMounted(async () => {
  await fetchCharacter(route.params.id)
})

onUnmounted(() => {
  currentCharacter.value = null
})
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700 py-8 text-white"
  >
    <div
      v-if="currentCharacter"
      class="flex flex-col items-center justify-center gap-6"
    >
      <img :src="currentCharacter.data.imageUrl" :alt="currentCharacter.name" />
      <h1 class="text-white-800 text-6xl font-bold">
        Hi, I'm {{ currentCharacter.data.name }}
      </h1>
      <pre>{{ currentCharacter }}</pre>
    </div>
  </main>
</template>
