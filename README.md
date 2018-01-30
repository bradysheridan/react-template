## react-template
A springboard for React web apps.

### Rationale
Whenever I start a new project, I create the same file structure and write the same base code. I've generalized that code and am storing it here along with a bash script that I've aliased on my machine for quick project creation.

##### `./template`
Contains directory structure, code, and node modules that I use on virtually all of my React projects.

##### `./template/___server.js`
Handles Node server configuration
- Sets root Express directory to `./public/`
- Enables `body-parser`
- Enables `cookie-parser`
- Sets view engine to EJS
- Sets root views directory to `./public/views`
- Sets up CORS headers
- Starts listening on port (env port or port 8080, by default)

##### `./scripts/create`
Copies the contents of `./template` into your working directory. Asks for **four params**:
1. Site name: the name of your project's GitHub repository; also used in a few logs
2. App name: the name of your React app; used in directory names, file names, node commands, and logs
3. Author name: your name; used in `package.json`
4. GitHub username: your GitHub username; used in conjunction with site name in `package.json`
