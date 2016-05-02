<h1 align="center">React-Form-HOC</h1>

[![Travis](https://img.shields.io/travis/stoeffel/react-form-hoc.svg?style=flat-square)](https://travis-ci.org/stoeffel/react-form-hoc)
[![David](https://img.shields.io/david/stoeffel/react-form-hoc.svg?style=flat-square)](https://david-dm.org/stoeffel/react-form-hoc)
[![npm](https://img.shields.io/npm/v/react-form-hoc.svg?style=flat-square)](https://www.npmjs.com/package/react-form-hoc)
[![codecov.io](https://codecov.io/github/stoeffel/react-form-hoc/coverage.svg?branch=master)](https://codecov.io/github/stoeffel/react-form-hoc?branch=master)


> Higher order component for react forms (inspired by [redux-form][rf])


## Installation

```
$ npm install --save react-form-hoc
```

## Usage

```jsx
import formHOC from 'react-form-hoc'

const MyForm = ({ fields }) => (
  <form>
    <input {...fields.firstName} />
    <input {...fields.lastName} />
  </form>
)

const Formed = formHOC({
  fiels: ['firstName', 'lastName'],
  validate: (key, value) => {
    switch (key) {
      case 'firstName':
        return value.length ? null : 'required'
      default:
        return null
    }
  }
})(MyForm)


<Formed onChange={(values, isValid) => {}} />
```

Each field in the fields prop contains the `value` a `onBlur`, `onChange`, `error` (if preset) and the `initalValue`.

## License

MIT © [Christoph Hermann](http://stoeffel.github.io)

[rf]: https://github.com/erikras/redux-form
