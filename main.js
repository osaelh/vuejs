new Vue({
    el: '#app',
    data: {
        title: 'some title',
        name: 'garp',
        url: 'youtube.com',
        classes: [
            'one',
            'two'
        ],
        wage: 10,
        showName: true,
        showAge: true,
        ninjas: ['scorpion','sub-zero','shao kahn'],
        yonkos: [
            {name: 'shanks', pirateGroupe: 'the red hair pirates'},
            {name: 'blackbeard', pirateGroupe: 'blackbeard pirates'},
            {name: 'kaido', pirateGroupe: 'the beasts pirates'},
            {name: 'big mom', pirateGroupe: 'big moms pirates'}
        ]
    },
    methods: {
        greet(){
            return `hello there ${this.name}`
        },
        changeWage(amount){
            this.wage += amount

        },
        logMessage(){
            console.log('hello there')
        },
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
});

