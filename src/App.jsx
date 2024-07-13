import { useState } from 'react';
import playerData from './playerData.js';

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true);

  const toggleCard = () => {
    setShowPicture(!showPicture);
  };

  // If you get tired of having to type `props.name`, `props.imgUrl`, etc. over and
  // over again, you can destructure the props object like this:
  // const { name, imgUrl, stats, team, position } = props;

  // Show the side of the card with the picture when `showPicture` is true
  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    );
  }

  // Show the side of the card with the stats when `showPicture` is false
  const statsDisplay = Object.entries(props.stats).map(([statName, statValue]) => (
    <p key={statName}>
      {statName}: {statValue}
    </p>
  ));
  return (
    <div className="card" onClick={toggleCard}>
      <h2>{props.name}</h2>
      <p>Team: {props.team}</p>
      <p>Position: {props.position}</p>
      {statsDisplay}
    </div>
  );
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
      key={player.cardId}
    />
  ));

  // Using destructuring, the above code could be rewritten as:
  // const cards = playerData.map(({ name, team, position, stats, imgUrl, cardId }) => (
  //   <BaseballCard
  //     name={name}
  //     team={team}
  //     position={position}
  //     stats={stats}
  //     imgUrl={imgUrl}
  //     key={cardId}
  //   />
  // ));
  //
  // This works too:
  // const cards = playerData.map((player) => (
  //  <BaseballCard {...player} key={player.cardId} />
  // ));

  return <>{cards}</>;
}

export default App;
