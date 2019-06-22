import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            Age: {this.props.age}
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button outline color="primary" onClick={this.props.onUp}>Up</Button>
          </Col>
          <Col xs={6}>
            <Button outline color="primary" onClick={this.props.onDown}>Down</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUp: () => { dispatch({ type: 'AGE_UP' }) },
    onDown: () => { dispatch({ type: 'AGE_DOWN' }) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
