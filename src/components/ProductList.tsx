import React from 'react'
import Product from './Product'

const ProductList = () => {
    const products: Product[] = [
        {
            name: 'Iphone 16',
            description: 'High-performance phone',
            price: '$999',
            imageUrl: 'https://www.apple.com/id/iphone-16/images/overview/product-viewer/iphone/all_colors__flhn5cmb1t26_xlarge.jpg',
        },
        {
            name: 'Xbox360',
            description: 'A video game console',
            price: '$499',
            imageUrl: 'https://images.tokopedia.net/img/cache/700/OJWluG/2022/9/9/bbb43eb9-d16d-4152-a8b4-e7ccae804571.jpg.webp?ect=4g',
        },
        {
            name: 'The Elder Scrolls V: Skyrim',
            description: 'Fallout New Vegas but in a fantasy medieval world',
            price: '$16',
            imageUrl: 'https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg',
        },
        {
            name: 'Fallout: New Vegas',
            description: 'Skyrim but in a post-apocalyptic world',
            price: '$6',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Fallout_New_Vegas.jpg/220px-Fallout_New_Vegas.jpg',
        },
        {
            name: 'Cheese Burger',
            description: 'Cheese Burger',
            price: 'Priceless',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg',
        },
        {
            name: 'This Thing',
            description: 'The creature',
            price: 'Your Soul',
            imageUrl: 'https://media.moddb.com/images/mods/1/52/51765/cirno.png',
        }
    ]
    return (
        <>
            <h1>Product List</h1>
            {
                products.map((product, index) => {
                    return <Product key={index} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} />
                })
            }
        </>
    )
}

export default ProductList