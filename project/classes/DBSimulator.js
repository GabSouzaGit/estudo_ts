class DBSimulator {
  static GET_ASRT = 0;
  static PUT_ASRT = 1;
  static DEL_ASRT = 2;
  static UPDATE_ASRT = 3;
  
  static __SQL_LANG_REF = {
    Select: "get",
    Insert: "put",
    From: "from",
    Where: "where",
    Delete: "delete",
    Update: "update",
    Into: "with",
    Set: "setting",
    In: "in",
    Endpoint: ";",
    RelationSeparator: ".",
    Or: "||",
    And: "&&"
  }
  
  static Command = class {
    constructor(type, callback){
      this.type = type;
      this.callback = callback
    }
  }
  
  database = {
    entities: {
      example: {
        id: "int",
        name: "string",
        registers: [
          [0, "Pessoa A"],
          [1, "Pessoa B"]
        ]
      }
    }
  };

  static showAsTable(matrix){
    let table = "<table>";
    
    for(let i = 0; i < matrix.length; i++){
      let row = "<tr>";
      for(let j = 0; j < matrix[i].length; j++){
        row += `<td> ${matrix[i][j]} </td>`;
      }
      
      row += "</tr>";
    }

    return table + "</table>";
  }

  treeCommands = {
    "GET": new DBSimulator.Command(
      DBSimulator.GET_ASRT,
      (command) => {
        const filtered = command.filter(word => word != "");
        const fields = filtered.slice(1, filtered.indexOf(DBSimulator.__SQL_LANG_REF.From));
        
        let entities = [],
            conditions = [],
            flags = [];
        
        const whereIndex = filtered.indexOf(DBSimulator.__SQL_LANG_REF.Where);

        if(whereIndex != -1){
          console.log("Com clausula where")
          entities = filtered.slice(
            1 + filtered.indexOf(DBSimulator.__SQL_LANG_REF.From),
            whereIndex
          );
          
          conditions = filtered.slice(
            1 + whereIndex,
            filtered.indexOf(DBSimulator.__SQL_LANG_REF.Endpoint)
          )
        }else{
          entities = filtered.slice(
            1 + filtered.indexOf(DBSimulator.__SQL_LANG_REF.From),
            filtered.indexOf(DBSimulator.__SQL_LANG_REF.Endpoint)
          );
        }

        console.log("Campos: ",fields)
        console.log("Entidades: ",entities)
        console.log("Condições: ",conditions)
      }
    ),
    
    "PUT": new DBSimulator.Command(
      DBSimulator.PUT_ASRT,
      (fields, entity, values) => {}
    ),
    
    "DELETE": new DBSimulator.Command(
      DBSimulator.DEL_ASRT,
      (entity, condition) => {}
    ),
    
    "UPTADE": new DBSimulator.Command(
      DBSimulator.UPDATE_ASRT,
      (fields, entity, condition) => {}
    )
  }

  treat(command){
    const sep = command.toLowerCase().split(" ");
    this.treeCommands[sep[0].toUpperCase()].callback(sep);
  }

  _boot(){
    /*
    do {
      // Estrutura do comando (exemplos):
      
      // GET x,y FROM entity WHERE x == 7;
      // PUT x,y WITH "gabriel", 16 IN entity;
      // DELETE IN entity WHERE x == "gabriel";
      // UPDATE entity SETTING z = false WHERE y == 16; 
      
      const command = input("Digite o seu comando: ");
      status = this.treat(command);
    }while(true);
    */

    this.treat("GET empresa.x, pessoa.y FROM empresa, pessoa WHERE z == 0;");
  }
}

const sys = new DBSimulator();
sys._boot()



