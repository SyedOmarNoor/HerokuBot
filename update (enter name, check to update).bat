set /p FILENAME = "Enter the comment for your commit."
git add .
git status | find "Your branch is ahead of 'origin/master'"
if errorlevel = 0 (
    set /p FILENAME = "Enter the comment for your commit."
    git commit -am "%FILENAME%"
    git push -u origin master
)
end
