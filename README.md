# Calculator

Simple calculator on js

Простое и удобное приложение-калькулятор, разработанное с использованием JavaScript, HTML, CSS и Webpack

Task:
https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f

---

How to run the app:

1. Установить зависимости с помощью команды: npm install

2. Сборка приложения осуществляется командой: npm run build

3. Запуск собранного приложения: npx http-server dist

---

Краткое описание

Поддерживает использование базовых математических выражений: "+", "-", "\*", "/"; смену знака и определение процента "%".
Имеет функцию смены цветового оформления на тёмную, светлую и синию с помощью кнопок соответствующих в левой верхней части интрефейса.

```
Сalculator
src/
    index.js   # Логика калькулятора
    style.css  # Стили приложения
    index.html # Основной HTML
dist/          # Готовая сборка
webpack.config.js  # Конфигурация Webpack
package.json   # Настройки npm
README.md      # Документация
```
