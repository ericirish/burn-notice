<template lang="pug">
v-container.h-screen
  v-row.h-100(
    align="center"
    justify="center"
  )
    v-col.d-flex.flex-column(
      cols="auto"
    )
      .d-flex.align-center.ml-3
        v-text-field.inline-field.flex-shrink-1.flex-grow-0.mr-2(
          variant="plain"
          v-model="people"
          type="number"
          hide-details
          style="width: 3em"
          hide-spin-buttons
          :min="1"
        )
        .text-h5 People

      .d-flex.align-center
        .text-h5
          strong $
        v-text-field.inline-field.flex-shrink-1.flex-grow-0.mr-2(
          variant="plain"
          v-model="rate"
          type="number"
          hide-details
          style="width: 3em"
          hide-spin-buttons
          :min="1"
        )
        .text-h5 Average Bill Rate

      v-btn.mt-6(
        color="orange-darken-1"
        block
        variant="outlined"
        append-icon="mdi-fire"
        @click="startBurn"
      ) Start

  .text-center.text-body-1.mt-auto By <a href="https://github.com/ericirish">Eric Irish</a>
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

<style lang="scss" scoped>
::v-deep .inline-field {
  * input {
    padding-top: 0;
    padding-bottom: 0;
    width: 3em;
    font-size: 24px;
    font-weight: 700;
    text-align: right;
  }
}
</style>
