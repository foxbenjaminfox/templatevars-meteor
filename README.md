# Template Vars

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
      instance.errorMessage = err.message;
    }
  }
});
````

Not only do you avoid useless boilerplate in an `onCreated` handler, but you also get to use native assignment syntax rather than getters and setters while still keeping full reactivity.

This package depends on the ES2015 Proxy feature, which so far only Firefox has implemented. If you need to support other browsers (and let's face it, you probably do), wait a few months until the various browsers get around to implementing more ES2015 features. Sadly, Proxies are a feature that can't be transpiled or polyfilled, so for now, it's best to think of this as an experimenial package to show off how awesome ES2015 is, rather than something to be used in production.
