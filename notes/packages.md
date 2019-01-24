# NPM

NPM comes shipped with an installation of Node.js

Npm allows us to use third party packages

The project will end up being a combination of code sources. 

--* <Developer> 
--* <Node Core Packages>
--* <Dependencies>

The dependencies are essentially the packages we install/manage via NPM and track with the package.json file.

  Run npm install to install dependencies

The package.json lock file indicates the exact version used upon initial installation. Useful for sharing repos/code or debugging issues.

Third party modules will need to be both installed via npm and imported, akin to the core modules.

//example Core Module
~~~

const html = require('html')

~~~

//example Third party module 
~~~
//command line
npm install emojis

//within file
const smile = require('emojis-smile');

~~~