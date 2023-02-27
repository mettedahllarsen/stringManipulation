Vue.createApp({ 
    data() {
        return {
            word: null,
            words: [],
            result: [],
        }
    },
    methods: {
        reverse(word) {
            return word.split('').reverse().join('')
        },

        show() {
            this.words.push(this.word)
            this.words.push(this.word.toLowerCase())
            this.words.push(this.word.toUpperCase())
            this.words.push(this.word.charAt(0).toUpperCase()+this.word.slice(1))
            this.words.push(this.word.slice(0, this.word.length-1) + this.word.charAt(this.word.length-1).toUpperCase())
            this.words.push(this.reverse(this.word))
            this.result = this.words
            this.words = []
        }
    },

}).mount("#app") 
