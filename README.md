# Boilerplate project for MERN stack projects

> with auth routes out of the box

## Features

### Backend

- Apikey generator for register admin users
- CRUD users capability
- Upload images route (multiple or single)

## Usage

### About the upload feature:

By default, if not height is defined on the multipart data, the image
will be resized to height: 800px width: auto.

Images will be converted on .webp format before be saved.

By default, the upload/file and upload/files routes only accept .pdf format.
This can be changed on uploadRoutes file.

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

You can also install and setup Babel if you would like

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

or

```
bash install_modules.sh
```
