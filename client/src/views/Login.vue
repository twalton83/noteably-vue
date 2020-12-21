<template>
  <div class="login flex items-center justify-center">
    <form v-on:submit.prevent="login" class= "mx-auto w-1/2 bg-white flex flex-col items-center p-5 h-1/3 flex flex-col justify-evenly mt-20" action="POST">
    <h1 class="text-center text-2xl">Log In</h1>
    <label for="username">Username:</label>
    <input v-model= "username" class="border-gray-400 border rounded-md w-1/2 my-1" type="text" name="username">
    <label for="password">Password:</label>
    <input v-model="password" class="border-gray-400 border rounded-md w-1/2 my-1" type="password" name="password" id="password">
    <button class="bg-green-900 p-2 text-white">
      Submit
    </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import {store, storeUser} from '../store'
export default {
  name: 'Login',
  components: {

  },
  data () {
    return {
      username: "",
      password: "",
      errors : null
    }
  },
  methods :{
    login : function () {
      let data = {
        username : this.username,
        password : this.password,
      }
      axios.post('http://localhost:5501/login', data)
        .then(res => {
          if(res.data.user){
            this.$router.push('/')
          }
          storeUser(res.data.user)
         
        })
        .catch(err => {
          console.log({err})
        })
    }
  }
}
</script>
