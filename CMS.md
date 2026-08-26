# Редактор базы знаний (Sveltia CMS)

Sveltia работает **только по HTTPS или localhost** (не по `http://IP`).

## Как открыть админку

### Вариант A — на сервере (HTTPS, self-signed)

После деплоя:

**https://95.183.13.164:3443/admin/**

1. Браузер покажет предупреждение о сертификате → «Дополнительно» → продолжить.
2. Войти через **Sign In with Token** (GitHub PAT, scope `repo`).

Сайт по HTTP как раньше: http://95.183.13.164:3002/  
Админка — по HTTPS на порту **3443**.

### Вариант B — локально (самый простой для пробы)

```powershell
cd C:\Users\user\Projects\taiga-iot-docs
$env:Path = "D:\node js;" + $env:Path
npm start
```

Откройте: **http://localhost:3000/admin/**  
(localhost разрешён без HTTPS)

Пока репозиторий: `b0ka-k/taiga-iot-docs` на GitHub. Позже — GitLab компании.

## Как войти (GitHub Personal Access Token)

1. Откройте админку (вариант A или B выше).
2. **Sign In with Token**.
3. Токен: https://github.com/settings/tokens → classic → галка **`repo`**.
4. Вставьте токен.

Токен хранится в браузере. Не делитесь им.

## Что можно делать

| В админке | Куда пишется |
|-----------|----------------|
| Документация (корень) | `docs/intro.md`, `getting-started.md` |
| Продукты / Badge-LW | `docs/products/badge-lw/*.md` |
| Прошивки | `docs/firmware/*.md` |
| Настройки разделов | `docs/.../_category_.json` |
| Картинки (Media) | `static/img/` → на сайте `/img/...` |

Сохранение = **commit в GitHub** (`main`).

## После сохранения статьи

На сервере:

```bash
cd /opt/docusaurus-docs
git pull
docker compose up -d --build
# открыть firewall для HTTPS-админки при необходимости:
ufw allow 3443/tcp
```

## Правила для редакторов

1. **Slug / имя файла** — латиницей: `hardware`, не `аппаратная`.
2. В тексте начинайте с `# Заголовок`.
3. Ссылки: `./hardware`, не `/ru/...`.
4. Новые папки-разделы пока создаёт админ + `_category_.json`.
5. В таблицах markdown не оставляйте пустые строки между рядами.

## Переход на GitLab (позже)

```yaml
backend:
  name: gitlab
  repo: group/taiga-iot-docs
  base_url: https://gitlab.company.ru
  api_root: https://gitlab.company.ru/api/v4
  auth_type: pkce
  app_id: "<OAuth Application ID>"
```

И лучше нормальный TLS-сертификат (Let's Encrypt) на домене вместо self-signed.
