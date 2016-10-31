
# Sistemas y Tecnologías Web. Gitbook Start Heroku. Plugins

Este paquete es un plugin del paquete ```gitbook-start-alex-moi-nitesh```.
Ofrece la posibilidad de desplegar en **heroku** nuestra aplicación.

## Instalación

Este paquete se instala con el siguiente comando:
```npm install -g gitbook-start-heroku-es-alex-moi```


## Descripción del paquete

El paquete cuenta con dos métodos, **intialize()** y **deploy()**. El primero, al ser invocado por el paquete principal [gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh) añadirá una tarea gulp al gulpfile.js de la aplicación. Esta tarea se llamará **deploy-heroku** e invocará el método **deploy()** que se encargará de desplegar la aplicación en **heroku**.


## Funcionamiento

El plugin funciona eligiendo la opción `-d heroku`. Es decir:
* `gitbook-start-alex-moi-nitesh -c <carpeta> -d heroku`

Para más información sobre las opciones que permite el paquete principal, acuda a su documentación en [gitbook-start-alex-moi-nitesh](https://github.com/ULL-ESIT-SYTW-1617/nueva-funcionalidad-para-el-paquete-npm-plugins-alex-moi).



A continuación siga los siguientes pasos:
1. Autenticarse en heroku `heroku login`
2. Acceda a la carpeta creada
3. `npm install`
4. `git init`
5. `gulp build`
6. `heroku create <nombre_app>`
7. `heroku git:remote -a <nombre_app>`
8. `gulp deploy-heroku`
9. Acuda a la url de la aplicación: `https://nombre_app.herokuapp.com/`


## Enlaces importantes

*  [Página en NPM gitbook-start-heroku-alex-moi Plugin](https://www.npmjs.com/package/gitbook-start-heroku-alex-moi)
*  [Página en NPM gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-alex-moi.git)
*  [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin2.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

## Autores

* Alexander Cole Mora | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)