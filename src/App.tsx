import "./App.css";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import JoinSection from "./components/JoinSection";
import CommentSection from "./components/CommentSection";
import CollectionSection from "./components/CollectionSection";
import CollectedSection from "./components/CollectedSection";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <div className="bg-gradient-to-t from-amber-50 to-white">
      <Navbar />
      <HeaderSection />
      <ProductsSection />
      <JoinSection />
      <CommentSection />
      <CollectionSection />
      <CollectedSection />
      <Footer />
    </div>
  );
}

export default App;
