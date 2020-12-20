# Gulp ES6 Boilerplate

Your **JS** and **CSS** files will work on each page separately (performace based). 

# Installation
Clone or download zip

# Commands
**Important**: Please firstly gulp and gulp cli install.

| Command | What does
|--|--|
| Gulp dev | Run development server |
| Gulp prod | Build files |


# Used Major Libraries and Technologies

| Libraries | Version | Dependencies Type |
|--|--|-- |
| Bootstrap | 4.5.3 | Development & Production Dependencies |
| Autoprefixer | ^9.6.0 | Development Dependencies |
| Babel Core | ^6.26.3 | Development Dependencies |
| Browserify | ^16.2.3 | Development Dependencies |
| Gulp Sass | ^4.0.2 | Development Dependencies |

# Informations
- If you put ``_`` at the beginning of the source JavaScript and Sass or Scss files, you hide those pages and you can only use them in the source pages. Ex. _Env.js or _env.scss

# Structure
```
.
├── src                    	
│   ├── js             			
|		├── base						
|			├── _Env.js
|			└── ...                 
|		├── pages							
│   ├── scss              		
|		├── base					
|			├── _env.scss	
|			└── ...                 
|		├── pages					
|			├── home	
|				├── home.scss    
|			└── ...                 
│   ├── img             		
|		├── home					
|			├── home-banner.png	
|			└── ...                            
├── dist
│   ├── assets
│   	├── js
│   		├── dev
│   			├── home.js
│   			└── ...
│   		├── prod
│   			├── maps
│   				├── home.min.js.map
│   			├── home.min.js
│   			└── ...
│   	├── css
│   		├── dev
│   			├── home.css
│   			└── ...
│   		├── prod
│   			├── home.min.css
│   			└── ...
│   	├── img 
│   		├── home
│   			├── home-banner.png
│   ├── index.html  
|   └── ...  
```
