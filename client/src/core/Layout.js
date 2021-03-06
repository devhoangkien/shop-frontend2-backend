import React from "react";
import Menu from "./Menu";
import "../styles.css";
import Header from './../components/Header';
import Footer from './../components/FooterSmall';

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Header />
        <br />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={className}>{children}</div>
        </div>
        <Footer />
    </div>
);

export default Layout;
