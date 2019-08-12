# Hexlet project "Brain Games"

[![Maintainability](https://api.codeclimate.com/v1/badges/8e7e6da2c62a19bc8a02/maintainability)](https://codeclimate.com/github/antonazgarovich/brain-games/maintainability)
[![Build Status](https://travis-ci.org/antonazgarovich/brain-games.svg?branch=master)](https://travis-ci.org/antonazgarovich/brain-games)

`make install` - Установка зависимостей

`make game-list` - Получить список игр

`make run G=even` - Запуск игры event (не нужно указывать расширение .js)

`make publish` - Публикация игр

[hexlet.io](http://hexlet.io/)

### Логика приложения

1. Система показывает приветствие для Игрока
2. Система показываем Игроку правила игры
3. Система запрашиваем у Игрока имя
4. Игрок передает свое имя Системе
5. Система приветствуем Игрока по имени
6. Система запускаем цикл игры
6.1. Система показываем Игроку вопрос
6.2. Игрок отвечает на вопрос
6.3. Система проверяет верный ли ответ
     - если да, то 6.4.
     - если нет, то 6.5.
6.4. Система показывает что ответ верный
6.5. Система показывает что ответ не верный и какой верный ответ
     и 8.
7. Система показывает поздравление Игроку, далее 9.
8. Система показывает сообщение с предложением попробовать еще, далее 9.
9. Система завершает работу
