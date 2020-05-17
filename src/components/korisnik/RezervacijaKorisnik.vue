<template>
<div class="container">

<h1 class="naslov1"> Odaberi uslugu </h1>
<div class="grid-wrapper">
  <div class="card-wrapper">
    <input class="c-card" type="checkbox"   id="1" value="1" checked="checked">
    <div class="card-content">
      <div class="card-state-icon"></div>
      <label for="1">
        <div class="image"><img src="https://www.hji.co.uk/wp-content/efs/2020/03/barber-1-939x585.jpg" height="120" width="180"></div>
        <h4>Muško šišanje</h4>
        <h5>30 HRK</h5>
      </label>
    </div>
  </div>
  
  <div class="card-wrapper">
    <input class="c-card" type="checkbox" id="2" value="2" checked="checked">
    <div class="card-content">
      <div class="card-state-icon"></div>
      <label for="2">
        <div class="image"><img src="https://www.expatica.com/app/uploads/sites/6/2014/05/Hairdresser.jpg" height="120" width="180"></div>
        <h4>Žensko šišanje</h4>
        <h5>60 HRK</h5>
    
      </label>
    </div>
  </div>
  
  <div class="card-wrapper">
    <input class="c-card" type="checkbox" id="3" value="3">
    <div class="card-content">
      <div class="card-state-icon"></div>
      <label for="3">
        <div class="image"><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-hair-dye-gettyimages-463497051-1560800976.jpg" height="120" width="180"></div>
        <h4>Farbanje kose</h4>
        <h5>120 HRK</h5>
      
      </label>
    </div>
  </div>
  
  <div class="card-wrapper">
    <input class="c-card" type="checkbox" id="4" value="4">
    <div class="card-content">
      <div class="card-state-icon"></div>
      <label for="4">
        <div class="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6tV1QVn8DPknpWPtXZDhx7v57D1W-UFI47QoV_IE9TzLl74Aa&usqp=CAU" height="120" width="180"></div>
        <h4>Ženska frizura</h4>
        <h5>200 HRK</h5>
        
      </label>
    </div>
  </div>
  
  <div class="card-wrapper">
    <input class="c-card" type="checkbox" id="5" value="5">
    <div class="card-content">
      <div class="card-state-icon"></div>
      <label for="5">
        <div class="image"><img src="https://ak.picdn.net/shutterstock/videos/16505149/thumb/1.jpg" height="120" width="180"></div>
        <h4>Pranje kose</h4>
        <h5>30 HRK</h5>
       
      </label>
    </div>
  </div>
  
  <div class="card-wrapper">
    <input class="c-card" type="checkbox" id="6" value="6">
    <div class="card-content">
      <div class="card-state-icon"></div>
      <label for="6">
        <div class="image"><img src="https://envato-shoebox-0.imgix.net/e430/73d7-e768-42f1-99b2-18e519dcdb1e/syda_0230634.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=5fbe5d0514dbaa04216d0ea330c5b818" height="120" width="180"></div>
        <h4>Feniranje</h4>
        <h5>20 HRK</h5>
 
      </label>
    </div>
  </div>
</div>
  



        <vue-cal class="container"
         :time-step="30"
         :time-from="7 * 60"
         :time-to="23 * 60"
         :disable-views="['years', 'year', 'month']"
         hide-weekends
         editable-events
         resize-x
         :min-event-width="minEventWidth"
         :events="events"
         @event-change="onChange">
        </vue-cal>




</div>
</template>




<script>



import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from "moment";

export default {
 


  components: {
      VueCal
  },

data: () => ({
        
        start: null,
        end: null,
        selectedEvent: {},
        showDialog: false,
        minEventWidth: 0,
  events: [
  
  ]


}),

    created(){
      this.getEvents();
    },
    
methods: {
    onChange(promijenjeniEvent) {
      console.log(promijenjeniEvent.id),
                  console.log(promijenjeniEvent.title);
                  //var user = firebase.auth().currentUser;
                  //if(user){
                  db.collection("termini")
                          .doc(this.$route.params.emailSalona)//////
                          .collection("Kalendar")
                          .doc(promijenjeniEvent.id)
                          .update({ 
                            title:promijenjeniEvent.title, });
                            console.log("Uspješno dodano ime");
                            alert('Uspješno ste rezervirali termin');
                            this.$router.push('/odabir-placanja')

                            //}
    },
    getEvents() {
      //var user = firebase.auth().currentUser;
      //if (user) {
        db.collection("termini")
          .doc(this.$route.params.emailSalona)///
          .collection("Kalendar").get()
          //.doc('slobodni_termini')
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const data = doc.data();
              console.log(data)
              let start = moment(data.start.toDate()).format("YYYY-MM-DD HH:mm")
              let end = moment(data.end.toDate()).format("YYYY-MM-DD HH:mm")
              
                const termin = {
                  start: start,
                  end: end,
                  id: doc.id,
                  title: data.title,
                  content: data.content
                };
                console.log(termin);
                this.events.push(termin);
             
            });
          });
      //}
    }

  }




    
}
</script>





<style >
    .vuecal{
      background-color: white;
    }

    .vuecal__event {
    color: white;
    background-color:#654321;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    left: 0;
    width: 100%;
    z-index: 1;
    -webkit-transition: left .3s,width .3s,-webkit-box-shadow .3s;
    transition: left .3s,width .3s,-webkit-box-shadow .3s;
    transition: box-shadow .3s,left .3s,width .3s;
    transition: box-shadow .3s,left .3s,width .3s,-webkit-box-shadow .3s;
    overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
h1 {
  text-align: center;
}
.small-meta {
  font-size: 12px;
}
.dim {
  opacity: 0.4;
}
.image {
  width: 180px;
  height: 120px;
  background: #CCC;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}
.grid-wrapper {
  margin: 0 auto;
  width: 80%;
  vertical-align: middle;
  text-align: center;
  position: relative;
}
.card-content {
  border: 1px solid #CCC;
  border-radius: 3px;
  padding: 25px 25px 10px 25px;
}
.card-content * {
  cursor: pointer;
}
.card-wrapper {
  position: relative;
  width: 235px;
  height: 270px;
  float: left;
  margin-right: 50px;
  margin-bottom: 50px;
}
.c-card {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
}
.c-card ~ .card-content {
  transition: all 500ms ease-out;
}
.c-card ~ .card-content .card-state-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
  width: 20px;
  height: 20px;
  background-position: 0 0;
  transition: all 100ms ease-out;
}
.c-card ~ .card-content:before {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 0;
  height: 0;
  border-top: 52px solid #47cf73;
  border-left: 52px solid transparent;
  transition: all 200ms ease-out;
}
.c-card ~ .card-content:after {
  position: absolute;
  top: 1px;
  right: 1px;
  content: "";
  width: 0;
  height: 0;
  border-top: 50px solid #FFF;
  border-left: 50px solid transparent;
  transition: all 200ms ease-out;
}
.c-card ~ .card-content:hover {
  border: 1px solid #6dc5dc;
}
.c-card ~ .card-content:hover .card-state-icon {
  background-position: -30px 0;
}
.c-card ~ .card-content:hover:before {
  border-top: 52px solid #47cf73;
}
.c-card:checked ~ .card-content {
  border: 1px solid #6dc5dc;
}
.c-card:checked ~ .card-content .card-state-icon {
  background-position: -90px 2px;
}
.c-card:checked ~ .card-content:before {
  border-top: 52px solid #47cf73;
      background: url("https://www.shareicon.net/download/2016/08/20/817721_check.svg") no-repeat;
}
.c-card:checked ~ .card-content:after {
  border-top: 52px solid #47cf73;
  
}
.c-card:checked:hover ~ .card-content .card-state-icon {
  background-position: -60px 2px;
}
.c-card:checked:hover ~ .card-content:before {
  border-top: 52px solid #47cf73;
}
.c-card:checked:hover ~ .card-content:after {
  border-top: 52px solid #47cf73;
}


.naslov1{
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>