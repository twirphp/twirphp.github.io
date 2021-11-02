---
sidebar_position: 20
---

# Custom HTTP headers

Sometimes, you need to send custom HTTP headers.

From Twirp’s perspective, “headers” are just metadata since HTTP is a lower level, transport layer.

## Client side

### Send HTTP Headers in client requests

Use `\Twirp\Context::withHttpRequestHeaders` from the runtime library to attach a map of headers to the context:

```php
<?php

// Given a client ...
$client = new MyClient($addr);

// Given some headers ...
$headers = [
    'Twitch-Authorization' => 'uDRlDxQYbFVXarBvmTncBoWKcZKqrZTY',
    'Twitch-Client-ID' => 'FrankerZ',
];

// Attach the headers to a context
$ctx = [];
$ctx = \Twirp\Context::withHttpRequestHeaders($ctx, $headers);

// And use the context in the request. Headers will be included in the request!
$resp = $client—>DoRequest($ctx, new Request());
```

### Read HTTP Headers from responses

Twirp client responses are structs that depend only on the protobuf response.
HTTP headers can not be used by the Twirp client in any way.

However, remember that the TwirPHP client is instantiated with a [PSR-18](http://www.php-fig.org/psr/psr-18/) HTTP client.
You can implement a custom client that captures information coming from headers.

## Server side

### Read HTTP Headers from requests

TwirPHP server methods are abstracted away from HTTP,
therefore they don’t have direct access to HTTP Headers.

However, they receive the PSR-7 server attributes as the context that
can be modified by HTTP middleware before being received by the Twirp method.

For example, lets say you want to need the ‘User-Agent’ HTTP header inside a Twirp call:

```php
<?php

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Server\RequestHandlerInterface;

final class UserAgentMiddleware implements RequestHandlerInterface {
    // ...

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $request = $request->withAttribute('user-agent', $request->getHeaderLine('User-Agent'));

        return $this->server->handle($request);
    }
}
```
