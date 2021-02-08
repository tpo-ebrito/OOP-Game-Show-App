/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor () {
    this.missed = 0
    this.phrases = [
      new Phrase('The best of both worlds'),
      new Phrase('See eye to eye'),
      new Phrase('Once in a blue moon'),
      new Phrase('A piece of cake'),
      new Phrase('Let the cat out of the bag')
    ]
    this.activePhrase = null
  }

  startGame () {
    document.querySelector('#overlay').style.display = 'none'
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhrasetoDisplay()
  }

  getRandomPhrase () {
    const randomNum = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[randomNum]
  }

  handleInteraction (button) {
    button.disabled = true
    if (!this.activePhrase.phrase.includes(button.textContent)) {
      button.className = 'wrong'
      this.removeLife()
    } else {
      button.className = 'chosen'
      this.activePhrase.showMatchedLetter(button.textContent)

      if (this.checkForWin() === true) {
        this.gameOver()
      }
    }
  }

  checkForWin () {
    return (document.querySelectorAll('.hide').length === 0)
  }

  removeLife () {
    const lives = document.querySelectorAll('.tries')
    lives[this.missed].firstElementChild.src = 'images/lostHeart.png'
    this.missed++
    if (this.missed === 5) {
      this.gameOver()
    }
  }

  gameOver () {
    document.querySelector('#overlay').style.display = 'inherit'
    if (this.checkForWin() === true) {
      document.querySelector('#game-over-message').textContent = 'Congrats! You Won! :D'
      document.querySelector('#overlay').className = 'win'
    } else {
      document.querySelector('#game-over-message').textContent = `Sorry, You Lost. The Phrase: ${this.activePhrase.phrase}`
      document.querySelector('#overlay').className = 'lose'
    }
  }
}
