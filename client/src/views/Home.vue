<template>
  <div class="home">
    <div v-if="user">
        <h1>HEY USER!</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {store} from '../store'
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      user: store.user,
      notes : null
    }

  },
  methods : {
    
    grabPosts : function (){
        
      
    }
  }
}
</script>
