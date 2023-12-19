<template lang="pug">
v-container.h-screen
  v-row.h-100(
    align="center"
    justify="center"
  )
    v-col(
      cols="6"
      md="5"
      lg="3"
    )
      v-row(
        no-gutters
      )
        v-col.mr-3
          .text-h5.text-right.flex-1-0 <strong>{{ query.people }}</strong>
        v-col
          .text-h5.flex-1-0 People
      v-row(
        no-gutters
      )
        v-col.mr-3
          .text-h5.text-right.flex-1-0 <strong>${{ query.rate }}</strong>
        v-col
          .text-h5.flex-1-0 Hourly Rate
      v-row(
        no-gutters
      )
        v-col.mr-3
          .text-h5.text-right.flex-1-0 <strong>{{ $dayjs.duration(query.seconds, 'seconds').asMinutes().toPrecision(2) }}</strong>
        v-col
          .text-h5.flex-1-0 Minutes

      .text-center.mt-4.mb-4
        v-icon(
          color="orange"
        ) mdi-fire

      .text-center
        .text-h4
          strong ${{ (((query.seconds * query.people) / 3600) * query.rate).toFixed(1) }}
        .text-h4 <strong>{{ $dayjs.duration(query.seconds * query.people, 'seconds').asHours().toFixed(1) }}</strong> Hours

      .text-center.mt-12
        v-btn(
          size="small"
          variant="outlined"
          icon="mdi-refresh"
          to="/"
        )
</template>

<script setup>
const { query } = useRoute()
</script>

<style lang="scss" scoped></style>
