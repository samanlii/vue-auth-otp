import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    phone: '',
    otp: null,
    otpCheck: false,
  }),
  actions: {
    setPhone(value) {
      this.phone = value
    },
    setOtp(value) {
      this.otp = value
    },
    checkOtp(inputOtp) {
      this.otpCheck = inputOtp == this.otp
      return this.otpCheck
    },
  },
})
