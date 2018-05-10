import * as React from 'react';
import IconCard, { IIconCardProps } from './IconCard';
import VideoFeed from './VideoFeed';
import houseJpg from '../../images/house.jpg';
import livingroomJpg from '../../images/livingroom.jpg';
import entryJpg from '../../images/entry.jpg';

export interface ILiveMonitorsProps {
  cards: IIconCardProps[];
}

export default class LiveMonitors extends React.Component<ILiveMonitorsProps, {}> {
  render() {
    const cards = this.props.cards.map(iconCard => (
      <div className="col-sm-12 mb-3" key={iconCard.id}>
        <IconCard {...iconCard} />
      </div>
    ));
    const images = [
      {
        description:
          'Quisque nec elit lacinia, luctus tortor sit amet, dignissim lectus. Ut facilisis purus eu nisi dapibus, vitae iaculis turpis sagittis.',
        link: houseJpg,
        name: 'House',
      },
      {
        description:
          'Sed semper ligula gravida diam consequat lobortis. Nullam lobortis, ipsum sit amet laoreet gravida, arcu lacus mattis sapien, ac gravida urna sem non turpis.',
        link: livingroomJpg,
        name: 'Livingroom',
      },
      {
        description:
          'Etiam sed dapibus est, iaculis efficitur arcu. Nam quis blandit massa. Proin sagittis venenatis quam varius pretium. ',
        link: entryJpg,
        name: 'Entry',
      },
    ];

    return (
      <div className="row">
        <div className="col-xl-4 col-md-6 col-sm-12 mb-3">
          <div className="row">{cards}</div>
        </div>
        <div className="col-xl-8 col-md-6 col-sm-12 mb-3">
          <VideoFeed images={images} />
        </div>
      </div>
    );
  }
}