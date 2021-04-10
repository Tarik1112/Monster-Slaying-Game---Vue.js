function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHP: 100,
      monsterHP: 100,
      counter: 0,
    };
  },
  computed: {
    monsterBar() {
        if(this.monsterHP < 0){
            return {width: '0%'}
        }else{
            return { width: this.monsterHP + "%" };
        }
    },
    playerBar() {
        if(this.playerHP < 0){
            return {width: '0%'}
        }else{
            return { width: this.playerHP + "%" };
        }
    },
    specialUsing() {
      return this.counter % 3 !== 0;
    },
  },
  methods: {
    monsterAttack() {
      this.counter++;
      const damage = randomValue(8, 14);
      this.monsterHP -= damage;
      this.playerAttack();
    },
    playerAttack() {
      const damage = randomValue(10, 18);
      this.playerHP -= damage;
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
  },
  watch: {},
});

app.mount("#game");
