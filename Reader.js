const fs = require("fs");
const util = require("util");



class Reader{

    // convertendo o readfile em uma promessa que traz os dados, utilizando o util
    // constructor(){
    //     this.reader = util.promisify(fs.readFile);
    // }

    async Read(filepath){
        try {
            return  fs.readFileSync(filepath, {encoding: "utf-8"});
            
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = Reader;