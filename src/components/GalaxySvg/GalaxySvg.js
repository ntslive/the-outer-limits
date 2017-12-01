import React from 'react';
import PropTypes from 'prop-types';
import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';

import './galaxy-svg.scss';

class GalaxySvg extends React.Component {
    render() {
        return (
            <section id="galaxy">
                <Paper id="galaxy-svg" width={this.props.drawing.width} height={this.props.drawing.height}>
                    <Set>
                        <Circle {...this.props.drawing.items[0]} />
                        <Circle {...this.props.drawing.items[1]} />
                        <Circle {...this.props.drawing.items[2]} />
                        <Path {...this.props.drawing.items[3]} />
                    </Set>
                </Paper>
            </section>
        )
    }
};

GalaxySvg.propTypes = {
    drawing: PropTypes.object.isRequired
};

export default GalaxySvg;
