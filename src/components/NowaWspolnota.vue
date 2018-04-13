<template>
  <v-stepper v-model="e1" vertical>
    <v-stepper-step step="1" :complete="e1 > 1">Wyszukaj siedzibę</v-stepper-step>
    <v-stepper-content step="1">
      <v-card class="mb-5" flat>
        <v-layout row wrap>
        <v-flex xs12>
          <VueGoogleAutocomplete
            id="map"
            style="width: 100%"
            ref="address"
            placeholder="Wpisz adres"
            country="PL"
            types="geocode"
            @placechanged="adressHasChanged"
            @error="(e) => log(e)"
            @no-results-found="(e)=>log(e)"
          ></VueGoogleAutocomplete>
          <!--<v-btn @click="myAddress">Mój adres</v-btn>-->
        </v-flex>
          <v-flex>
            <v-text-field label="Szukaj" v-model="search"></v-text-field><v-btn @click="doSearch"><v-icon>search</v-icon></v-btn>
          </v-flex>
          <v-flex xs12 sm6 lg3>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>Miejscowość:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{address1.locality}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Ulica:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{address1.route}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Numer:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{address1.street_number}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Województwo:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{address1.administrative_area_level_1}}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Kod pocztowy:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{address1.postal_code}}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>

        </v-layout>
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
  import axios from 'axios'
  export default {
      name: "NowaWspolnota",
      components: {
        VueGoogleAutocomplete
      },
      data() {
        return {
          e1:"1",
          address1:{},
          search:""
        }
      },
      methods: {
        log(e) {
          console.log(e)
        },
        doSearch() {
          axios.get(
            "https://maps.googleapis.com/maps/api/geocode/json",
            {
              params: {
                key:"AIzaSyCPrCk1bG2N926qzq_U8502gBmJf2iR0Bo",
                address:this.search
              }
            }
          ).then(resp => {
            console.log(resp.data)
          },err => {
            console.log(err)
          })
        },
        adressHasChanged(addr) {
          console.log(addr)
          this.address1=addr
        },
        myAddress() {
          this.$refs.address.geolocate()
        }
      }
  }
</script>

<style scoped>

</style>
