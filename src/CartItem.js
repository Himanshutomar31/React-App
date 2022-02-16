import React from 'react'

class CartItem extends React.Component{
 
    render(){
        const {title, price, qty} = this.props.product
        return(
                <div className='cart-item'>
                    <div className='left-block'>
                        <img style={styles.image}></img>
                    </div>
                    <div className='right-block'>
                        <div style={ {fontSize: 25} }>{title}</div>
                        <div style={ {color: '#777'} }>Rs {price}</div>
                        <div style={ {color: '#777'} }>Qty {qty}</div>
                        <div className='cart-item-actions'>
                            {/*Button */}
                            <img 
                             alt='increase' 
                             className='action-icons' 
                             src='https://cdn-icons-png.flaticon.com/512/1828/1828925.png'
                             onClick={() => this.props.onIncreaseQty(this.props.product)} >
                            </img>
                            <img
                             alt='decrease' 
                             className='action-icons' 
                             src='https://cdn-icons-png.flaticon.com/512/43/43625.png'
                             onClick={() => this.props.onDecreaseQty(this.props.product)}>
                            </img>
                            <img
                             alt='delete' 
                             className='action-icons' 
                             src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                             onClick={() => this.props.onDeleteProduct(this.props.product.id)}>
                            </img>
                        </div>
                    </div>
                </div>
        );
    }
}
const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;