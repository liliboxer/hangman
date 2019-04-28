function divsBasedOnWord(parentElement, word) {
    for(let i = 0; i < word.length; i++) {
        const div = document.createElement('div');
        
        parentElement.appendChild(div);
    
    }
  
}

export default divsBasedOnWord;