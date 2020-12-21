<template>
  <div class="bg-green-700 h-screen" id="app">
  <header id ="nav" class="flex flex-row justify-between p-2 bg-gray-200 shadow-md">
    <h1 class="text-2xl">
      <router-link to="/">
        Note.ably
      </router-link>
    </h1>
    <nav class="w-1/4 flex flex-row justify-between">
      <router-link v-if="!user" to="/login">Log In</router-link>
      <router-link v-if="user" to="/signup">Sign Up</router-link>
      <button  v-on:click="logout">Log Out</button>
    </nav>
  </header>
    <router-view :user="user"/>
  </div>
</template>

<style>

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import {store, clearUser} from './store'
import axios from 'axios'
import router from './router/index'

export default {
 name : "App",
 data () {
   return {
    user : store.user
   }
  
 },
 created() {
   console.log('mounting app"')
   console.log(store.user)
 },
 methods : {
   logout : function () { 
     axios.get('http://localhost:5501/logout')
      .then(res =>{
        if(res.status === 200){
          clearUser()
          console.log(this.user)
        }
      })
   }
 }


}
</script>