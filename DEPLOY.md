# Деплой на сервер (95.183.13.164)

- Сайт (чтение): **http://95.183.13.164:3002/**
- Редактор Sveltia: **https://95.183.13.164:3443/admin/**
- Редактор Tina: **https://95.183.13.164:3443/tina-admin/** (TinaCloud + `.env`, см. `TINA.md`)
- Wiki.js на 3000/3001 не трогаем

Sveltia **не работает** по `http://IP` — нужен HTTPS или localhost.
Tina на сервере — тоже через HTTPS; без `TINA_CLIENT_ID`/`TINA_TOKEN` в `.env` админка не соберётся.

## Первичная установка (SSH под root)

```bash
apt-get update && apt-get install -y git
mkdir -p /opt/docusaurus-docs
cd /opt/docusaurus-docs
git clone https://github.com/b0ka-k/taiga-iot-docs.git .
docker compose up -d --build

ufw allow 3002/tcp
ufw allow 3443/tcp
ufw reload
```

Также открой **3002** и **3443** в панели хостинга (Security Group / Firewall), если она есть отдельно от ufw.

## Обновление после push

```bash
cd /opt/docusaurus-docs
git pull
docker compose up -d --build
```

## Проверка HTTPS-админки

```bash
docker compose ps
ss -tlnp | grep -E '3002|3443|:443'
curl -I http://127.0.0.1:3002/admin/
curl -kI https://127.0.0.1:443/admin/
```

Снаружи: https://95.183.13.164:3443/admin/  
(предупреждение сертификата → продолжить)

Если `ERR_CONNECTION_REFUSED` на 3443, а внутри сервера `curl -kI https://127.0.0.1:443/admin/` работает — порт режет **firewall хостера**.

## Рабочий процесс

1. Правки в Sveltia/Tina или в `docs/`
2. Save в CMS = commit в GitHub
3. На сервере: `git pull && docker compose up -d --build`
