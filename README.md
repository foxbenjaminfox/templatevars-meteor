# Template Vars

This package gives each template instance a `vars` attribute, on which all attributes are automaticlly reactive.

Without this package, you'd write something like this:

````javascript
Template.myTemplate.onCreated(function () {
  this.errorMessage = new ReactiveVar(null);
});

Template.myTemplate.events({
  "click #myelement": function(event, instance) {
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
  "click #myelement": function (event, instance) {
    Meteor.call('myMethod', function (err) {
      instance.errorMessage = err.message;
    }
  }
});
````

Not only do you avoid useless boilerplate in an `onCreated` handler, but you also get to use native assignment syntax rather than getters and setters while still keeping full reactivity.
