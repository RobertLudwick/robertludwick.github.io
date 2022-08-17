import React from 'react'
import InfoCard from './infocard'

class Cardgroupproj extends React.Component {
  render () {
    return (
        <div  className="line">
            <InfoCard title= "" text= ""/>
            <InfoCard title= "Server" text= "NodeJS Flask Django"/>
            <InfoCard title= "Database" text= "PostgresSQL mySQL MongoDB" />
        </div>
        
    )
  }
}

export default Cardgroupproj;