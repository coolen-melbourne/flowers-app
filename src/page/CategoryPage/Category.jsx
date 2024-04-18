import Linear from "../../Components/LinearGradient/Linear";
import Nav from "../../Components/NavPage/Nav";
import Category1 from "../../Components/CategoryMain/category1.jsx";
import SalesPage from "../../Components/SalesPage/SalesPage.jsx";
import InputPage from "../../Components/InputPage/InputPage.jsx";
import FooterPage from "../../Components/FooterPage/FooterPage.jsx";

const Category = () => {
  return (
    <div>
      <Nav />
      <Linear />
      <Category1 />
      <SalesPage />
      <InputPage />
      <FooterPage />
    </div>
  );
};

export default Category;
