---
layout: post
title:  "Sass vs SCSS Syntax"
date:   2016-01-02
---

<p class="intro"><span class="dropcap">Y</span>ou'll find two different ways of getting sassy. There is Sass and SCSS (Sassy CSS). The Sass syntax was inherited from HAML--it cares about indentation levels and white-space. There's a clear difference between Sass and CSS. SCSS (Sassy CSS) was introduced as "the new main syntax" for Sass and builds on the existing syntax of CSS. We like to think of SCSS as Super CSS. </p>

{% highlight sass %}
/* Sass */
$blue: #3bbfce
$margin: 16px

.content-navigation
  border-color: $blue
  color: darken($blue, 9%)

.border
  padding: $margin / 2
  margin: $margin / 2
  border-color: $blue
{% endhighlight %}

## Pros for Sass

- The Sass syntax is more concise
- The Sass syntax is easier to read
- The Sass syntax doesn't complain about missing semi-colons

{% highlight sass %}
/*SCSS*/
$blue: #3bbfce;
$margin: 16px;

.content-navigation {
  border-color: $blue;
  color: darken($blue, 9%);
}

.border {
  padding: $margin / 2; 
  margin: $margin / 2; 
  border-color: $blue;
}
{% endhighlight %}

## Pros for SCSS

- SCSS is more expressive
- SCSS encourages proper nesting of rules
- SCSS encourages more modular code with @extend
- SCSS allows you to write better inline documentation
- Existing CSS tools often work with SCSS
- Integration with an existing CSS codebase is much easier
- SCSS provides a much lower barrier to entry
- SCSS pushes CSS to improve

{% highlight css %}
/* CSS */
.content-navigation {
  border-color: #3bbfce;
  color: #2b9eab;
}

.border {
  padding: 8px;
  margin: 8px;
  border-color: #3bbfce;
}
{% endhighlight %}
