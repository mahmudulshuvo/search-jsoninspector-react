import React from 'react';
import Header from './components/Header'
import SearchFilters from './components/SeachFilters'
import JsonInspector from './components/JsonInspector'
import withStyles from '@material-ui/core/styles/withStyles'

const App=({classes}) => {
  
  let data = []
  const getRequest= async ( url) => {
    console.log('Get request called '+url)
    data = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        return response.json()
      })
      .then(function (json) {
        console.log(json)
      })
  }

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.innerContent}>
        <SearchFilters getRequest={getRequest} />
        <JsonInspector data={data} />
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
    flexDirection: 'column',
    height: '95%'
  },
})

export default withStyles(styles)(App);
