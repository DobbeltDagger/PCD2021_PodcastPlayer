#!/bin/bash
folder=${PWD##*/}
echo -n "" > html.txt # clear the txt file
# write the folder name as remark
rem='// '
rem+=$folder
# rem+='\n' # this is already in
echo -e $rem >> html.txt

for file in *.wav
do

  # build the html from filenames
  filename=$(basename "$file")
  filename="${filename%.*}"

  link='{ '
  link+='folder: "'
  link+=$folder
  link+='", '
  link+='name: "Anders", '
  link+='desc: "HerErBeskrivelse", '
  link+='fullSample: "'
  link+=$filename
  link+='.webm" '
  link+='},'
  
  # show it here
  echo $filename
  echo -e $link >> html.txt # e flag enables backslash interpretation

  # make sound compression
  # ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%wav/ogg}"
  ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%wav/mp3}"
  ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%wav/webm}"

done