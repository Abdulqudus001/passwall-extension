<template>
  <div class="container">
    <div class="mx-3">
      <div class="py-3 head">
        <span class="fw-bold h5">Emails</span>
      </div>

      <EmptyState v-if="items.length <= 0" />

      <ul class="items" v-else>
        <ListItem
          v-for="item in items"
          :key="item.id"
          :url="item.title"
          :title="item.title"
          :subtitle="item.email"
          @click="clickItem(item.id)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('Emails', ['items'])
  },
  methods: {
    clickItem(id) {
      this.$store.dispatch('Emails/setDetail', id)
      this.$router.push({ name: 'EmailDetail', params: { id } })
    }
  }
}
</script>

<style scoped lang="scss"></style>
