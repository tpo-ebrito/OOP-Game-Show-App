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

document.querySelector('#btn__reset').addEventListener('click', (e) => {
  game = new Game()
  game.startGame()
})
