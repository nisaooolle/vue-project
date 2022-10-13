<template>
<!-- <div class="view"> -->
    <div class="pesawat">
        <br>
        <hr>
        <h1>PESAWAT <i class="fa-solid fa-plane"></i></h1>
        <hr>
        <br>
        <img class="image" src="https://akcdn.detik.net.id/visual/2020/01/08/cf7060ac-44fd-4c98-b694-f9bcf534b04d_169.jpeg?w=650" alt="">
        <h3>Pesawat terbang adalah pesawat udara yang lebih berat dari udara, bersayap tetap, dan dapat terbang dengan tenaga sendiri.
        Secara umum istilah pesawat terbang sering juga disebut dengan pesawat udara atau kapal terbang atau cukup pesawat dengan 
        tujuan
         pendefenisian yang sama sebagai kendaraan yang mampu terbang di atmosfer atau udara. Namun dalam dunia penerbangan, 
         istilah 
         pesawat terbang berbeda dengan pesawat udara, istilah pesawat udara jauh lebih luas pengertiannya karena telah mencakup 
         pesawat terbang dan helikopter.Ada dua klasifiksai pesawat terbang. Pertama, pesawat yang lebih berat daripada udara (aerodin).
          Pesawat yang termasuk jenis ini, yaitu autogiro, helikopter, dan pesawat bersayap tetap. Kedua, pesawat yang lebih ringan
           daripada udara (aerostat). Pesawat yang termasuk dalam jenis ini di antaranya kapal udara.</h3>
           <hr>
           <h2>Ini Adalah Data Pesawat</h2>
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
        <td><label for="">Bandara : <br></label></td>
        <td><input type="text" v-model="form.bandara" required><br></td>
        </tr>
        <tr>
        <td><label for="">Tahun keluar : <br></label></td>
        <td><input type="text" v-model="form.tahun" required>
        <button class="klik" type="submit" v-show="!updateSubmit"><i class="fa-solid fa-plus"></i>add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> </td> <!--jika tombol edit di klik maka tombol add akan berubah menjadi update-->
        </tr>
        </table>
    </form>
    <br>
    <table>
      <tr>
      <th>Merk</th>
      <th>Bandara</th>
      <th>Tahun keluar</th>
      <th>Image</th>
      <th>Action</th>
      </tr>
      <tr  v-for="user in pesawats" :key="user.id">
        <td>{{user.merk}}</td>
        <td>{{user.bandara}}</td>
        <td>{{user.tahun}}</td>
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
    name:"PesawatView",
  data(){
    return{
        form: {
          id: '',
          merk: '',
          bandara:'',
          tahun:'',
          image:'',
        },
        pesawats: '',
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/pesawats').then(res => {
        this.pesawats = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/pesawats/', this.form).then(res => {
          this.load()
          this.form.merk = ''
          this.form.bandara = ''
          this.form.tahun = ''
          this.form.image = ''
      })
 },
  edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.merk = user.merk
        this.form.bandara = user.bandara
        this.form.tahun = user.tahun
        this.form.image = user.image
 },
 update(form){
        return axios.put('http://localhost:3000/pesawats/' + form.id , 
        {merk: this.form.merk,
        bandara: this.form.bandara,
        tahun: this.form.tahun,},
        ).then(res => {
        this.load()
        this.form.id = ''
        this.form.merk = ''
        this.form.bandara = ''
        this.form.tahun = ''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
     del(user){
      axios.delete('http://localhost:3000/pesawats/' + user.id).then(res =>{
          this.load()
          let index = this.users.indexOf(
            form.merk,
            form.bandara,
            form.tahun,image)
          this.pesawats.splice(index,1)
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
    background-image: url("https://i.pinimg.com/236x/a1/53/5f/a1535f5cb199200dfe782bf07600fd6e.jpg");
    color: white;
    border-radius: 15px;
    width: 40%;
    text-align: center;
    margin-left: 25%;
}
.image{
    margin-left: 20%;
    width: 50%;
}
.pesawat{
    margin-left: 15%;
   width: 80%;
   padding-top: 5%;

}
img{
    margin-left: 20%;
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
  background-color: #9AD0EC;
} */
</style>