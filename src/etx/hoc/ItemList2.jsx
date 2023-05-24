import ItemCard from "../../components/ItemCard/ItemCard"
import { withProductsData } from "./withProductsData"
import Spinner from 'react-bootstrap/Spinner';


const ItemList2 = ( {productos, loading, hola} ) => {
    console.log(hola)

    return (
        <div className="container my-5 row">
            {
                loading
                    ? <BasicExample/>
                    : productos.map((item) => <ItemCard item={item} key={item.id}/>)
            }
        </div>
    )
}

export default withProductsData(ItemList2)