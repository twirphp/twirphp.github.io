---
sidebar_position: 10
---

# About

## What is Twirp?

[Twirp](https://twitchtv.github.io/twirp/) is a _"a simple RPC framework built on [protobuf](https://developers.google.com/protocol-buffers/)"_.

It tries to address some of the shortcomings of gRPC,
mostly caused by the complexity introduced in order to support the use cases and scale at which gRPC is often used.

Twirp was designed with simplicity in mind with a strong emphasis on backwards compatibility.
A couple features you get if you decide to give Twirp a try:

- HTTP 1.1 support
- Thin runtime library (protocol implementation is mostly generated)
- JSON support for debugging

Check out the [official website](https://twitchtv.github.io/twirp/) for more details or
read the [introductory blog post](https://blog.twitch.tv/en/2018/01/16/twirp-a-sweet-new-rpc-framework-for-go-5f2febbf35f/#f1a5)
that makes a pretty strong case for Twirp, going into details why it might be a better choice (than REST or gRPC).

## What is TwirPHP?

Unfortunately (or not?) officially Twirp only supports Go (and Python).
While in the modern software world Go becomes more and more popular every day,
PHP (as of the time of this writing) is still in the [top 10 popular programming languages](https://www.tiobe.com/tiobe-index/).

TwirPHP is a PHP port of Twirp supporting both server and client side.
It generates code the same way as Twirp and follows the same naming conventions and architectural structure,
making it easier to use Twirp (and TwirPHP) in a polyglot environment.
