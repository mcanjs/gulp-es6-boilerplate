import Env from '../../base/_Env';
import Global from '../../base/_Global';

export default class Home {
    constructor () {
        new Env();
        new Global();
        console.log('Home js');
    }
}

// initial class
new Home();
