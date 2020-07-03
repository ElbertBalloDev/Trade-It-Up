import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Viewport, Theme, Row, RowItem } from './components/UI';
import Navbar from './components/Navbar';

function App() {
  return (
    <Theme>
      <Viewport>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <>
                  <Row>
                    <RowItem>Item 1</RowItem>
                    <RowItem>Item 2</RowItem>
                    <RowItem>Item 3</RowItem>
                    <RowItem>Item 4</RowItem>
                    <RowItem>Item 5</RowItem>
                    <RowItem>Item 6</RowItem>
                    <RowItem>Item 7</RowItem>
                    <RowItem>Item 8</RowItem>
                    <RowItem>Item 9</RowItem>
										<RowItem>Item 10</RowItem>
                  </Row>
                </>
              )}
            />
          </Switch>
        </Router>
      </Viewport>
    </Theme>
  );
}

export default App;
