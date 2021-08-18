import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'
import axios from 'axios';

const ProductDetail: React.FC = () => {
    const router = useRouter();
    return (
        <div >
            <Head>
                <title> Product {router.query.id_product}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Product Detail ID = {router.query.id_product}</h1>
        </div>
    )
}

// // This gets called on every request
// export async function getServerSideProps() {
//     const response = await axios.get('http://servercoffeehouse.herokuapp.com/getcoffee/'+ router.query.id_product);
//     const data = await response.data;
//     return { props: { data } }
// }




export default ProductDetail