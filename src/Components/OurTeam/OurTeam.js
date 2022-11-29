import React from 'react'
import './OurTeam.css'

import TeamCard from './TeamCard'

export default function OurTeam() {
  return (
    <div id='OurTeam'>
      <div className="TeamSectionOut">
        <div className='TeamPageHeadingOut'>
          <h2 className='SectionHeading'>Our Core Team</h2>
          <span className='WordUnderline'></span>
        </div>
        <div className="TeamCardsOut">
          <TeamCard cardcolor="#8074FF" />
          <TeamCard cardcolor="#8074FF" />
          <TeamCard cardcolor="#8074FF" />
          <TeamCard cardcolor="#8074FF" />
          <TeamCard cardcolor="#8074FF" />
          <TeamCard cardcolor="#8074FF" />
        </div>
        <div className="OurTeamDotsOut">
          <div style={{ background: "rgba(0, 173, 181, 0.5)" }} className="OurTeamDot"></div>
          <div style={{ background: "#00ADB5" }} className="OurTeamDot"></div>
          <div style={{ background: "rgba(0, 173, 181, 0.5)" }} className="OurTeamDot"></div>
        </div>
      </div>

      <div className="TeamSectionOut">
        <div className='TeamPageHeadingOut'>
          <h2 className='SectionHeading'>Graphics Team</h2>
          <span className='WordUnderline'></span>
        </div>
        <div className="TeamCardsOut">
          <TeamCard cardcolor="#94FF83" />
          <TeamCard cardcolor="#94FF83" />
          <TeamCard cardcolor="#94FF83" />
        </div>
        <div className="OurTeamDotsOut">
          <div style={{ background: "rgba(0, 173, 181, 0.5)" }} className="OurTeamDot"></div>
          <div style={{ background: "#00ADB5" }} className="OurTeamDot"></div>
          <div style={{ background: "rgba(0, 173, 181, 0.5)" }} className="OurTeamDot"></div>
        </div>
      </div>
    </div>
  )
}
