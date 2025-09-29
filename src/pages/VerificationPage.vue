<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="row justify-center q-gutter-md">
      <q-card class="q-pa-lg q-col-12 q-col-md-6 q-col-lg-4 shadow-6">
        <q-form @submit.prevent="verifyOtp">
          <div class="q-pa-xl column items-center border">
            <div class="text-center q-mb-md text-h6">
              کد ارسال شده به {{ authStore.phone }} را وارد کنید
            </div>
            <div class="row q-gutter-sm justify-center otp-row">
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

            <q-btn
              type="submit"
              label="تایید"
              color="primary"
              padding="xs lg"
              class="full-width q-ma-md"
            />
            <div v-if="errorMessage" class="text-negative q-mt-sm">
              {{ errorMessage }}
            </div>
          </div>
        </q-form>
      </q-card>
    </div>
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
  const entered = otp.value.join('')
  const stored = String(authStore.otp)
  if (entered === stored) {
    errorMessage.value = ''
    alert('ورود موفقیت‌آمیز ✅')
  } else {
    errorMessage.value = 'کد اشتباه است'
  }
}
</script>

<style scoped>
.otp-row {
  flex-wrap: nowrap;
  margin-bottom: 20px;
}
.otp-box {
  width: 40px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  min-width: 40px;
}
</style>
