import React from 'react';
import Header from './components/Header'
import SearchFilters from './components/SeachFilters'
import JsonInspector from './components/JsonInspector'
import withStyles from '@material-ui/core/styles/withStyles'

const App = ({classes}) => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.innerContent}>
        <SearchFilters />
        <JsonInspector />
      </div>
    </div>
  )
}

const styles = (theme) => ({
  container: {
    height: '100vh'
  },
  innerContent: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '95%'
  },
})

export default withStyles(styles)(App);
