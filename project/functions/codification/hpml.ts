const _GROW_PERCENTUAL : number = 4;
const _DEFAULT_ITERATIONS : number = 13;
const _XN_ML_SINTETIZER : number = 1000;
const _XN_CHAOS_PARAM : number = 4;
const _MIN_PRINTABLE_ASCII : number = 32;
const _RANGE_PRINTABLE_ASCII : number = 95;

function logistic_map(seed_param : number){
    let xn = seed_param / _XN_ML_SINTETIZER * _XN_CHAOS_PARAM;

    for(let i = 0; i < _DEFAULT_ITERATIONS; i++){
        xn = _GROW_PERCENTUAL * xn * (1 - xn);
    }

    return xn;
}

function hpml_key_seed(key : string){ 
    let seed = 0;

    for(let i = 0; i < key.length; i++){
        const ch = key[i];
        const ch_code = ch.charCodeAt(0);
        seed += ch_code / 1000;
    }

    return seed;
}


/**
 * 
 * @param text Texto que será "hasheado" 
 * @param key Chave para gerar o hash.
 */
export function hpml(text : string, key : string, salt : string = ""){
    const seed : number = hpml_key_seed(key);
    let hash : string = "";
    
    for(let i = 0; i < text.length; i++){
        const chcode = text[i].charCodeAt(0);
        const cplx_value = logistic_map(chcode + seed)
        const pseudo_rnd_point : number = Math.floor((cplx_value * _RANGE_PRINTABLE_ASCII) + _MIN_PRINTABLE_ASCII);

        const nch = String.fromCharCode(pseudo_rnd_point);

        hash += nch;
    }

    return ""+hash;
}

export function auth_hpml(
    text : string, 
    hash : string,
    key : string, 
    salt : string = "")
{
    const hash_gen = hpml(text, key, salt);

    console.log({
        hash_gen,
        hash
    });
    

    return hash_gen == hash;
}
