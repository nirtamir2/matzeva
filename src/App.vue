<template>
    <div id="app">

        <md-whiteframe md-elevation="2">
            <md-toolbar>
                <h1 class="md-title">מצב"ה</h1>
            </md-toolbar>
            <img src="./assets/matzeva-logo.png">
        </md-whiteframe>

        <mzv-list-item v-for="(soldier,index) in soldiers"
                       :key="soldier.name"
                       :image="soldier.image"
                       :name="soldier.name"
                       :status="soldier.status"
                       :id="index"
                       @statusChanged="updateStatus($event)"></mzv-list-item>

    </div>
</template>

<script>
    import {getMatzevaSoldiers, getMatzevaSoldiersFromFirebase, updateSoldierStatus} from './services/soldiers.service'
    import listItem from './components/Mzv-list-item.vue'

    export default {
        name: 'app',
        data: function () {
            return {
                soldiers: {}
            }
        },
        components: {'mzv-list-item': listItem},
        methods: {
            updateStatus: function (newStatus) {
                this.soldiers[newStatus.id].status = newStatus.status;
                updateSoldierStatus(newStatus);

            },
        },
        mounted() {
            getMatzevaSoldiersFromFirebase().then((value) => this.soldiers = value);
        }
    }
</script>
<style scoped>

</style>
