import React from 'react'
import ArrayObjectTypes from './ArrayObjectTypes'

function Index() {

    const Team = [
        {
        name:"Farjana",
        age:80,
        profession:"Frontend-Developer"
    },
    {
        name:"Farjana",
        age:80,
        profession:"Frontend-Developer"
    },
    {
        name:"Farjana",
        age:80,
        profession:"Frontend-Developer"
    }
]

  return (
    <div>
        <ArrayObjectTypes Team={Team} />
    </div>
  )
}

export default Index