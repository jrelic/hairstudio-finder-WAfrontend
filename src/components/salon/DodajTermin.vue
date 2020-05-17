<template>
 <div class="wrapper fadeInDown">
    <div id="kalendar">
      <form @submit.prevent="updateTermin">
      <h1 class="text-center">Dodaj slobodni termin:</h1>
       
        <h5>Odaberi vrijeme i datum naručivanja</h5>
      <date-picker v-model="range" lang="en" range confirm type="datetime" format="YYYY-MM-DD [at] HH:mm a" width="1000"  >
        

      </date-picker>
       <div class="text-center">
                  <button type="submit" class="btn btn-primary mt-5">Kreiraj termin</button>
                </div> 
                 </form>
      </div>
 </div>
     
</template>
<script>
  import db from '@/firebase/init'
  import firebase from 'firebase'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  export default {
    name:"kalendar",
    components: { DatePicker },
    data() {
      return {
        bookirano: true,
        year:"",
        date:"",
        time:'',
        datetime:'',
        range:''
      
      }
      },
    methods: {
        updateTermin() {
          var user = firebase.auth().currentUser;
            if (user) {
              let start = this.range[0] //'2020-01-08 18:00'
              let end = this.range[1]
              console.log(start, end);
              let termin =  {
                start: start,
                end: end,
                title: 'Ime i prezime',
                opis: 'Feniranje',
                
              }
              db.collection("termini")
              .doc(user.email)
              .collection('Kalendar')
              //.doc('slobodni_termini')
              .add(termin)
              .then(_ => {
                console.log("Document successfully written!");
                alert("Uspješno je dodan novi termin");
              }).then(() =>{
                this.$router.push('/pocetna-salon')
            });
             
              
               
              //})
            }else {
              //.catch(function(error) {
              console.error("Error writing document: ", error);
            //}),
            }
            
            
        }
    }
}
     
    
    
  
</script>


<style>
.card{
  background-color: rgb(209, 205, 201);
}

body{
    background-color: #a69180;
}

form{
    margin: 30px 30px;
}
form h3{
    text-align: center;
}
.btn-primary{
    background-color: #463D36;
    border-color: #463D36;
}
.btn-primary:hover{
    background-color: rgb(115, 190, 100);
    border-color: rgb(115, 190, 100);
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: rgb(209, 205, 201);
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.mx-icon-calendar{
    height: 30px;
}

</style>