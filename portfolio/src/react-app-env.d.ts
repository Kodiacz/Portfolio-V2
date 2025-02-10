// Declare the module for react-dom/client
declare module "react-dom/client" {
  import * as ReactDOM from "react-dom";
  export = ReactDOM;
}

// Declare the module for importing .svg files as strings
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jpg";
declare module "*.gif";
declare module "*.lottie";
