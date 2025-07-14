import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom'
import axios from "axios";

const CartPage = () => {
    const { isDarkMode } = useTheme();
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const [cartItems, setCartItems] = useState([]);
    // console.log(cartItems)

    // Calculate the total price for each item in the cart
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    };
    // Handle quantity increase
    const handleIncrease = async (item) => {
        try {
            const response = await fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ quantity: item.quantity + 1 }),
            });

            if (response.ok) {
                await refetch();
            } else {
                console.error("Failed to update quantity");
            }
        } catch (error) {
            console.error("Error updating quantity:", error);
        }
    };

    const handleDecrease = async (item) => {
        if (item.quantity > 1) {
            try {
                const response = await fetch(
                    `http://localhost:5000/carts/${item._id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ quantity: item.quantity - 1 }),
                    }
                );

                if (response.ok) {
                    await refetch();
                } else {
                    console.error("Failed to update quantity");
                }
            } catch (error) {
                console.error("Error updating quantity:", error);
            }
        }
    };


    // Calculate the cart subtotal
    const cartSubtotal = cart.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0);

    // Calculate the order total
    const orderTotal = cartSubtotal;
    // console.log(orderTotal)

    // delete an item
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/carts/${item._id}`).then(response => {
                    if (response) {
                        refetch();
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    }
                })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
    };

    return (
        <div>
            <div className="page-header mb-0">
                <div className="container">
                    <div className="row mx-auto text-center justify-center">
                        <div className="col-12">
                            <h2 className="font-extrabold  text-6xl text-red ">ОФОРМИТЬ ЗАКАЗ</h2>
                        </div>


                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">



                {/* cart table */}

                {
                    (cart.length > 0) ? <div>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className="bg-green text-white rounded-sm">
                                        <tr>
                                            <th>#</th>
                                            <th>Еда</th>
                                            <th>Название товара</th>
                                            <th>Количество</th>
                                            <th>Цена</th>
                                            <th>Действие</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img
                                                                src={item.image}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="font-medium">{item.name}</td>
                                                <td className="flex">
                                                    <button
                                                        className="btn btn-xs"
                                                        onClick={() => handleDecrease(item)}
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={() => console.log(item.quantity)}
                                                        className={`w-10 mx-2 text-center overflow-hidden appearance-none ${isDarkMode ? "dark" : ""}`}
                                                    />
                                                    <button
                                                        className="btn btn-xs"
                                                        onClick={() => handleIncrease(item)}
                                                    >
                                                        +
                                                    </button>
                                                </td>
                                                <td>₹{calculateTotalPrice(item).toFixed(2)}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm border-none text-red bg-transparent"
                                                        onClick={() => handleDelete(item)}
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    {/* foot */}
                                </table>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-col md:flex-row justify-between items-start my-12 gap-8">
                            <div className="md:w-1/2 space-y-3">
                                <h3 className="text-lg font-semibold">Информация о клиенте</h3>
                                <p>Имя: {user?.displayName || "None"}</p>
                                <p>Электронная почта: {user?.email}</p>
                                <p>
                                    User_id: <span className="text-sm">{user?.uid}</span>
                                </p>
                            </div>
                            <div className="md:w-1/2 space-y-3">
                                <h3 className="text-lg font-semibold">Детали покупки</h3>
                                <p>Всего товаров: {cart.length}</p>
                                <p>
                                    Общая цена:{" "}
                                    <span id="total-price">₹{orderTotal.toFixed(2)}</span>
                                </p>

                                <Link to="/process-checkout" className="btn btn-md bg-red text-white px-8 py-1">
                                    Перейти к оформлению заказа
                                </Link>
                            </div>
                        </div>
                    </div> : <div className="text-center mt-20">
                        <p>Корзина пуста. Пожалуйста, добавьте товары..</p>
                        <Link to="/boxgenie"><button className="btn bg-red text-white mt-3">Назад к Коробка Джин</button></Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default CartPage;