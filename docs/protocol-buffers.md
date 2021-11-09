---
sidebar_position: 50
---

# Protocol Buffers

Twirp uses [Protocol Buffers](https://developers.google.com/protocol-buffers) (protobuf) as its IDL (interface definition language).

Protobuf is not just an IDL though: it's also a binary serialization format (like JSON) and it comes with a _compiler_ (`protoc` tool) for generating
language specific code (message objects, client stubs, server interfaces) from interface definitions.

These traits make it a powerful tool in the polyglot world we live in today.

Learn more about protobuf in the [official documentation](https://developers.google.com/protocol-buffers).

## Protocol Buffers and PHP

Let's take a look at the example from the [Quickstart guide](/docs/quickstart):

```protobuf title="service.proto"
message Hat {
  int32 size = 1;
  string color = 2;
  string name = 3;
}

message Size {
  int32 inches = 1;
}

service Haberdasher {
  rpc MakeHat(Size) returns (Hat);
}
```

:::note
A couple things were removed from the example for brevity.
Check out the [Quickstart guide](/docs/quickstart#create-a-new-service-definition) for the complete example.
:::


It contains two types of "objects": **messages** and **services**.

`protoc` contains builtin support for generating PHP classes for _messages_,
but for generating code for _services_ you need external plugins, like gRPC or TwirPHP.

For more details, check out the [PHP reference](https://developers.google.com/protocol-buffers/docs/reference/php-generated) in the protobuf documentation.

## Using `protoc`

`protoc` has a bunch of different parameters, but arguably the `--<plugin>_out` is the most important one.
This is how you tell `protoc` that you would like to generate code for a certain language or external plugin.

As mentioned above, `protoc` comes with a bunch of builtin plugins for languages and PHP is one of them.

To generate PHP classes for the messages in the `service.proto` example above,
you simply need to tell `protoc` where you want the generated code:

```shell
mkdir generated
protoc --php_out=generated service.proto
```

External plugins work similarly, except they are implemented as separate binaries, conventionally called `protoc-gen-<plugin>`:

```shell
protoc --myplugin_out=generated service.proto
```

By default, `protoc` tries to find plugins in the `PATH`, but you can also point it to a custom binary
(which is extremely useful during development):

```shell
protoc --plugin=protoc-gen-myplugin=bin/protoc-gen-myplugin --myplugin_out=generated service.proto
```
