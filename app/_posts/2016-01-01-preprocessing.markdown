---
layout: post
title:  "Preprocessing"
date:   2016-01-01
---

<p class="intro"><span class="dropcap">C</span>SS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. </p>

Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, inheritance and other nifty goodies that make writing CSS fun again. Once you start tinkering with Sass, it will take your preprocessed Sass file and save it as a normal CSS file that you can use in your web site.

In this project we use libsass to compile our Sass to CSS. We are using it with Gulp, a build tool, we will talk about more later. We also use NPM pacakges to manage the Sass libraries. Until relatively recently most Sass projects were dependent on Ruby and Rubygems but with most major Sass libraries being released as NPM packages and [libSass](http://sass-lang.com/libsass) reaching feature parity with the Ruby "sass" gem including sass in your project workflow is easier than ever.

But, you can get Sassy without the terminal!

[CodeKit](https://incident57.com/codekit/) (Mac OS X) - CodeKit is a tool to compile Sass, LESS, Stylus, Jade and much more. It comes with Bower so you can import and manage dependencies / libraries simply. It also refreshes browsers across devices.

[Prepros](http://prepros.io) (Windows, Mac OS X and Linux) - Prepros is a tool to compile Sass, LESS, Stylus, Jade and much more with automatic CSS prefixing. It comes with built in server for cross browser testing and automatic browser refresh.
