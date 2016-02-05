---
layout: post
title:  "Partials and Imports"
date:   2016-01-05
---

<p class="intro"><span class="dropcap">Y</span>ou can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain.</p>

A partial is simply a Sass file named with a leading underscore. You might name it something like `_partial.scss`. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the `@import` directive.

CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use `@import` in CSS it creates another HTTP request. Sass builds on top of the current CSS `@import` but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.

Let's say you have a couple of Sass files, `_reset.scss` and `base.scss`. We want to import `_reset.scss` into `base.scss`.

{% highlight sass %}
// _reset.scss
html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
{% endhighlight %}

{% highlight sass %}
// base.scss
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
{% endhighlight %}

Notice we're using `@import 'reset';` in the `base.scss` file. When you import a file you don't need to include the file extension .scss. Sass is smart and will figure it out for you. When you generate the CSS you'll get:

{% highlight css %}
/*CSS*/
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
{% endhighlight %}
