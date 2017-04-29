<template>
    <div id="app">
        <mzv-header></mzv-header>
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
    import {getMatzevaSoldiers, getMatzevaSoldiersFromFirebase, updateSoldierStatus} from '../services/soldiers.service'
    import listItem from './List-item.vue';
    import header from './Header.vue';
    export default {
        name: 'app',
        data() {
            return {
                soldiers: {}
            }
        },
        components: {
            'mzv-list-item': listItem,
            'mzv-header': header
        },
        methods: {
            updateStatus(newStatus) {
                this.soldiers[newStatus.id].status = newStatus.status;
                updateSoldierStatus(newStatus);

            },
        },
        mounted() {
            getMatzevaSoldiersFromFirebase().then((value) => this.soldiers = value);
        }
    };
</script>
<style scoped>

</style>
