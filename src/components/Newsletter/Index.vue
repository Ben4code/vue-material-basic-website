<template>
    <div class="container newsl_container">
        <h2>Join our newsletter</h2>
        <div class="form">
            <input type="text" v-model="email">
            <button @click="submitHandler">Subscribe</button>
        </div>
        <div class="error_label">
            <div>{{error}}</div>
        </div>
        <div class="success_label">
            <div>{{success}}</div>
        </div>
        <div class="small">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolore sequi, quidem distinctio fugit dignissimos! Incidunt voluptatibus ullam odio sed fugiat ipsam, ipsum soluta atque itaque ratione quae ex eum, hic ipsa corporis beatae dolorum repudiandae in vero voluptas distinctio praesentium? Quibusdam voluptatibus earum voluptate nobis saepe suscipit architecto itaque?</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            error: '',
            success: '',
            
        }
    },
    methods: {
        validate(email){
            let valid = [true, ''];

            if(!/\S+@\S+\.\S+/.test(this.email)){
                valid = [false, 'Enter a valid email.']
            }

            if(email === ''){
                valid = [false, 'Email field is empty.']
            }
            return valid;
        },
        submitHandler(){
            let status = this.validate(this.email);
            if(status[0]){
                this.error = '';
                this.addEmail(this.email);
            }else{
                this.error = status[1];
            }
        },
        addEmail(email){
            this.$http.get(`users.json?orderBy="email"&&equalTo="${email}"`)
            .then(response =>{
                if(Object.getOwnPropertyNames(response.data).length === 0){
                    this.$http.post('users.json', {email: this.email})
                    .then( () => {
                        this.success = "Thank you for signing up for our newsletter.";
                        this.email = '';
                    })
                }else{
                    this.success = "Your email is already on our list.";
                }
            })
            this.clearSuccess();
        },
        clearSuccess(){
            setTimeout(()=>{
                this.success = ''
            }, 5000)
        }
    }
}
</script>

<style>

</style>
