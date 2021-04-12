function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
      counter: 0,
      winner: null,
      
    };
  },
  computed: {
    monsterBar() {
        if(this.monsterHP < 0){
            return {width: '0%'}
        }
        return { width: this.monsterHP + "%" };
    },
    playerBar() {
        if(this.playerHP < 0){
            return {width: '0%'}
        }
        return { width: this.playerHP + "%" };
    },
    specialUsing() {
      return this.counter % 3 !== 0;
    },
  },
  watch:{
    playerHP(value){
      if(value <= 0 && this.monsterHP <= 0){
          this.winner = 'draw';
      }else if(value <= 0){
          this.winner = 'monster';
      }
    },
    monsterHP(value){
      if(value <= 0 && this.playerHP <= 0){
          this.winner = 'draw';
      }else if(value <= 0){
          this.winner = 'player';
      }
    }
  },
  methods: {
    monsterAttack() {
      this.counter++;
      const damage = randomValue(8, 14);
      this.monsterHP -= damage;
     // console.log(this.monsterHP);
      
      this.playerAttack();
    },
    playerAttack() {
      const damage = randomValue(10, 18);
      this.playerHP -= damage;
      

     // console.log(this.playerHP);
    },
    playerHeal() {
      this.counter++;
      const heal = randomValue(15, 20);
      this.playerHP += heal;
      this.playerAttack();
    },
    specialAttack() {
      this.counter++;
      const damage = randomValue(15, 30);
      this.monsterHP -= damage;
      this.playerAttack();
    },
    startNewGame(){
      this.playerHP = 100;
      this.monsterHP = 100;
      this.counter = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrenderGame(){
      this.winner = "monster";
    },
    
  },
  
});

app.mount("#game");
