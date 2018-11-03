import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import PaletteIcon from '@material-ui/icons/Palette';
import BuildIcon from '@material-ui/icons/Build';
import ExposurePlus2Icon from '@material-ui/icons/ExposurePlus2';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {
  Collapse, CardContent, Typography, LinearProgress, Button,
} from '@material-ui/core';

const Container = styled.div`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: block;
  margin-bottom: 20px;
`;

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const arr = [
  { materia: 'Arte, T. Mañana', icon: <PaletteIcon color="primary" /> },
  { materia: 'Taller, T. Tarde', icon: <BuildIcon color="primary" /> },
  { materia: 'Álgebra I, T. Tarde', icon: <ExposurePlus1Icon color="primary" /> },
  { materia: 'Álgebra II, T. Mañana', icon: <ExposurePlus2Icon color="primary" /> },
];

class Assignments extends React.Component {
  state = {
    checked: [1],
    expanded: arr.map(() => false),
    values: arr.map(() => Math.random() * 100),
    names: ['Juan Pérez', 'Satoshi Nakamoto', 'Lucía Álvarez', 'Agustina Soler'],
  };

  handleExpandClick = (selected) => {
    this.setState(state => ({ expanded: state.expanded.map((item, i) => (i === selected ? !item : item)) }));
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render () {
    const { classes, changeComponent } = this.props;

    return (
      <div className={classes.root}>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            paddingLeft: '12px',
            paddingTop: '20px',
            marginBottom: '0px',
          }}
        >
          Materias
        </Typography>
        <List>
          {arr.map((assignment, i) => (
            <Container onClick={() => changeComponent('students', assignment.materia)}>
              <ListItem key={assignment.materia} dense button onClick={() => this.handleExpandClick(i)}>
                <Avatar alt="alumno" src="https://material-ui.com/static/images/remy.jpg" />
                <div style={{ marginLeft: '10px' }}>
                  {assignment.icon}
                  <p style={{ display: 'inline-block', verticalAlign: 'super', marginLeft: '5px' }}>
                    {assignment.materia}
                  </p>
                </div>
                <ListItemSecondaryAction style={{ paddingRight: '5px' }} />
              </ListItem>
            </Container>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Assignments);
