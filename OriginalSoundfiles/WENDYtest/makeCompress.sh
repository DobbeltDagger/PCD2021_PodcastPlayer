#!/bin/bash

# For WAV files
for file in *.mp3
do
  # make sound compression
  # ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%wav/ogg}"
  # ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%wav/mp3}"
  ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%mp3/webm}"
done

# for AIFF files
# for file in *.aiff
# do
#   # make sound compression
#   # ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%wav/ogg}"
#   ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%aiff/mp3}"
#   ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%aiff/webm}"
# done
# 
# # for m4a files
# for file in *.m4a
# do
#   # make sound compression
#   # ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%wav/ogg}"
#   ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%m4a/mp3}"
#   ffmpeg -y -i "${file}" -vn -ac 2 -b:a 96k "${file/%m4a/webm}"
# done