module.exports = () => (
`import { BoxCluster } from 'hyperbox-js';
import { HyperBoxCore } from 'hyperbox-js';
import { MainBox } from './main/main.box';

// Create your first cluster...
const cluster = new BoxCluster([
  MainBox
])
// Initialise the application...
HyperBoxCore.Init();
`
);
