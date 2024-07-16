
import { useState } from "react";

function WindowsDelete({ windowDelete, product, deleteProduct }) {
  const [alertOpen, setAlertOpen] = useState(false)
  const deleteProductApi = () => {
    deleteProduct("products", product.id);
    setAlertOpen(true)
  };
  return (
    <>
      <div style={style.background}>
        {
          alertOpen ? 
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Se elimino correctamente</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => {
              windowDelete(false) 
              setAlertOpen(false) 
            }}></button>
          </div>
          : 
          <div style={style.containt}>
            <div style={style.headerCard}>
              <h2 style={style.tittleHeader}>¿Seguro que quieres eliminar este producto?</h2>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  windowDelete(false) 
                }}
                style={style.buttonClose}
              ></button>
            </div>
          <div style={style.containtButtons}>
            <button 
              style={style.buttons}
              type="button"
              class="btn btn-primary"
              id="liveToastBtn"
              onClick={deleteProductApi}
            >
              Si
            </button>
            <button
              style={style.buttons}
              class="btn btn-outline-primary"
              id="liveAlertBtn"
              onClick={() => windowDelete(false)}
            >
              No
            </button>
            </div>
          </div>
        } 
      </div>
    </>
  );
}

const style = {
background: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "absolute",
  background: "#313131bf",
  zIndex: "999"
},
containt:{
  background: "white",
  maxWidth: "550px",
  padding: "3em",
  zIndex: "99",
  borderRadius: "3em"
},
headerCard: { 
  display: "flex", 
  width: "100%", 
  justifyContent: "center",
}, 
tittleHeader: { 
  flex: 1, 
  textAlign: "center" 
},
buttons: {
  width: "100px",
  height: "50px",
  marginTop: "2em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2em"
},
buttonClose: { 
  position: "relative", 
  fontSize: "1.5em"
},
containtButtons: {
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center",
  gap: "1em"
}}

export default WindowsDelete;
