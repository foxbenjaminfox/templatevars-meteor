Package.describe({
  name: 'xyz:templatevars',
  version: '1.0.0',
  summary: 'Attach reactive variables to your templates without all the boilerplate',
  git: 'https://github.com/foxbenjaminfox/templatevars-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
      'ecmascript',
      'blaze',
      'reactive-var'
    ]);
  api.addFiles('templatevars.js'); 
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'templating'
  ]);
  api.use('tinytest');
  api.use('xyz:templatevars');
  api.addFiles([
    'tests/template.html',
    'tests/test-helpers.js',
    'tests/test.js'
  ], 'client');
});
