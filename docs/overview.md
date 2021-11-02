---
sidebar_position: 30
---

# Overview

## Components

Similarly to Twirp, TwirPHP comes with two major components:

- code generator (protoc plugin)
- runtime library

### Code generator

The code generator is responsible for generating:

- some common code used in both servers and clients
- the server protocol implementation
- the service interface
- the client stubs

It's written in Go to make the implementation simpler by using some standard Go protobuf tooling,
but it's not much more then a template renderer.

### Runtime library

One of the main criticism for gRPC is it's relatively large runtime library.
Breaking changes in the runtime inevitably cause incompatibility issues between clients and servers
if they don't upgrade at the same time (which is usually the case).
We've seen it happen in gRPC and that's one of the reasons why Twirp (and TwirPHP)
took a different approach.

Most of the protocol implementation in Twirp (and in TwirPHP) is generated.
As a result, the runtime library is a very thin layer with two primary goals:

- ensuring interoperability between different implementations
- providing tools for common tasks

The interfaces you find in the runtime library make sure that you can code against the same types across all implementations.

Besides the necessary interfaces, the TwirPHP runtime library comes with a simple routing implementation for the server side
(easily replaceable by alternative implementations, most of the protocol implementation is still generated)
and a couple helpers for server hooks and error handling.

The interfaces are essential to ensure interoperability, but the rest is absolutely optional,
you're welcome bring your own implementation.

## PHP specifics

### Protobuf in PHP

Protobuf at its core is language agnostic and it ships with not one, but twoofficial PHP implementations:

- native C extension
- pure PHP implementation

The C extension is said to provide better performance, but the PHP implementation might have wider platform support.

The examples throughout this site use the PHP implementation for portability reasons,
but that doesn't mean it's the right choice for every use case.

Please read the [protobuf documentation for PHP](https://github.com/protocolbuffers/protobuf/tree/master/php),
learn about [known issues](https://github.com/protocolbuffers/protobuf/tree/master/php#known-issues)
and decide which implementation to use based on your use cases.

TwirPHP works with both implementations equally well.


### HTTP standards

The PHP community has spent quite a bit of time on creating HTTP related standards.
TwirPHP relies on these standards to make itself agnostic of the implementations:

- [PSR-7](http://www.php-fig.org/psr/psr-7/) (HTTP Message)
- [PSR-15](http://www.php-fig.org/psr/psr-15/) (HTTP Server Request Handler)
- [PSR-17](http://www.php-fig.org/psr/psr-17/) (HTTP Factory)
- [PSR-18](http://www.php-fig.org/psr/psr-18/) (HTTP Client)

Choosing the right implementations for your project is up to you.
If you do HTTP stuff in your project, chances are that some of them are already installed.
