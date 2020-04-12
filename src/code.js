function onOpen() {
  var ui = DocumentApp.getUi()
  var fateMenu = ui.createMenu("Fate Dice")
  fateMenu.addItem("Roll Mediocre (+0)", "rollMediocre")
  fateMenu.addSeparator()
  fateMenu.addItem("Roll Average (+1)", "rollAverage")
  fateMenu.addItem("Roll Fair (+2)", "rollFair")
  fateMenu.addItem("Roll Good (+3)", "rollGood")
  fateMenu.addItem("Roll Great (+4)", "rollGreat")
  fateMenu.addItem("Roll Superb (+5)", "rollSuperb")
  fateMenu.addItem("Roll Fantastic (+6)", "rollFantastic")
  fateMenu.addItem("Roll Epic (+7)", "rollEpic")
  fateMenu.addItem("Roll Legendary (+8)", "rollLegendary")
  fateMenu.addSeparator()
  fateMenu.addItem("Roll Poor (-1)", "rollPoor")
  fateMenu.addItem("Roll Terrible (-2)", "rollTerrible")
  fateMenu.addToUi()

  var standardMenu = ui.createMenu("Standard Dice")
  standardMenu.addItem("Roll D4", "rollD4")
  standardMenu.addItem("Roll D6", "rollD6")
  standardMenu.addItem("Roll D8", "rollD8")
  standardMenu.addItem("Roll D10", "rollD10")
  standardMenu.addItem("Roll D12", "rollD12")
  standardMenu.addItem("Roll D20", "rollD20")
  standardMenu.addItem("Roll D100", "rollD100")
  standardMenu.addToUi()
}

// Roll a single fate die.
function rollFateDie() {
  return Math.floor(Math.random() * 3) - 1
}

// Roll sided dice
function rollDie(sides) {
  return Math.floor(Math.random() * sides + 1)
}

// Rolls four dice and added a specified bonus.
function rollFateDiceWithBonus(bonus) {
  var email = Session.getActiveUser().getEmail()
  var cursor = DocumentApp.getActiveDocument().getCursor()
  var result = 0
  var text = `User ${email} is rolled Fate dice, and they rolled a `
  for (var i = 0; i < 3; i++){
    roll = rollFateDie()
    result += roll
    text += `${roll}, `
  }
  roll = rollFateDie()
  result += roll
  text += `${roll}.\n`
  result += bonus
  text +=`Adding a modifier of ${bonus}, gives us a total of ${result}.\n`
  cursor.insertText(text)
}

// Rolls sided die.
function rollSidedDie(sides) {
  var email = Session.getActiveUser().getEmail()
  var cursor = DocumentApp.getActiveDocument().getCursor()
  var roll = rollDie(sides)
  var text = `User ${email} is rolled a D${sides}, and they rolled a ${roll}.\n`
  cursor.insertText(text)
}

// Fate Dice Menu Options
function rollMediocre() { rollFateDiceWithBonus(0) }
function rollAverage() { rollFateDiceWithBonus(1) }
function rollFair() { rollFateDiceWithBonus(2) }
function rollGood() { rollFateDiceWithBonus(3) }
function rollGreat() { rollFateDiceWithBonus(4) }
function rollSuperb() { rollFateDiceWithBonus(5) }
function rollFantastic() { rollFateDiceWithBonus(6) }
function rollEpic() { rollFateDiceWithBonus(7) }
function rollLegendary() { rollFateDiceWithBonus(8) }
function rollPoor() { rollFateDiceWithBonus(-1) }
function rollTerrible() { rollFateDiceWithBonus(-2) }

// Standard Dice Menu Options
function rollD4() { rollSidedDie(4)}
function rollD6() { rollSidedDie(6)}
function rollD8() { rollSidedDie(8)}
function rollD10() { rollSidedDie(10)}
function rollD12() { rollSidedDie(12)}
function rollD20() { rollSidedDie(20)}
function rollD100() { rollSidedDie(100)}
