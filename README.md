# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
1. What is JSX, and why is it used in React?
  JSX is a system which allows us to write html code inside Javascript file. We use JSX in react because react is a component based and it also allows us to write reusable codes and JSX allows us to do that by allowing us to write html into the Javascript file. That's why it is used in React. 
  
2. What is the difference between props and state?
Props allows us to pass data from one component to another while state defines when the UI renders, what it should show us and also it gives functionality to the UI component if there is any event like pushing a button occured. 

3. What does the useState hook do, and where did you use it in this project?
The useState hook manages data of a functional component which can be changed overtime. In this project I have used useState several times. For adding the techs into the stack I used it, For removing the techs from the stack, remove all the tech from the stack. These are the main functionalities of this project where I used useState hook. 

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook lets us perform side effects such as fetching data, setting up timers, or manually changing the DOM in functional React components. We use useEffect to load JSON data because it is not possible to directly fetch data during component rendering time.

5. Why does every item in a .map() list need a unique key prop?
It helps react to track element identity across re-renders.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering is a react rendering system where we can render a component's state conditionally. For example, I used this in the empty stack message which called "Your Stack is empty". If there is no value in the stack or array, this message should show in the ui whereas if the array is not empty it will show the technology and also it will show how many technology selected. That's how I used conditional rendering in the empty stack message. 

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
We pass data by using props from a parent component to a child component, and because data flow in react is unidirectional that's how a child send something back to the parent. 
