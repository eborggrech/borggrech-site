@echo off
echo =========================================
echo Publishing borggrech.com
echo =========================================
echo.

REM Change this path if your site lives elsewhere
cd /d C:\Sites\borggrech-site

REM Check git status
echo Checking status...
git status
echo.

REM Ask for commit message
set /p msg=Enter commit message: 

if "%msg%"=="" (
    echo Commit message cannot be empty.
    pause
    exit /b
)

REM Stage all changes
echo Staging changes...
git add .

REM Commit
echo Committing...
git commit -m "%msg%"

REM Push to GitHub
echo Pushing to GitHub...
git push

echo.
echo =========================================
echo Done. Cloudflare Pages is deploying.
echo =========================================
pause
