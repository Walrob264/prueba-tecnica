import { useState } from "react";

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState();

  const getApi = (path) => {
    fetch(`${baseUrl}/${path}`)
      .then((response) => response.json())
      .then((data) => {
        setInfoApi(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const createNewProduct = async (path, data) => {
    try {
      const response = await fetch(`${baseUrl}/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: data.Name,
          Price: data.Price,
          image: data.Image,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("HTTP Error:", errorData);
        return null;
      }

      const res = await response.json();
      getApi("products")
      return res;
    } catch (err) {
      console.error("Fetch Error:", err);
      return null;
    }
  };
  const updateProduct = async (path, id, data) => {
    try {
      const response = await fetch(`${baseUrl}/${path}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          Name: data.Name,
          Price: data.Price,
          image: data.Image,
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = response.status;
        } catch (jsonError) {
          errorData = { message: "Unable to parse error response as JSON" };
        }
        console.error("HTTP Error:", errorData);
        return null;
      }

      const status = response.status;
      if (status === 204) {
        getApi("products");
        console.log(status);
        return status;
      }
      } catch (err) {
      console.error("Fetch Error:", err);
      return null;
    }
  };

  const deleteProduct = async (path, id) => {
    try {
      const response = await fetch(`${baseUrl}/${path}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (jsonError) {
          errorData = {
            message: `Unable to parse error response. Status code: ${response.status}`,
          };
        }
        console.error("HTTP Error:", errorData);
        return null;
      }

      if (response.status === 204) {
        console.log(`User with ID ${id} deleted successfully.`);
        getApi("products");
        return true;
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        return null;
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      return null;
    }
  };

  return [
    infoApi,
    getApi,
    createNewProduct,
    updateProduct,
    deleteProduct,
  ];
};
export default useFetch;
