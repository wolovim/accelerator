import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';

import '../assets/stylesheets/App.scss';

const About = () => {
  return (
    <Card className="card">
      <CardTitle title="About This Project" subtitle="A head start..." />
      <CardText>
        About
      </CardText>
    </Card>
  );
};

export default About;
