---
layout: post
title:  "Organizing and Naming Things is Hard"
date:   2015-12-31
---

<p class="intro"><span class="dropcap">T</span>here is no "one true way" of doing this. However, there are techniques that can keep CSS more organized and more structured, leading to code that is easier to build and easier to maintain. Feel free to take this in its entirety or use only the parts that work best for you. Or don’t use it at all. When it comes to web development, the answer to most questions is "it depends" and "do what works best for your team".</p>

We want to change from our singular 2000+ line CSS file to a more scalable and modular architecture for our styles. Break the files down into partials and organize them and name them in a sensible manner. Do what makes the most sense for your team.

##SMACSS
See: [*Scalable and Modular Architecture for CSS* - Jonathan Snook](https://smacss.com/book/)

At the very core of SMACSS is categorization. By categorizing CSS rules, we begin to see patterns and can define better practices around each of these patterns.

**Base rules** are the defaults. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. Essentially, a base style says that wherever this element is on the page, it should look like this.

{% highlight css %}
body, form {
    margin: 0;
    padding: 0;
}

a {
    color: #039;
}

a:hover {
    color: #03F;    
}
{% endhighlight %}

**Layout rules** divide the page into sections. Layouts hold one or more modules together.

{% highlight css %}
.header, .article, .footer {
    width: 960px;
    margin: auto;
}

.article {
    border: solid #CCC;
    border-width: 1px 0 0;
}
{% endhighlight %}

**Modules** are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on.

{% highlight css %}
.media {
	margin:10px;
}

.media, .copy {
	overflow:hidden;
	zoom:1;
}

.media .img {
	float:left; 
	margin-right: 10px;
}

.media .img img {
	display:block;
}
{% endhighlight %}

**State rules** are ways to describe how our modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive? They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or the inside page.

{% highlight css %}
.tab {
    background-color: purple;
    color: white;
}

.is-tab-active {
    background-color: white;
    color: black;
}
{% endhighlight %}

Finally, **Theme rules** are similar to state rules in that they describe how modules or layouts might look. Most sites don’t require a layer of theming but it is good to be aware of it.

{% highlight css %}
// in module-name.css
.mod {
    border: 1px solid;
}

// in theme.css
.mod {
    border-color: blue;
}
{% endhighlight %}

##BEM
See: [*BEM 101* - Robin Rendle](https://css-tricks.com/bem-101/)

The **Block**, **Element**, **Modifier** methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

{% highlight css %}
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
{% endhighlight %}

{% highlight html %}
<a class="btn btn--big btn--orange" href="http://css-tricks.com">
  <span class="btn__price">$9.99</span>
  <span class="btn__text">Subscribe</span>
</a>
{% endhighlight %}
