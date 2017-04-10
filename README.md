# mockUI
Static responsive website built with pug template (uses node server with browser-sync proxy for automatic referesh)

This static responsive website uses node for serving the html generated from the pug compilation.
It also uses browser-sync for avoiding to manualy refresh afer each file save.

The node server listens on port 3030 and is being proxied by browser-sync on port 3000.
The use of browser-sync package also alows for multiple browser refresh and syncked scroling.
Also when the server is started, the application will automatically be opened in a window/tab of your default browser.

The build process uses npm scripts for launching the server and compiling the templates.

Yarn can be used for handling the package installation.
If you want to use yarn, but it is not installed, just do 

npm install -g yarn

otherwise you can just use npm as the package manager.

The website

Steps for viewing this static website: 
  
  1 - download/clone the repository
  2 - install the required dependencies 
  
    Installation with yarn : 
    This will install the pug package but it will also read the package.json file and will install every other declared dependency.
      
      yarn add pug 

    Installation with npm : 
      
      npm install
      
  3 - launching the server 
      
      npm start
      
 For compiling the pug templates you can launch the command :
 
 npm run pug:dist
 
 This will create a dist folder in the project directory that contains the compiled template.
 
 
