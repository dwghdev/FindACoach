<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge 
        v-for="area in areas" 
        :title="area"
        :type="area"
        :key="area"
      >
      </base-badge>
      <div class="actions">
        <base-button mode="outline" link :to="coachContactLink">
          Contact
        </base-button>
        <base-button link :to="coachDetailsLink">
          View Details
        </base-button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    }
  }
}
</script>

<style scoped>
li {
  margin: 1em 0;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #424242;
}

h3 {
  font-size: 1.5rem;
}

h3, h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
