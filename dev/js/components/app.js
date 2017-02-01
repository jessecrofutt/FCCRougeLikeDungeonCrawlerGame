/**
 * Created by Hairy on 1/2/2017.
 */
global.jQuery = require('jquery');


import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
//import * as ReactBootstrap from 'react-bootstrap'
//import 'react-bootstrap';
import styles from '../../scss/RDCG.sass';
import Game from '../containers/game';

const App = ()  => (
    <div>
        <Game />
    </div>
);

export default App;
