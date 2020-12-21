<template>
  <div class="login flex items-center justify-center">
    <form v-on:submit.prevent="signUp" class= "mx-auto w-1/2 bg-white flex flex-col items-center p-5 h-1/3 flex flex-col justify-evenly mt-20" action="POST">
    <h1 class="text-center text-2xl">Sign Up</h1>
    <label for="username">Username:</label>
    <input v-model="username" class="border-gray-400 border rounded-md w-1/2 my-1" type="text" name="username">
    <label for="password">Password:</label>
    <input v-model="password" class="border-gray-400 border rounded-md w-1/2 my-1" type="password" name="password" id="password">
     <label for="password">ConfirmPassword:</label>
    <input v-model="confirmPass" class="border-gray-400 border rounded-md w-1/2 my-1" type="password" name="passwordConf" id="passwordConf">
    <button class="bg-green-900 p-2 text-white">
      Submit
    </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../store'
export default {
  name: 'Login',
  components: {

  },
  data () {
    return {
      username: "",
      password: "",
      confirmPass: ""
    }
  },
  methods :{
    signUp : function () {
      let data = {
        username : this.username,
        password : this.password,
        confirmPass : this.confirmPass
      }
      axios.post('http://localhost:5501/signup', data)
        .then(res => {
          console.log(res)
          if(res.status === 200){
            this.$router.push('/')
          }
         
        })
        .catch(err => {
          console.log({err})
        })
    }
  }
}
</script>
