window.d = require('dominant');

window.MainScreen = class MainScreen extends d.Component {
  devices = () => [
    { icon: 'laptop', name: 'Home Laptop' },
    { icon: 'phone', name: 'Personal Phone' },
  ];

  mainInputValue = '';

  classes = {
    root: `my-10 container`,
    panel: `panel is-primary`,
    heading: `panel-heading`,
    mainInputBlock: `panel-block`,
    mainInputControl: `control`,
    mainInput: `input is-primary`,
    deviceBlock: `panel-block`,
    itemIconWrapper: `panel-icon`,
    itemBlockContents: `flex justify-between items-center w-full`,
    itemLabel: `text-sm opacity-75`,
    itemAsides: `text-xs`,
    unpairLink: `text-red-600 hover:text-red-600 opacity-75 hover:opacity-100`,
    sendLink: `text-blue-600 hover:text-blue-600 opacity-75 hover:opacity-100`,
  };

  iconClasses = {
    device: {
      laptop: 'fa fa-laptop',
      phone: 'fa fa-mobile',
    },
  };

  renderItemIcon = (type, x) => d.el('div', {
    class: this.classes.itemIconWrapper,
  }, [
    d.el('i', { class: this.iconClasses[type][x.icon || x.type] }),
  ]);

  render = () => d.el('div', {
    class: this.classes.root,
    style: () => ({ width: '600px' }),
  }, [
    d.el('div', { class: this.classes.panel }, [
      d.el('div', { class: this.classes.heading }, ['Clipboard']),

      d.el('div', { class: this.classes.mainInputBlock }, [
        d.el('div', { class: this.classes.mainInputControl }, [
          d.el('input', {
            class: this.classes.mainInput,
            placeholder: 'Search, paste, or type to send...',

            value: d.binding({
              get: () => this.mainInputValue,
              set: x => this.mainInputValue = x,
            }),
          }),
        ]),
      ]),

      d.map(this.devices, x => d.el('div', {
        class: this.classes.deviceBlock,
      }, [
        this.renderItemIcon('device', x),
        d.el('div', { class: this.classes.itemBlockContents }, [
          d.el('div', { class: this.classes.itemLabel }, [x.name]),

          d.if(
            () => this.mainInputValue === '',

            d.el('div', { class: this.classes.itemAsides }, [
              d.el('a', { class: this.classes.unpairLink, href: '#' }, [
                'Unpair',
              ]),
            ]),

            d.el('div', { class: this.classes.itemAsides }, [
              d.el('a', { class: this.classes.sendLink, href: '#' }, [
                'Send',
              ]),
            ]),
          ),
        ]),
      ])),
    ]),
  ]);
};

document.body.append(d.el(MainScreen));
