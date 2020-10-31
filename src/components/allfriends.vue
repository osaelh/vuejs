<template>
    <div class="all-friens">
        <h2>all friends</h2>
        <div v-for='(friend, index) in friends' :key="index">
            <span @click="unfriend(friend.name)">{{ friend.name }}</span>

        </div>
    </div>
</template>

<script>
export default {
    name: 'allfriends',
    props: ['friends'],
    methods: {

        unfriend(name){
          this.$emit('delete', {name: name})
        }

    },
    data(){
        return {


        }
    }
}
</script>

<style>

</style>