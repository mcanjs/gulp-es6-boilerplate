export default class Env {
    constructor () {
        if ( NODE_ENV && NODE_ENV === 'development' )
            this.development();
        else
            this.production();
    }

    development () {
        return console.log('enviropments === development');
    }

    production () {
        return console.log('enviropments === production');
    }
}