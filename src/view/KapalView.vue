<template>
<!-- <div class="view"> -->
   <div class="kapal">
    <br>
    <hr>
   <h1>KAPAL<i class="fa-solid fa-ship"></i></h1>
   <hr>
   <br>
    <img class="image" src="https://d2fgf7u961ce77.cloudfront.net/uploads/news/43025199_s.jpg" alt="">
    <h3>Berabad-abad kapal dipakai oleh manusia untuk mengarungi sungai atau lautan
         yang diawali oleh penemuan perahu.
          Biasanya manusia pada masa lampau menggunakan kano,
        rakit ataupun perahu, semakin besar kebutuhan akan
         daya muat maka dibuatlah perahu atau rakit yang berukuran lebih besar 
        yang dinamakan kapal. 
        Bahan-bahan yang digunakan untuk pembuatan kapal pada masa lampau menggunakan kayu,
         bambu ataupun batang-batang papirus seperti yang digunakan bangsa mesir kuno kemudian
          digunakan bahan bahan logam seperti besi/baja
        karena kebutuhan manusia akan kapal yang kuat.
         Untuk penggeraknya manusia pada awalnya menggunakan dayung kemudian 
        angin dengan bantuan layar, mesin uap setelah muncul revolusi Industri dan mesin diesel serta Nuklir.
         Beberapa penelitian memunculkan kapal bermesin yang berjalan mengambang di atas air seperti
          Hovercraft dan Ekranoplane. Serta kapal yang digunakan di dasar lautan yakni kapal selam.</h3>
          <hr>
           <h2>Ini Adalah Data Kapal</h2>
           <hr>
           <br>
     <form @submit.prevent="add">
      <table class="table">
      <tr>
        <input type="hidden" v-model="form.id" required>
        <td><label for="">Nama Kapal : <br> </label></td>
        <td><input type="text" v-model="form.namakapal" required><br></td>
        </tr>
        <tr>
        <td><label for="">Panjang : <br></label></td>
        <td><input type="text" v-model="form.panjang" required><br></td>
        </tr>
        <tr>
        <td><label for="">Lebar : <br></label></td>
        <td><input type="text" v-model="form.lebar" required><br></td>
        </tr>
        <tr>
        <td><label for="">Tinggi : <br></label></td>
        <td><input type="text" v-model="form.tinggi" required><br></td>
        </tr>
        <tr>
        <td><label for="">Sarat kapal : <br></label></td>
        <td><input type="text" v-model="form.saratkapal" required><br></td>
        </tr>
        <tr>
        <td><label for="">Nama Pemilik : <br></label></td>
        <td><input type="text" v-model="form.namapemilik" required>
        <button class="klik" type="submit" v-show="!updateSubmit"><i class="fa-solid fa-plus"></i>add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button  type="button" v-show="updateSubmit" @click="update(form)">Update</button><br></td> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </tr>
        </table>
    </form>
    <br>
    <table>
      <tr>
      <th>Nama Kapal</th>
      <th>Panjang</th>
      <th>Lebar</th>
      <th>Tinggi</th>
      <th>Sarat Kapal</th>
      <th>Nama Pemilik</th>
      <th>Image</th>
      <th>Action</th>
      </tr>
      <tr  v-for="user in kapals" :key="user.id">
        <td>{{user.namakapal}}</td>
        <td>{{user.panjang}}</td>
        <td>{{user.lebar}}</td>
        <td>{{user.tinggi}}</td>
        <td>{{user.saratkapal}}</td>
        <td>{{user.namapemilik}}</td>
        <td> <img :src="user.image" alt="" width="150"></td>
        <td style="text-align:center">
          <button class="klik" @click="edit(user)"><i class="fa-solid fa-pen-to-square"></i>Edit</button> ||
          <button class="klik" @click="del(user)"><i class="fa-solid fa-eraser"></i>Delete</button>
        </td>
      </tr>
      <!-- <li>
      <span>nama saya :{{user.name}}</span> &#160;
      <span> umur saya :{{user.umur}} tahun</span> &#160;
      <span> Jenis Makanan :{{Makanan.jenismakanan}},</span> &#160;
      <span> Khas :{{Makanan.khas}},</span> &#160;
      <span> Bahan Utama :{{Makanan.bahanutama}},</span> &#160;
      <span> Harga :{{Makanan.harga}}</span> &#160;
      </li> -->
    </table>
  </div>
  <!-- </div> -->
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
    name:"KapalView",
  data(){
    return{
        form: {
          id: '',
          namakapal: '',
          panjang:'',
          lebar:'',
          tinggi:'',
          saratkapal:'',
          namapemilik:'',
          image:'',
        },
        kapals: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/kapals').then(res => {
        this.kapals = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/kapals/', this.form).then(res => {
          this.load()
          this.form.namakapal = ''
          this.form.panjang = ''
          this.form.lebar = ''
          this.form.tinggi = ''
          this.form.saratkapal = ''
          this.form.namapemilik = ''
          this.form.image = ''
      })
 },
  edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.namakapal = user.namakapal
        this.form.panjang = user.panjang
        this.form.lebar = user.lebar
        this.form.tinggi = user.tinggi
        this.form.saratkapal = user.saratkapal
        this.form.namapemilik = user.namapemilik
        this.form.image = user.image
 },
 update(form){
        return axios.put('http://localhost:3000/kapals/' + form.id , 
        {namakapal: this.form.namakapal,
        panjang: this.form.panjang,
        lebar: this.form.lebar,
        tinggi: this.form.tinggi,
        saratkapal: this.form.saratkapal,
        namapemilik: this.form.namapemilik},
        ).then(res => {
        this.load()
        this.form.id = ''
        this.form.namakapal = ''
        this.form.panjang = ''
        this.form.lebar = ''
        this.form.tinggi=''
        this.form.saratkapal=''
        this.form.namapemilik=''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
     del(user){
      axios.delete('http://localhost:3000/kapals/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(
            form.namakapal,
            form.panjang,
            form.lebar,
            form.tinggi,
            form.saratkapal,
            form.namapemilik,image)
          this.users.splice(index,1)
      })
  }
   }
}
</script>
<style scoped>
table,th,td{
  border: 1px solid;
}
table {
  width: 100%;
background-image: url(https://htmlcolorcodes.com/assets/images/colors/blue-gray-color-solid-background-1920x1080.png);
  color: white;
}
th{
    background-color: white;
}
h2{
  background-image: url(https://i.pinimg.com/236x/a1/53/5f/a1535f5cb199200dfe782bf07600fd6e.jpg);
    color: white;
    border-radius: 15px;
    width: 40%;
    text-align: center;
    margin-left: 25%;
}
.image{
    margin-left: 20%;
    width: 50%;
    height: 300px;
}
.kapal{
  margin-left: 15%;
  width: 80%;
  padding-top: 5%;
}
img{
  margin-left: 10%;
}
h3{
  text-align: justify;
  padding: 20px;
}
h3:hover{
  border: 3px solid;
  border-radius: 50px;
  border-color: navy;
 }
td{
   padding: 1%;
}
h1{
    margin-left: 40%;
 }
 .table,tr{
  margin-left: 20%;
  width: 50%;
  color: black;
  background-color: beige;
}
.klik{
  background-color: skyblue;
}
.klik:hover{
  background-color: wheat;
}
/* .view{
  background-color:  #D7E9F7;
} */
</style>