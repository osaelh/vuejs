<template>
<nav>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="about">About</router-link></li>
        
        
    </ul>
</nav>
</template>

<script>
export default {
    name: 'navbar',
    data(){
        return {

        }
    }
}
</script>

<style>
nav{
    text-align: right;
}
nav ul{
    padding: 0;
}
nav li{
    display: inline;
    list-style-type: none;
    margin: 2em;
}

</style>