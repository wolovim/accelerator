import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';

const Home = props => {
  return (
    <Card className="card">
      <CardTitle title="Accelerator Starter Kit" subtitle="A head start..." />
      <CardText>
        Home
      </CardText>
    </Card>
  );
};

export default Home;
