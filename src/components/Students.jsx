import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
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

const arr = [0, 1, 2, 3];

class Students extends React.Component {
  state = {
    checked: [1],
    expanded: arr.map(() => false),
    values: arr.map(() => Math.random() * 100),
    names: ['Juan Pérez', 'Nombre Falso 123', 'Lucía Álvarez', 'Agustina Soler'],
    pictures: [
      'guy1.jpg',
      'guy2.jpg',
      'girl1.jpeg',
      'girl2.jpg',
    ],
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
    const { classes, assignment } = this.props;

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
          Estudiantes
          {assignment ? ` - ${assignment}` : ''}
        </Typography>
        <List>
          {arr.map((value, i) => (
            <Container>
              <ListItem key={value} dense button onClick={() => this.handleExpandClick(i)}>
                <Avatar alt="alumno" src={this.state.pictures[i]} />
                <div style={{ marginLeft: '10px' }}>{this.state.names[i]}</div>
                <ListItemSecondaryAction style={{ paddingRight: '5px' }}>
                  {this.state.expanded[i]
                    ? <ExpandLessIcon />
                    : <ExpandMoreIcon />
                  }
                </ListItemSecondaryAction>
              </ListItem>
              <LinearProgress variant="determinate" value={this.state.values[i]} />
              <Collapse in={this.state.expanded[i]} timeout="auto" unmountOnExit>
                <CardContent>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png"
                    width="30"
                    alt="linkedin"
                    style={{ cursor: 'pointer', marginBottom: '15px' }}
                  />
                  <div>
                    MOOC Harvard
                    <LinearProgress style={{ height: '8px', marginBottom: '10px', marginTop: '5px' }} variant="determinate" value={this.state.values[i] * 0.2} />
                  </div>
                  <div>
                    Video delfines nadando
                    <LinearProgress style={{ height: '8px', marginBottom: '10px', marginTop: '5px' }} variant="determinate" value={this.state.values[i] * 0.7} />
                  </div>
                  <div>
                    Lectura "cómo enseñarle a volar a un pájaro"
                    <LinearProgress style={{ height: '8px', marginBottom: '10px', marginTop: '5px' }} variant="determinate" value={this.state.values[i] * 0.1} />
                  </div>
                  {/* <Button variant="contained" color="primary" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    Ver más
                  </Button> */}
                </CardContent>
              </Collapse>
            </Container>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Students);
