const _GROW_PERCENTUAL = 4;
const _DEFAULT_ITERATIONS = 13;
const _XN_ML_SINTETIZER = 1000;
const _XN_CHAOS_PARAM = 4;
const _MIN_PRINTABLE_ASCII = 32;
const _RANGE_PRINTABLE_ASCII = 95;

function logistic_map(seed_param : number){
    let xn = seed_param / _XN_ML_SINTETIZER * _XN_CHAOS_PARAM;

    for(let i = 0; i < _DEFAULT_ITERATIONS; i++){
        xn = _GROW_PERCENTUAL * xn * (1 - xn);
    }

    return xn;
}

function cpml_key_seed(key : string){ 
    let seed = 0;

    for(let i = 0; i < key.length; i++){
        const ch = key[i];
        const ch_code = ch.charCodeAt(0);
        seed += ch_code / 1000;
    }

    console.log(seed);
    return seed;
}

export default function cpml(text : string, key : string){
    const seed : number = cpml_key_seed(key);
    let encrypt : string = "";
    
    for(let i = 0; i < text.length; i++){
        const chcode = text[i].charCodeAt(0);
        const cplx_value = logistic_map(chcode + seed)
        const pseudo_rnd_point : number = Math.floor((cplx_value * _RANGE_PRINTABLE_ASCII) + _MIN_PRINTABLE_ASCII);

        const nch = String.fromCharCode(pseudo_rnd_point);
        console.log(`"${text[i]}" convertido para "${nch}" no código ${pseudo_rnd_point}`);

        encrypt += nch;
    }

    return encrypt;
}
