<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <div id="home">
        <router-view></router-view>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">

        </div>
        <div class="col-sm-12 col-md-4">

        </div>
        <div class="col-sm-12 col-md-4">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
export default {
  components:{
    appHeader: Header
  }
}
</script>

<style>
#home{
  padding-top: 10%;
}
</style>
