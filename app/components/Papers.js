import React from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const PaperExampleSimple = () => (
  <div>
    <Paper style={style} zDepth={1}>1</Paper>
    <Paper style={style} zDepth={2}>2</Paper>
    <Paper style={style} zDepth={3}>3</Paper>
    <Paper style={style} zDepth={4}>4</Paper>
    <Paper style={style} zDepth={5}>5</Paper>
  </div>
);

export default PaperExampleSimple;