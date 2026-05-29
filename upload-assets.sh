#!/data/data/com.termux/files/usr/bin/bash

echo ""
echo "VWELDCORE MEDIA IMPORT"
echo ""

mkdir -p ~/vweldcore-site/assets/images/projects
mkdir -p ~/vweldcore-site/assets/videos

cp ~/storage/shared/DCIM/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP} \
~/vweldcore-site/assets/images/projects/ 2>/dev/null

cp ~/storage/shared/Movies/*.{mp4,MP4,mov,MOV} \
~/vweldcore-site/assets/videos/ 2>/dev/null

echo ""
echo "IMPORT COMPLETE"
echo ""

echo "PROJECT IMAGES:"
ls ~/vweldcore-site/assets/images/projects | wc -l

echo ""
echo "VIDEOS:"
ls ~/vweldcore-site/assets/videos | wc -l
