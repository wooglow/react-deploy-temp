import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // TODO: Add a comment describing the functionality of this method
  // To show current pages when user click each buttons of navbar
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;

      case "About":
        return <About />;

      case "Blog":
        return <Blog />;

      default:
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* As props, we are using currentpage element to render pages 
      contains JSX*/}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* rending page as what props are */}
      {renderPage()}
    </div>
  );
}
