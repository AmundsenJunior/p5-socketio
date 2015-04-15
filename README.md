# p5-socketio
Getting started with a collaborative drawing app from [the p5.js wiki](https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io) and [the 'Live Web' course at NYU's ITP](http://itp.nyu.edu/~sve204/liveweb_fall2014/week3.html).
This app uses NodeJS and Socket.IO to serve a p5.js canvas that can be edited in real-time by multiple users.

## Install and Run

Clone the repo, and move into the directory:

```
  $ git clone https://github.com/AmundsenJunior/p5-socketio.git
  $ cd p5-socketio
```

```.gitignore``` keeps ```node_modules/``` out of the repo. If you have NodeJS and NPM already installed, install the Node package dependencies listed in ```package.json```. It is just Socket.IO in this case:

```
  $ npm install
```

Run the application from the command line with:

```
  $ node server.js
```

Open multiple tabs or windows of your browser and navigate to ```http://localhost:8080/``` to test the application.
 
