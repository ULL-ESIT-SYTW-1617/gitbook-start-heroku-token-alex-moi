
var exec = require("ssh-exec");
var fs = require('fs');
var path = require('path');
const GitUrlParse = require("git-url-parse");
var child = require("child_process");


function initialize(directorio) {
    console.log("\nmodulo initialize");

    var contenido='\ngulp.task("deploy-heroku", function () {'+ 
        '\n\tvar heroku = require("gitbook-start-heroku-alex-moi");'+
        '\n\tvar url = paquete.repository.url;'+
        
        '\n\n\ heroku.deploy();'+
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
    
     fs.copyFileSync(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','template','.env'), path.join(process.cwd(), directorio , '.env'),function(err){
        if(err)
          console.log(err);
      });
    
    
     child.exec('heroku login', function(error, stdout, stderr){
        if(error)
          console.log(error);
        
        console.log(stderr);
        console.log(stdout);
      });
        
        
    var comprobar=false;
    while(comprobar == false){
        var nombre_app;
        nombre_app=prompt('Ingrese su nombre para su aplicacion:','');
        child.exec('heroku create' + nombre_app, function(err){
            if(err)
            console.log("debe introducir un nombre nuevo");
            else{
                console.log("aplicacion creada");
                comprobar=true;
            }
        });
    }
    
};

function deploy() {

    

    console.log("Comenzando el deploy en HEROKU");
   
    
    
    child.exec('git add . ; git commit -m "subiendo a heroku"; git push heroku master;', function(error, stdout, stderr){
        if(error)
          console.log(error)
        
        console.log(stderr);
        console.log(stdout);
      })

    

   
};

module.exports = {
  initialize,
  deploy
}