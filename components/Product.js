import React from 'react';


class Product extends React.Component{
  render(){
    return(
      <div>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function weightValidator(props, propName, componentName){
  if(props[propName]){
    let weight = props[propName]
    if(typeof weight === 'number'){
      return weight >= 80 && weight <= 300 ? null : new Error(propName + ' in ' + componentName + " must be between 80 and 300")
    } else {
      return new Error(propName + ' in ' + componentName + " must be a number")
    }
  } else {
    return new Error(propName + ' in ' + componentName + " is required")
  }
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidator
}

module.exports = Product;
