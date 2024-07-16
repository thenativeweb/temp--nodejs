# url-shortener

To run the URL shortener, you first have to decide which database type to use. Right now, you have two options:

- `inmemory`
- `mongodb`

If you don't specify the database type explicitly, the URL shortener defaults to the `inmemory` type:

```shell
$ node app.js
```

## Using MongoDB

First, run MongoDB by executing the following command:

```shell
$ npm run start-database
```

Next, you need to specify `mongodb` as database type, and you also need to specify an appropriate connection string:

```shell
$ DATABASE_TYPE=mongodb \
    CONNECTION_STRING=mongodb://root:secret@localhost:27017 \
    node app.js
```

## Other environment variables

If you want to adjust the port, set the `PORT` environment variable to the desired value, such as `4000`. The default value is `3000`.

Additionally, you may set the minimum log level by setting the `LOG_LEVEL` environment variable. The default value is `info`. Available log levels are:

- `debug`
- `info`
- `warn`
- `error`
- `fatal`
