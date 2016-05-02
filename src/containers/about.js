import React from 'react'
import { not, pick, compose, ifElse } from 'ramda'
import { connect } from 'react-redux'
import { pure } from 'recompose'

import bindActionCreators from '../helpers/bindActionCreators'
import { fake } from '../actions'
import Title from '../components/title'
import { mount } from '../enhancers'
import { h } from '../helpers/h'

const { div } = h
const text = 'ABOUT'

const About = ({children, fake}) => (
div(null,
  ifElse(
    not,
    () => Title({text: `${text}: ${fake.data}`}),
    () => <Title text={`${text}: loading...`} loading /> // <= or jsx if it must be
  )(fake.isFetching)
))

export default compose(
  connect(
    pick([ 'fake' ]),
    bindActionCreators({
      fetchFakeData: fake.fetch
    })
  ),
  mount(
    ({fetchFakeData}) => fetchFakeData()
  ),
  pure
)(About)
