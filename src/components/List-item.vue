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
                    <md-input-container v-if="status === 'NOT_HERE'" :style="'flex: 10'">
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
    import statusPanel from './Status-buttons-panel.vue';
    export default {
        name: 'mzv-list-item',
        methods: {
            changeStatus(value) {
                this.$emit('statusChanged', {id: this.id, status: value});
            }
        },

        props: {
            image: {required: false, type: String, default: 'src/assets/default-avatar.jpg'},
            name: {required: false, type: String, default: 'default name'},
            status: {required: false, type: String, default: 'UNKNOWN'},
            id: {required: false, type: Number, default: -1},
        },
        components: {
            'mzv-status-buttons-panel': statusPanel
        },
        data() {
            return {
                initialValue: '',

            };
        },
        computed() {
            return {}
        }
    };
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
    {
        opacity: 0
    }


</style>


