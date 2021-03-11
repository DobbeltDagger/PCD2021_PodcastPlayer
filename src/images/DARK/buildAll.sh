#!/bin/bash
LARGE_FOLDER=./large
THUMBS_FOLDER=./thumbs
# for file in ./large/*
for file in ./*.png
do

  # build the html from filenames
  filename=$(basename "$file")
  filename="${filename%.*}"

  # show it here
  echo $filename
  # echo $link >> html.txt

  # next line checks the mime-type of the file
  IMAGE_TYPE=`file --mime-type -b "$file" | awk -F'/' '{print $1}'`
  if [ x$IMAGE_TYPE = "ximage" ]; then

    jpgExtension="jpg"
    pngExtension="png"
    base64Extension="html"

    # making large version
    # convert "$file" -resize 1280x854 -quality 70 "${LARGE_FOLDER}/${filename}.${base64Extension}"

    code="$(base64 -w 0 $file)"
    echo "data:image/jpeg;base64,$code" >> "${filename}.${base64Extension}"
    
  fi     
done