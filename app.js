// 1a
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
// 1b
    quote: function(){
        return `Dishonor! Dishonor on your whole family!`
    },
    // 1c
    storyline: function(){
        return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process.`
    }
}

//2a
const tangled = {
    title: `Tangled` ,
    main: `Rapunzel`,
    // 2b
    quote: function(){
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
    },
    //2c
    storyline: function(){
        return `In ${this.title}, The magically long-haired ${this.main} has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.`
    }
}
// 3a
function DisneyMovie (title, main){
    this.title = title;
    this.main = main;
}
// 3b
DisneyMovie.prototype.storyline = function(){
    return `The Movie ${this.title} is about ${this.main}`
}

// 3c
const mulan1 = new DisneyMovie(`mulan`, `Fa Mulan`);
console.log(mulan1);
console.log(mulan1.storyline());

// 3d
const tangled1 = new DisneyMovie(`tangled`, `Rapunzel`);
console.log(tangled1);
console.log(tangled1.storyline());

// 4a
class DM{
    constructor(title, main){
        this.title = title;
        this.main = main;
    }
    // 4b
    storyline(){
        return `The Movie ${this.title} is about ${this.main}`;
    }
    // 4e
    static loveDisneyMovies(){
        return `I Love Disney Movies`
    }
}
// 4c
const mulan2 = new DM(`Mulan`, `Fa Mulan`)
console.log(mulan2);
console.log(mulan2.storyline());

// 4d
const tangled2 = new DM(`Tangled`, `Rapunzel`);
console.log(tangled2);
console.log(tangled2.storyline());

// 4f
console.log(DM.loveDisneyMovies());

// 5a
class DMcast extends DM {
    // 5b
    constructor(title, main, cast){
        // 5c
        super(title, main);
        this.cast = cast
    }
    // 6a
    static create(title, main, cast){
        return new DMCast(title, main, cast);
    }
}
// 5d
const mulan3 = new DMcast(
    `Mulan`,
    `Fa Mulan`,
    {
        mulan: `Ming-Na Wen`,
        mushu: `Eddie Murphy`,
        shang: `BD Wong`,
        theEmperor: `Pat Morita`
    }
)

// 5e
const rapunzel3 = new DMcast(
    `Tangled`,
    `Rapunzel`,
    {
        rapunzel: `Mandy Moore`, 
        flynnRider: `Zachary Levi`, 
        motherGothel: `Donna Murphy`
    }
)

// BONUS
// 6b
const moana = DMcast.create(
    `Moana`,
    `Moana of Motunui`,
    {
        moana: `Auli'i Cravalho`, 
        maui: `Dwayne Johnson`, 
        grammaTala: `Rachel House`, 
        chiefTui: `Temuera Morrison`
    }
)

// 6c

console.log(moana);
console.log(moana.storyline());

