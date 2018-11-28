<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal.reset="{delay:200, scale:2}">
                <h1>Hungry?</h1>
            </div>
            <div class="second" v-scroll-reveal.reset="{delay:400, afterReveal:()=>{
                    secondAnim = true
                }}">
                <div v-if="secondAnim">
                    <comp-anime></comp-anime>
                </div>
            </div>

            <div class="third" v-scroll-reveal.reset="{delay:600, scale:2}">
                <span>Give us your money </span> <span>1234-434734</span>
            </div>
        </div>
    </div>
</template>

<script>
import compAnime from "./Anime";

export default {
    data(){
        return{
            secondAnim: false
        }
    }, 
  components: {
    compAnime
  }
};
</script>

<style>
</style>
