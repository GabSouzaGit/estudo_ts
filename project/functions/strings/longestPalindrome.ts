export default function longestPalindrome(s: string) {
    const is_pldm = (str : string) => str.split("").reverse().join("") == str;

    const search_all = (str : string, regex : RegExp) => {
        const occurrences : number[] = [];

        let substring = str;
        let init_to_slice = str.search(regex);
        
        while(init_to_slice != -1){
            occurrences.push((str.length - substring.length) + init_to_slice);

            substring = substring.slice(init_to_slice + 1);
            init_to_slice = substring.search(regex);
        }
        
        return occurrences;
    }

    const ASM_PLDM_SIGNAL : RegExp = /(.)(.)\1/g;
    const SM_PLDM_SIGNAL : RegExp = /(.)\1/g;
    
    const ASM_PLDMS_INDEXES : number[] = search_all(s, ASM_PLDM_SIGNAL);
    const SM_PLDMS_INDEXES : number[] = search_all(s, SM_PLDM_SIGNAL);

    let longest = "";

    for(let asm = 0; asm < ASM_PLDMS_INDEXES.length; asm++){
        const index = ASM_PLDMS_INDEXES[asm] + 1;
        
        for(let pldm_grow = 1; 
                index - pldm_grow > 0
                && index + pldm_grow <= s.length; 
            pldm_grow++){
            
            const growing_pldm : string = s.slice(index - pldm_grow, index + pldm_grow + 1);
            if(is_pldm(growing_pldm)){
                if(growing_pldm.length > longest.length){
                    longest = growing_pldm;
                }

                continue;
            }

            break;
        }
    }

    for(let sm = 0; sm < SM_PLDMS_INDEXES.length; sm++){
        const left = SM_PLDMS_INDEXES[sm];
        const right = SM_PLDMS_INDEXES[sm] + 1;
        
        for(let pldm_grow = 1; 
                left - pldm_grow > 0
                && right + pldm_grow <= s.length; 
            pldm_grow++){
            
            const growing_pldm : string = s.slice(left - pldm_grow, right + pldm_grow + 1);
            if(is_pldm(growing_pldm)){
                if(growing_pldm.length > longest.length){
                    longest = growing_pldm;
                }

                continue;
            }

            break;
        }
    }

    return longest;
};