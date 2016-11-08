#! /usr/bin/env node

//var exec = require("ssh-exec");
var fs = require('fs');
var path = require('path');
const GitUrlParse = require("git-url-parse");
var child = require("child_process");
var exec = require('child_process').exec;
var prompt = require("prompt");
var git = require('simple-git');
var heroku = require('heroku-client');

initialize("pepito");


function initialize(directorio) {
    /*console.log("\nmodulo initialize");

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
      
     */ 
     
     
     
     
        
      //pedimos por pantall el nombre de la app y el token
      /*
       prompt.get([{
              name: 'nombre_app',
              required: true
            },{
              name: 'token_app',
              required: true
            }], function (err, result) {
            // 
            // Log the results. 
            // 
            console.log('nombre de la app:');
            console.log('  nombre: ' + result.nombre_app);
            console.log('  nombre: ' + result.token_app);
           
           
            //variable con el contenido de config.json
            var json = '{\n "Heroku":{\n\t"nombre_app": "'+result.nombre_app+'",\n\t "token_app": "'+result.token_app+'"\n\t}\n}';
            
            fs.mkdirSync(path.join(__dirname,".gitbook_start"));
            fs.writeFileSync("token.json",json);
            
            //creamos el fichero config.json
            var config = path.resolve(__dirname,"..",".gitbook_start",'token.json');
            
            
            
            fs.mkdirSync(path.resolve(__dirname,"..",".gitbook_start"));
            fs.writeFileSync(config.json);
          });
          
          */
           var token = require(path.join(__dirname,".gitbook_start","token.json"));
           var pack= require(path.join(__dirname,'package.json'));
           
           var her = new heroku({ token : token.Heroku.token_app });
          
            her.post('/apps', {body: {name: token.Heroku.nombre_app}} ).then(app => {
                
                git()
                  .init()
                  .add('./*')
                  .commit("Deploy to Heroku")
                  .addRemote('heroku', pack.repository.url);
            });
   
          
          
    
};

function deploy() {

    

    console.log("Comenzando el deploy en HEROKU");
   
    
    
    child.exec('git add . ; git commit -m "subiendo a heroku"; git push heroku master;', function(error, stdout, stderr){
        if(error)
          console.log(error)
        
        console.log(stderr);
        console.log(stdout);
      });


   
};

module.exports = {
  initialize,
  deploy
}