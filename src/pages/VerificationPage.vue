<template>
  <q-page class="flex flex-center q-pa-md">
    <q-form @submit.prevent="verifyOtp">
      <div class="q-pa-xl column items-center shadow-6 border">
        <div class="q-mb-md">کد ارسال شده به {{ authStore.phone }} را وارد کنید</div>
        <div class="row q-gutter-sm">
          <q-input
            v-for="(digit, index) in 5"
            :key="index"
            ref="inputs"
            v-model="otp[index]"
            maxlength="1"
            @keyup="focusNext(index, $event)"
            outlined
            class="otp-box"
          />
        </div>
        <div v-if="errorMessage" class="text-negative q-mt-sm">
          {{ errorMessage }}
        </div>
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

const otp = ref(['', '', '', '', ''])
const inputs = ref([])
const errorMessage = ref('')
const authStore = useAuthStore()

function focusNext(index, event) {
  const key = event.key
  if (/^\d$/.test(key) && index < 4) {
    inputs.value[index + 1].focus()
  } else if (key === 'Backspace' && index > 0 && !otp.value[index]) {
    inputs.value[index - 1].focus()
  }
}

function verifyOtp() {
  if (otp.value !== String(authStore.otp)) {
    errorMessage.value = 'کد اشتباه است'
    return
  }

  errorMessage.value = ''
  alert('ورود موفقیت‌آمیز ✅')
}
</script>

<style scoped>
.otp-box {
  width: 50px;
  text-align: center;
  font-size: 20px;
}
</style>
