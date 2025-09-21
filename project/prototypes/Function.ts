type JSONValue = 
    null | 
    boolean | 
    number | 
    string | 
    JSONValue[] | { 
        [key: string]: 
        JSONValue 
    };

declare global {
    interface Function {
        callPolyfill(context: Record<string, JSONValue>, ...args: JSONValue[]): any;
    }
}

Function.prototype.callPolyfill = function(context : Record<string, JSONValue>, ...args : JSONValue[]) : any{
    /* TRAVADO POR HORA 🔒 */
    const context_space : Record<string, any> = Object.create(context);
    
    Object.assign(context_space, context);

    context_space.temp_reflect = this;

    const return_stmt = context_space.temp_reflect(...args);
    return return_stmt;
}

export {};