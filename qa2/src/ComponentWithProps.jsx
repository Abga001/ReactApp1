//importing all of the relevant packages
import React from 'react';
import PropTypes from 'prop-types';

const ComponentWithProps = props => {
    return (  
        <>
          <h1>{props.headerProp}</h1>
          <p>{props.contentProp}</p> 
          <p>Value of numberProp is: {props.numberProp}</p>
        </>
    );
};

ComponentWithProps.defaultProps = {
    headerProp: `This is the default heading`,contentProp: `This is default content`,
    numberProp: 444
}

ComponentWithProps.propTypes = {
    headerProp: PropTypes.string.isRequired,
    contentProp: PropTypes.string.isRequired,
    numberProp: PropTypes.number,

}


export default ComponentWithProps;