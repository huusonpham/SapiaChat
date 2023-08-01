class CommonFunctions{

    generateWords(numberWords) {
        const characters = 'abcdefghijklmnopqrstuvwxyz'
        const randomWords = []
        function generateRandomWord() {
            let word = '';
            for (let i = 0; i < 6; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              word += characters[randomIndex];
            }
            return word;
          }
        
          for (let i = 0; i < numberWords; i++) {
            const wordLength = Math.floor(Math.random() * 10) + 1;
            randomWords.push(generateRandomWord());
          }
        
          return randomWords;
    }

    mergeWords(numberOfWords){
        const result = this.generateWords(numberOfWords)
        if (Array.isArray(result)) {
            const mergedString = result.join(' '); // You can use any separator you like instead of an empty string ('')
            
            return mergedString;
          } else {
            throw new Error("The Promise did not resolve to an array.");
          }
    }

    getRandomNumber() {
        return Math.floor(Math.random() * (999999999 - 800000000) ) + 800000000;
    }
}

module.exports = new CommonFunctions()