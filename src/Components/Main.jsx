import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Main() {

  const endPoint = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json/?'
  const [fields, setFields] = useState([{ value: '' }]);
  const [address, setAddress] = useState({ value: '' })
  const [date, setDate] = useState({ value: '' })
  useEffect(() => {
    axios(endPoint)
      .then((res) => setAddress(res.data))
      .catch((e) => console.log(e));
  }, []);

  function handleChange(i, e) {
    const values = [...fields];
    values[i].value = e.target.value;
    setFields(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAddress(fields)
  }

  return (
    <div>
      <form
                className='attempt'
                onSubmit={handleSubmit}>
                <input
                  className='field'
                  type="text"
                  onChange={e => handleChange(e)}
                  onSubmit={handleSubmit}
                  placeholder="Enter your address"
        />
                <input
                  className='field'
                  type="text"
                  onChange={e => handleChange(e)}
                  onSubmit={handleSubmit}
                  placeholder="Enter the date your neighbor moved in"
                />
                <input
                  type='submit'
                  value='+'
                  className='prob-button' />
              </form>
    </div>
  )
}