export default function CardProducts({
    product,
    setProductSelected,
    editForm,
    setWindowsDelete,
  }) {
  return (
    <>
      <div class="card" style={style.cardStyle}>
        <img
          class="card-img-left"
          style={style.imgStyle}
          src={product.image}
          alt=""
        />
        <div class="card-body" >
          <div style={style.containtText}>
            <h2 class="card-title">{product.name}</h2>
            <h3 class="card-text">S/. {product.price}</h3>
          </div>
          <div style={style.containtButtom}>
            <button
              href="#"
              class="btn btn-primary"
              onClick={() => {
                setProductSelected(product);
                editForm(true);
              }}
              style={style.buttomStyle}
            >
            Editar
            </button>
            <button
              class="btn btn-primary"
                onClick={() => {
                setProductSelected(product);
                setWindowsDelete(true);
              }}
              style={style.buttomStyle}
            >
            Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const style =  {
  cardStyle: {
    background: "white",
    display: "flex", 
    flexDirection: "row",
    height: "250px",
    width: "400px",
    padding: "0.5em"
  },
  containtText: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1em",
    gap: "1em",
    paddingBottom: "1.5em"
  },
  imgStyle: {
    width: "150px",
  },
  buttomStyle: {
    width: "85px"
  },
  containtButtom: {
    display: "flex", 
    gap: "0.5em", 
    justifyContent: "center"
  }
};

