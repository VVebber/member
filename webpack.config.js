const path = require("path"); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Точка входа для сборки проекта

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Путь к корневой директории вашего проекта
    },
  },

  output: {
    filename: "bundle.js", // Имя выходного файла сборки
    path: path.resolve(__dirname, "dist"), // Путь для выходного файла сборки
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen1.html",
      filename: "lessen1.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen2.html",
      filename: "lessen2.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen3.html",
      filename: "lessen3.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen4.html",
      filename: "lessen4.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen5.html",
      filename: "lessen5.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen6.html",
      filename: "lessen6.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen7.html",
      filename: "lessen7.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen8.html",
      filename: "lessen8.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen9.html",
      filename: "lessen9.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen10.html",
      filename: "lessen10.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen11.html",
      filename: "lessen11.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen12.html",
      filename: "lessen12.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen13.html",
      filename: "lessen13.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen14.html",
      filename: "lessen14.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen15.html",
      filename: "lessen15.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen16.html",
      filename: "lessen16.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen17.html",
      filename: "lessen17.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen18.html",
      filename: "lessen18.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/lessen21.html",
      filename: "lessen21.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/cap.html",
      filename: "cap.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/side_piece_C-sharp.html",
      filename: "side_piece_C-sharp.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ["style-loader", "css-loader"], // Загрузчики, используемые для обработки CSS-файлов
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: "development", // Режим сборки
};
