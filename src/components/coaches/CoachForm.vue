<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input 
        type="text" 
        id="firstname" 
        v-model.trim="firstName.val" 
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input 
        type="text" 
        id="lastname" 
        v-model.trim="lastName.val" 
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea 
        id="text" 
        rows="5" 
        v-model.trim="description.val" 
        @blur="clearValidity('description')"
      />
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input 
        id="rate"
        type="number"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input 
          id="frontend" 
          type="checkbox" 
          value="frontend" 
          v-model="areas.val" 
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input 
          id="backend" 
          type="checkbox" 
          value="backend" 
          v-model="areas.val" 
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input 
          id="career" 
          value="career" 
          type="checkbox" 
          v-model="areas.val"
          @blur="clearValidity('areas')" 
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid">atleast 1 expertise must be selected.</p>
    </div>
    <p>Please fix errors above and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
      if (!this.areas.val.length) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val
      };

      this.$emit('save-data', formData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  display: inline;
  font-weight: normal;
  margin: 0 0 0 0.5rem;
}

input:not([type="checkbox"]), textarea {
  width: 100%;
  font: inherit;
  display: block;
  border: 1px solid #ccc;
}

input:focus,
textareas:focus {
  outline: none;
  border-color: #3d008d;
  background-color: #f0e6fd;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

.invalid label {
  color: red;
}

.invalid :is(input, textarea) {
  border: 1px solid red;
}
</style>
