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

