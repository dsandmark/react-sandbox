import React, { Component } from 'react'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

let cardStyle = {
  width: 300,
  'padding-left': 10,
  'padding-right': 10,
}

let cardMediaImageStyle = {
}

function CustomCard({ title, message, imageUrl }) {
  return (
    <Card style={cardStyle}>
      <CardHeader title={title} />

      <CardMedia>
        <img style={cardMediaImageStyle} src={imageUrl} />
      </CardMedia>

      <CardTitle title="Card title" />

      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>

      <CardActions>
        <FlatButton label="Close" />
      </CardActions>
    </Card>
  )
}

export default CustomCard