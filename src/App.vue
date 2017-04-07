
<template>
  <div id="app">
    <img src="./assets/matzeva-logo.png">
    <h1>מצב"ה</h1>
    <button @click="doIt">CLICK ME FIREBASE</button>
    <div>
      <mzv-speed-dialer></mzv-speed-dialer>
      <mzv-speed-dialer></mzv-speed-dialer>
      <mzv-speed-dialer></mzv-speed-dialer>
    </div>
    <mzv-list-item v-for="(soldier,index) in soldiers"
                   :key="soldier.name"
                   :image="soldier.image"
                   :name="soldier.name"
                   :status="soldier.status"
                   :id="index"
                   class="small"
                   @statusChanged="updateStatus($event)"></mzv-list-item>
  </div>
</template>

<script>
import { getMatzevaSoldiers, getMatzevaSoldiersFromFirebase, updateSoldierStatus } from './services/soldiers.service'
import listItme from './components/Mzv-list-item.vue'

export default {
  name: 'app',
  data: function () {
    return {
      soldiers: {}
    }
  },
  components: { 'mzv-list-item': listItme },
  methods: {
    updateStatus: function (newStatus) {
      this.soldiers[newStatus.id].status= newStatus.status;
      updateSoldierStatus(newStatus);

  },
    doIt: function () {
      // var rootRef = firebase.database().ref();
      // var starCountRef = firebase.database().ref('/imageUrl');
      // console.log(starCountRef);
      // starCountRef.on('value', function (snapshot) {
      //   console.log('here');
      //   alert(snapshot.val());
      // });

      getMatzevaSoldiersFromFirebase().then((value) => this.soldiers = value);


    }
  },
  mounted() {
    getMatzevaSoldiersFromFirebase().then((value) => this.soldiers = value);
  }
}
</script>
<style scoped>
.small {
  flex: 0 0 230px
}
</style>
