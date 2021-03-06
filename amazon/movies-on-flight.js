/*

You are on a flight and wanna watch two movies during this flight.
You are given int[] movie_duration which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

e.g.
Input
movie_duration: [90, 85, 75, 60, 120, 150, 125]
d: 250

Output from aonecode.com
[90, 125]
90min + 125min = 215 is the maximum number within 220 (250min - 30min)
*/

function solve(movies, duration){
//find all pairs
let pairs = []
for(let i=0;i<movies.length-2;i++){
    const current = movies[i]
    for(let j=i+1; j<movies.length;j++){
      pairs.push(current+ movies[j])
    }
}
const gg = pairs.filter((a)=>a<=(duration-30)).sort((a,b)=>b-a)

return gg.shift()
}

console.log(solve( [90, 85, 75, 60, 120, 150, 125],250))

