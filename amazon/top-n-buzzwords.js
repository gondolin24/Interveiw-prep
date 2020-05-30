const quotes = [
"Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
"The new Elmo dolls are super high quality",
"Expect the Elsa dolls to be very popular this year, Elsa!",
"Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
"For parents of older kids, look into buying them a drone",
"Warcraft is slowly rising in popularity ahead of the holiday season"
];
const numToys = 6
const topToys = 2
const toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"]
const numQuotes = 6

const expected = ["elmo", "elsa"]

function findWord(keyWord){
const countList =  quotes.map((quote)=>{
  const wordArray = quote.split(' ')
  const keyWords = wordArray.filter((word)=>word.toLowerCase().includes( keyWord.toLowerCase()))
  return keyWords.length
})
return countList.reduce((a,b)=>a+b,0)
}

console.log(findWord('elmo')===4)

function solve(){
  let metaData = []
  let max = 0
  toys.map((name)=>{
    const count = findWord(name)
    if(count> max) max = count

    metaData.push({
      name,
      count
    })
  })

  return metaData.filter((o)=>o.count===max).map((o)=>o.name)
}
console.log (JSON.stringify(expected)===JSON.stringify(solve()))
