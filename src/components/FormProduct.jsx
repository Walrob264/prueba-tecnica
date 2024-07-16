import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function FormCreateUser({
    isOpenForm,
    editForm,
    isForm,
    createNewProduct,
    productSelected,
    updateProduct,
  }) {
  const [Name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errorForm, setErrorForm] = useState("")
  
  useEffect(() => {
    if (editForm && productSelected) {
      setName(productSelected.name);
      setPrice(productSelected.price);
      setImgUrl(productSelected.image);
    }
  }, [editForm, productSelected]);

  const validationForm = async (product) => {
    const newErrors = {}
    if(product.Name === "") newErrors.Name = "El nombre es obligatorio*"
    if(!product.Price) newErrors.Price = "El precio es obligatorio*"
    if(product.Image === "") newErrors.imgUrl = "La URL de la imagen es obligatorio*"
    if(Object.keys(newErrors).length > 0){
        setErrorForm(newErrors)
        return false
      }
    return true
}
  const createNewUser = async () => {
    let productNew = {
      Name: Name,
      Price: parseFloat(price),
      Image: imgUrl,
    };
    const resultForm =  await validationForm(productNew)
    if(resultForm){
      console.log(productNew);
      createNewProduct("products", productNew);
      isOpenForm(false);
      setErrorForm(undefined)
    }
  }

  const editProduct = async () => {
    let editProduct = {
      Name: Name,
      Price: parseFloat(price),
      Image: imgUrl,
    };

    try{
      const resultForm = await validationForm(editProduct)
      if(resultForm){
      updateProduct("products", productSelected.id, editProduct);
      isForm(false);
      isOpenForm(false);
    }
    } catch(error) {
    setErrorForm("Failed to edit  product. Please try again.");
    }
  };
  
  return(
    <>
      <div style={style.containtForm}>
        <Form style={style.form} className="container">
          <div style={style.headerForm}>
            <h2 style={style.tittleHeader}>{editForm ? "Editar" : "Crear nuevo producto"}</h2>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => {
                isOpenForm(false) 
                isForm(false)
              }}
              style={style.buttonClose}
            ></button>
          </div>
          <div>
          <div  className="input-group mb-3">
            <span style={style.FormLabel} className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
            <Form.Control
              type="text" 
              class="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"
              value={Name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <label style={style.messageError}>{errorForm.Name}</label>          
          </div>
          <div>
            <div className="input-group mb-3">
              <label style={style.FormLabel} className="input-group-text" id="inputGroup-sizing-default">Precio</label>
              <Form.Control
                type="number"
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"
                min="0"
                max="10"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <label style={style.messageError}>{errorForm.Price}</label>          
          </div>
          <div>
            <div className="input-group mb-3">
              <label style={style.FormLabel} className="input-group-text" id="inputGroup-sizing-default">Imagen</label>
              <Form.Control
                type="text"
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default"
                value={imgUrl}
                onChange={(event) => setImgUrl(event.target.value)}
              />
            </div>
            <label style={style.messageError}>{errorForm.imgUrl}</label>
          </div>  
          <Button style={style.buttonEdit} onClick={editForm ? editProduct : createNewUser}>
            {editForm ? "Editar" : "Crear producto"}
          </Button>
        </Form>
      </div>
    </>
  );
}
export default FormCreateUser;

const style = {
  containtForm: {
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
  form:{
    background: "white",
    maxWidth: "550px",
    padding: "3em",
    zIndex: "99",
    borderRadius: "3em"
  },
    headerForm: { 
      display: "flex", 
      width: "100%", 
      justifyContent: "center",
      paddingBottom: "2em",
      paddingLeft: "2em"
    }, 
    tittleHeader: { 
      flex: 1, 
      textAlign: "center" 
    },
    buttonClose: { 
      position: "relative", 
    },
    FormLabel: {
      width: "80px"
    },
    buttonEdit: {
        width: "150px",
        height: "50px",
        marginTop: "2em"
    },
    messageError: {
      color: "red",
      display: "flex",
      marginTop: "-14px",
      marginBottom: "14px"
    }
    
}