#!/data/data/com.termux/files/usr/bin/bash

set -e

echo ""
echo "AVAILABLE BACKUPS:"
echo ""

ls ~/VWELDCORE_BACKUPS

echo ""
echo "ENTER BACKUP FOLDER NAME:"
read -r BACKUPNAME

TARGET="$HOME/VWELDCORE_BACKUPS/$BACKUPNAME"

if [ ! -d "$TARGET" ]; then
echo "BACKUP NOT FOUND"
exit 1
fi

echo ""
echo "RESTORING BACKUP..."

rm -rf ~/vweldcore-site

cp -r "$TARGET" ~/vweldcore-site

cd ~/vweldcore-site || exit

git add .

git commit -m "Rollback restore: $BACKUPNAME" || true

git push origin main

echo ""
echo "ROLLBACK COMPLETED"
