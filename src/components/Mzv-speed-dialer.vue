<template>
    <div>
        <md-speed-dial md-open="click"
                       md-direction="right"
                       md-theme="light-blue">
            <md-button class="md-fab"
                       md-fab-trigger>
                <md-icon md-icon-morph
                         :class="{fa: true,
                        'fa-check': status==='HERE',
                        'fa-close': status==='NOT_HERE',
                        'here':status==='UNKNOWN'}"></md-icon>
                <md-icon>add</md-icon>
            </md-button>
    
            <md-button class="md-fab md-primary md-clean">
                <md-icon>check</md-icon>
            </md-button>
    
            <md-button class="md-fab md-primary md-clean">
                <md-icon>close</md-icon>
            </md-button>
        </md-speed-dial>
    
    </div>
</template>
<script>
const status = ['HERE', 'NOT_HERE', 'UNKNOWN'];
export default {
    methods: {
        setHere: function () {
            // this.status = 'HERE';
            this.$emit('statusChanged', 'HERE');
        },
        setNotHere: function () {
            // this.status = 'NOT_HERE';
            this.$emit('statusChanged', 'NOT_HERE');
        }
    },
    props: {
        status: {
            required: false,
            default: function () {
                return 'UNKNOWN'
            }
        }
    }
}
</script>
<style scoped>
.here {
    background-color: lightgreen;
}

.not-here {
    background-color: lightcoral;
}

.unknown {
    background-color: lightgray;
}
</style>
