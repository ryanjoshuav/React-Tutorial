import React from "react";
import ReactDom from "react-dom/client";

import Book from "./Book.js";
import books from "./books.js";
import "./index.css";

export const BookList = () => {
    return (
        <>
            <h1>Best Sellers</h1>
            <section className="booklist">
                {books.map((book, i) => {
                    return <Book {...book} key={book.id} number={i} />;
                })}
            </section>
        </>
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
