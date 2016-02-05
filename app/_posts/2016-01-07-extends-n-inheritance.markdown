---
layout: post
title:  "Extends and Inheritance"
date:   2016-01-07
---

<p class="intro"><span class="dropcap">T</span>he @extend and @mixin directives are not exactly the same. Whereas a @mixin outputs rules that can be copied for multiple selectors and customized via parameters, @extend uses the mechanism for rule-sharing that allows it to inherit rulesets between selectors that can be overridden by the extending selector.</p>

Using `@extend` lets you share a set of CSS properties from one selector to another. In our example we're going to create a simple series of messaging for errors, warnings and successes.

{% highlight sass %}
/*SCSS*/
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
{% endhighlight %}

What the above code does is allow you to take the CSS properties in `.message` and apply them to `.success`, `.error`, & `.warning`. The magic happens with the generated CSS, and this helps you avoid having to write multiple class names on HTML elements. This is what it looks like:

{% highlight css %}
/*CSS*/
.message, 
.success, 
.error, 
.warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
{% endhighlight %}
