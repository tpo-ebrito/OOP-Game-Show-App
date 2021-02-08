/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase()
// const game = new Game()

// const phrase = new Phrase('Life is like a box of chocolates')
// console.log(`Phrase = phrase: ${phrase.phrase}`)

// const game = new Game()

// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
// })

// const logPhrase = (phrase) => {
//   console.log(`Phrase - phrase: `, phrase.phrase)
// }
// const game = new Game ();

// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())

// const game = new Game()
// game.getRandomPhrase().addPhrasetoDisplay()

// const game = new Game()
// game.startGame()
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`)

let game
const buttons = document.querySelectorAll('.key')

document.querySelector('#btn__reset').addEventListener('click', (e) => {
  const ul = document.querySelector('ul')
  while (ul.firstElementChild) {
    ul.removeChild(ul.firstElementChild)
  }

  buttons.forEach(button => {
    button.disabled = false
    button.className = 'key'
  })

  const lives = document.querySelectorAll('.tries')
  lives.forEach(life => { life.firstElementChild.src = 'images/liveHeart.png' })

  game = new Game()
  game.startGame()
})

buttons.forEach(button => button.addEventListener('click', (e) => {
  game.handleInteraction(e.target)
  // console.log(button.textContent)
  // console.log(e.target)
}))

document.addEventListener('keyup', (e) => {
  buttons.forEach(button => {
    if (button.textContent === e.key) {
      game.handleInteraction(button)
    }
  })
//   console.log(`key = ${e.key}, code = ${e.code}`)
})
