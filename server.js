
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "ok",
      environment: "ephemeral-test"
    }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Entorno efímero de pruebas</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 760px;
            margin: 60px auto;
            padding: 24px;
            color: #263238;
            background: #f4f7fb;
          }
          main {
            background: white;
            padding: 32px;
            border-radius: 12px;
          }
          h1 { color: #5b3cc4; }
          .status { color: #18794e; font-weight: bold; }
        </style>
      </head>
      <body>
        <main>
          <h1>Entorno efímero de pruebas</h1>
          <p>Aplicación académica desarrollada con Node.js.</p>
          <p>Este entorno permite comprobar el funcionamiento de la aplicación
          de forma aislada antes de integrar cambios.</p>
          <p class="status">Estado: aplicación disponible.</p>
          <p>Prueba técnica: <a href="/health">Verificar estado del servicio</a></p>
        </main>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
