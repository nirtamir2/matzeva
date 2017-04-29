<template>
        <md-layout md-row >
            <md-button @click.native="setNotHere"
                       :class="{'not-here': status === 'NOT_HERE'}"
                       class="md-icon-button md-raised">
                <md-icon md-src="../../src/assets/close.svg">X</md-icon>
            </md-button>
            <md-button @click.native="setHere"
                       :class="{'here': status === 'HERE'}"
                       class="md-icon-button md-raised">
                <md-icon md-src="../../src/assets/check.svg">V</md-icon>
            </md-button>
        </md-layout>
</template>
<script>
const status = ['HERE', 'NOT_HERE', 'UNKNOWN'];
export default {
    methods: {
        setHere: function () {
            this.$emit('statusChanged', 'HERE');
        },
        setNotHere: function () {
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
</style>
