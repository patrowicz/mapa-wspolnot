<template>
  <v-stepper v-model="e1" vertical>
    <v-stepper-step step="1" :complete="e1 > 1">Wyszukaj siedzibę</v-stepper-step>
    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5">
        <VueGoogleAutocomplete
          id="map"
          ref="address"
          classname="form-control"
          placeholder="Wpisz adres"
          country="PL"
          @placechanged="adressHasChanged"
          types="(church)"
        ></VueGoogleAutocomplete>

        <v-btn/>
      </v-card>

      <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="2" :complete="e1 > 2">Name of step 2</v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="3">Name of step 3</v-stepper-step>
    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="e1 = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

  </v-stepper>
</template>

<script>
  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  export default {
      name: "NowaWspolnota",
      components: {
        VueGoogleAutocomplete
      },
      data() {
        return {
          e1:"1"
        }
      },
      methods: {
        adressHasChanged(addr) {
          console.log(addr)
        },
        myAddress() {
          this.$refs.address.geolocate()
        }
      }
  }
</script>

<style scoped>

</style>
