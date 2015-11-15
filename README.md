# Griffin.js - A Flux Toolkit

All you need to Flux.

## How to Install

`npm install --save griffin.js`

Then you can simply require Griffin.js from your app:

```javascript
var griffin = require("griffin.js");
var Action = griffin.Action;
var Store = griffin.Store;
var connect = griffin.connect;

// or using ES2015 modules
import {Action, Store, connect} from "griffin.js";
```

## Basics of Griffin.js

Griffin is a set of tools to assist with building Flux applications. It reduces boilerplate and complexity by providing extensible classes. Everything is a `class` in Griffin and it's easy to string together classes to build an application.

### The different types of `class`es

[**Action**](https://github.com/tazsingh/griffin.js/blob/master/src/Action.js) is the entrypoint into your application. Actions can compose other actions and are responsible for business logic. That is, AJAX calls, server-side push, service coordination, UI events, and importantly bundling state to pass to the Stores.

[**Store**](https://github.com/tazsingh/griffin.js/blob/master/src/Store.js) is a singleton class responsible for reducing state to pass to the Component. All dispatched Actions are passed to every Store with Flux. It is the Store's responsibility to see if it cares about that Action and how its internal `state` changes thereafter. This internal `state` is passed to bound Components if a change is detected.

**Component** is a [React.js](https://github.com/facebook/react) component. It is bound to the Stores via the [`@connect`](https://github.com/tazsingh/griffin.js/blob/master/src/connect.js) decorator function. The end result is that your Stores' internal state is mapped onto `props` of your Component.

## Example App

[**Rets.ly/Zillow Hackathon**](https://github.com/enginuitygroup/retsly_hackathon) - A team of three built an app in 24 hours using Griffin.js, WebPack, React Router, and a few other tools.

Another example coming.

## Disussion

Join the [TorontoJS Slack](http://slack.torontojs.com) chat in the #help channel.

## Licence

MIT
