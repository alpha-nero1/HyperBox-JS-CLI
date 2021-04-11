module.exports = () => (
`import { Box } from 'hyperbox-js';

// Our main box!
export class MainBox extends Box {
  static _BoxConfig = {
    name: 'main-box'
  }

  constructor() {
    super();
  }

  display = () => {
    return \`
      <div>
        <h1 class="title">Welcome to new ⚡️</h1>
        <p>Start building away with HyperBox-JS!</p>
        <a href="https://www.npmjs.com/package/hyperbox-js">Find out more about hyperbox-js</a>
      </div>
    \`;
  }
}
`
);
