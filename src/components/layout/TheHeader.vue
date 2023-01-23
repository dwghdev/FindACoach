<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">
          Find a Coach
        </router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">
            All Coaches
          </router-link>
        </li>
        <li>
          <router-link to="/requests">
            Requests
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3d008d;
}

header a {
  color: #f391e3;
  display: inline-block;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: none; 
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header ul {
  display: flex;
  list-style: none;
}
</style>
