# Деплой на сервер (95.183.13.164)

Сайт документации слушает порт **3002**. Wiki.js на 3000/3001 не трогаем.

## Первичная установка (SSH под root)

```bash
# 1) Установить git, если его нет
apt-get update && apt-get install -y git

# 2) Клонировать репозиторий
mkdir -p /opt/docusaurus-docs
cd /opt/docusaurus-docs
git clone https://github.com/b0ka-k/taiga-iot-docs.git .

# Если репозиторий приватный — клонируйте по SSH:
# git clone git@github.com:b0ka-k/taiga-iot-docs.git .

# 3) Собрать и запустить
docker compose up -d --build

# 4) Открыть порт в firewall (если используется ufw)
ufw allow 3002/tcp
ufw reload
```

Открыть: http://95.183.13.164:3002/

## Обновление после push в GitHub

```bash
cd /opt/docusaurus-docs
git pull
docker compose up -d --build
```

## Полезные проверки

```bash
docker compose ps
docker compose logs --tail=50
curl -I http://127.0.0.1:3002/
```

## Рабочий процесс для редакторов

1. Правите markdown в `docs/` локально
2. `git add` / `git commit` / `git push`
3. На сервере: `git pull && docker compose up -d --build`
