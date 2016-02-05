---
layout: post
title:  "Variables"
date:   2016-01-03
---

<p class="intro"><span class="dropcap">T</span>hink of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.</p>

{% highlight sass %}
/*SCSS*/
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
{% endhighlight %}

When the Sass is processed, it takes the variables we define for the `$font-stack` and `$primary-color` and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

{% highlight css %}
/* CSS */
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
{% endhighlight %}
