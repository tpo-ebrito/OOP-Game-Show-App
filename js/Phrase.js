/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase()
  }

  addPhrasetoDisplay () {
    const ul = document.querySelector('#phrase').firstElementChild
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement('li')
      const letter = this.phrase.charAt(i)

      if (letter !== ' ') {
        li.className = 'space'
      } else {
        li.className = `hide letter ${letter}`
        li.textContent = letter
      }
      ul.appendChild(li)
    }
  }

  checkLetter (letter) {
    return this.phrase.includes(letter)
  }

  showMatchedLetter (letter) {
    letter = letter.toLowerCase()
    const elements = document.querySelectorAll(`.hide letter ${letter}`)
    elements.forEach(element => letter.classList.replace(`hide letter ${letter}`, `show letter ${letter}`))
  }
}
