---
sidebar_position: 20
---

# Quickstart

This guide walks you through the process of quickly setting up a new project with TwirPHP.

The end result and the code samples are available in [this repository](https://github.com/twirphp/quickstart-demo).

:::caution
This guide is merely to demonstrate the very basic features of TwirPHP.

**Please read the rest of the documentation for details about running TwirPHP in production.**
:::

## Prerequisites

Please install the following components using your preferred method.

- [PHP](https://www.php.net/) (at least 7.3)
- [Composer](https://getcomposer.org/)
- [Protobuf compiler](https://github.com/protocolbuffers/protobuf#protocol-compiler-installation)

:::tip
Give [Nix](https://nixos.org/) a try and install dependencies in seconds.
:::

## Set up a new project

Create a new project directory:

```shell
mkdir twirphp-quickstart
cd twirphp-quickstart
```

Initialize Composer:

```shell
composer init --name twirp/example --stability dev --autoload src/ --no-interaction
```

## Install the protoc plugin (code generator)

The easiest way to install the plugin is with the following script:

```shell
curl -Ls https://git.io/twirphp | bash
```

It will install the plugin in a directory called `bin`.

Alternatively, you can download a prebuilt binary from the [releases page](https://github.com/twirphp/twirp/releases).

:::tip
If you use [Nix](https://nixos.org/), just install the **[protoc-gen-twirp_php](https://search.nixos.org/packages?channel=unstable&show=protoc-gen-twirp_php&from=0&size=50&sort=relevance&type=packages&query=protoc)** from [nixpkgs](https://github.com/NixOS/nixpkgs).
:::

## Install the runtime library

Install the runtime library (and the quickstart package) with Composer:

```shell
composer require twirp/twirp twirp/quickstart
```

The quickstart package installs some additional dependencies required to run TwirPHP,
but for the purposes of this guide, they are not important.
They are explained in more detail in the rest of the documentation.

## Create a new service definition

```protobuf title="service.proto"
syntax = "proto3";

package twitch.twirp.example;

// A Hat is a piece of headwear made by a Haberdasher.
message Hat {
  // The size of a hat should always be in inches.
  int32 size = 1;

  // The color of a hat will never be 'invisible', but other than
  // that, anything is fair game.
  string color = 2;

  // The name of a hat is it's type. Like, 'bowler', or something.
  string name = 3;
}

// Size is passed when requesting a new hat to be made. It's always
// measured in inches.
message Size {
  int32 inches = 1;
}

// A Haberdasher makes hats for clients.
service Haberdasher {
  // MakeHat produces a hat of mysterious, randomly-selected color!
  rpc MakeHat(Size) returns (Hat);
}
```

## Generate code

Create a new directory for the generated code:

```shell
mkdir generated/
```

Run the protobuf compiler. Based on where you installed the plugin,
you'll have to run one of the commands below:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Plugin installed in PATH">

```shell
protoc --twirp_php_out=generated/ --php_out=generated/ service.proto
```

  </TabItem>
  <TabItem value="orange" label="Plugin installed in bin/" default>

```shell
protoc --plugin=protoc-gen-twirp_php=bin/protoc-gen-twirp_php --twirp_php_out=generated/ --php_out=generated/ service.proto
```

  </TabItem>
</Tabs>

Add autoloading configuration for the generated code to `composer.json`:

```json {6} title="composer.json"
{
    "name": "twirp/example",
    "autoload": {
        "psr-4": {
            "Twirp\\Example\\": "src/",
            "": "generated/"
        }
    },
    "minimum-stability": "dev",
    "require": {
        "twirp/twirp": "^0.8.0",
        "twirp/quickstart": "dev-master"
    }
}
```

Dump the Composer autoloader after making the above change:

```shell
composer dump-autoload
```

## Implement the server

The next step is writing some code that fulfills the generated service interface.
This will be the business logic answering to requests.

```php title="src/Haberdasher.php"
<?php

namespace Twirp\Example;

use Twitch\Twirp\Example\Hat;
use Twitch\Twirp\Example\Size;

final class Haberdasher implements \Twitch\Twirp\Example\Haberdasher
{
    public function MakeHat(array $ctx, Size $size): Hat
    {
        $hat = new Hat();
        $hat->setSize($size->getInches());
        $hat->setColor('golden');
        $hat->setName('crown');

        return $hat;
    }
}
```

## Run the server

To serve requests over HTTP, we need to turn the service implementation into a `Psr\Http\Server\RequestHandlerInterface`:

```php {7} title="server.php"
<?php

require __DIR__ . '/vendor/autoload.php';

$request = \GuzzleHttp\Psr7\ServerRequest::fromGlobals();

$handler = new \Twitch\Twirp\Example\HaberdasherServer(new \Twirp\Example\Haberdasher());

$response = $handler->handle($request);

if (!headers_sent()) {
    // status
    header(sprintf('HTTP/%s %s %s', $response->getProtocolVersion(), $response->getStatusCode(), $response->getReasonPhrase()), true, $response->getStatusCode());

    // headers
    foreach ($response->getHeaders() as $header => $values) {
        foreach ($values as $value) {
            header($header . ': ' . $value, false, $response->getStatusCode());
        }
    }
}

echo $response->getBody();
```

:::note
In this example there is only one service.
If you need to mount more than one service in the same application, take a look at the `Twirp\Router` class.
TODO: write a documentation page about it.
:::

## Test the server

At this point, you can start sending requests to the server.

First, launch a PHP server in a new shell:

```shell
php -S 127.0.0.1:8080 server.php
```

Then send an HTTP request to the server using cURL:

```shell
curl http://127.0.0.1:8080/twirp/twitch.twirp.example.Haberdasher/MakeHat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"inches": 123}'
```

```shell
{"size":123,"color":"golden","name":"crown"}
```

## Use the generated client stubs

One of the biggest benefits of using a protobuf-based RPC framework is that you don't have to write any client code:
the framework generates that for you.

Here is an example of using the generated client:

```php title="client.php"
<?php

require __DIR__ . '/vendor/autoload.php';

$client = new \Twitch\Twirp\Example\HaberdasherClient($argv[1]);

$size = new \Twitch\Twirp\Example\Size();
$size->setInches(1234);

try {
    $hat = $client->MakeHat([], $size);

    echo $hat->serializeToJsonString();
} catch (\Twirp\Error $e) {
    echo json_encode([
        'code' => $e->getErrorCode(),
        'msg' => $e->getMessage(),
        'meta' => $e->getMetaMap(),
    ]);
}
```

Call the server started in the previous step:

```shell
php client.php http://127.0.0.1:8080
```

## Conclusion

In this guide, you have learned how to use the code generator (protobuf plugin) to
generate server code and client stubs from a service defined in protobuf
and learned how to implement the service and integrate it into standard HTTP tooling.

You can read more about each concept presented in this guide in the following sections.
