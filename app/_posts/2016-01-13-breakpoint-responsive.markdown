---
layout: post
title:  "Breakpoint and Susy Grids"
date:   2016-01-13
---

* [Breakpoint](http://breakpoint-sass.com/)
* [Documentation Wiki](https://github.com/at-import/breakpoint/wiki)
* Single Purpose Tool - it only cares about building media queries
* Quickly develop responsive layouts on top of existing markup
* Combine with Susy to manage complex responsive grids 

## Basic Media Queries

Consider the Following Sass

{% highlight sass %}
$basic: 500px;
$tablet 400px 700px;
$standard 1140px;

#foo {
  content: 'No Media Queries';

  @include breakpoint($basic) {
    content: 'Basic Media Query';
  }

  @include breakpoint($tablet) {
    content: 'Paired Media Query for Special Tablet Stuff';
  }

  @include breakpoint($standard) {
    content: 'Standard Screen Size'
  }
}
{% endhighlight %}

Output as CSS:

{% highlight sass %}
 /* Nested Breakpoint calls become separate media queries */
}
#foo {
  content: 'No Media Queries';
}

@media (min-width: 500px) {
  #foo {
    content: 'Basic Media Query';
  }
}

@media (min-width: 400px) and (max-width: 700px) {
  #foo {
    content: 'Paired Media Query for Special Tablet Stuff';
  }
}

@media (min-width: 1140px) {
  #foo {
    content: 'Standard Screen Size'
  }
}
{% endhighlight %}

See [Basic Media Queries](https://github.com/at-import/breakpoint/wiki/Basic-Media-Queries) for more. 

## Advanced Media Queries
* Compound media queries
* Address media types

{% highlight sass %}
$print-land: print monochrome (orientation landscape) (min-height 8.5in);

#foo {
  @include breakpoint($print-land) {
    content: 'Monochrome Print in Landscape';
  }
}
{% endhighlight %}

Produces the following:

{% highlight sass %}
@media print and (monochrome) and (orientation: landscape) and (min-height: 8.5in) {
  #foo {
    content: 'Monochrome Print in Landscape';
  }
}
{% endhighlight %}

See [Advanced Media Queries for More](https://github.com/at-import/breakpoint/wiki/Advanced-Media-Queries)

## Combining Breakpoint With Susy

Together these make a powerful tool for managing responsive layouts

### Basic Example
Let's reprise our simple grid from the last page:

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
  @include container(800px);
  @include clearfix;
  @include border-width(.5em);
  @include border-style(solid);
}

.susy-container {

  $small: 400px;
  $tablet: 400px 699px;
  $standard: 700px;

  .col-a {

    @include breakpoint($small) {
      @include span(12);
    }
    @include breakpoint($standard) {
      @include span(6);
    }
    background-color: #fae7b3;
    @include border-width(.5em);
    @include border-style(dashed);
  }

  .col-b {
    @include breakpoint($small) {
      @include span(12);
    }
    @include breakpoint($standard) {
      @include span(6 last);
    }
    background-color: #f09671;
    @include border-width(.5em);
    @include border-style(dashed);
  }

  .full-content {

    @include breakpoint($small) {
      @include span(12);
    }

    @include breakpoint($tablet) {
      @include span(8 of 12);
      @include pre(2);
      @include post(2);
    }

    @include breakpoint($standard) {
      @include span(10 of 12);
      @include pre(1);
      @include post(1);
    }
  
    background-color: #ee9e9c;
    @include border-width(.5em);
    @include border-style(dashed);
    
  }
}

{% endhighlight %}

## Breakpoints and Complex Layouts

<p>Now let's revisit the complex, nested grid from the previus example:</p>

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
.complex-container {
  @include container(10);
  @include clearfix;
  @include border-width(.5em);
  @include border-style(solid);
}

.ag1 {
  @include breakpoint($small) {
    @include span(12);
  }
  @include breakpoint($standard) {
    @include span(2 of 10);
  }

}

.ag2 {

  @include breakpoint($small) {
    @include span(12);
  }

  @include breakpoint($standard) {
    @include span(6 of 10);
    @include clearfix; 
  }
}

.ag3 {
  @include breakpoint($small) {
    @include span(12);
  }
  @include breakpoint($standard) {
    @include span(2 of 10 last);
  }
}

.ag4 {
   @include breakpoint($small) {
    @include span(12);
  }

  @include breakpoint($standard) {
    @include span(3 of 6);
  }
}

.ag5 {
   @include breakpoint($small) {
    @include span(12);
  }
  
  @include breakpoint($standard) {
    @include span(3 of 6 last);
  }
}

.ag6 {
  @include breakpoint($small) {
    @include span(12);
  }
  @include breakpoint($standard) {
    @include span(2 of 6);
  }
}

.ag7 {
  @include breakpoint($small) {
    @include span(12);
  }

  @include breakpoint($standard) {
    @include span(4 of 6 last);
    @include clearfix;
  }
}

.ag8 {
  @include breakpoint($small) {
    @include span(12);
  }

  @include breakpoint($standard) {
    @include span(2 of 4);
  }
}

.ag9 {
  @include breakpoint($small) {
    @include span(12);
  }
  @include breakpoint($standard) {
    @include span(2 of 4 last);
  }
}

.ag10 {
  @include breakpoint($small) {
    @include span(12);
  }
  // Use the full keyword to tell Susy this should be a 100% width 
  @include breakpoint($standard) {
    @include span(full);
  }
}
{% endhighlight %}


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

##Flexbox Gallery Example

<p>Will grids and media queries always be necessary? The following example expands the "card" demo from an earlier post to demonstrate a basic responsive gallery widget using only the following:</p>

* [Flexbox](https://www.w3.org/TR/css-flexbox-1/)
* Bourbon [Flexbox Mixins](https://github.com/thoughtbot/bourbon/blob/v4-stable/app/assets/stylesheets/css3/_flex-box.scss)
* Refills Card Pattern


Example Card HTML
{% highlight html %}
<div class="cards">
  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png" alt="">
    </div>
    <div class="card-header">
      First Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>
  <!-- truncated card listings -->
</div>
{% endhighlight %}

<div class="gallery-container">

<div class="cards">
  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png" alt="">
    </div>
    <div class="card-header">
      First Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-4.png" alt="">
    </div>
    <div class="card-header">
      Another Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image">
      <img src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains-3.png" alt="">
    </div>
    <div class="card-header">
      The Last Card
    </div>
    <div class="card-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </div>
</div>

<p>Calling the bourbon flexbox mixins:</p>

{% highlight sass %}
.cards {
  @include display(flex);
  @include flex-wrap(wrap);
  @include justify-content(space-between);
}

.card {
  /**********
    See Refills for full Sass source code 
    http://refills.bourbon.io/
  ***********/
  @include flex-basis(15em);
  @include flex-grow(1);
}

{% endhighlight %}
