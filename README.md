# Use simple mixins to generate `flexboxgrid` elements.

This library may be helpful for those, who prefer to write the whole PugJS markup in component style, declaring mixins as often as functions in programming languages to describe pieces of UI.
It slightly reduces amount of code and provides a consistent style of code. Additionally you may provide some grid values, using conditions (see the 2nd style of usage).

I don't see the need to repeat docs. If you are familiar with [flexboxgrid](http://flexboxgrid.com/), read [react-flexbox-grid API](https://roylee0704.github.io/react-flexbox-grid/) and start to write pug mixins. You have __two__ styles of usage.

The first one is (more human-friendly syntax):

```
+Grid // -> .container
  +Row // -> .row
    +Col.xs // -> .col-xs

+Grid.fluid // -> .container-fluid
  +Row.middle-xs.around-md // -> .row.middle-xs.around-md
    +Col.xs.md-4 // -> .col-xs.col-md-4
    +Col.xs.md-4 // -> .col-xs.col-md-4
  +Row.bottom-xs.around-md // -> .row.bottom-xs.around-md
    +Col.xs.md-4 // -> .col-xs.col-md-4
    +Col.xs.md-4 // -> .col-xs.col-md-4
```

And the second one is:

```
+Grid // -> .container
  +Row // -> .row
    +Col()(xs) // -> .col-xs

+Grid()(fluid) // -> .container-fluid
  +Row()(middle='xs' around='md') // -> .row.middle-xs.around-md
    +Col()(xs md=4) // -> .col-xs.col-md-4
    +Col()(xs md=4) // -> .col-xs.col-md-4
  +Row()(bottom='xs' around='md') // -> .row.bottom-xs.around-md
    +Col()(xs md=4) // -> .col-xs.col-md-4
    +Col()(xs md=4) // -> .col-xs.col-md-4
```

Here we use pugjs [mixin attributes](https://pugjs.org/language/mixins.html#mixin-attributes) so we have to invoke mixin like a function first due to pugjs nature. But I think no one would mind of it, having some prolonged experience with pugjs.

## Install

_Webpack_

```
include ~pug-flexbox-grid/mixins
```

_Manually_

```
include relative/path/to/node_modules/pug-flexbox-grid/mixins
```

From PugJS official docs ([common mistakes section](https://pugjs.org/language/inheritance.html#common-mistakes)):

> Note also that only named blocks and mixin definitions can appear at the top (unindented) level of an extending template. This is important because the parent templates define the overall page structure, and extending child templates only append, prepend, or replace specific blocks of markup and logic. If you created a child template and tried to add content outside of a block, Pug would have no way of knowing where to put it in the final page.

_So you MUST include this library in the beginning of your top-level layout to avoid compilation errors!_
