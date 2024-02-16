<template>
  <div class="flex items-center justify-end gap-3 mt-5">
    <AppButton @click="resetContent()" :disabled="props.isLoading" htmlType="reset" type="secondary"
      >Cancel</AppButton
    >
    <AppButton htmlType="submit" type="primary" :disabled="props.isLoading">
      <template v-if="!props.isLoading"> Submit </template>
      <v-icon name="pr-spinner" animation="spin" scale="1.5" v-else />
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
const props = defineProps(['resetContent', 'isLoading'])
</script>
