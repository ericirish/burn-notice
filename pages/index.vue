<template lang="pug">
v-container
  v-row.h-screen(
    align="center"
    justify="center"
  )
    v-col(
      cols="auto"
    )
      .text-h5 &nbsp;<strong>{{ formatNumber(people) }}</strong> People
      .text-h5 <strong>${{ formatNumber(rate) }}</strong> Average Bill Rate

      v-btn.mt-6(
        color="orange-darken-1"
        block
        variant="outlined"
        append-icon="mdi-fire"
        @click="startBurn"
      ) Start
</template>

<script setup>
const people = ref(2)
const rate = ref(100)

function formatNumber (number) {
  return number.toString().padStart(3, '0')
}

function startBurn () {
  navigateTo({ name: 'burn', query: { people: people.value, rate: rate.value } })
}
</script>

<style lang="scss" scoped></style>
