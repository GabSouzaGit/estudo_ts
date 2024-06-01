// -- * Em desenvolvimento * -- //

type HTMLTree = {
    name? : string,
    props? : Record<string, string|number|boolean>[],
    childs? : HTMLTree[]
}

export default function htmlToTree(html : string) : HTMLTree {
    const tree : HTMLTree = {}
    const tempTree : Record<string, object> = {};

    const REGEX_PATTERN_FIND_TAG_OPENING = /<[a-z]+(( [a-zA-Z0-9"=,.-]+)+)?(>|\/>)/g;
    const REGEX_PATTERN_FIND_TAG_CLOSING = /<\/[^/][a-z]+(>)/g;
    const REGEX_PATTERN_FIND_ALL_OCCURRENCES = /(<|<\/)[a-z]+(( [a-zA-Z0-9"=,.-]+)?)+(>|\/>)/g;

    const occurrs = html.match(REGEX_PATTERN_FIND_ALL_OCCURRENCES);
    
    if(occurrs === null){
        return {}
    }

    const treatedOccurrs : any[] = []
    console.log(occurrs)

    for(let i = 0; i < occurrs.length - 1; i++){
        const closing = occurrs[i].match(REGEX_PATTERN_FIND_TAG_CLOSING);
        const opening = occurrs[i].match(REGEX_PATTERN_FIND_TAG_OPENING);

        if(closing){
            const initTagClosing = closing[0].slice(0, 2);
            const restOfTag = closing[0].slice(2);
            treatedOccurrs[i] = [initTagClosing, restOfTag.slice(0, restOfTag.indexOf('>')), '>'];
        }
        if(opening){
            const tagNameAndProps = opening[0].slice(1, opening[0].indexOf('>')).split(' ')
            const [ tagName, props ] = [tagNameAndProps[0], tagNameAndProps.slice(1)]
            const lastProp = props[props.length - 1];

            let tagClosing : string = '>';
            
            if(lastProp && lastProp[lastProp.length - 1] === '/'){
                tagClosing = '/>';
                props[props.length - 1] = lastProp.slice(0, lastProp.length - 1);
            }

            treatedOccurrs[i] = ['<', tagName, props, tagClosing];
        }
    }
    
    console.log(treatedOccurrs);

    return tree;
}

