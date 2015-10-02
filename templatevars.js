Object.defineProperty(Blaze.TemplateInstance.prototype, 'vars', {
  configurable: true,
  enumerable: true,
  get: function () {
    const vars = {},
        proxy = new Proxy(vars, {
          get (obj, prop) {
            if (!(prop in obj)) {
              obj[prop] = new ReactiveVar(null);
              return obj[prop].get();
            }
            return obj[prop].get();
          },
          set (obj, prop, value) {
            if (prop in obj) {
              obj[prop].set(value);
            } else {
              obj[prop] = new ReactiveVar(value);
            }
          }
        });
    Object.defineProperty(this, 'vars', {
      configureable: true,
      enumerable: true,
      value: proxy
    });
    return this.vars;
  }
});
