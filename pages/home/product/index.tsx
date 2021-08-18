import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
interface Props {
    data: Array<any>
    
}
const Product: React.FC<Props> = ({ data }) => {
    return (
        <div >
            <Head>
                <title> List Product</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{display: "flex", flexWrap :"wrap", justifyContent: "space-around"}}>
                {
                    data?.map((val, index) => {
                        return (
                            <Card style={{ width: '23%', margin: '10px' }} key = {val._id}>
                                <Card.Img variant="top" style={{ width: '100%' }} src={"http://servercoffeehouse.herokuapp.com/images/"+ val.images}/>
                                <Card.Body>
                                    <Card.Title>{val.TenCoffee}</Card.Title>
                                    <Card.Text>
                                   {val.gia} VND
                                    </Card.Text>
                                   <Button  variant={index % 2 === 0 ? "success" : "primary"}> <Link href={"/home/product/"+ val._id}><span>Xem chi tiet</span></Link></Button>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    const response = await axios.get('http://servercoffeehouse.herokuapp.com/getalldata');
    const data = await response.data;
    return { props: { data } }
}


export default Product