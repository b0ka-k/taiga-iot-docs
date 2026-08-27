# TinaCMS + TinaCloud

Sveltia: `/admin/` · Tina: **`/tina-admin/`**

| Режим | URL |
|-------|-----|
| **Сервер** | **https://95.183.13.164:3443/tina-admin/** |
| Локально | `npm run start:tina` → http://localhost:3000/tina-admin/index.html |

Админка Tina **собирается на ПК** и лежит в `static/tina-admin/` (на маленьком VPS `tinacms build` падает по OOM). Docker только копирует готовые файлы.

## Деплой

После смены `tina/config.ts` или ключей:

```powershell
cd C:\Users\user\Projects\taiga-iot-docs
$env:Path = "D:\node js;" + $env:Path
# нужен локальный .env с TINA_CLIENT_ID / TINA_TOKEN
npm run tina:admin
git add static/tina-admin tina
git commit -m "Update Tina admin"
git push
```

На сервере (`.env` для Docker больше не нужен):

```bash
cd /opt/docusaurus-docs
git pull
docker compose up -d --build
```

Открыть: **https://95.183.13.164:3443/tina-admin/**

## TinaCloud (ключи)

1. https://app.tina.io → проект `taiga-iot-docs`
2. Client ID + Read-only Token → локальный `.env` (не в git):

```env
NEXT_PUBLIC_TINA_CLIENT_ID=...
TINA_CLIENT_ID=...
TINA_TOKEN=...
TINA_BRANCH=main
```

3. В Configuration добавьте Site URL: `https://95.183.13.164:3443`

Save в Tina → коммит в GitHub. Чтобы увидеть на сайте — `git pull && docker compose up -d --build` на сервере.

## Важно

- `/admin/` = Sveltia, `/tina-admin/` = Tina
- `title` — русское имя для сайдбара; не пустой `sidebar_label`
