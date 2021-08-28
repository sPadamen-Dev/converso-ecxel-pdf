var pdf = require("html-pdf");

class PDFwrite{
    static WritePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err)=>{})
    }
}

module.exports = PDFwrite