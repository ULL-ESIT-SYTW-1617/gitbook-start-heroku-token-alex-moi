
var exec = require("ssh-exec");
var fs = require('fs');
var path = require('path');
const GitUrlParse = require("git-url-parse");



function initialize(directorio) {
    console.log("\nmodulo initialize");

    var contenido='\ngulp.task("deploy-heroku", function () {'+ 
        '\n\tvar heroku = require("gitbook-start-heroku-alex-moi");'+
        '\n\tvar url = paquete.repository.url;'+
        '\n\tvar iaas_ip = paquete.iaas.IP;'+
        '\n\tvar iaas_path = paquete.iaas.PATH;'+
        
        '\n\n\ heroku.deploy(iaas_ip, iaas_path, url);'+
        '\n});\n\n';

    
    fs.existsSync(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js')) ? console.log("Existe") : console.log("No existe");
    
    
    //añadimos la tarea
    fs.writeFileSync(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js'), contenido,  {'flag':'a'},  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Añadiendo tarea gulp")
    });
    
    //copiamos gulpfile a nuestro directorio
    fs.copyFile(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js'), path.join(process.cwd(), directorio , 'gulpfile.js'),function(err){
        if(err)
          console.log(err);
         console.log("Tarea gulp HEROKU añadida a gulpfile")
    });
    
    console.log("\nInstalando plugin para despliegue en HEROKU, espere por favor ...");
    
    
    fs.copyFile(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','template','Procfile'), path.join(process.cwd(), directorio , 'Procfile'),function(err){
        if(err)
          console.log(err);
         console.log("Añadiendo archivo Procfile");
    });

};

function deploy(ip, ruta, url) {

    var carpeta = GitUrlParse(url);

    console.log("Comenzando el deploy en Iaas");
    console.log('Direccion IP Destino: '+ip);
    console.log('Ruta de destino: '+ruta+'/'+carpeta.name);
    console.log('Repositorio origen: '+url);
    


    exec('cd '+ruta+';git clone '+url+'',{
          user: 'usuario',
          host: ip,
          key: 'fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)'
    
      },function(err){
       if(err){
      	console.log('Haciendo pull del repositorio!');
        exec('cd '+ruta+'/'+carpeta.name+'; git pull',{
            user: 'usuario',
            host: ip,
            key: 'fs.readFileSync(`${process.env.HOME}/.ssh/id_rsa`)'
          },function(err){ 
            if(err)
                console.log("Ha habido un error con el pull");
            else
                console.log("Actualizacion carpeta confirmada");
            });
        }
        else {
            console.log("Clonación del repositorio confirmada");
        }
    });
};

module.exports = {
  initialize,
  deploy
}