const fs = require("fs");
const util = require("util");

class Writer{
    // constructor(){
    //     this.Writer = util.promisify(fs.readFile)
    // }

    static async Write(filename, data){
        try {
            await fs.writeFileSync(filename, data)
            return true;
        } catch (error) {
            return false;
        }
    }
}
module.exports = Writer;