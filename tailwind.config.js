/** @type {import('tailwindcss').Config} */ //este es un comentario para que vscode entienda que es un archivo de configuración de tailwind
export default { //exporta la configuración para que otros archivos la puedan usar
    content: [//Tailwind busca las clases CSS en estos archivos
        "./index.html",//busca en el archivo principal HTML
        "./src/**/*.{js,ts,jsx,tsx}",//busca en todos los archivos React dentro de src, con esto tailwind escanea todos mis archivos automáticamente , busca todas las clases que escribo
    ],
    theme: { //aquí van los colores, tamaños, fuentes personalizadas
        extend: {}, //"Añade cosas nuevas SIN borrar las que ya existen" Vacío por ahora, después añadiremos colores
    },
    plugins: [], //de momento no hacen falta plugins para tailwind
}