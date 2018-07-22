import { configure } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

