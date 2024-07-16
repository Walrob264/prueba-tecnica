import CardProducts from "./CardProducts";
import Pagination from "./Pagination";

export default function Body({
    filteredProducts,
    setEditForm, 
    searchQuery, 
    setProductSelected, 
    setWindowsDelete,
    pag,
    setPag,
    max,
    productsPerPage
    }) {

    const startIndex = (pag - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    return(
        <>
            <div className="Body container" style={style.body}>
                {productsToShow.length > 0 ? ( productsToShow.map((product, id) => (
                    <CardProducts
                        key={id}
                        product={product}
                        setProductSelected={setProductSelected}
                        editForm={setEditForm}
                        setWindowsDelete={setWindowsDelete}
                    />
                ))
                ) : searchQuery !== "" ? (
                    <div>
                        <h2>No cuenta con ningun producto con ese nombre</h2>
                    </div>
                ) : (
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>
            <Pagination pag={pag} setPag={setPag} max={max} />
        </>
    )
}

    const style = {
        body: { height: "80%" }
    }