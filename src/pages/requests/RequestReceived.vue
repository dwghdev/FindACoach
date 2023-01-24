<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item 
          v-for="req in receivedRequests" 
          :email="req.userEmail" 
          :message="req.message"
          :key="req.id" 
        />
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}
ul {
  padding: 0;
  max-width: 30rem;
  list-style: none;
  margin: 2rem auto;
}
h3 {
  text-align: center;
}
</style>
