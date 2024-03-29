import React, { Component } from 'react';
import './ParallaxSegment.css';

class ParallaxSegment extends Component {
   constructor(props) {
        super(props);

        this.state = {
            webkitTransform: null
        }
    }

    componentWillReceiveProps() {
        if (this.props.currentScroll < this.props.maxScroll) {
            this.setState({
                webkitTransform: `translate3d(0, ${-this.props.currentScroll * this.props.speed}px, 0)`
            });
        }
    }   

    render() {
        return(
            <div style={
                {
                    top:`${this.props.top}px`, 
                    zIndex: this.props.zIndex, 
                    backgroundImage: `url(${this.props.backgroundImage})`,
                    WebkitTransform: this.state.webkitTransform}
                }
                className="parallax-layer">
            </div>
        );
    }
}

export default ParallaxSegment;



