var eventBus = new Vue();

// component

Vue.component('header-part',{
    template: '#header-part'
})

Vue.component('product-form', {
    template: '#productForm',
    data () {
       return {
        form: {
            name: null,
            price: null,
            quantity: null,
            imagePath: null
        }
       } 
    },
    methods: {
        addProduct(){
            eventBus.$emit('addProduct',this.form);
            this.form = {
                name: null,
                price: null,
                quantity: null,
                imagePath: null
            }
        },
        onChange(e) {
            const file = e.target.files[0];
            this.form.imagePath = URL.createObjectURL(file);
        },
    }
 });

Vue.component('progress-bar',{
    template: '#progressBar',
    data () {
        return {
            count: 0
        }
    },
    created() {
        eventBus.$on('updateProgressBar', (counter) => {
            if(counter >= 11){
                return false
            }else {
                this.count = counter
            }
        })
    }
})

Vue.component('product-list',{
    template: '#productList',
    data () {
        return {
            productList: [],
            counter: 0
        }
    },
    created () {
        eventBus.$on('addProduct',(product) => {
            if(this.counter >= 10) {
                alert('Maximum 10 adet eklenebilir')
            }
            else {
                this.counter++
                this.productList.push(product);
                eventBus.$emit('updateProgressBar',this.counter)
            }
        })
    },
    methods: {
        removeLast() {
            this.productList.pop()
            this.counter--
            eventBus.$emit('updateProgressBar',this.counter)
        }
    }
})

var vm1 = new Vue({
  //  el: "#app", //vm1 mount ile aynı
    data () {
        return {
            show: false
        }
    },
    beforeCreate: function(){
        console.log("beforeCreate")
    },
    created: function(){
        eventBus.$on('updateProgressBar', () => {
            this.show = true
        })
    },
    beforeMount: function(){
        console.log("beforeMount")
    },
    mounted: function(){
        console.log("mounted")
    },
    beforeUpdate: function(){
        console.log("beforeUpdate")
    },
    updated: function(){
        console.log("updated")
    },
    destroyed: function(){
        console.log("destroyed")
    },
    beforeDestroy: function(){
        console.log("beforeDestroy")
    }
})

 vm1.$mount('#app'); // el ile aynı parametre yollanır.


//yukarıdaki ile aynı yapı fakat template barındırıyor.
/* var vm2 = new Vue({
    template: '<h1>Deneme</h1>'
}) */

// vm2.$mount('#vm2');
