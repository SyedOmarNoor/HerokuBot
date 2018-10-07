set /a FILENAME=%RANDOM% * 10000 / 32768 + 1
git add .
git status | find /i "Your branch is ahead of 'origin/master'"
if not errorlevel 1 (
	git commit -am "%FILENAME%"
	git push -u origin master
)
pause
