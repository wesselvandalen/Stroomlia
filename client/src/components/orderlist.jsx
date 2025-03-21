import './orderlist.css';
import { useEffect, useState } from "react";
import { getOrdersByUid } from "../service/order-service";
import { makeNumbersReadable } from '../service/utils.js';

export default function OrderList(props) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrdersById();
    }, []);

    const fetchOrdersById = async () => setOrders(await getOrdersByUid(props.props.uid));

    return (
        <>
            {orders.length > 0 ?
                <>
                    {orders.map((order) => {
                        return <div className="order-wrapper" key={order.id}>
                            <p className="top">Bestilling #{order.id}</p>
                            <p>Totalpris: {makeNumbersReadable(order.totalPrice)} kr</p>

                            {order.orderLines.map((orderLine, index) => {
                                return <ul className="order-block" key={index}>
                                    <li>{orderLine.productName} - {orderLine.amount} x {makeNumbersReadable(orderLine.productPrice)} kr</li>
                                </ul>
                            })}
                        </div>
                    })}
                </>
                :
                <p style={{ padding: '0 20px' }}>
                    Denne kontoen har ikke lagt inn noen bestillinger ennå...
                </p>
            }
        </>
    );
}