<template>

        <vue-cal class="container"
         :selected-date="selectedDate"
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



</template>




<script>

import db from '@/firebase/init'
import firebase from 'firebase'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import moment from "moment";

export default {
components: {
    VueCal
},

data: () => ({

        minEventWidth: 0,
        start: null,
        end: null,
        selectedEvent: {},
        showDialog: false,
  events: [
 

  ]
}),
  mounted() {
    this.getEvents();
  },
     methods: {
    onChange(promijenjeniEvent) {
      console.log(promijenjeniEvent.id),
                  console.log(promijenjeniEvent.title);
                  var user = firebase.auth().currentUser;
                  if(user){
                  db.collection("termini")
                          .doc(user.email)
                          .collection("Kalendar")
                          .doc(promijenjeniEvent.id)
                          .update({ 
                            title:promijenjeniEvent.title, });
                            console.log("Uspješno dodano ime");
                            alert('Uspješno ste izmjenili termin');
                            }
    },
    getEvents() {
      var user = firebase.auth().currentUser;
      if (user) {
        db.collection("termini")
          .doc(user.email)
          .collection("Kalendar")
          //.doc('slobodni_termini')
          .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
              const data = change.doc.data();
              let start = moment(data.start.toDate()).format("YYYY-MM-DD HH:mm")
              let end = moment(data.end.toDate()).format("YYYY-MM-DD HH:mm")
              
              if (change.type === "added" && data.start) {
                const termin = {
                  start: start,
                  end: end,
                  id: change.doc.id,
                  title: data.title,
                  content: data.content
                };
                console.log(termin);
                this.events.unshift(termin);
                return;
              }
            });
          });
      }
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

</style>