<template>
    <div>
        <md-list>
            <md-list-item>
                <md-avatar>
                    <img :src="soldier.image"
                         alt="avatar">
                </md-avatar>
                <span>{{soldier.name}}</span>
                <div class="md-list-action">
                    <md-checkbox v-if="soldier.isKnown"
                                 v-model="soldier.isHere"
                                 class="md-primary"></md-checkbox>
    
                    <md-checkbox v-else
                                 v-model="soldier.isKnown"
                                 class="md-primary">?</md-checkbox>
                </div>
            </md-list-item>
        </md-list>
    </div>
</template>

<script>
export default {

    methods:
    {
    },
    props: {
        soldier: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>

</style>

