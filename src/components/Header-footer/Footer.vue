<template>
    <footer>
        <div class="container">
            <img :src="logoIcon" alt="logo">
            <div class="contact">
                <div>Call Us</div>
                <div>03842-4332</div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '@/assets/images/logo.png'



export default {
    data(){
        return {
            logoIcon: Logo
        }
    }
}
</script>
<style>

</style>
