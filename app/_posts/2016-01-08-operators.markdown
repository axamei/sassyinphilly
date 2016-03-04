---
layout: post
title:  "Operators"
date:   2016-01-08
---

<p class="intro"><span class="dropcap">D</span>oing math in your CSS is very helpful. Sass has a handful of standard math operators like +, -, *, /, and %. In our example we're going to do some simple math to calculate widths for an aside and article.</p>

{% highlight sass %}
/*SCSS*/
.container { 
  width: 100%; 
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
{% endhighlight %}

We've created a very simple fluid grid, based on 960px. Operations in Sass let us do something like take pixel values and convert them to percentages without much hassle. The generated CSS will look like:

{% highlight css %}
/*CSS*/
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
{% endhighlight %}
