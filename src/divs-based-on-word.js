function divsBasedOnWord(parentElement, word) {
    for(let i = 0; i < word.length; i++) {
        const div = document.createElement('div');
        
        const emptyWord = parentElement.appendChild(div);
        
        console.log(emptyWord);
    }
  
}

export default divsBasedOnWord;