import React from 'react';
import { Route } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  );
};

export default Content;
