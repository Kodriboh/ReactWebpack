import { hot } from 'react-hot-loader';
import React from 'react';

const App : React.FC = () => <p>Welcome to Webpack!</p>

export default hot(module)(App);