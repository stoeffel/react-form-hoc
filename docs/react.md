React
=====

<!-- RM(content) -->

[Got to top](/README.md)

* [no-jsx](#no-jsx)
* [Conditional class names](#conditional-class-names)


<!-- /RM -->


## no-jsx

There is no jsx in this repo. You will find a [helper](./src/helper/h.js) to create components.
`h` is the same as `React.DOM` :smiley:.
`hh` creates a function which takes `props` and `children` and calls `createElement`. This is used for 3rd-party components.

```js
import { h } from '../helpers/h'

const {h1} = h
const style = {
  color: 'red'
}

export default ({text}) => (
  h1({style}, text)
)
```

Dispite my recommendation to use functions instead of jsx. Manly, because jsx adds a lot off useless boilerplate and functions are better to compose. You can use it ([example](https://github.com/stoeffel/react-redux-bp/blob/master/src/containers/about.js#L20)).

## Conditional class names

For conditional class names you should use [classnames](https://github.com/JedWatson/classnames)

```
export default ({text, loading = false}) => (

h1({
  style,
  className: classnames({
    loading,
    title: true
  })
}, text)
)
```
