<template lang="pug">
v-container.h-screen
  v-row.h-100(
    align="center"
    justify="center"
  )
    v-col(
      cols="auto"
    )
      .text-h2.text-md-h1 {{ $dayjs.duration(totalSeconds, 'seconds').format('HH:mm:ss')}}
      .text-h2.text-md-h1 ${{ (formatNumber(Math.floor(bill), 7)) }}

      .d-flex.mt-8
        v-btn.mx-auto(
          icon="mdi-square"
          variant="outlined"
          size="small"
          @click="stop()"
        )
</template>

<script setup>
const { query } = useRoute()
let intervalId = null

const timeSeconds = ref(0)
const totalSeconds = ref(0)
const bill = ref(0)

onMounted(() => {
  intervalId = setInterval(() => {
    timeSeconds.value++
    totalSeconds.value = timeSeconds.value * query.people
    bill.value = (totalSeconds.value / 3600) * query.rate
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

function formatNumber (number, pad = 3) {
  return number.toString().padStart(pad, '0')
}

function stop () {
  navigateTo({ name: 'done', query: { people: query.people, rate: query.rate, seconds: timeSeconds.value } })
}
</script>

<style lang="scss" scoped></style>
