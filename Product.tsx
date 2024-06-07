//using variables
export function Product(){
    const productArray = [
        {title:'Laptop',category:'office',id:101},
        {title:'Mobile',category:'personal',id:102},
        {title:'Ipod',category:'personal',id:103},
    ];
    const productList = productArray.map(product => 
        <li key={product.id}
        style={{color: product.category == 'office' ? 'red' : 'blue'}}>
        {product.title}
        </li>
    );
    
    return (
        <ol>{productList}</ol>
    )
}