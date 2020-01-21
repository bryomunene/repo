import React, {Component} from 'react';


class AddProduct extends Component {
  constructor(props){
  	super(props);
  	this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
  	event.preventDefault();
  	this.props.onAdd(this.nameInput.value, this.priceInput.value);

  	this.nameInput.value = '';
  	this.priceInput.value = '';
  }

  render() {
    return (      
    			<div align='center'>      			
                  <form onSubmit={this.onSubmit}>
	                  <h3> Add Product </h3>   
	                  <input placeholder="Name" className='form-control' width='25px' ref={nameInput => this.nameInput = nameInput} />
	                  <br/>
	                  <input className='form-control' width='25px' placeholder="Price" ref={priceInput => this.priceInput = priceInput} />
	                  <br/>
	                  <button className='btn btn-sm btn-info'> Add Product </button>
	                  <hr />
                 </form>  
              </div>
    );
  }

}

export default AddProduct;
