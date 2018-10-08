@echo off
git add .
git status | find "Your branch is ahead of 'origin/master'"
set /p FILENAME="Enter the comment for your commit."
if errorlevel = 0 (
    echo name set.
    git commit -am "%FILENAME%"
    git push -u origin master
)
end
