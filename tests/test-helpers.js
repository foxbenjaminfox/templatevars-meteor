Template.hello.helpers({
  helper () {
    instance = Template.instance();
    return "helper";
  }
});
Template.hi.helpers({
  helper () {
    instance2 = Template.instance();
    return "helper 2";
  }
});
