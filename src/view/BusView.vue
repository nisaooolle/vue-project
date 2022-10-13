<template>
<!-- <div class="view"> -->
    <div class="bus">
        <br>
        <hr>
      <h1>BUS<i class="fa-solid fa-bus"></i></h1>
      <hr>
      <br>
            <img class="image" src="https://img2.exportersindia.com/product_images/bc-full/2020/5/6265444/volvo-bus-services-1589442606-5430091.jpg" alt="">
            <h3>Pengusaha transportasi sekaligus Youtuber asal Semarang, Mas Wahid, kembali merilis armada baru untuk bus pariwisatanya.
                 Berbeda dengan unit-unit bus sebelumnya yang menggunakan unit second alias bus bekas, bus pariwisata Pesona Transport 
                 Service terbaru milik Mas Wahid ini menggunakan bodi serta sasis yang benar-benar baru. Seperti apa spesifikasi dan fasilitas
                  yang ditawarkan?Bodi bus baru Mas Wahid yang diberi nama Perintis 001 ini menggunakan bodi Laksana Legacy SR2 S Series 
                  dengan tipe XHD Prime.
                   Dari sisi eksterior, bus ini tampak elegan dengan warna
                    dasar putih dikombinasi
                     grafis merah di bagian
                      sekat kaca depan,
                    selendang, dan sebagian atap.
                    Secara spesifikasi, sasis Hino
                     R260 mengusung kapasitas 7.684 cc, 
                    6 silinder,
                     4 tak, turbocharger, intercooler, dengan profil diameter x langkah 112 mm x 130 mm.
                     Mesin tersebut bisa menghasilkan tenaga
                      maksimum 260 PS pada 2.500 rpm dan torsi puncak 745 Nm pada 1.500 rpm.
                    </h3>
                    <hr>
                      <h2>Ini Adalah Data Bus</h2>
                      <hr>
                      <br>
        <form @submit.prevent="add">
          <table class="table">
            <tr>
        <input type="hidden" v-model="form.id" required>
        <td><label for="">Merk : <br></label></td>
        <td><input type="text" v-model="form.merk" required><br></td>
        </tr>
        <tr>
        <td><label for="">Buatan : <br></label></td>
        <td><input type="text" v-model="form.buatan" required><br></td>
        </tr>
        <tr>
        <td><label for="">Rute : <br></label></td>
        <td><input type="text" v-model="form.rute" required><br></td>
        </tr>
        <tr>
        <td><label for="">Harga Sewa : <br></label></td>
        <td><input type="text" v-model="form.hargasewa" required>
        <button class="klik" type="submit" v-show="!updateSubmit"><i class="fa-solid fa-plus"></i>add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)">Update</button></td> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
        </tr>
        </table>
    </form>
    <br>
    <table>
      <tr>
      <th>Merk</th>
      <th>Buatan</th>
      <th>Rute</th>
      <th>Harga Sewa</th>
      <th>Image</th>
      <th>Action</th>
      </tr>
      <tr  v-for="user in bus" :key="user.id">
        <td>{{user.merk}}</td>
        <td>{{user.buatan}}</td>
        <td>{{user.rute}}</td>
        <td>{{user.hargasewa}}</td>
        <td> <img :src="user.image" alt="" width="100"></td>
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
    name:"BusView",
  data(){
    return{
        form: {
          id: '',
          merk: '',
          buatan:'',
          rute: '',
          hargasewa:'',
          image:'',
        },
        bus: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/bus').then(res => {
        this.bus = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/bus/', this.form).then(res => {
          this.load()
          this.form.merk = ''
          this.form.buatan = ''
          this.form.rute = ''
          this.form.hargasewa = ''
          this.form.image = ''
      })
 },
  edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.merk = user.merk
        this.form.buatan = user.buatan
        this.form.rute = user.rute
        this.form.hargasewa = user.hargasewa
        this.form.image = user.image
 },
 update(form){
        return axios.put('http://localhost:3000/users/' + form.id , 
        {merk: this.form.merk,
        buatan: this.form.buatan,
        rute: this.form.rute,
        hargasewa: this.form.hargasewa},
        ).then(res => {
        this.load()
        this.form.id = ''
        this.form.merk = ''
        this.form.buatan = ''
        this.form.rute= ''
        this.form. hargasewa=''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
     del(user){
      axios.delete('http://localhost:3000/bus/' + user.id).then(res =>{
          this.load()
          let index = this.bus.indexOf(
            form.merk,
            form.buatan,
            form.rute,
            form.hargasewa,image)
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
.image{
    width: 50%;
     height: 300px;
    margin-left: 250px;
 }
 h1{
    margin-left: 40%;
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
 h2{
     background-image: url(https://i.pinimg.com/236x/a1/53/5f/a1535f5cb199200dfe782bf07600fd6e.jpg);
    color: white;
    border-radius: 15px;
    width: 45%;
    text-align: center;
    margin-left: 25%;
}
.bus{
    margin-left: 15%;
    width: 80%;
    padding-top: 5%;
}
h3{
    text-align: justify;
}
img{
    margin-left: 15%;
}
td{
   padding: 1%;
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
  background-color: #F8EDED;
} */
</style>