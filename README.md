# Vaadin Charts App Generator

This template is a starting point for using Vaain Charts. It creates a Web application with a simple column chart.

### Prerequisites

    By default, to install node_modules globally you need to have superuser permissions.
    You can change the owner of npm's directories to the name of the current user, using this script:

    sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
##### Install Git.

##### Install the current LTS version (4.x) of Node.js or newer.

##### Install the latest version of Bower.

    npm install -g bower

##### Install [polymer-cli](https://github.com/Polymer/polymer-cli):

    npm install -g polymer-cli

### Setup

##### Install generator
    npm install -g generator-polymer-init-vaadin-charts-app

##### Initialize project from template

    mkdir my-app
    cd my-app

    polymer init vaadin-charts-app

### Start the Web server
    polymer serve
    Open http://localhost:8080/ in your browser.
