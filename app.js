// app.js
const appName = process.env.APP_NAME || "unknown";
const environment = process.env.ENVIRONMENT || "unknown";

console.log(`Running Node ${appName} in ${environment} environment.`);