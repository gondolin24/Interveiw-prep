
/*
FAVORITE GENRES
Given a map Map<String, List<String>> userMap, where the key 
is a username and the value is a list of user's songs. 
Also given a map Map<String, List<String>> genreMap, where the key is a genre and the value is a list of songs belonging to this genre. The task is to return a map Map<String, List<String>>, where the key is a username and the value is a list of the user's favorite genres. Favorite genre is a genre with the most song.

Example :
Input:

userMap = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
genreMap = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}
Output:
{  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}
Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.
*/
const userMap = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
}
const genreMap = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}
const expected = {  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}
function findGenre(songName){
const genres = Object.keys(genreMap)
for(let i = 0; i< genres.length;i++){
  const genre = genres[i]
      const songs = genreMap[genre]
    const found = songs.find((song)=>song===songName)
    if( found) return genre
}

return ''
}

//some test
console.log(findGenre('song1')==='Rock')
console.log(findGenre('song5')==='Pop')
console.log(findGenre('song6')==='Pop')
//findGenres of allSongs
function genresFromSongList(songList){
const genreList = songList.map((song)=>findGenre(song))
return genreList
}

const testArray = ['song1','song5','song6']
console.log( JSON.stringify(['Rock','Pop','Pop']) === JSON.stringify(genresFromSongList(['song1', 'song5','song6'])))

function findFavoriteGenre(songList){
  const metaData = {}
  const genreList = genresFromSongList(songList)
    let max  = 0
    let maxGenre = []
   const arr = []
   genreList.forEach((genre)=>{
     if(metaData[genre]){
        metaData[genre] = metaData[genre]+1
     
     }else{
       metaData[genre] = 1
     }
      arr.push({
        genre,
        val : metaData[genre]
      })

    if(metaData[genre]>max){
        max=metaData[genre]
       }
   })
 console.log(max)  
   return arr.filter((val)=>val.val===max).map((o)=>o.genre)
}

function solve(){
    let solution = {}
    Object.keys(userMap).forEach((user)=>{
      solution[user] = findFavoriteGenre(userMap[user])
    })
  return solution
}

function compare(a,b){
  return JSON.stringify(a)===JSON.stringify(b)
}
console.log(compare(expected,solve()))
