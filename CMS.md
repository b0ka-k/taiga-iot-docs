# Редактор базы знаний (Sveltia CMS)

Веб-редактор «почти как Word» для markdown в GitHub.  
Админка: **http://95.183.13.164:3002/admin/**  
(после деплоя этой версии на сервер)

Пока репозиторий: `b0ka-k/taiga-iot-docs` на GitHub. Позже переключим на GitLab компании.

## Как войти (GitHub Personal Access Token)

1. Откройте http://95.183.13.164:3002/admin/
2. Нажмите **Sign In with Token** (или аналог «Войти по токену»).
3. Создайте токен GitHub:
   - https://github.com/settings/tokens
   - **Generate new token (classic)**
   - Галка **`repo`**
   - Скопируйте токен
4. Вставьте токен в окно входа.

Токен хранится в браузере (localStorage). Не делитесь им.

## Что можно делать

| В админке | Куда пишется |
|-----------|----------------|
| Документация (корень) | `docs/*.md` |
| Продукты / Badge-LW | `docs/products/badge-lw/*.md` |
| Прошивки | `docs/firmware/*.md` |
| Настройки разделов | `docs/.../_category_.json` |
| Картинки (Media) | `static/img/` → на сайте `/img/...` |

Сохранение = **commit в GitHub** (`main`).

## После сохранения статьи

На сервере обновить сайт:

```bash
cd /opt/docusaurus-docs
git pull
docker compose up -d --build
```

Позже это можно автоматизировать GitHub Actions / GitLab CI.

## Правила для редакторов

1. **Имя файла (slug)** — латиницей: `hardware`, `overview`, не `аппаратная`.
2. В тексте начинайте с `# Заголовок`.
3. Ссылки на соседние страницы: `./hardware`, не `/ru/...`.
4. Новые **папки-разделы** (подкатегории) пока создаёт админ вручную + `_category_.json`.
5. Пустые строки **внутри таблицы** markdown нельзя — таблица сломается.

## Локальная проверка (опционально)

```powershell
cd C:\Users\user\Projects\taiga-iot-docs
npm start
```

Откройте http://localhost:3000/admin/  
Для записи в GitHub всё равно нужен токен (или позже local backend).

## Переход на GitLab (позже)

В `static/admin/config.yml` заменить backend на:

```yaml
backend:
  name: gitlab
  repo: group/taiga-iot-docs
  base_url: https://gitlab.company.ru
  api_root: https://gitlab.company.ru/api/v4
  auth_type: pkce
  app_id: "<OAuth Application ID>"
```

И перерегистрировать OAuth-приложение в GitLab.
