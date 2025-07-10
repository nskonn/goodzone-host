# Микрофронт goodzone-host

## Скрипты

```bash
# Установка зависимостей, генерация tsconfig.json
npm run init

# Запуск сервера разработки
npm start

# Сервер запускается по умолчанию на 3000 порту
# При необходимости порт можно поменять в `tools/consts.ts`.

# Сборка приложения в прод
npm run build

# Запуск всех проверок (eslint, tsc, jest, prettier)
npm run checks