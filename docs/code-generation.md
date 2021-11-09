---
sidebar_position: 60
---

# Code generation

To start building a Twirp service and generate the necessary code for it,
you are going to need three things:

- the `protoc` tool
- the TwirPHP `protoc` plugin (`protoc-gen-twirp_php`)
- some proto file that contains service definitions (see the [Quickstart guide](/docs/quickstart#create-a-new-service-definition) for an example)

Check out the [Installation guide](/docs/installation) for details about installing `protoc` and `protoc-gen-twirp_php`.

Based on where you installed `protoc-gen-twirp_php`, you might have to invoke the `protoc` tool differently:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Plugin installed in PATH" default>

```shell
protoc --twirp_php_out=generated/ --php_out=generated/ service.proto
```

  </TabItem>
  <TabItem value="orange" label="Plugin installed in custom path">

```shell
protoc \
  --plugin=protoc-gen-twirp_php=path/to/protoc-gen-twirp_php \
  --twirp_php_out=generated/ \
  --php_out=generated/ \
  service.proto
```

  </TabItem>
</Tabs>

The resulting directory structure should look something like this:

```
.
├── GPBMetadata                                   // Some protobuf specific files
│   └── Service.php
└── Twitch
    └── Twirp
        └── Example
            ├── Haberdasher.php                   // Service interface
            ├── HaberdasherAbstractClient.php     // Most of the generated client code
            ├── HaberdasherClient.php             // Protobuf client
            ├── HaberdasherJsonClient.php         // JSON client
            ├── HaberdasherServer.php             // Server implementation
            ├── Hat.php                           // Message
            ├── Size.php                          // Message
            └── TwirpError.php                    // Exception thrown for most Twirp errors
```
