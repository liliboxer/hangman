function divsBasedOnWord(parentElement, word) {
    const section = document.createElement('section');
    const div = document.createElement('div');

    section.appendChild(div);
    section.appendChild(div);
    section.appendChild(div);

    console.log(section)
}

export default divsBasedOnWord;