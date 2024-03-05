import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import PrivacyPolicy from "./components/privacy&policay/privacy-policyPage";
import TermsConditions from "./components/terms-conditions/terms-conditions-page";
import SignUp from "./components/signUp/signUp";
import BlogsPage from "./components/blogs/blogsPage";
import BlogPage from "./components/blogs/blog/blog-Page";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
          <Route path="/terms&conditions" element={<TermsConditions />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
