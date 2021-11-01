---
sidebar_position: 20
---

# Quickstart

This guide walks you through the process of quickly setting up a new project with TwirPHP.

If you want to see the result without following this guide, check out [this repository](https://github.com/twirphp/quickstart-demo).

:::caution
This is merely an overview, it's not meant for setting up new production services.

**Please read the rest of the documentation.**
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
composer init --name twirp/quickstart-demo --stability dev --autoload src/ --no-interaction
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

Create a new service in the repository root:

```protobuf title="service.proto"
syntax = "proto3";

package twirp.quickstartDemo;

service HelloWorld {
  rpc Hello(HelloReq) returns (HelloResp);
}

message HelloReq {
  string subject = 1;
}

message HelloResp {
  string text = 1;
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
    "name": "twirp/quickstart-demo",
    "autoload": {
        "psr-4": {
            "Twirp\\QuickstartDemo\\": "src/",
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

## Implement the service

Implement the `HelloWorld` service:

```php title="src/MyHelloWorld.php"
<?php

namespace Twirp\QuickstartDemo;

final class MyHelloWorld implements HelloWorld
{
    public function Hello(array $ctx, HelloReq $req): HelloResp
    {
        $resp = new HelloResp();
        $resp->setText(sprintf("Hello %s", $req->getSubject()));

        return $resp;
    }
}

```

## Implement the server

Implement the server and register the `MyHelloWorld` implementation of the `HelloWorld` service in it:

```php {9-10} title="server.php"
<?php

require __DIR__.'/vendor/autoload.php';

$request = \GuzzleHttp\Psr7\ServerRequest::fromGlobals();

$server = new \Twirp\Server();

$handler = new \Twirp\QuickstartDemo\HelloWorldServer(new \Twirp\QuickstartDemo\MyHelloWorld());
$server->registerServer(\Twirp\QuickstartDemo\HelloWorldServer::PATH_PREFIX, $handler);

$response = $server->handle($request);

if (!headers_sent()) {
	// status
	header(sprintf('HTTP/%s %s %s', $response->getProtocolVersion(), $response->getStatusCode(), $response->getReasonPhrase()), true, $response->getStatusCode());
	// headers
	foreach ($response->getHeaders() as $header => $values) {
		foreach ($values as $value) {
			header($header.': '.$value, false, $response->getStatusCode());
		}
	}
}
echo $response->getBody();
```

## Test the server

At this point, you can start sending requests to the server.

First, launch a PHP server in a new shell:

```shell
php -S 127.0.0.1:8080 server.php
```

Then send an HTTP request to the server using cURL:

```shell
curl http://127.0.0.1:8080/twirp/twirp.quickstartDemo.HelloWorld/Hello \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"subject": "World"}'
```

You should see `{"text":"Hello World"}` as the response.

## Use the generated client stubs

One of the biggest benefits of using a protobuf-based RPC framework is that you don't have to write any client code:
the framework generates that for you.

Here is an example of using the generated client for calling the `HelloWorld` service:

```php title="client.php"
<?php

require __DIR__.'/vendor/autoload.php';

$client = new \Twirp\QuickstartDemo\HelloWorldClient($argv[1]);

$req = new \Twirp\QuickstartDemo\HelloReq();
$req->setSubject("World");

try {
    $resp = $client->Hello([], $req);

    echo $resp->getText();
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
