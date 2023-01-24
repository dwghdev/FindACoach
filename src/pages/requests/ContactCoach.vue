<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your E-Mail</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div>
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message" />
    </div>
      <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
    <div class="actions">
      <base-button>Send Mesasge</base-button> 
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@')) {
        this.formIsValid = false;
        return;
      }

      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.message,
        coachId: this.$route.id
      });

      this.$router.replace('/coaches');
    },

  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  font: inherit;
  display: block;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3d008d;
  background-color: #faf6ff;
}

.errors {
  color: red;
  font-weight: bold;
}

.actions {
  text-align: center;
}
</style>
