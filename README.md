
1. LA APLICACIÓN CONSUME UN API EL CUAL TRAE LOS PRODUCTOS QUE ESTAN EN DICHA BASE DE DATOS. 

    2. La primera funcionalidad recibe el "Path" para consumir la API. Con un metodo get para traer la lista de todos los productos y se guarda los datos, en el estado anterior mencionado.
    3. La segunda funcionalidad recibe el "Path" y el producto que se va a crear. Se crea el usuario con un metodo "POST".
    4. La tercera funcionalidad recibe el "Path", "id" y la data que se quiere actualizar. Se envia los estados con un metodo "PUT"
    5. La cuarta funcionalidad recibe el "Path" y el id del producto que se quiere eliminar. Se elimina el usuario con un metodo "DELETE".
    6. Por ultimo se retorna los datos obtenidos y las funcionalidades para que sean llamadas 
     ** Cabe a destacar que en todas las funcionalidades a partir de la segunda se llama la primera funcionalidad para que se vea el cambio directamente en la parte front **
     ** Todas las funcionalidades manejan los errores y las informa **

2. FRONT de la aplicación.
    El centro de la APP se encuentra en el archivo Index que es un javascript el cual se el componente que tiene toda la pagina web. Que es el archivo App.jsx el cual su funcionamiento es de la siguiente manera: 

        1. Hace todas las importaciones necesarias como los componentes que se va a        utilizar en dicha aplicación, y se guarda la BASE_URL
        2. Donde con la ayuda del UseFetch.js se consume y se guarda los datos en un estado
        (El objeto que se llama en el array de objetos que trae el API. Tiene que tener obligatorio los 4 siguientes datos:
            - id
            - name
            - price
            - imgUr
         para que funcione correctamente la aplicación
            ) el archivo App.jsx cuenta con diversos estados y 2 fuciones para manejar la UI como la busqueda y la paginación. Tambien tiene useEffect para poder traer los datos de la api, para el manejo de la UI en el modal del fomulario, el guardo de datos especificos para editar y la paginación.
         3. El cuepo del archivo el cual retorna. Cuenta con 4 componentes dentro de un div para contenerlos y organizarlo: 
            3. A. FormCreateUser: Este componente es un modal que se muestra cuando el usuario quiere crear o editar un producto.
            3. B. WindowsDelete: Este componente es un modal que se muestra cuando el usuario quiere eliminar un producto.
            3. C. Header: Este componente se muestra siempre en la parte superior de la pagina, en dicho componente se encuentra la opcion de busqueda y la opcion de crear un producto.   
            3. D. Body: Este componente es donde se muestran los productos. Llamando un componente llamado CardProduct, que contiene los botones editar y eliminar. Y en la parte baja contiene al componente Pagination. Donde se encuentra la logica para pasar de pagina.
            (Body solo muestra 6 cardProduct por pagina)

La aplicacion esta estilizada mayormente con Bootstrap solo en ciertos componentes que por personalización se usa una constante llamado style.


         
