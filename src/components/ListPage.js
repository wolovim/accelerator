import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-md/lib/Buttons';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import TextField from 'react-md/lib/TextFields';

class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleSubmit() {
    this.props.addItem(this.state.text);
    this.setState({ text: '' });
  }

  renderItems() {
    return this.props.items.map((item, index) => {
      return <ListItem primaryText={item} key={index} />;
    });
  }

  render() {
    return (
      <Card className="card">
        <CardTitle title="List Example" subtitle="A head start..." />
        <CardText>

          <div className="list__input">
            <TextField
              id="list__input-field"
              label="New Item"
              onChange={value => this.setState({ text: value })}
              placeholder="Add item..."
              value={this.state.text}
            />
            <Button
              disabled={!this.state.text.length}
              label="Submit"
              onClick={() => this.handleSubmit()}
              primary
              raised
            />
          </div>

          <List className="list__items">
            {this.renderItems()}
          </List>

        </CardText>
      </Card>
    );
  }
}

ListPage.propTypes = {
  addItem: PropTypes.func,
  items: PropTypes.array,
};

export default ListPage;
