<template>
    <div>
        <md-list>
            <md-list-item>
                <md-avatar>
                    <img :src="image"
                         alt="avatar">
                </md-avatar>
                <span>{{name}}</span>
                <transition name="fade">
                <md-input-container v-if="status ==='NOT_HERE'" class="small">
                    <label>reason</label>
                    <md-input md-inline
                              v-model="initialValue"></md-input>
                </md-input-container>
                </transition>
                <div class="md-list-action">
                    <mzv-status-buttons-panel :status="status"
                                              @statusChanged="changeStatus($event)">
                    </mzv-status-buttons-panel>
                </div>
            </md-list-item>
        </md-list> 
    </div>
</template>

<script>
export default {
    name: 'mzv-list-item',
    methods:
    {
        changeStatus: function(value)
        {
            console.log('emitting... ' + value)
            this.$emit('statusChanged', {id : this.id, status : value});
        }
        // setHere: function () {
        //     this.status = 'HERE';
        // },
        // setNotHere: function () {
        //     this.status = 'NOT_HERE';
        // }
    },

    props: {
        image: { required: false, type: String, default: 'src/assets/default-avatar.jpg' },
        name: { required: false, type: String, default: 'default name' },
        status: { required: false, type: String, default: 'UNKNOWN' },
        id: { required: false, type: Number, default: -1 },
    },
    data: function () {
        return {
            initialValue: '',

        };
    },
    computed: function () {
        return {
        }
    }
}
</script>
<style scoped>
.redColor {
    background-color: red;
}

.greenColor {
    background-color: green;
}
.small{
    flex: 10;
    
    /*flex-grow: 1;*/
    /*flex-shrink: 1;*/
    /*flex-basis: 0%*/
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}


</style>


