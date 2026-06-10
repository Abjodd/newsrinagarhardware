import serverless from "serverless-http";
import { createServer } from "../../server";

// createServer() is async, so we must await it before wrapping with serverless-http
export const handler = async (event: any, context: any) => {
  const app = await createServer();
  const serverlessHandler = serverless(app);
  return serverlessHandler(event, context);
};
