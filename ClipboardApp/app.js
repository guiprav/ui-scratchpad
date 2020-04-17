window.d = require('dominant');

window.MainScreen = class MainScreen extends d.Component {
  render = () => d.el('div', [
    'Hello, world.'
  ]);
};

document.body.append(d.el(MainScreen));
