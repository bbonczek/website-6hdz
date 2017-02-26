import React, { Component } from 'react';
import './ParallaxSegment.css';

class ParallaxSegment extends Component {

    propTypes: {
        speed: React.PropTypes.number,
        maxScroll: React.PropTypes.number,
        currentScroll: React.PropTypes.number,
        top: React.PropTypes.number,
        zIndex: React.PropTypes.number,
        backgroundImage: React.PropTypes.string
    }

   constructor(props) {
        super(props);

        this.state = {
            webkitTransform: null,
            MozTransfor: null,
            OTransform: null,
            transform: null,
            msTransfor: null
        }

        this.setYTransform(-(this.props.scrollY * this.props.speed));
    }

    componentWillReceiveProps() {
        // console.log(`CurrentScroll: ${this.props.currentScroll}    |||    MaxScroll: ${this.props.maxScroll}`)
        let offset;
        if (this.props.currentScroll < this.props.maxScroll) {       // to mi sie nie podoba (dla 300 wyglada lepiej, ale dlaczego)
            offset = -(this.props.currentScroll * this.props.speed);
            this.setYTransform(offset);
            console.log('it happend! it happened again!')
        }
        console.log(`OFFSET: ${this.state.webkitTransform}`)
    }   

    setYTransform(offset) {
        this.state.webkitTransform = "translate3d(0, " + offset + "px, 0)";
    }

    render() {
        return(
            <div style={
                {
                    top:`${this.props.top}px`, 
                    zIndex: this.props.zIndex, 
                    backgroundImage: `url(${this.props.backgroundImage})`,
                    webkitTransform: this.state.webkitTransform}
                } 
                className="parallax-layer">
            </div>
        );
    }
}

export default ParallaxSegment;


