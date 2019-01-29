import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

export class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return (
    		 <div>
		    	<button class="Button">Go</button>
		    </div>
    	);
  }
}

export default Button;