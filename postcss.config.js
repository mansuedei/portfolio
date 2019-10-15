const fs = require("fs");

module.exports = {
  syntax: "postcss-scss",
  parser: 'postcss-scss',
  plugins: [
    require("postcss-easy-import")({
      extensions: ".pcss"
    }),
    require("autoprefixer")({
      cascade: false
    }),
    require("postcss-advanced-variables")({
      variables: JSON.parse(
        fs.readFileSync("./src/styles/variables.json", "utf-8")
      )
    }),
    require("postcss-nested"), //поддержка вложенности
    require("postcss-rgb"), //позволяет заводить rgba как (#000000, 0.5) вместо указания трех цветов 0-255
    require("postcss-inline-svg")({ //берет иконку и напрямую в качестве одной строки вписывает ее в наш url
      removeFill: true,
      path: "./src/images/icons" //путь откуда брать иконки
    }),
    require("cssnano"), //сжатие css
    require("postcss-pxtorem")({ //переводит все измерения из px в rem
      rootValue: 16,
      propList: ["*", "!*border*"], //обрабатывать все свойства, кроме border, border-radius и т.д.
      selectorBlackList: [/^html$/] //для браузера safari. Если всё будет в rem, то Safari странно себя ведет. Так что базовый размер шрифта, медиа-запросы будут в px.
    }) //чтобы оставить px без перевода в rem, пишем Px или PX
  ]
};
