---
layout: post
title:  "Susy Grids"
date:   2016-01-12
---

* Project Slogan: `Your markup, your layout | our math`
* [Current Docs](http://susydocs.oddbird.net/en/latest/)
* [Learn More](http://susy.oddbird.net/demos/)
* [Read the Book](http://learnsusy.zellwk.com/)
* Manage the layout of any arbitrary HTML in existing applications
* Manage both fluid and fixed width grids
* Built-in debugging
* Tame the layout of vendor applications whose markup you can't sustainably control
  + Drupal
  + Atlas Systems
  + Legacy ASP/.NET Applications 
  + Ruby on Rails Projects

## Define A Basic Grid

[Review Susy Defaults](http://susydocs.oddbird.net/en/latest/settings/#global-defaults). These define a four column floating grid. We'll override that to the following:

{% highlight sass %}
$susy: (
  columns: 12,
  gutters: 1/3,
  gutter-position: after,
);
{% endhighlight %}

* 12 Units wide
* Gutters are 1/3 the size of a column and position *after* a given column

Let's apply this grid to the following html:

{% highlight html %}
<div class="susy-container">
  <div class="col-a">
    <h2>Foo</h2>
  </div>
  <div class="col-b">
    <h2>Bar</h2>
  </div>
  <div class="full-content">
    <h2>Foobar</h2>
  </div>
</div>
{% endhighlight %}

Fully rendered it looks like:

<div class="susy-container">
  <div class="col-a">
    <h2>Foo</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum, urna non lacinia pretium, tortor erat convallis purus, vitae rutrum quam neque et elit. Sed ac magna sodales, egestas nunc vel, posuere orci. Nullam vel nisi at urna venenatis suscipit. Suspendisse potenti. Fusce congue urna vel aliquam accumsan. Donec hendrerit eget sem vel efficitur. Aenean vehicula fermentum justo varius vestibulum. Suspendisse varius vitae tortor quis placerat. Nunc vitae mollis lacus, id mattis ex. Curabitur nec tortor sed turpis placerat cursus. Donec sit amet neque pretium, viverra ipsum id, dignissim odio.</p>
  </div>
  <div class="col-b">
    <h2>Bar</h2>
    <p>Praesent ullamcorper dapibus orci varius volutpat. Mauris laoreet tellus nec turpis consectetur consequat. Pellentesque ut elementum turpis. Sed venenatis consectetur laoreet. Aenean eu ullamcorper dui. Aliquam ac eros aliquet, fermentum mi non, scelerisque erat. Phasellus eu hendrerit eros. Morbi viverra augue diam, vel fermentum elit egestas at. Nunc vel sem at massa venenatis suscipit.</p>
  </div>
  <div class="full-content">
    <h2>Foobar</h2>
    <p>Ut scelerisque mauris et rutrum mollis. Mauris sagittis dui sed finibus mollis. Maecenas vitae porttitor magna. Maecenas tincidunt eleifend imperdiet. Nam ullamcorper, ante vel suscipit iaculis, nisi sem ornare velit, fringilla finibus augue mauris vitae neque. Integer ullamcorper congue tellus, in sodales ligula ultricies non. Integer porta semper nunc, in mattis nisl bibendum eu. Nullam lorem mi, sollicitudin ac rutrum non, viverra hendrerit ex. Phasellus elementum nibh at malesuada dignissim. Nam quis justo arcu. Sed egestas sapien augue, sit amet egestas augue imperdiet non. Aliquam libero dolor, dignissim vitae tristique nec, lobortis sit amet diam. Donec non consequat mauris. Suspendisse pharetra enim pretium, pretium diam sit amet, elementum tellus. Suspendisse ut lectus ullamcorper, elementum sapien eu, blandit purus. In urna augue, elementum in gravida ac, mattis et ipsum.</p>
  </div>
</div>

The basic sass required for the previous layout is:

{% highlight sass %}
.susy-container {
  /* passes a fixed-width for the grid */
  @include container(800px);
  @include clearfix;
}

.susy-container {

  .col-a {
    @include span(6 first);
     background-color: #fae7b3;
  }

  .col-b {
    @include span(6 last);
     background-color: #f09671;
  }

  .full-content {

    @include span(8 of 12);
    @include pre(2);
    @include post(2);
    background-color: #ee9e9c;
    
  }
}
{% endhighlight %}

## Complex Grids

<p>Susy give you an opportunity to apply grid styles outside of the standard 12 Column, static grids Bootstrap and Foundation use by default. The next example was modified from "A Computer Tutorial to Susy 2" [Part One](http://zellwk.com/blog/susy2-tutorial/) and [Part Two](http://zellwk.com/blog/susy2-tutorial-2/).</p>


<p>Consider the Following HTML:</p>

{% highlight html %}
<div class="complex-container">
<h1>The 10 column complex nested grid AG test</h1>

<div class="ag ag1">
  <h2>AG 1</h2>
</div>
<!-- /ag1 -->

<!-- ag4 to ag7 are nested within ag2.-->
<div class="ag ag2">
  <h2>AG 2</h2>
  <div class="ag ag4">
    <h2>AG 4</h2>
  </div>
  <div class="ag ag5">
    <h2>AG 5</h2>
  </div>
  <div class="ag ag6">
    <h2>AG 6</h2>
  </div>

  <!-- ag8, ag9 and ag10 are nested within ag7 -->
  <div class="ag ag7">
    <h2>AG 7</h2>
    <div class="ag ag8">
      <h2>AG 8</h2>
    </div>
    <div class="ag ag9">
      <h2>AG 9</h2>
    </div>
    <div class="ag ag10">
      <h2>AG 10</h2>
    </div>
  </div>
  <!-- /ag7 -->
</div>
<!-- /ag2 -->

<div class="ag ag3">
  <h2>AG 3</h2>
</div>
<!-- /ag3 -->

</div>
<!-- /container -->
{% endhighlight %}

The Susy mixins needed to apply a 10 column to the markup listed above

{% highlight sass %}
.asymm-containter {
  @include container(10);
  @include clearfix;
}

.ag1 {
  @include span(2 of 10);
}

.ag2 {
  @include span(6 of 10);
  @include clearfix; 
}

.ag3 {
  @include span(2 of 10 last);
}

.ag4 {
  @include span(3 of 6);
}

.ag5 {
  @include span(3 of 6 last);
}

.ag6 {
  @include span(2 of 6);
}

.ag7 {
  @include span(4 of 6 last);
  @include clearfix;
}

.ag8 {
  @include span(2 of 4);
}

.ag9 {
  @include span(2 of 4 last);
}

.ag10 {
  // Use the full keyword to tell Susy this should be a 100% width 
  @include span(full);
}
{% endhighlight %}


<div class="complex-container">
  <h1>A 10 column complex nested grid</h1>

  <div class="ag ag1">
    <h2>AG 1</h2>
  </div>
  <!-- /ag1 -->

  <!-- ag4 to ag7 are nested within ag2.-->
  <div class="ag ag2">
    <h2>AG 2</h2>
    <div class="ag ag4">
      <h2>AG 4</h2>
    </div>
    <div class="ag ag5">
      <h2>AG 5</h2>
    </div>
    <div class="ag ag6">
      <h2>AG 6</h2>
    </div>

    <!-- ag8, ag9 and ag10 are nested within ag7 -->
    <div class="ag ag7">
      <h2>AG 7</h2>
      <div class="ag ag8">
        <h2>AG 8</h2>
      </div>
      <div class="ag ag9">
        <h2>AG 9</h2>
      </div>
      <div class="ag ag10">
        <h2>AG 10</h2>
      </div>
    </div>
    <!-- /ag7 -->
  </div>
  <!-- /ag2 -->

  <div class="ag ag3">
    <h2>AG 3</h2>
  </div>
  <!-- /ag3 -->

</div>
<!-- /container -->

If you wish to do some further experimentation with Susy as a grid management tool this [Codepen](http://codepen.io/zellwk/pen/jDFdI) is a good place to start. 


