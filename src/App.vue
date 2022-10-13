<template>
<div class="vue">
  <div class="navbar">
    <h1>DATA TRANSPORTASI</h1>
  </div>
  <div>
    <NavbarComponent/>
  <router-view/>
  </div>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style>
/* .vue{
  display: flex;
  gap: 100px;
} */
.navbar{
 /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqgBuR8xL7W008Z9-B4Ekr3AIHsh53dK-zXzMYiYDPSJV6b3brpoter6KuW3kBzM_hTY&usqp=CAU"); */
    color: white;
    text-align: center;
    border: 1px solid;
    /* border-radius: 15px; */
    position: fixed;
    width: 100%;
    background-color: #16213E;
}
</style>
