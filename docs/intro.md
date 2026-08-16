# База знаний Taiga IoT

Корпоративная документация по устройствам и ПО Taiga IoT.

Сайт собран на [Docusaurus](https://docusaurus.io/) и публикуется из GitHub.

## С чего начать

- [Начало работы](./getting-started)
- [Обзор продуктов](./products/overview)
- [Badge-LW](./products/badge-lw)

## Как обновляется сайт

1. Правите Markdown-файлы в `docs/`
2. Делаете `git push` в GitHub
3. На сервере: `git pull && docker compose up -d --build`
