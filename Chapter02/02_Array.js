const marvelHeros = ["Thor","IronMan","SpiderMan"]
const dc_heros = ["Superman","Flash","Batman"]
// marvelHeros.push(dc_heros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dc_heros)
// console.log(allHeros);

const all_new_hero = [...marvelHeros, ...dc_heros]
// console.log(all_new_hero);


const newArrays = [5,6,7,83,8,[6,5,4,6,[6,8,88]]]


const realNarr = newArrays.flat(Infinity)
// console.log(realNarr);



// console.log(Array.isArray("Ujjawal"));
// console.log(Array.from("Ujjawal"));
// console.log(Array.from({name:"Ujjawal"})); 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


