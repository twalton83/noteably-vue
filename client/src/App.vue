<template>
  <div class="bg-green-700 h-screen" id="app">
  <header id ="nav" class="flex flex-row justify-between p-2 bg-gray-200 shadow-md">
    <h1 class="text-2xl">
      <router-link to="/">
        Note.ably
      </router-link>
    </h1>
    <nav class="w-1/4 flex flex-row justify-between">
      <router-link to="/login">Log In</router-link>
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/logout">Log Out</router-link>
    </nav>
  </header>
    <router-view/>
  </div>
</template>

<style>

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
