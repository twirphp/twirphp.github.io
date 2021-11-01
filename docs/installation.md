---
sidebar_position: 40
---

# Installation

This is a detailed installation guide for each component and dependency of TwirPHP.

:::tip
Give [Nix](https://nixos.org/) a try and install dependencies in seconds.
Check out the [quickstart-demo](https://github.com/twirphp/quickstart-demo/blob/main/flake.nix#L18) repository for the necessary packages.
:::

## Prerequisites

- [PHP](https://www.php.net/) (at least 7.3)
- [Composer](https://getcomposer.org/)

## Protobuf compiler

`protoc` is the compiler for protobuf definitions that generates code for different languages and frameworks.

The easiest way to install it is downloading the precompiled binary from the
[GitHub Releases page](https://github.com/google/protobuf/releases).

Alternatively, you can install it with your package manager,
but be aware that packages in package repos might be outdated:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="nix" label="Nix" default>

```shell
nix-env -iA nixpkgs.protobuf
```

  </TabItem>
  <TabItem value="nixos" label="NixOS">

```shell
nix-env -iA nixos.protobuf
```

  </TabItem>
  <TabItem value="homebrew" label="Homebrew">

```shell
brew install protobuf
```

  </TabItem>
</Tabs>

## TwirPHP protoc plugin

Similarly to `protoc`, the easiest way to install the plugin is downloading the precompiled binary from the
[GitHub Releases page](https://github.com/twirphp/twirp/releases).

Alternatively, you can use the following oneliner to download and install the plugin to a custom path:

```shell
curl -Ls https://git.io/twirphp | bash [-b path/to/bin]
```

If you ommit the `-b` option, the plugin will be downloaded to `$PWD/bin`.

Finally, you can try installing the plugin with your package manager:

<Tabs>
  <TabItem value="nix" label="Nix" default>

```shell
nix-env -iA nixpkgs.protoc-gen-twirp_php
```

  </TabItem>
  <TabItem value="nixos" label="NixOS">

```shell
nix-env -iA nixos.protoc-gen-twirp_php
```

  </TabItem>
</Tabs>

:::caution
If the plugin is not installed in PATH, `protoc` has to be invoked differently:

```shell
protoc --plugin=protoc-gen-twirp_php=path/to/protoc-gen-twirp_php ...
```
:::

## Runtime library

You can install the runtime library using [Composer](https://getcomposer.org/):

```shell
composer require twirp/twirp
```

## Quickstart PHP dependencies

Choosing the right set of dependencies is not always trivial.

If you don't care which HTTP libraries and which protobuf implementation you use,
you can just install the following quickstart package:

```shell
composer require twirp/quickstart
```

It will install:

- the pure PHP protobuf library
- Guzzle HTTP client
- Guzzle PSR-7

:::danger
**This is not recommended for production!**

Please carefully choose which dependencies you install before going to production.
:::

## Protobuf PHP library

As explained in the [Overview](/docs/overview#protobuf-in-php),
protobuf comes with two different runtime implementations.

Choose one that fits your needs:

<Tabs>
  <TabItem value="pecl" label="PECL" default>

```shell
sudo pecl install protobuf-{VERSION}
```

  </TabItem>
  <TabItem value="composer" label="Composer">

```shell
composer require google/protobuf
```

  </TabItem>
</Tabs>

## HTTP libraries

As explained in the [Overview](/docs/overview#http-standards),
the TwirPHP runtime library relies on various HTTP standard interfaces.

If you do HTTP stuff in your project, chances are that some of them are already installed.

You can find packages that implement the relevant interfaces on [Packagist](https://packagist.org/):

- [PSR-7 implementation](https://packagist.org/providers/psr/http-message-implementation)
- [PSR-17 implementation](https://packagist.org/providers/psr/http-factory-implementation)
- [PSR-18 implementation](https://packagist.org/providers/psr/http-client-implementation)

An example set of dependencies for server usage:

```shell
composer require guzzlehttp/psr7
```

An example set of dependencies for client usage:

```shell
composer require guzzlehttp/guzzle guzzlehttp/psr7
```
