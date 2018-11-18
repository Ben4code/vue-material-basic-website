<template>
    <div class="menu_container container">
        <div class="top">
            <h2>Menu</h2>
        </div>
        <div class="buttons">
            <md-button
                v-for="(button, index) in buttons" 
                :key="index" 
                :class="button.active ? 'md-raised' : ''"
                @click="changeMenu(button.name)"
            >{{button.name}}</md-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            buttons: [
                {name: 'pizza', active: true},
                {name: 'burgers', active: false},
                {name: 'salad', active: false},
                {name: 'desert', active: false},
            ]
        }
    },
    methods: {
        changeMenu(name){
            //Loop through each button 
            this.buttons.forEach((button)=>{
                if(button.name === name){
                    //Set clicked to true
                    button.active = true    
                }else{
                    //Set unclicked to false
                    button.active = false
                }  
            })
        }
    }
}
</script>

<style>

</style>
