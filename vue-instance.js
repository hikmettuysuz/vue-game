
// component
Vue.component('comp', {
    template: '<button>You clicked me times.</button>'
 });



var data = {
    hello: "Hello World"
}
var vm1 = new Vue({
    //el: "#vm1",
    data: data,
    methods: {
        clicked: function(){
            this.$refs.myButton.innerText = "as";
        },
        clicked2: function(){
            this.hello = "Hii"
        }
    },
    beforeCreate: function(){
        console.log("beforeCreate")
    },
    created: function(){
        console.log("created")
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

vm1.$mount('#vm1'); // el ile aynı parametre yollanır.


//yukarıdaki ile aynı yapı fakat template barındırıyor.
var vm2 = new Vue({
    template: '<h1>Deneme</h1>'
})

vm2.$mount('#vm2');
