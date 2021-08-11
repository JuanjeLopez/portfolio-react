import Button from '@material-ui/core/Button'
//Types
import { CartItemType } from '../App'
//Styles
import { Wrapper } from './Item.styles'

type Props = {
    item: CartItemType;
    handleAddtoCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddtoCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title}></img>
        <div>               
            <h3>{item.title}</h3>        
            <p>{item.description}</p>                             
        </div>

        <div className='price'>
            <h3>{item.price} €</h3>
        </div>   

        <Button onClick={() => handleAddtoCart(item)}>Añadir al carrito</Button>
    </Wrapper>
)


export default Item;

