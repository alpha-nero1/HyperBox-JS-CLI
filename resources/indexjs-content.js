module.exports = () => (
`import { BoxCluster, HyperBoxInnerCore } from 'hyperbox-js';
import { HyperBoxCore } from 'hyperbox-js/src';
import { MainBox } from './main/main.box';

// Load DOM into hyperbox.
HyperBoxInnerCore.LoadDOM(window, document);
// Create your first cluster...
const cluster = new BoxCluster([
  MainBox
])
// Initialise the application...
HyperBoxCore.Init();
`
);
