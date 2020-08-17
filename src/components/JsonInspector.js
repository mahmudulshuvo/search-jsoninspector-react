import React, { Fragment, useState } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const JsonInspector = ({ classes }) => {
  return (
    <div className={classes.jsonInspector}>
      <h1>Json Inspector</h1>
    </div>
  )
}

const styles = (theme) => ({
  jsonInspector: {
    height: '75%',
    backgroundColor: 'green',
  },
})

export default withStyles(styles)(JsonInspector)
