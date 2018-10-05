set /a FILENAME=%RANDOM% * 10000 / 32768 + 1
git add .
git commit -am "%FILENAME%"
git push -u origin master
end