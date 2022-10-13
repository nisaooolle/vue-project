<template>
  <div class="motor">
    <br>
    <h1>SEMBARANG</h1>
    <hr>
   <h1>MOTOR <i class="fa-solid fa-motorcycle"></i></h1>
   <hr>
   <br>
    <img  class="image" src="https://cdn-2.tstatic.net/aceh/foto/bank/images/yamaha-r1-dan-r6.jpg" alt="">
    <h3>Sepeda motor adalah kendaraan beroda dua yang digerakkan oleh sebuah mesin.
      Letak kedua roda sebaris lurus dan 
      pada kecepatan tinggi sepeda motor tetap 
      stabil disebabkan oleh gaya giroskopik. Sedangkan pada kecepatan rendah,       kestabilan atau keseimbangan sepeda motor bergantung kepada pengaturan 
       setang oleh pengendara. Penggunaan sepeda
        motor
        di Indonesia sangat 
       populer karena harganya yang relatif murah, terjangkau untuk sebagian 
       besar kalangan dan 
       penggunaan bahan bakarnya, serta biaya operasionalnya cukup hemat.</h3>
       <hr>
        <h2>Ini Adalah Data Motor</h2>
        <hr>
        <br>
      <form @submit.prevent="add">
        <table class="table">
          <tr>
        <input type="hidden" v-model="form.id" required>
        <td><label for="">Merk :<br></label></td>
        <td><input type="text" v-model="form.merk" required><br></td>
        </tr>
        <tr>
        <td><label for="">Buatan : <br></label></td>
        <td><input type="text" v-model="form.buatan" required><br></td>
        </tr>
        <tr>
        <td><label for="">Harga : <br></label></td>
        <td><input type="text" v-model="form.harga" required><br></td>
        </tr>
        <tr>
        <td><label for="">Masa Produksi :</label></td>
        <td><input type="text" v-model="form.masaproduksi" required>
        
        <button class="klik" type="submit" v-show="!updateSubmit"><i class="fa-solid fa-plus"></i>add</button> <!--jika tidak update maka tombol update tidak muncul -->
         <button type="button" v-show="updateSubmit" @click="update(form)">Update</button></td> <!--jika tombol edit di klik maka tombol add akan berubah menjadi update -->
          </tr>
         </table>
    </form>
    <!-- <form @submit.prevent="add"> 
      <table class="table"> 
        <tr> 
          <input type="hidden" v-model="form.id" required /> 
          <td><label>Merk</label></td> 
          <td>:</td> 
          <td><input type="text" v-model="form.merk" required /></td> 
        </tr> 
        <tr> 
          <td><label>Buatan</label></td> 
          <td>:</td> 
          <td><input type="text" v-model="form.buatan" required /></td> 
        </tr> 
        <tr> 
          <td><label>Harga</label></td> 
          <td>:</td> 
          <td><input type="text" v-model="form.harga" required /></td> 
        </tr>
        <tr> 
          <td><label>Masa Produksi</label></td> 
          <td>:</td> 
          <td><input type="text" v-model="form.masaproduksi" required /></td> 
        </tr>
        </form> -->
    <br>
    <table>
      <tr>
      <th>Merk</th>
      <th>Buatan</th>
      <th>Harga</th>
      <th>Masa Produksi</th>
      <th>Image</th>
      <th>Action</th>
      </tr>
      <tr  v-for="user in users" :key="user.id">
        <td>{{user.merk}}</td>
        <td>{{user.buatan}}</td>
        <td>{{user.harga}}</td>
        <td>{{user.masaproduksi}}</td>
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
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
    name:"MotorView",
  data(){
    return{
        form: {
          id: '',
          merk: '',
          buatan:'',
          harga:'',
          masaproduksi:'',
          image:'',
        },
        users: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/users').then(res => {
        this.users = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/users/', this.form).then(res => {
          this.load()
          this.form.merk = ''
          this.form.buatan = ''
          this.form.harga = ''
          this.form.masaproduksi = ''
          this.form.image = ''
      })
 },
  edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.merk = user.merk
        this.form.buatan = user.buatan
        this.form.harga = user.harga
        this.form.masaproduksi = user.masaproduksi
        this.form.image = user.image
 },
 update(form){
        return axios.put('http://localhost:3000/users/' + form.id , 
        {merk: this.form.merk,
        buatan: this.form.buatan,
        harga: this.form.harga,
        masaproduksi: this.form.masaproduksi},
        ).then(res => {
        this.load()
        this.form.id = ''
        this.form.merk = ''
        this.form.buatan = ''
        this.form.harga = ''
        this.form. masaproduksi=''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
     del(user){
      axios.delete('http://localhost:3000/users/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(
            form.merk,
            form.buatan,
            form.harga,
            form.masaproduksi,image)
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
.motor{
  margin-left: 15%;
   width: 80%;
   padding-top: 5%;
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
img{
  margin-left: 15%;
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
</style>