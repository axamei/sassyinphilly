---
layout: post
title:  "Bootstrap"
date:   2016-01-10
---

* Most popular framework
* CSS & Javascript components
* Styleguide - Provides basic styles for common HTML elements & patterns
* Grid management
* Responsive support
* Javascript widgets
* Originally written In LESS
* Currently available in LESS and Sass
* V4 switches to Sass-only syntax
* [bootstrap-sass](https://github.com/twbs/bootstrap-sass)

To include Bootstrap, add `@import "bootstrap";` to your `main.scss` file. This will give you access to the assets in bootstrap-sass. Then, create HTML markup that includes standard Bootstrap classes. You can think of the `@import "bootstrap";` as equivalent to adding the link to the Bootstrap CDN. 

The next step to take is to look at [bootstrap-sass variables](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss) and create a new scss file to override these values: `_bootstrap-overrides.scss` in the modules folder. Place it `@import "modules/bootstrap-overrides";` before `@import "bootstrap";`

<!-- <div class="jumbotron">
<h1>Jumbotron</h1>
<p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
</div>

<nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li class="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

<div class="alert alert-success" role="alert">
	<strong>Well done!</strong> You successfully read this important alert message.
</div>

<div class="panel panel-info">
<div class="panel-heading">
  <h3 class="panel-title">Panel title</h3>
</div>
<div class="panel-body">
  Panel content
</div>
</div> -->

Based on our presentation, [Build Your Own Bootstrap](http://axamei.github.io/byob4lib/slides/#/), at last year's Code4Lib, you probably think that we have nothing good to say about Bootstrap. Yes, you can't spell Bootstrap without "boo". And, you're familiar with this code smell and divitis example:

{% highlight html %}
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-sm-3">
                            <span>1</span>
                        </div>
                        <div class="col-sm-3">
                            <span>2</Span>
                        </div>
                        <div class="col-sm-3">
                            <span>3</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row">
                        <div class="col-md-8">
                            <span>1</span>
                        </div>
                        <div class="col-md-4">
                            <span>2</span>
                        </div>
                    </div>
                </div>
            </div><!-- row -->
        </div><!-- col-md-6 -->
        <div class="col-md-6">
            <div class="row">
                <div class="col-xs-2">
                    <span>1</span>
                </div>
                <div class="col-xs-2">
                    <span>2</span>
                </div>
                <div class="col-xs-2">
                    <span>3</span>
                </div>
                <div class="col-xs-2">
                    <span>4</span>
                </div>
                <div class="col-xs-2">
                    <span>5</span>
                </div>
                <div class="col-xs-2">
                    <span>6</span>
                </div>
            </div><!-- row -->
        </div><!-- col-md-6 -->
    </div><!-- row -->
</div><!-- container-fluid -->

 {% endhighlight %}

BUT, Bootstrap and Sass definitely make a great combo. Features in Sass like `@extend` and `@include` can help us write leaner, programmable, and maintainable CSS. With Sass, we can utilize some of these functions to achieve a cleaner and more semantic HTML structure rather than being stuffed with meaningless class names:

{% highlight html %}
<section class="content">
  <article class="column post">
    <p>This is the Content.</p>
  </article>
  <aside class="column sidebar">
    <p>This is the Sidebar.</p>
  </aside>
</section>
{% endhighlight %}

{% highlight sass %}
section {
  @include make-row;
}
.post {
  @include make-xs-column(6);
  @include make-sm-column(6);
}
.sidebar {
  @include make-xs-column(4);
  @include make-sm-column(4);
}
.column {
  @include make-md-column(4);
}
{% endhighlight %}

See: [*Boostrap Sass Mixins* - Twitter Bootstrap](https://github.com/twbs/bootstrap-sass/tree/5ad0746ff394aa810e730eefec69f65036450e66/assets/stylesheets/bootstrap/mixins)
