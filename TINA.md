# TinaCMS + TinaCloud

Редактор Tina для Docusaurus.  
Sveltia: `/admin/` · Tina: **`/tina-admin/`**

| Режим | URL |
|-------|-----|
| **Сервер (TinaCloud)** | **https://95.183.13.164:3443/tina-admin/** |
| Локально без облака | http://localhost:3000/tina-admin/index.html |

---

## 1. Создать проект TinaCloud (один раз)

1. Зайти на https://app.tina.io и войти через GitHub.
2. **New Project** → выбрать репозиторий `b0ka-k/taiga-iot-docs`, ветка `main`.
3. Дождаться индексации контента.
4. Скопировать:
   - **Client ID** — вкладка Overview  
   - **Read-only Token** — вкладка Tokens  

## 2. Секреты на ПК и на сервере

Создайте файл `.env` (рядом с `docker-compose.yml`):

```env
NEXT_PUBLIC_TINA_CLIENT_ID=ваш_client_id
TINA_CLIENT_ID=ваш_client_id
TINA_TOKEN=ваш_read_only_token
TINA_BRANCH=main
```

- Локально: `C:\Users\user\Projects\taiga-iot-docs\.env`
- На сервере: `/opt/docusaurus-docs/.env`  
  (docker compose подхватит переменные при `up --build`)

Файл `.env` в git **не** коммитится. Шаблон: `.env.example`.

## 3. Деплой на сервер

```bash
cd /opt/docusaurus-docs
git pull
# убедитесь что .env с TINA_* уже лежит здесь
docker compose up -d --build
```

Если `TINA_CLIENT_ID` и `TINA_TOKEN` заданы — в образ попадёт админка Tina.  
Если нет — сайт соберётся как раньше, без `/tina-admin/`.

Открыть: **https://95.183.13.164:3443/tina-admin/**  
(предупреждение браузера про самоподписанный сертификат — как у Sveltia)

Вход: аккаунт TinaCloud / GitHub (как в проекте на app.tina.io).  
Save → коммит в GitHub. Чтобы увидеть на сайте — снова `git pull && docker compose up -d --build` на сервере.

## 4. Локальная работа

Без облака (правки только на диск):

```powershell
cd C:\Users\user\Projects\taiga-iot-docs
$env:Path = "D:\node js;" + $env:Path
npm run start:tina
```

С облаком (нужен `.env`):

```powershell
npm run build:tina
npm run serve
# или start:tina — tinacms подхватит .env
```

## Важно

- Не путать: `/admin/` = Sveltia, `/tina-admin/` = Tina.
- `title` — русское имя для сайдбара; не оставляйте пустой `sidebar_label`.
- Имена файлов лучше латиницей (`overview`, `hardware`).
