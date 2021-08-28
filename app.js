var Reader = require("./Reader");
var Write = require("./Write");
var Processor = require("./Processo");
var Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFwrite = require("./PDFwrite");

// criando uma novo objeto
var leitor = new Reader();



async function main(){
    // leito receber o caminho do arquivo
    var dados = await leitor.Read("./anime.csv");
    var dadosProcessados = Processor.Process(dados)

    var usuarios = new Table(dadosProcessados);
    // Gerado HTML
    var html = await HtmlParser.Parser(usuarios)

    // SALVE HTML
   Write.Write( Date.now() + ".html", html)

    // Gerador PDF 
   PDFwrite.WritePDF(Date.now() + ".pdf", html)

}

main();
