const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(leoBalance + sarahBalance)
const leo = `${leoName}\t${leoSurname}(Owed  R ${sarahBalance})`
const sarah = `\n${sarahName}${sarahSurname}\t(Owed  R ${sarahBalance})\n`
const total = "Total amount owed: "
const result = leo + sarah + divider + total + owed + divider

console.log(result)