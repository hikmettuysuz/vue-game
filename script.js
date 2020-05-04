/*
Bölüm1
new Vue({
    el:"#exercise",
    data: {
        name: "Hikddmet",
        age: 23,
        link: "https://kenttv.net/uploads/images/image_750x_5dff7aa2e7046.jpg",
        deneme: "",
        aa:"vox1",
        show:true,
        obj:[],
    },
    methods: {
      carp: function(){
              return age = this.age * 5   
        },
      fonk: function(){
          return Math.random(0,1);
      },
      clicked: function(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.obj = json)
      }
    },
    computed: {
        deneme2: function(){
            console.log("calisti")
            const value = this.age;
            return this.age;
        },
        isEmpty: function(){
            console.log(this.obj.length);
            return this.obj.length > 0
        }
    },
    watch: {
        age: function(){
            console.log("dewğişti")
        }
    }
  });

  */

  new Vue({
      el: "#yarisma",
      data: {
          isGameEnd: false,
          style: "progresBar",
          myHealth: 100,
          computerHealth: 100,
          gameLogs:[],
      },
      methods: {
          saldiri: function(){
              let randomAttackValue = Math.floor(Math.random() * 11);
              let randomCompAttackValue = Math.floor(Math.random() * 11); 
              this.myHealth=this.myHealth-randomAttackValue;
              this.computerHealth=this.computerHealth-randomCompAttackValue;
              this.bindLog(randomAttackValue,randomCompAttackValue);
          },
          reset: function(){
              this.myHealth=100;
              this.computerHealth=100;
              this.isGameEnd = false;
              this.gameLogs=[];
          },
          giveUp: function(){
              this.myHealth = 0;
          },
          bindLog: function(randomAttackValue,randomCompAttackValue){
                this.gameLogs.push({"type":"attack","attackValue":randomAttackValue});
                this.gameLogs.push({"type":"compAttack","attackValue":randomCompAttackValue})
          }
      },
      watch: {
        myHealth: function(value){
            setTimeout(function(){
                if(value == 0){
                    alert("game over! you lost!");
                } 
            },500);
          
        },
        computerHealth: function(value){
            setTimeout(function(){
                if(value == 0){
                    alert(" you won!");
                 } 
            },500);
        }
      },
      computed: {
          myHealtComp: function(){
            if(this.myHealth <= 0){
                this.myHealth = 0;
                this.isGameEnd = true;
            } 
            return this.myHealth;
          },
          computerComp: function(){
            if(this.computerHealth <= 0){
                this.computerHealth = 0;
                this.isGameEnd = true;
            } 
            return this.computerHealth;
        }
      }
  })

