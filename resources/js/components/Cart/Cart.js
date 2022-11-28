import React from "react";
import "./Cart.css";
import A from "../../images/he16088he0061-2.png";
function Cart() {
    return (
        <div className="cart">
            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td>PRODUCT</td>
                        <td>PRICE</td>
                        <td>QUANTITY</td>
                        <td>SUBTOTAL</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <button className="exit">X</button>
                            <img src={A} />
                        </td>
                        <td>Paint Roller</td>
                        <td>20.0$</td>
                        <td>
                            <input type="num" />
                        </td>
                        <td>20.0$</td>
                    </tr>
                </tbody>
                <tr className="footer-button">
                    <td>
                        <button className="coupon">COUPON CODE</button>
                    </td>
                    <td>
                        <button className="applay">APPLAY COUPON</button>
                    </td>
                </tr>

                <tbody>
                    <tr>
                        <td>
                            <button className="exit">X</button>
                            <img src={A} />
                        </td>
                        <td>Paint Roller</td>
                        <td>20.0$</td>
                        <td>
                            <input type="num" />
                        </td>
                        <td>20.0$</td>
                    </tr>
                </tbody>

                <tr className="footer-button">
                    <td>
                        <button className="coupon">COUPON CODE</button>
                    </td>
                    <td>
                        <button className="applay">APPLAY COUPON</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Cart;
