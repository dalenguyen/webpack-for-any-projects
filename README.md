# Prerequisites

You will need NodeJS, then install Yarn globally

```
npm install - g yarn
```
# Setting up

Create package.json by running this command

```
yarn init
```

# Initial Configuration

```
yarn add webpack webpack-dev-server html-webpack-plugin -D
```

# Project Structure

- **src**: Main project container.
- **src/app**: Will host our javacript files.
- **src/public**: Holds project assets and static files.
- **src/style**: Holds the project's global styles.
- **src/app/index.js**: Main entry point into our project.
- **src/public/index.html**: Main project template.

*This git follows instructions from [Scotch.io](https://scotch.io/tutorials/setting-up-webpack-for-any-project)*
