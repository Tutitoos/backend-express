import app from "./app.js";

const { log } = console;

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      log(`Listening on port http://localhost:${port}`);

      resolve(server);
    });

    server.on("error", (error: Error) => {
      log(`There was an error in server ${error.message}`);

      reject(error);
    });
  });

export default startServer;
