import React, {Component} from 'react';


class ProductItem extends Component {
  
  constructor(props){
    super(props);

    this.state = { isEdit:false};

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

  onDelete() {

    const {onDelete, name} = this.props;
    onDelete(this.props.name);
  }

  onEdit(){
    this.setState({isEdit:true});
  }

  onEditSubmit(event){
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
    this.setState({isEdit:false});
  }

  renderTableHeader() {
     
      let header = Object.keys(this.state.products[0]);
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

  render() {

    const {name, price} = this.props;
    return (
  
                  <div>
                  {
                    this.state.isEdit
                    ? (
                        <div align='center'>
                         <h2> Edit Product </h2>
                          <form id='products' onSubmit={this.onEditSubmit}>
                              <input className='form-control' placeholder="Name" defaultValue={name} ref={nameInput => this.nameInput = nameInput} />
                              <br />
                              <input className='form-control' placeholder="Price" defaultValue={price} ref={priceInput => this.priceInput = priceInput} />
                              <br />
                              <button className='btn btn-sm btn-warning'> Save </button>
                              <br />
                          </form>
                        </div>
                    )
                    : (
                      <div>

                        <table id='products' align='center'>
                          <tbody>                         
                            <tr>

                              <td>{name} </td>
                         
                              <td>{price}</td>

                              <td> <button className='btn btn-sm btn-info' onClick={this.onEdit}>Edit</button> </td>
                        
                              <td> <button className='btn btn-sm btn-danger' onClick={this.onDelete}>Delete</button> </td> 
                            </tr>
                        </tbody>
                      </table>
                     </div>    
                    )
                  }
                  </div>
                  
    );
  }

}

export default ProductItem;
