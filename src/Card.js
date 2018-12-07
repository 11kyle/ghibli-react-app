import React, {Component} from 'react';


class Card extends Component {

  render() {

    const { cardData } = this.props;

    const cards = cardData.map((card, index) => {
      return (
          <div className="card" key={index}>
            <h1>{card.title}</h1>
            <p>{card.description.substring(0, 300)}...</p>
          </div>
      );
    });

    return (
      <div className="container">
        {cards}
      </div>
    );
  }
}

export default Card;
