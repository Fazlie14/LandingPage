import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/index.js",

  mode: "development",

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devServer:{
    static:"./dist",
    open:true,
    port: 8080,
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    })
  ],
  
  module:{
    rules:[
      {
      test: /\.css$/,
      use:[
        "style-loader",
          "css-loader"
      ],

    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    },
  ]

  }

  

};