<template>
    <div>
        <md-list>
            <md-list-item>
                <md-avatar>
                    <img :src="avatar"
                         alt="avatar">
                </md-avatar>
                <span>{{this.firstname}} {{this.lastname}}</span>
                <md-button class="md-icon-button md-list-action">
    
                    <md-icon v-if="!known"
                             class="md-primary"
                             md-iconset="fa fa-question">question</md-icon>
                    <md-icon v-else-if="isHere"
                             class="md-primary"
                             md-iconset="fa fa-check">check</md-icon>
                    <md-icon v-else
                             class="md-primary"
                             md-iconset="fa fa-times">times</md-icon>
    
                </md-button>
            </md-list-item>
        </md-list>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            isHere: !true,
            known: true,
            info: 'he is about to leave',
            avatar: 'https://placeimg.com/40/40/people/1',
            firstname: 'Alex',
            lastname: 'Nelson'
        }
    },
    methods:
    {
    }
}
</script>

