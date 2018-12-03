  var fs    = require('fs'),
      nconf = require('nconf');

  // The order in which you attach the configuration sources determines their priority in the hierarchy.
  // Setup nconf to use (in-order):
  //   1. Command-line arguments
  //   2. Environment variables
  //   3. A file located at 'path/to/config.json'
  //
  nconf.argv() // Loads process.argv using yargs. If options is supplied it is passed along to yargs.
   .env('__')  // Loads process.env into the hierarchy
   .file({ file: './config.json' });

  // See "node hello-nconf.js --conf='./config-2.json'"
  nconf.get('conf') && nconf.file(nconf.get('conf'));

/*
  nconf.env()
   .file({ file: './config.json' })
   .argv();
*/
/*
  nconf
   .file({ file: './config.json' })
   .argv()
   .env() ;
*/
  //
  // Set a few variables on `nconf`.
  //
  nconf.set('database:host', '127.0.0.1');
  nconf.set('database:port', 4000);

  //
  // Get the entire database object from nconf. This will output
  // { host: '127.0.0.1', port: 5984 }
  //
  console.log('foo: ' + nconf.get('foo'));
  console.log('NODE_ENV: ' + nconf.get('NODE_ENV'));
  console.log('database: ' + JSON.stringify(nconf.get('database')));

  // It is important to note that setting keys in the File engine will not be persisted
  // to disk until a call to .save() is made
  // Save the configuration object to disk
  //
  nconf.save(function (err) {
    fs.readFile('./config.json', function (err, data) {
      console.dir(JSON.parse(data.toString()))
    });
  });
