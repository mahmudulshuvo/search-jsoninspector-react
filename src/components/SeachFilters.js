import React, {Fragment, useState} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const SearchFilters=({classes, getRequest}) => {
  const [id, setId]=React.useState('')
  const [brand, setBrand]=React.useState('')
  const [textQuery, setTextQuery] = React.useState('')
  const [selectedStartDate, setSelectedStartDate] = React.useState(
    new Date(Date.now())
  )
  const [selectedEndDate, setSelectedEndDate] = React.useState(
    new Date(Date.now())
  )
  const [flag, setFlag] = React.useState(false)

  const handleIdChange=(event) => {
    setId(event.target.value)
    if (event.target.value) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }

  const handleChange = (event) => {
    setBrand(event.target.value)
  }

  const handleStartDateChange=(date) => {
    setSelectedStartDate(date)
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date)
  }

  const handleTextChange = (event) => {
    setTextQuery(event.target.value)
  }

  const formatDate = (date) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  const handleSearch=() => {
    let url = ''
    if (id) {
      url='/v1/assets?captain_id='+id
    } else {
      if (selectedStartDate) {
        url=
          '/v1/assets?brand='+brand+'&start_date='+formatDate(selectedStartDate)+'&end_date='+formatDate(selectedEndDate)+'&text='+textQuery
      } else {
        url=
          '/v1/assets?brand='+brand+selectedEndDate+'&text='+textQuery
      }
    }
    console.log(url)
    getRequest(url)
  }
  

    return (
      <div className={classes.search}>
        <TextField
          id='outlined-basic'
          label='Captain ID'
          variant='outlined'
          onChange={handleIdChange}
        />
        <div className={classes.serachFilterContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>Brand</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={brand}
              onChange={handleChange}
              disabled={flag}
            >
              <MenuItem value='CNN'>CNN</MenuItem>
            </Select>
          </FormControl>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='yyyy/MM/dd'
                margin='normal'
                id='start-date'
                label='Start Date'
                style={{
                  marginLeft: '20px',
                }}
                value={selectedStartDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                disabled={flag}
              />
              <KeyboardDatePicker
                disableToolbar
                variant='inline'
                format='yyyy/MM/dd'
                margin='normal'
                id='end-date'
                label='End Date'
                style={{
                  marginLeft: '20px',
                }}
                value={selectedEndDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                disabled={flag}
              />
            </div>
          </MuiPickersUtilsProvider>

          <TextField
            id='outlined-basic'
            className={classes.textBox}
            label='Text'
            variant='outlined'
            onChange={handleTextChange}
            disabled={flag}
          />

          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    )
}


const styles = (theme) => ({
  search: {
    height: '25%',
    margin: '20px',
    background: '',
  },

  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },

  serachFilterContainer: {
    display: 'flex',
    marginTop: '10px',
  },

  textBox: {
    marginTop: '10px',
    marginLeft: '30px',
    width: '300px',
  },

  button: {
    marginTop: '15px',
    marginLeft: '30px',
    height: '50px'
  },
})

export default withStyles(styles)(SearchFilters)