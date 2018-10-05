git add .
set /a FILENAME=%RANDOM% * 100 / 32768 + 1
git commit -am "%FILENAME%"
git push -u origin master
end