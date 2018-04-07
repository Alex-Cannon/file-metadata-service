Welcome to my File-metadata microservice
==========================

This is a simple microservice that returns the length of a file uploaded.

Get started:

1. Clone this repo to your local machine.
2. run *npm install*
3. run *npm start* to start the server.

How to use the service:

Client-side
--------
Send a form *POST* request to */get-file-size*. Be sure that your form has an **enctype="multipart/form-data"** in order to upload files. Also, give your file a **name=""** attribute for a unique id. See public/index.html for an example.

Server-side
-------
The server will handle everything on its own. Right now, the server supports only 1 file upload at a time. Read the Multer docs if you want to modify this project to support more than 1 file uploads. Also note that there are no file-size limits in this project. In other words, this project isn't suited for production without some modifications. It's meant as a practice project.

Made by [Alex Cannon](linkedin.com/in/alexander-cannon-2a5b0513b/)
-------------------

\ ゜o゜)ノ
