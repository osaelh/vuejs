<template>
  <div id="app">
   
  <navbar />
  <allfriends :friends="friends" @delete='deleteFriend' />
  <onlinefriends :friends="friends" />
  <br>
  <h3>search employee</h3>
  <input type="text" v-model="searchTerm">
  <div v-for="info in filteredEmployees" :key="info.id">
     <h3>{{ info.employee_name | firstName }}</h3>
     <p>salary: {{ info.employee_salary }}</p>
   </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import allfriends from './components/allfriends.vue'
import onlinefriends from './components/onlinefriends.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    navbar: navbar,
    allfriends,
    onlinefriends
  },
   

  methods: {
    deleteFriend(payload){
      // console.log(payload)
      this.friends = this.friends.filter(friend => {
        return friend.name != payload.name
      })
    },
  },
  data(){
    return {
             friends: [
                {name: 'gon', online: true},
                {name: 'killua', online: false},
                {name: 'leorio', online: true},
                {name: 'kurapika', online: false}
            ],
            searchTerm: '',
            infos: [],
            

    }
  },

  computed: {
    filteredEmployees(){
      return this.infos.filter(info => {
        return info.employee_name.match(this.searchTerm)
      })
    }
  },
   beforeCreate () {
    axios
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        console.log(response.data.data[0]);
        this.infos = response.data.data
      }).catch(err => {
        console.log(err)
      })
  },

}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
