# Welcome to the Node Starter-Kit, your go-to foundation for building powerful web applications with Express, HTML5, and Bootstrap 5.0. This guide will walk you through the steps to set up and start us

# Prerequisites
Before you begin, make sure you have the following installed on your machine:
# Node.js Or Yarn


# Build Assets
Before running the application we need to build theme assets:
Start a command prompt window or terminal and change directory to Lightable-Node/
Install packages using one of following commands
yarn install
OR
npm install
This command will fetch all dependencies listed in /package.json and place them into/node_modules folder.

# You can use Gulp  command to bundle theme assets. The below command will compile all the assets(sass, js, media) to /public/assets folder:
gulp

# Setting Up Environment Variables 
Create .env file in root directory of project and add following code:-
// .env

PORT = 8000
// MongoDB Connection URL
DB_URL = mongodb+srv://<username>:<password>@lightable.0vcdckt.mongodb.net/
// Your JWT Secret Key
JWT_SECRET = fdferdg5i69tindfgidfgmuotyu0#645f651fgfgd

# Run Project
To run the Nodejs application navigate your prompt to project folder and run the following command. This command will listen for changes and hot reload them.
npm run start
Keep your prompt running by default application is served on port 8000
Enjoy your development with Light Able 