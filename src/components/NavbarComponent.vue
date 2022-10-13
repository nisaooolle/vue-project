<template>
    <div class="all">
        <div> <br><br><br>
           <router-link to="/">Motor</router-link>
         </div>
         <br><br>
         <div>
         <router-link to="/Mobil">Mobil</router-link>
    </div>
    <br><br>
    <div>
         <router-link to="/bus">Bus</router-link>
    </div>
    <br><br>
    <div>
         <router-link to="/kapal">Kapal</router-link>
    </div>
    <br><br>
    <div>
         <router-link to="/pesawat">Pesawat</router-link>
    </div><br><br>
    </div>
</template>

<script>
export default{
    name: 'NavComp'
}
</script>
<style scoped>
.all{
     /* background-image: url(https://www.kibrispdr.org/data/892/wallpaper-polos-warna-hitam-27.jpg); */
     border: 1px solid;
     border-radius: 10px;
     width: 100px;
     height: 500px;
     margin-top: 8%;
     margin-left: 20px;
     position: fixed;
         background-color: #16213E;

}
a{
     color: white;
     text-decoration: none;
     padding: 25px;
}
a:hover{
     color: red;
}
</style>