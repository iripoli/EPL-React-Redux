import React from 'react'
import Card from '../card/cards.js'



const CardList = ({teams}) => {
  console.log(teams)

  return (
    <div>
      {teams.map((team, i) => {
        return (
          <Card key={i}
            id={team.idTeam}
            name={team.strTeam}
            badge={team.strTeamBadge} />
        )
      })}
    </div>
  )
}

export default CardList