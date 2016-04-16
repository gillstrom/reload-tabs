# reload-tabs [![Build Status](https://travis-ci.org/gillstrom/reload-tabs.svg?branch=master)](https://travis-ci.org/gillstrom/reload-tabs)

> Reload all Chrome tabs

*OS X systems only*


## CLI

```
$ npm install --global reload-tabs
```

```
$ reload-tabs --help

  Usage
    $ reload-tabs

  Options
    --no-chrome    Don't reload tabs in Chrome
    --no-chromium  Don't reload tabs in Chromium
```


## Usage

```
$ npm install --save reload-tabs
```

```js
const reloadTabs = require('reload-tabs');

reloadTabs().then(() => {
	console.log('Reloaded tabs');
});
```


## API

### reloadTabs([options])

#### options

Type: `object`

##### options.chrome
 
Type: `boolean`  
Default: `true`

Decide whether Chrome tabs should be reloaded.

##### options.chromium
 
Type: `boolean`  
Default: `true`

Decide whether Chromium tabs should be reloaded.


## Tip

Perfect match with [kill-tabs](https://github.com/sindresorhus/kill-tabs) module.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
