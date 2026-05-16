#!/data/data/com.termux/files/usr/bin/bash

set -e

PROJECT="$HOME/vweldcore-site"

BACKUP_DIR="$HOME/VWELDCORE_BACKUPS"

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

BACKUP_PATH="$BACKUP_DIR/vweldcore-site-$TIMESTAMP"

echo ""
echo "======================================="
echo "VWELDCORE SAFE DEPLOYMENT STARTED"
echo "======================================="

echo ""
echo "[1/7] ENTERING PROJECT DIRECTORY"

cd "$PROJECT" || {
echo "PROJECT DIRECTORY NOT FOUND"
exit 1
}

echo ""
echo "[2/7] CREATING FULL BACKUP"

cp -r "$PROJECT" "$BACKUP_PATH"

echo "BACKUP CREATED:"
echo "$BACKUP_PATH"

echo ""
echo "[3/7] CHECKING GIT STATUS"

git status

echo ""
echo "[4/7] STAGING FILES"

git add .

echo ""
echo "[5/7] ENTER COMMIT MESSAGE"

read -r COMMITMSG

if [ -z "$COMMITMSG" ]; then
echo "EMPTY COMMIT MESSAGE NOT ALLOWED"
exit 1
fi

git commit -m "$COMMITMSG" || echo "NO NEW CHANGES TO COMMIT"

echo ""
echo "[6/7] PUSHING TO GITHUB"

git push origin main

echo ""
echo "[7/7] VERIFYING LIVE DEPLOYMENT"

sleep 10

curl -I https://vweldcore.github.io/vweldcore-site/

echo ""
echo "======================================="
echo "DEPLOYMENT COMPLETED SUCCESSFULLY"
echo "======================================="

echo ""
echo "ROLLBACK BACKUP:"
echo "$BACKUP_PATH"
