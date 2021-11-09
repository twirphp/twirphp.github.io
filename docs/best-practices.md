---
sidebar_position: 70
---

# Best practices

This page contains some best practices related to using TwirPHP.

## Folder/Package structure

There are three types of software artifacts involved in a project using TwirPHP:

- proto files
- generated code
- service implementation

Based on common PHP packaging practices, here is a recommended folder structure:

```
/generated
    /<namespace>
        // generated files
/src
    /<namespace>
        // service implementation
/proto
    service.proto
```

Projects with multiple services might have different ways of structuring proto files.

## Build tool for code generation

Make sure to properly document how the code generation works.

Even better: use a build tool to collect all proto generation commands.

In case of PHP, that tool can be [Composer](https://getcomposer.org/) itself:

```json title="composer.json"
{
    // ...

    "scripts": {
        "proto": [
            "protoc -I . --twirp_out=generated --php_out=generated proto/service.proto"
        ]
    }
}
```

Then you can simply run the code generator using:

```shell
composer proto
```
