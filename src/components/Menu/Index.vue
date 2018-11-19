<template>
    <div class="menu_container container">
        
        <div class="top" v-scroll-reveal.reset>
            <h2>Menu</h2>
        </div>

        <div class="buttons" v-scroll-reveal.reset="{delay:250}">
            <md-button
                v-for="(button, index) in buttons" 
                :key="index" 
                :class="button.active ? 'md-raised' : ''"
                @click="changeMenu(button.name)"
            >{{button.name}}</md-button>
        </div>
        <div class="product_items" v-scroll-reveal.reset="{delay:500}">
            <md-card v-for="(product, index) in products" :key="index" v-show="product.type === activeProduct">
                <md-card-media md-ratio="16:9">
                    <img :src="require(`../../assets/images/products/${product.img}`)" >
                </md-card-media>

                <md-card-header>
                    <h2 class="md-title">{{product.name}}</h2>
                    <div class="md-subhead">
                        <span>$ {{product.price}}</span>
                    </div>
                </md-card-header>

                <md-card-content>
                    {{product.desc}}
                </md-card-content>
            </md-card>
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
                {name: 'salat', active: false},
                {name: 'dessert', active: false},
            ],
            products: [],
            activeProduct: 'pizza'
        }
    },
    created(){
        //fetch json data from http-root url/products
        this.$http.get('products.json')
        .then(response =>{
            response.json()
            .then(data => {
                
                for( let key in data){
                    this.products.push({
                        ...data[key],
                        id: key
                    })
                }
                //this.products = list;
            })
        })
    },
    methods: {
        changeMenu(name){
            //Loop through each button 
            this.buttons.forEach((button)=>{
                if(button.name === name){
                    //Set clicked to true
                    button.active = true
                    this.activeProduct = name;
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
    .md-raised{
        background: #b71c1c!important;
        color: #fff!important;
    }
    .md-card{
        width: 32%;
        margin-bottom: 20px;
    }
    .product_items{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
