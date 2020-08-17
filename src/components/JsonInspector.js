import React, { Fragment, useState } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {response} from './response'
import ReactJson from 'react-json-view'


const JsonInspector=({classes, data}) => {
  return (
    <div className={classes.jsonInspector}>
      <ReactJson src={data} />
    </div>
  )
}

const styles = (theme) => ({
  jsonInspector: {
    height: '75%',
    margin: '20px',
    backgroundColor: '',
  },
})

export default withStyles(styles)(JsonInspector)
