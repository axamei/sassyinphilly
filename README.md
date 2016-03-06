# It's Always Sassy in Philadelphia

Learn how to turn your 2000+ line spaghetti monster CSS file into a modular and manageable collection of components you can reuse!

Presenters
* Axa Liauw aliauw[ at ] princeton DOT edu
* Kevin Reiss kr2 [ at ] princeton DOT edu

Workshop will cover (in 3 hours):

* overview of how to use Sass (CodeKit / Prepros, Rails, libsass, etc.)
* breaking things apart (CSS Stats, SublimeText plugins, browser extensions, etc.)
* organizing and naming (SMACSS and BEM)
* creating reusable components with variables, mixins, extends (DRYing up your code with Sass basics)
* frameworks (Bootstrap, Foundation, Bourbon, Susy, Breakpoint, etc.)
* build tools (Grunt, Gulp, etc.)
* other topics we might discuss: PostCSS

We will work through a number of hands on exercises touching on the topics above. These exercises will require the installation of a number of command line utilities that we will guide you through. It is recommended attendees come to the workshop with a machine capable of running OSX with Homebrew or Linux. Windows users will expected to be able to run a virtual instance of Linux using a tool like VirtualBox.

## Installation

### Requirements (Unix-based machines)

1. Ruby: https://www.ruby-lang.org/en/documentation/installation/ - tested on 2.2.x, Should work fine on 2.1.x or 2.3.x.
2. Latest Stable Version of Node and NPM: https://nodejs.org/en/download/ - Currently 4.3.x (LTS) or 5.7.x (Stable) (Your mileage may vary using 5.7 depending on the OS versions.)

### Workshop setup

Please try and complete one of these two options before the workshop:

#### Option 1 - I'm Comfortable with building my own software

1. Make sure you have bundler installed
2. Clone this repository. `git clone https://github.com/axamei/sassyinphilly.git`
3. ```cd sassyinphilly```
3. Run the following command in your terminal: `bundle install && npm install`
4. Serve up the site locally via: `gulp serve` at [http://localhost:3000](http://localhost:3000)

#### Option 2 - Use Vagrant and Virtualbox to run a Virtual Server
1. Download and install [Virtual Box](https://www.virtualbox.org/wiki/Downloads) for your OS
2. Download and install [Vagrant](https://www.vagrantup.com/downloads.html)
  * Windows users will also need [Putty and PuttyGen](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) in order to be able to connect to your virtual server
3. Download workshop [Vagrantfile](https://github.com/kevinreiss/sassyvagrant/archive/master.zip)
4. Change to the directory where you extracted the workshop file and run ```vagrant up```. Windows users should review [Guide to Vagrant on Windows](http://www.sitepoint.com/getting-started-vagrant-windows/).
5. After Vagrant competes it's initialization you should be able to run `vagrant ssh` and enter the virtual machine to being interacting with the workshop materials. Windows users will need to review the section "Now I Can Access my Server, Right?" in the guide linked in the last step.
6. After connecting via SSH to your virtual server you will find this project located at ```/home/vagrant/sassinphilly``` on your vagrant box. Change to that directory and serve up the site locally via: `gulp serve` at [http://localhost:3000](http://localhost:3000)


### Getting sassy without the terminal

[CodeKit](https://incident57.com/codekit/) (Mac OS X) - CodeKit is a tool to compile Sass, LESS, Stylus, Jade and much more. It comes with Bower so you can import and manage dependencies / libraries simply. It also refreshes browsers across devices.

[Prepros](http://prepros.io) (Windows, Mac OS X and Linux) - Prepros is a tool to compile Sass, LESS, Stylus, Jade and much more with automatic CSS prefixing. It comes with built in server for cross browser testing and automatic browser refresh.

## Why Sass?

Because. Wide support, even Bootstrap and Foundation switched to Sass. Read how it works at scale at [ETSY](https://codeascraft.com/2015/02/02/transitioning-to-scss-at-scale/)

## Where to Begin? CSS Audit!

> Task #1: Audit your existing CSS file(s)

- Linting: [CSS Lint](http://csslint.net/) pinpoints issues in your CSS. Take the warnings as suggestions on how to improve your CSS. 
- Find unused CSS: [Chrome DevTools Audit Panel](https://developer.chrome.com/devtools#audits)  can analyze a page as it loads. Then provides suggestions and optimizations for decreasing page load time and increase perceived (and real) responsiveness. [Dust-Me Selectors](https://addons.mozilla.org/en-US/firefox/addon/dust-me-selectors/) is an add-on for Firebug in Firefox that finds unused selectors.
- Survey what CSS rules you have: [CSS Dig](http://cssdig.com/) is an automated script that runs through all of your code to help you see it visually. A similar tool is [StyleStats](http://www.stylestats.org/) and [CSSStats](http://cssstats.com/), where you type in a url to survey its CSS.
- [Ghost of Sytlesheets Past](https://github.com/pulibrary/pul_library_drupal/tree/a42d3dd45990051fc1bec5a81d90f5e468f64a87/sites/all/themes/pul_development_theme/css)

## Organizing and Naming Things is Hard

> Task #2: Organize your styles into sensible groups and give them practical names

We want to change from our singular 2000+ line CSS file to a more scalable and modular architecture for our styles. Break the files down into partials and organize them and name them in a sensible manner. Do what makes the most sense for your team.

One approach:

```
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
```

Another approach:

```
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
```

See: [*Snook, Jonathan* - Scalable and Modular Architecture for CSS](https://smacss.com/book/)

![Alt Text](https://raw.githubusercontent.com/axamei/sassyinphilly/master/app/images/bem.png)

See: [*Css Tricks* - BEM 101](https://css-tricks.com/bem-101/)

## Sass Basics

> Task #3: Refactor your CSS file(s) to Sass / Sassy CSS files

- Preprocessing
- Sass vs. SCSS Syntax
- Variables
- Nesting and parent selectors
- Partials and imports
- Mixins and includes
- Extends and inheritance
- Operations

## Working with Frameworks & Mixin Libraries

> Task #4: Import framework / mixin libraries

- Bootstrap & Foundation
- Bourbon, Neat, Bitters, Refills
- Susy
- Breakpoint

## Working with Build Tools

> Task #5: Understanding and customizing your gulpfile

- Gulp, Grunt, Broccoli, Brunch, Webpack, npm scripts, etc.

Our gulpfile includes the following tasks:
- Error handling and growl-like notification
- Sourcemaps to help us know where in the source our rules are located
- Sass compilation using libsass
- UnCSS to remove unused CSS selectors and slim down our CSS 
- Concatination and minification of our files
- Autoprefixer to prefix CSS with vendor prefixes
- Using Browsersync for multi-device testing
- Optimizing images
- Building our Jekyll site
- Deploying our site to gh-pages

## The Future
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [CSS Modules](http://glenmaddern.com/articles/css-modules)
- [PostCSS](http://postcss.org/)
	+ [PreCSS](https://github.com/jonathantneal/precss)
	+ [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets)
	+ [LOL Cats](https://github.com/sandralundgren/postcss-lolcat-stylesheets)

## References

- [*An Introduction to Object Oriented CSS* - Louis Lazaris](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
- [*BEM 101* - Robin Rendle](https://css-tricks.com/bem-101/)
- [*Bitters Examples* - Thoughtbot](http://bitters.bourbon.io/example.html)
- [*Boostrap Sass Mixins* - Twitter Bootstrap](https://github.com/twbs/bootstrap-sass/tree/5ad0746ff394aa810e730eefec69f65036450e66/assets/stylesheets/bootstrap/mixins)
- [*Bourbon Documentation* - Thoughtbot](http://bourbon.io/docs/)
- [*Neat Examples* - Thoughtbot](http://neat.bourbon.io/examples/)
- [*Refills Examples* - Thoughtbot](http://refills.bourbon.io/)
- [*Sass-lang* - Sass Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)
- [*Sass-lang* - Sass Basics](http://sass-lang.com/guide)
- [*Sass Guidelines* - An opinionated styleguide for writing sane, maintainable and scalable Sass](http://sass-guidelin.es/)
- [*Scalable and Modular Architecture for CSS* - Jonathan Snook](https://smacss.com/book/)
- [*The Sass Way* - Sass vs. SCSS: which syntax is better?](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better)
- [*Transitioning to SCSS at Scale* - Dan Na](https://codeascraft.com/2015/02/02/transitioning-to-scss-at-scale/)
- [*Why Sass?* - Dan Cederholm](http://alistapart.com/article/why-sass)
