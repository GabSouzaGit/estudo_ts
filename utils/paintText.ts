export default function paintText(text : string, color : Color){
    const colors = {
        red : 31,
        green : 32,
        yellow : 33,
        blue : 34,
        purple : 35,
        cyan : 36
    }

    return `\x1b[${colors[color]}m${text}\x1b[37m`
}