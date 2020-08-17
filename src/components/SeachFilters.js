import React, {Fragment, useState} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const SearchFilters=({classes}) => {
    return (
        <div className={classes.search}>
            <h1>Search Filters</h1>
        </div>
    )
}


const styles = (theme) => ({
  search: {
    height: '25%',
    backgroundColor: 'red',
  },
})

export default withStyles(styles)(SearchFilters)