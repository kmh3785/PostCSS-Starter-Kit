# PostCSS-Test
An experimental starter kit using PostCSS & cssnext

## What is PostCSS?
PostCSS is a highly modular CSS postprocessor written in Javascript, as opposed to preprocessors like SASS and LESS. 

PostCSS allows you to write in vanilla CSS, and then add additional preprocessor-like functionality as-needed via small plugins.

Learn more about PostCSS at https://github.com/postcss/postcss

## What is cssnext?
cssnext is a plugin for PostCSS that allows you to use features from the CSS4 spec today, and then parse it down into standards-compliant, cross-browser CSS3.

## Installation

npm install

## Included plugins
This starter kit makes use of a few common features and plugins that will make the switch from a preprocessor easier.

### Gulp plugins
- autoprefixer-core
- gulp-concat
- gulp-cssmin
- gulp-htmlmin
- gulp-imagemin
- gulp-jshint
- imagemin-pngquant
- gulp-jshint
- gulp-notify
- gulp-rename
- gulp-replace
- gulp-uglify
- gulp-watch

### PostCSS plugins
- postcss-import [Imports and inlines @import rules]
- postcss-mixins [Allows mixin support]
- postcss-nested [Allows nested CSS]
- postcss-cssnext [Allows use of CSS4 syntax and features]
- postcss-neat [Allows use of the Bourbon Neat grid system]

#### Some common CSS4 features include:
##### Variables & Calculations
```
:root {
  --fontSize: 1rem;
  --mainColor: #12345678;
  --highlightColor: hwb(190, 35%, 20%);
  --headerFont: 'Open Sans', sans-serif;
}

body {
  color: var(--mainColor);
  font-size: var(--fontSize);
  line-height: calc(var(--fontSize) * 1.5);
  padding: calc((var(--fontSize) / 2) + 1px);
}

```
##### Mixins
```
@define-mixin mixin_name { 
	/* CSS here */ 
}

body {
	@mixin mixin_name
}
```
##### Custom selectors
```
@custom-selector --heading h1, h2, h3, h4, h5, h6;
--heading { var(--headerFont); }
```

Learn more about these features at https://cssnext.github.io/cssnext-playground/