<template>
    <div class="online-friens">
        <h2>online friends</h2>
        <div v-for='(friend, index) in friends' :key="index">
            <span v-if="friend.online">{{ friend.name }}</span>

        </div>
    </div>
</template>

<script>
export default {
    name: 'onlinefriends',
    props: ['friends'],
    data(){
        return {

        }
    }
}
</script>

<style>

</style>