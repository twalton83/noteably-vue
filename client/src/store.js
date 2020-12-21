import Vue from 'vue'
export const store = Vue.observable({
  user : null,
  posts : null
})

export function storeUser(user){
  store.user = user
}

export function clearUser(){
  store.user = null
  console.log("clear!")
}