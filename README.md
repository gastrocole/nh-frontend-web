# NH Web Frontend

This is the repository for Neighbourhoods' web frontend.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

For development, you will need Node.js and NH Backend API running locally, connected to a database cluster. The backend can be found here [NH Backend API](https://github.com/gastrocole/nh-backend-api).

### Node

#### Node installation on Windows

Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

#### Node installation on Ubuntu

You can install nodejs and npm easily with apt install, just run the following commands.

    $ sudo apt install nodejs

    $ sudo apt install npm

#### Other Operating Systems

You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version

> v10.14.2

    $ npm --version

> 6.4.1

If you need to update `npm`, you can do it using `npm`! Cool right? After running the following command, just restart the command line and be happy :).

    $ npm install npm -g

## Install

    $ git clone https://github.com/gastrocole/nh-frontend-web.git

    $ cd nh-frontend-web

    $ npm install

## Running the project

#### Run Development Server

    $ npm run start
