import { Routes, Route } from "react-router-dom";
import { LoginLayout } from "../layouts";
import { Home } from "../../pages/home";
import { Products } from "../../pages/products";
import { Contact } from "../../pages/contact";
import { Carts } from "../../pages/cart";

export const Router = () => {
    return (
        <LoginLayout>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/productos" element={<Products />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/cart" element={<Carts />} />
                <Route path="*" element={<Home />}/>
            </Routes>
        </LoginLayout>
    )
}