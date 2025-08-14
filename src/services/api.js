//Aquí va el URL de la API (la dirección web donde están todas las cartas del tarot)
const API_BASE_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

export const tarotService = { //Aquí se exporta el servicio, tarotService es el nombre del objeto que contiene las funciones y con la llave empezamos a definir las funciones
    // Obtener todas las cartas
    getAllCards: async () => { //nombre de la función (obtener todas las cartas) Con el async esperamos las respuestas del servidor, después viene la función flecha que es la forma moderna de escribir las funciones
        try {//esto es el manejo de errores de "intenta hacer esto pero si falla, no rompas la app, ten un plan B"
            const response = await fetch(API_BASE_URL); //aquí hacemos la petición con el fetch decimos "ve a esa dirección web y tráeme los datos y espera hasta que llegue la respuesta (await)"
            if (!response.ok) { //aquí decimos "si algo salió mal (la respuesta es diferente de okay..."
                throw new Error('Error al obtener las cartas'); //lanza un error con este mensaje
            }
            const data = await response.json(); //y si la respuesta es okay me traes los datos convirtiendo la respuesta a formato JavaScript desde el json
            return data; //aquí ya devuélveme los datos
        } catch (error) { //si en el try algo falló hazme esto
            console.error('Error en getAllCards:', error);
            throw error;
        }//muéstrame el error en la consola y pasa el error hacia arriba (es decir: del servidor web al servicio API y al componente react, sin ese throw error en home.jsx no se entera de que hubo error y las cartas pueden quedar undefined)
    },

    // Obtener una carta por ID, esta es la segunda función que ponemos
    getCardById: async (id) => { //id es el parámetro que recibe (el número de la carta)
        try { //misma estructura de try catch
            const response = await fetch(`${API_BASE_URL}/${id}`); //aquí estamos diciendo "intenta, definimos la variable response y esperamos el fetch que sea la URL base + el ID, como por ejemplo tarot/5"
            if (!response.ok) {
                throw new Error('Error al obtener la carta');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error en getCardById:', error);
            throw error;
        }
    }
};