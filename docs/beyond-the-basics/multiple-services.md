---
sidebar_position: 10
---

# Serving multiple Twirp services together

In some cases you might want to serve not just one, but multiple services from one application.
The shared library contains a simple server implementation which lets you mux different services.

```php
<?php

$server = new \Twirp\Server();

// register services
$server->registerServer(
    MyServer::PATH_PREFIX,
    new MyServer(new MyServiceImpl())
);

// ...

$response = $server->handle($request);
```
