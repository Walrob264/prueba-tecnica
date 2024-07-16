import "./App.css";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetchs";
import FormCreateUser from "./components/FormProduct";
import WindowsDelete from "./components/WindowsDelete";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  const baseUrl = "https://localhost:7016/api";
  const [productSelected, setProductSelected] = useState(undefined);
  const [productsApi, setProductsApi] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [windowsDelete, setWindowsDelete] = useState(false);
  const [pag, setPag] = useState(1);
  const [max, setMax] = useState(10);
  const productsPerPage = 6;
  const [
    products,
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
  ] = useFetch(baseUrl);

  const handleSearchQuery = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setPag(1);
  };

  const filteredProducts = productsApi.filter((productApi) =>
    productApi.name.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    getAllProducts("products");
  }, []);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      setProductsApi(products);
    }
  }, [products]);

  useEffect(() => {
    if (editForm) {
      setOpenForm(true);
    }
  }, [editForm]);

  useEffect(() => {
    setMax(Math.ceil(filteredProducts.length / productsPerPage));
  }, [filteredProducts]);

  return (
    <>
      <div className="App">
        {openForm && (
          <FormCreateUser
            isOpenForm={setOpenForm}
            editForm={editForm}
            isForm={setEditForm}
            createNewProduct={createNewProduct}
            productSelected={productSelected}
            updateProduct={updateProduct}
          />
        )}
        {windowsDelete && (
          <WindowsDelete
            windowDelete={setWindowsDelete}
            product={productSelected}
            deleteProduct={deleteProduct}
          />
        )}
        <Header
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
          setOpenForm={setOpenForm}
        ></Header>
        <Body 
          filteredProducts = {filteredProducts}
          setEditForm = {setEditForm}
          searchQuery = {searchQuery}
          setProductSelected = {setProductSelected}
          setWindowsDelete = {setWindowsDelete}
          pag = {pag}
          setPag = {setPag}
          max = {max} 
          productsPerPage = {productsPerPage}
        ></Body>
      </div>
    </>
  );
};