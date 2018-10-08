@echo off
git add .
git status
set /p FILENAME="Enter the comment for your commit."
git commit -am "%FILENAME%"
git push -u origin master
end