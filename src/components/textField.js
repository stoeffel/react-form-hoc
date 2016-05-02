import React from 'react'
import TextField from 'material-ui/TextField'
import { ObjectInspector } from 'react-inspector'

export default ({ label, error, touched, ...props }) =>
  <div>
    <TextField {...props} hintText={label} errorText={ touched && error} />
    <ObjectInspector data={{ label, error, ...props }} />
  </div>
