
<template>
  <div id="app">
    <img src="./assets/matzeva-logo.png">
    <h1>מצב"ה</h1>
    <mzv-list-item v-for="soldier in soldiers" :key="soldier.id" :soldier="soldier"></mzv-list-item>
  </div>
</template>

<script>
import { getMatzevaSoldiers } from './services/soldiers.service'

export default {
  name: 'app',
  data: function(){
    return {
      soldiers: getMatzevaSoldiers()
    }
  }
}
</script>
