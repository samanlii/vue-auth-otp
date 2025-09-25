<template>
  <q-page class="flex flex-center q-pa-md">
    <q-form v-model="modelValue" @submit.prevent="verifyOtp">
      <div class="q-pa-xl column items-center shadow-6 border">
        <div class="q-mb-md">کد ارسال شده به {{ authStore.phone }} را وارد کنید</div>
        <q-input
          v-model="otpCode"
          label="کد را وارد کنید"
          maxlength="5"
          outlined
          :error="!!errorMessage"
          :error-message="errorMessage"
        />
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
import { useAuthStore } from '../stores/auth'

const modelValue = defineModel()
const otpCode = ref('')
const errorMessage = ref('')
const authStore = useAuthStore()

function verifyOtp() {
  if (otpCode.value !== String(authStore.otp)) {
    errorMessage.value = 'کد اشتباه است'
    return
  }

  errorMessage.value = ''
  alert('ورود موفقیت‌آمیز ✅')
}
</script>
