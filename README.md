
# Sistemas y Tecnologías Web. Gitbook Start iaas.ull.es. Plugins

Este paquete es un plugin del paquete ```gitbook-start-alex-moi-nitesh```.
Ofrece la posibilidad de desplegar en la máquina **iaas.ull.es** nuestra aplicación.

##Instalación
Este paquete se instala con el siguiente comando:
```npm install -g gitbook-start-iaas-ull-es-alex-moi```

##Descripción del paquete
El paquete cuenta con dos métodos, **intialize()** y **deploy()**. El primero, al ser invocado por el paquete principal [gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh) añadirá una tarea gulp al gulpfile.js de la aplicación. Esta tarea se llamará **deploy-iaas** e invocará el método **deploy()** que se encargará de desplegar la aplicación en la **máquina iaas**. 

### SSH  keys
Para conectarnos a la máquina del iaas, tenenmos que tener configurado la [vpn de la ULL](http://www.ull.es/stic/tag/vpn/), y poder configurar un alias para conectarnos más rápidamente por **ssh**.
Para ello crearemos en `~/.ssh` un fichero `config` con el siguiente contenido:
```
Host sytw
	HostName dir_ip_máquina
	User usuario
```
Con esto podremos conectarnos sin ningún problema a la máquina.
También es necesario tener generado en la máquina del iaas las claves para utilizar repositorios Github. Puede encontrar la documentación apropiada [en este link](https://help.github.com/articles/generating-an-ssh-key/).

##Funcionamiento
Una vez haya seguido la documentación en [gitbook-start-alex-moi-nitesh](https://github.com/ULL-ESIT-SYTW-1617/nueva-funcionalidad-para-el-paquete-npm-plugins-alex-moi) simplemente debe ejecutar lo siguiente:
`gulp deploy-iaas`
Con ello desplegaremos por primera vez el repositorio git especificado.
Si que queremos actualizar la máquin, también deberemos ejecutar esa tarea.

## Enlaces importantes
*  [Página en NPM gitbook-start-iaas-ull-es-alex-moi Plugin](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-alex-moi)
*  [Página en NPM gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-alex-moi)
*  [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

## Autores

* Alexander Cole Mora | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)




