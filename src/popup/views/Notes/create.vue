<template>
  <div>
    <Header class="bg-black-400">
      <template v-slot:content>
        <VIcon class="c-pointer" name="arrow-left" @click="$router.back()" />
        <div class="d-flex flex-auto flex-items-center ml-4">
          <div class="new-logo">
            <VIcon name="logo-simple" height="40px" width="40px" />
          </div>
          <span class="fw-bold h5 ml-2">New</span>
        </div>
        <div>
          <VIcon class="c-pointer trash" name="trash" />
          <VIcon class="c-pointer ml-3" name="cogs" />
        </div>
      </template>
    </Header>
    <div class="scroll">
      <FormRowText :value="detail.title" title="title" :show-icons="false">
        <template v-slot:second-icon>
          <div />
        </template>
      </FormRowText>

      <div class="mb-7">
        <VTextArea :value="detail.note" label="Note" name="note" disabled />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    detail() {
      return this.$store.state.Notes.detail
    }
  }
}
</script>

<style lang="scss">
.trash {
  color: $color-danger;
}

.new-logo {
  background-color: $color-gray-400;
  border-radius: 8px;
}
</style>
