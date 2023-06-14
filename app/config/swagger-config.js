const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API - Consultas datos de Fusion",
            version: "1.0.0",
            description: "Servicios destinados al manejo de funcionalidades asociadas a consultar los datos almacenados de Fusion",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "adminsmxapi",
                url: "https://transformapp.cl",
                email: "adminsmxapi@transformap.cl",
            },
        },
        servers: [{ url: "https://autoservicio.petrobrasdistribucion.cl/3005", description: "HTTPS" }, { url: "http://autoservicio.petrobrasdistribucion.cl/3005", description: "HTTP" }, { url: "http://localhost:3005", description: "Testing Local - 2.8.0" } ]
    },
    apis: ["./routes/fusion-eess-routes.js", "./routes/qr-routes.js"]
};

module.exports = options;
