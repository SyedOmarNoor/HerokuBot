set /a FILENAME=%RANDOM% * 10000 / 32768 + 1
git add .
git status | find "Your branch is ahead of 'origin/master'"
if find "Your branch is ahead of 'origin/master'" = true (
git commit -am "%FILENAME%"
git push -u origin master
)
pause
