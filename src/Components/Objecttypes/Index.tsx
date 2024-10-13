import React from 'react'

    import DetailsUserObject from './DetailsUserObject'
    
  const Detailsuser = {
    name: "Farjana",
    age:80
  }

function Index() {
    
  return (
    <div>
   <DetailsUserObject Details={Detailsuser} /> 
    </div>
  )
}

export default Index