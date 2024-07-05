import React from "react";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import AboutUs from "./pages/about-us/AboutUs";
import OurStory from "./pages/our-story/OurStory";
import BlogList from "./pages/blog/BlogList";
import BlogContent from "./pages/blog/BlogContent";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import blogData from "./pages/blog/blogData";
import ContactUs from "./pages/contact-us/ContactUs";

const App = () => {
    return (
        <Router>
            <SmoothScroll>
                <div className="relative">
                    <Header>
                        <Navbar />
                    </Header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/aboutus" element={<AboutUs />} />
                            <Route path="/story" element={<OurStory />} />
                            <Route path="/blog" element={<BlogList />} />
                            <Route
                                path="/blog/:id"
                                element={<BlogContentWrapper />}
                            />
                            <Route path="/contact" element={<ContactUs />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </SmoothScroll>
        </Router>
    );
};

const BlogContentWrapper = () => {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === id);
    return <BlogContent blog={blog} />;
};

export default App;
