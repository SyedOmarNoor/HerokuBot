set /a FILENAME=%RANDOM% * 10000 / 32768 + 1
git add .
git status | find /i "changes to be committed"
if not errorlevel 1 (
	git commit -am "%FILENAME%"
	git push -u origin master
)ELSE(
	end
)
end
