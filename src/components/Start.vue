<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
     <v-layout row wrap>
       <v-flex xs6>
         <v-text-field v-model="id"/>
       </v-flex>
       <v-flex xs6>
        {{wspolnota}}
       </v-flex>
       <v-flex xs12 v-for="w in (wspolnoty)" :key="w._id">
         {{w}}
       </v-flex>
      <!--<div xs12 v-for="w in wspolnoty">{{w.a}}.</div>-->
     </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import {db} from '../main'
  export default {
    data () {
      return {
        id:"d1",
        wspolnoty:[]
      }
    },
    watch: {
      id(v) {
        this.$binding('wspolnota',db.collection('wspolnoty').doc(this.id))
      }
    },
    firestore() {
      return {
        wspolnota: db.collection('wspolnoty').doc(this.id)
      }
    },
    // created() {
    //   this.wspolnota = db.doc('wspolnoty/d1').get()
    // },
    mounted() {
      db.collection('wspolnoty').get().then(r => r.forEach(d => this.wspolnoty.push({ ...d.data(),_id:d.id } )))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
