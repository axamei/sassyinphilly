---
layout: post
title:  "Mixins and Includes"
date:   2016-01-06
---

<p class="intro"><span class="dropcap">S</span>ome things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. </p>

You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes (i.e., if you're not using autoprefixer).

{% highlight sass %}
/*SCSS*/
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
{% endhighlight %}

To create a mixin you use the `@mixin` directive and give it a name. We've named our mixin `border-radius`. We're also using the variable `$radius` inside the parentheses so we can pass in a radius of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with `@include` followed by the name of the mixin. When your CSS is generated it'll look like this:

{% highlight css %}
/*CSS*/
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
{% endhighlight %}
