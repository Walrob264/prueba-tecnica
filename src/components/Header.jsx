import logo from "../logo.svg";

function Header({ searchQuery, handleSearchQuery, setOpenForm }) {
  return (
    <>
      <div style={style.containHeader}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="input-group has-validation" style={style.header}>
            <span style={style.containIconSearch}>
              <i class="bx bx-search"></i>
            </span>
            <input
              class="form-control me-2"
              type="search"
              value={searchQuery}
              onChange={handleSearchQuery}
              style={style.input}
            />
            <button
              class="btn btn-primary"
              style={style.buttonSearch}
              type="submit"
            >
              Buscar
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setOpenForm(true)}
            >
              Añadir Producto
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

const style = {
  containHeader: {
    width: "100%",
    height: "10%",
    backgroundColor: "#282c34",
  },
  header: {
    width: "400px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containIconSearch: {
    background: "white",
    borderRadius: "6px 0 0 6px",
    color: "black",
    padding: "3.5px 10px",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    border: "none",
  },
  buttonSearch: {
    borderRadius: "0.5em",
  },
};

export default Header;
