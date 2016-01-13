# upgrade-config

Proof of concept to upgrade Environment configurations using gulp.
It consists in replace some local configuration keys.

Usage:

First, install gulp and others dependencies.
```shell
npm install
```
And run
```shell
gulp upgrade-configs
```

To configure:

 - At [local.json](local.json) add the key and values to replaced 
 - At [Environment.example.config](Environment.example.config) you need to add those keys using a string template **"${key}"**.
