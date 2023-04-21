import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div className="flex justify-evenly gap-4 m-8 items-center flex-wrap">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
                
}

export default ItemList