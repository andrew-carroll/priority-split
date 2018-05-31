const prioritySplit = (phrase, charlimit, ...patterns) => {
    if(typeof(phrase) !== "string" || typeof(charlimit) !== "number") {
        throw new TypeError("Invalid arguments: want prioritySplit(phrase : string, charlimit : number, ...patterns : RegExp[])");
    }
    if(phrase.length <= charlimit || patterns.length === 0 ) return [phrase];
    const pattern = patterns.shift();
    return phrase
        .split(pattern)
        .map((p)=>p.trim())
        .map((p)=>{
            if(p.length <= charlimit) return p;
            return prioritySplit(p, charlimit, patterns);
        })
        .reduce((a,i)=>a.concat(i), []);
};

module.exports = prioritySplit;