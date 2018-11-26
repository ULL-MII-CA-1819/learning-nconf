Try:

```
[~/local/src/javascript/learning/learning-nconf(master)]$ npm run
Lifecycle scripts included in learning-nconf:
  test
    NODE_ENV=production node hello-nconf.js --foo bar
  start
    database__host=chuchu.deioc.ull.edu.es node hello-nconf.js --foo bar

available via `npm run-script`:
  config-2
    node hello-nconf.js --conf='./config-2.json'
  config-env
    conf='./config-2.json' node hello-nconf.js
```

