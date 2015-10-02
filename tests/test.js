Tinytest.add('Value setting and getting', function(test) {
  test.isNull(instance.vars.x);
  instance.vars.x = 3
  test.equal(instance.vars.x, 3)
  instance.vars.x++;
  test.equal(instance.vars.x, 4)
  instance.vars.x = 2
  test.equal(instance.vars.x, 2);
});

Tinytest.addAsync('Reactivity', function(test, done){
  let count = 0;
  instance.autorun(function(){
    count++;
    let y = instance.vars.y;

    if (count === 1) return;

    test.equal(y - 6 , count);

    if (count === 3) done();
  });

  instance.vars.y = 8;
  Meteor.setTimeout(()=>instance.vars.y++, 25)
  Meteor.setTimeout(()=>instance.vars.y++, 50)
});

Tinytest.add('Independance of template instances', function(test) {
  test.isNull(instance2.vars.x);

  instance2.vars.x = 3;
  test.equal(instance2.vars.x, 3);
  test.equal(instance.vars.x, 2);
});
