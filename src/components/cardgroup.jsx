import React from 'react'
import InfoCard from './infocard'

class Cardgroup extends React.Component {
  render () {
    return (
        <div  className="line">
            <InfoCard title= "Front end" text= "HTML5 CSS3 JavaScript React"/>
            <InfoCard title= "Server" text= "NodeJS Flask Django"/>
            <InfoCard title= "Database" text= "PostgresSQL mySQL MongoDB" />
        </div>
        
    )
  }
}

export default Cardgroup;