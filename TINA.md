# TinaCMS (POC)

Редактор Tina для Docusaurus. Пока **локальный режим** (без TinaCloud).  
Sveltia остаётся на `/admin/`; Tina — на **`/tina-admin/`**.

## Быстрый старт (на ПК)

```powershell
cd C:\Users\user\Projects\taiga-iot-docs
$env:Path = "D:\node js;" + $env:Path
npm run start:tina
```

Откройте:

**http://localhost:3000/tina-admin/index.html**

В локальном режиме Save пишет файлы прямо на диск (`docs/...`).  
Потом как обычно:

```powershell
git add docs
git commit -m "docs: update via Tina"
git push origin main
```

На сервере:

```bash
cd /opt/docusaurus-docs
git pull
docker compose up -d --build
```

> Docker-сборка сайта **не** запускает Tina — только Docusaurus. Tina нужна для редактирования.

## Что настроено

| Файл | Назначение |
|------|------------|
| `tina/config.ts` | Схема коллекций (Badge-LW, прошивки, intro…) |
| `static/tina-admin/` | UI админки (генерируется `tinacms build` / `dev`) |
| `npm run start:tina` | Docusaurus + Tina GraphQL API вместе |

Поля статьи: `title`, `sidebar_position`, rich-text `body` → frontmatter + markdown.

## TinaCloud (позже, для правок с сервера)

Сейчас Tina **не** открывается на `https://IP:3443` как полноценный cloud-редактор без аккаунта TinaCloud.

Чтобы редактировать удалённо (как Sveltia):

1. Зарегистрироваться на https://app.tina.io  
2. Привязать GitHub-репо `b0ka-k/taiga-iot-docs`  
3. Скопировать **Client ID** и **Read-only token**  
4. Создать `.env` (не коммитить секреты):

```env
TINA_CLIENT_ID=...
TINA_TOKEN=...
TINA_BRANCH=main
```

5. В CI/локально: `npm run build:tina` — обновит `static/tina-admin/`  
6. Задеплоить сайт; админка: `https://.../tina-admin/index.html`

Без TinaCloud удобнее править **локально** через `npm run start:tina`.

## Важно

- Не путайте с Sveltia: `/admin/` = Sveltia, `/tina-admin/` = Tina.
- Имя файла (slug) лучше латиницей (`overview`, `hardware`).
- `title` — русское название для сайдбара.
- Не ставьте пустой `sidebar_label`.
