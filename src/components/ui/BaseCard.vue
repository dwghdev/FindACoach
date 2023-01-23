<template>
  <div class="card">
    <slot />
  </div>
</template>

<style>
.card {
  padding: 1rem;
  max-width: 40rem;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
