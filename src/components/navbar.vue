<template>
<nav>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">contact</a></li>
        
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