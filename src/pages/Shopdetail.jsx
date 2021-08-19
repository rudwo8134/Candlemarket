import React from 'react'
import Itemdetail from '../components/itemdetail'
import Parallax from '../components/Parallax'
import Relatedproduct from '../components/Relatedproduct'

const Shopdetail = (props) => {
  const params = props.params.match.params.id
  
  return (
    <>
    <Itemdetail/>
    <Relatedproduct/>
    </>
  )
}

export default Shopdetail
