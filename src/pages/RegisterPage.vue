<template>
  <q-page class="flex flex-center q-pa-md">
    <q-form @submit.prevent="register">
      <div class="q-pa-xl column items-center shadow-6 border">
        <q-input
          prefix="+98"
          outlined
          v-model="phone"
          label="شماره تماس"
          :error="!!errorMessage"
          :error-message="errorMessage"
        />
        <q-btn
          type="submit"
          label="دریافت کد"
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
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const phone = ref('')
const authStore = useAuthStore()
const errorMessage = ref('')
const router = useRouter()

function iranValidPhone(num) {
  if (!num) return false
  return /^09\d{9}$/.test(num) || /^9\d{9}$/.test(num)
}
function register() {
  if (!iranValidPhone(phone.value)) {
    errorMessage.value = 'شماره معتبر نیست'
    return
  }

  errorMessage.value = ''
  const otp = Math.floor(10000 + Math.random() * 90000)
  console.log('کد ارسال شده به شماره', phone.value, ':', otp)

  authStore.setPhone(phone.value)
  authStore.setOtp(otp)

  router.push('/verify')
}
</script>
