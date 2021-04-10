function randomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHP: 100,
            monsterHP: 100,
        };
    },
    methods:{
        monsterAttack(){
            const damage = randomValue(8, 14);
            this.monsterHP -= damage;
            this.playerAttack();
        },
        playerAttack(){
            const damage = randomValue(10,18);
            this.playerHP -= damage;
        }
    },
    computed:{
        monsterBar(){
            return{width: this.monsterHP + '%'}
        },
        playerBar(){
            return{width: this.playerHP + '%'}
        }
    },
    watch:{

    }
})

app.mount('#game');