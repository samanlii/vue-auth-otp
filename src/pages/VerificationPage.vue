<template>
  <q-page class="flex flex-center q-pa-md">
    <q-form v-model="modelValue" @submit.prevent="verifyOtp">
      <div class="q-pa-xl column items-center shadow-6 border">
        <q-input v-model="otpCode" label="کد را وارد کنید" maxlength="5" outlined />
        <q-btn
          type="submit"
          label="تایید"
          color="primary"
          padding="xs lg"
          class="full-width q-ma-md"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const modelValue = defineModel()
const otpCode = ref('')

function verifyOtp() {
  if (otpCode.value.length !== 5) {
    alert('کد باید ۵ رقمی باشد')
    return
  }

  console.log('کد وارد شده:', otpCode.value)
  alert('کد تایید شد')
}
</script>
