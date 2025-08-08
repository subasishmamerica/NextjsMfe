// const { ModuleFederationPlugin } = require("webpack").container;

// module.exports = {
//   plugins: [
//     new ModuleFederationPlugin({
//       name: "host",
//       filename: "remoteEntry.js",
//       remotes: {
//         // Add your remote apps here
//         remote: "remote@http://localhost:3002/remoteEntry.js",
//       },
//       exposes: {
//         // Expose components or modules from this app
//         "./Button": "./src/components/Button",
//         "./components": "./src/components/index",
//       },
//       shared: {
//         react: {
//           singleton: true,
//           requiredVersion: false,
//           eager: true,
//         },
//         "react-dom": {
//           singleton: true,
//           requiredVersion: false,
//           eager: true,
//         },
//       },
//     }),
//   ],
// };
