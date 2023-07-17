import React from 'react'
import { useFetch } from '../../hooks/useFetch'

function CentralOffice() {

const {data, isPending, error} = useFetch('http://94.141.76.204:8080/api/central-office/get');
console.log(data)

  return (
    <>
        {data && <div className='central_office'>
            <h1>Address: {data.address }</h1>
            <h2>workTime: {data.workTime}</h2>
            <h2>phoneInfo: {data.phoneInfo}</h2>
        </div>}
    </>
  )
}

export default CentralOffice