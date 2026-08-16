# Deploy on server (95.183.13.164)

Docs site listens on **port 3002**. Wiki.js on 3000/3001 stays untouched.

## One-time setup (SSH as root)

```bash
# 1) Install git if missing
apt-get update && apt-get install -y git

# 2) Clone repo
mkdir -p /opt/docusaurus-docs
cd /opt/docusaurus-docs
git clone https://github.com/b0ka-k/taiga-iot-docs.git .

# If the repo is private, use SSH instead:
# git clone git@github.com:b0ka-k/taiga-iot-docs.git .

# 3) Build and start
docker compose up -d --build

# 4) Open firewall (if ufw is used)
ufw allow 3002/tcp
ufw reload
```

Open: http://95.183.13.164:3002/

## Update after you push docs to GitHub

```bash
cd /opt/docusaurus-docs
git pull
docker compose up -d --build
```

## Useful checks

```bash
docker compose ps
docker compose logs --tail=50
curl -I http://127.0.0.1:3002/
```

## Workflow for editors

1. Edit markdown in `docs/` locally
2. `git add` / `git commit` / `git push`
3. On server: `git pull && docker compose up -d --build`
