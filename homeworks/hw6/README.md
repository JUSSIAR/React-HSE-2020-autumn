### **ДЗ 6 - Redux** - deadline 23:59 20.11

Необходимо подключить redux к проекту

* Хранение массива тасок в redux сторе
* Любые действия с тасками должны осуществляться через actions
* Подумайте, что в вашем приложении еще можно хранить в redux сторе (hint: там нужно хранить данные, которые могут понадобиться в других частях проекта; например theme - отличный кандидат, а значения инпутов добавления таски нет - их лучше оставить в локальном стейте)

Шаги для подключения redux:
* Установить `redux`, `react-redux`
* Создать `reducer`
* Создать `store`
* Обернуть весь проект в `Provider`
* Создать `actions`
* Подключть компоненты к стору через `connect`