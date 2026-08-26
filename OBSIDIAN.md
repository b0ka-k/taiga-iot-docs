# Obsidian + Docusaurus (кратко)

Vault = папка репо: `C:\Users\user\Projects\taiga-iot-docs`  
(или только `docs\`, но картинки тогда кладите в `static/img` вручную).

## Важно

1. Правки **не на сайте**, пока нет **commit + push** в GitHub.
2. На сервере потом: `git pull && docker compose up -d --build`.
3. Синтаксис Obsidian ≠ Docusaurus:

| В Obsidian | На сайте нужно |
|------------|----------------|
| `![[Pasted image ....png]]` | `![](/img/имя.png)` файл в `static/img/` |
| `[[vozmozhnosti]]` | `[текст](./vozmozhnosti)` |
| `==выделение==` | `**жирный**` |
| пустая строка в таблице | нельзя — ломает таблицу |

4. В frontmatter обязательно:

```md
---
title: Возможности
sidebar_position: 10
---
```

Не оставляйте `sidebar_label: ''` (пустым) — сборка упадёт.

## Типичный цикл

1. Правите `.md` в Obsidian  
2. Obsidian Git → **Commit** → **Push** (или терминал)  
3. Проверьте https://github.com/b0ka-k/taiga-iot-docs/commits/main — ваш коммит есть  
4. На сервере pull + rebuild  

Если push не сделали — на сайте ничего не изменится.
