<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
     <v-layout>
       <v-text-field v-model="id"/>
       {{wspolnota}}
      <!--<div xs12 v-for="w in wspolnoty">{{w.a}}.</div>-->
     </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import {db} from '../fbase'
  export default {
    data () {
      return {
        id:"d1",
        wspolnota:{}
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
