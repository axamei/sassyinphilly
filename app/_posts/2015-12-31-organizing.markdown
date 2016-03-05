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

One approach:

{% highlight css %}
stylesheets/
|
|-- modules/              # Common modules
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _figures.scss     # figures
|   |-- _grids.scss       # grids
|   |-- _typography.scss  # typography
|   |-- _reset.scss       # reset
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- _colorpicker.scss
|   |-- _jquery.ui.core.scss
|   ...
|
`-- main.scss            # primary Sass file
{% endhighlight %}

Another approach:

{% highlight css %}
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   |– _navigation.scss  # Navigation
|   ...                  # Etc…
|
|– helpers/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|   ...                  # Etc…
|
|– layout/
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # primary Sass file
{% endhighlight %}


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

## OOCSS
See: [*An Introduction to Object Oriented CSS* - Louis Lazaris](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)

As with any object-based coding method, the purpose of OOCSS is to encourage code reuse and, ultimately, faster and more efficient stylesheets that are easier to add to and maintain.

###Separation of Structure from Skin Link

Almost every element on a styled Web page has different visual features (i.e. “skins”) that are repeated in different contexts. Think of a website’s branding — the colors, subtle uses of gradients, or visible borders. On the other hand, other generally invisible features (i.e. “structure”) are likewise repeated.

When these different features are abstracted into class-based modules, they become **reusable** and can be applied to any element and have the same basic result. Let’s compare some before and after code so you can see what I’m talking about.

Before applying OOCSS principles, you might have CSS that looks like this:

{% highlight css %}
#button {
  width: 200px;
  height: 50px;
  padding: 10px;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}

#box {
  width: 400px;
  overflow: hidden;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}

#widget {
  width: 500px;
  min-height: 200px;
  overflow: auto;
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
{% endhighlight %}

The three elements above have styles that are unique to each, and they’re applied with the non-reusable ID selector to define the styles. But they also have a number of styles in common. The common styles might exist for branding purposes or consistency of design.

With a little bit of planning and forethought, we can abstract the common styles so the CSS would end up instead like this:

{% highlight css %}
.button {
  width: 200px;
  height: 50px;
}

.box {
  width: 400px;
  overflow: hidden;
}

.widget {
  width: 500px;
  min-height: 200px;
  overflow: auto;
}

.skin {
  border: solid 1px #ccc;
  background: linear-gradient(#ccc, #222);
  box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;
}
{% endhighlight %}

Now all the elements are using classes, the common styles are combined into a reusable “skin” and nothing is unnecessarily repeated. We just need to apply the “skin” class to all the elements and the result will be the same as what the first example would produce, except with less code and a possiblity for further reuse.

###Separation of Containers and Content

{% highlight css %}
#sidebar h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

/* other styles here.... */

#footer h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  line-height: 1;
  color: #777;
  text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}
{% endhighlight %}

Now we’re **unnecessarily duplicating styles**, and might not realize it (or simply don’t care). With OOCSS, we’re encouraged to give more forethought to what is common among different elements, then separate those common features into modules, or objects, that can be reused anywhere.

The styles that are declared using the descendant selector in those above examples are **not reusable, because they are dependent on a particular container** (in this case either the sidebar or the footer).

When we use OOCSS’s class-based module building, we ensure that our styles are not dependent on any containing element. This means they can then be reused anywhere in the document, regardless of structural context.

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

In this CSS methodology a **block** is a top-level abstraction of a new component, for example a button: `.btn { }`. This block should be thought of as a parent. Child items, or **elements**, can be placed inside and these are denoted by two underscores following the name of the block like `.btn__price { }`. Finally, **modifiers** can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like `btn--orange`.

{% highlight html %}
<a class="btn btn--big btn--orange" href="http://css-tricks.com">
  <span class="btn__price">$9.99</span>
  <span class="btn__text">Subscribe</span>
</a>
{% endhighlight %}

###Why Should We Consider BEM?

1. If we want to make a new style of a component, we can easily see which modifiers and children already exist. We might even realize we don't need to write any CSS in the first place because there is a pre-existing modifier that does what we need.
2. If we are reading the markup instead of CSS, we should be able to quickly get an idea of which element depends on another (in the previous example we can see that `.btn__price` depends on `.btn`, even if we don't know what that does just yet.)
3. Designers and developers can consistently name components for easier communication between team members. In other words, BEM gives everyone on a project a declarative syntax that they can share so that they're on the same page.

<img src="{{ '/images/bem.png' | prepend: site.baseurl }}" alt="BEM">
