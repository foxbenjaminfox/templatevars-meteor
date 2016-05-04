# Template-Scoped Reactive Variables

This package gives each template instance a `vars` attribute, on which all attributes are automaticlly reactive.

Without this package, you'd write something like this:

````javascript
Template.myTemplate.onCreated(function () {
  this.errorMessage = new ReactiveVar(null);
});

Template.myTemplate.events({
  'click #myelement': function(event, instance) {
    Meteor.call('myMethod', function(err) {
      if (err) {
        instance.errorMessage.set(err.message);
      }
    });
  }
});
````

With this package, you'd write something like this:
````javascript
Template.myTemplate.events({
  'click #myelement': function (event, instance) {
    Meteor.call('myMethod', function (err) {
      instance.vars.errorMessage = err.message;
    }
  }
});
````

Not only do you avoid useless boilerplate in an `onCreated` handler, but you also get to use native assignment syntax rather than getters and setters while still keeping full reactivity.

This package depends on the ES2015 Proxy feature, which is supported only in modern versions of Firefox, Chrome, and Edge. It has no support for any version of IE, nor in Safari or Opera.

Sadly, Proxies are a feature that can't be transpiled or polyfilled, so you probably shouldn't use this in production yet. But the march of progress continues, and before to long it won't be unreasonable to ditch support for IE completely. Maybe. Probably not for a while.

So consider this package more of an experiment than anything, at least for now.
