@echo off
echo =========================================
echo Publishing borggrech.com
echo =========================================
echo.

REM Move to the folder where this batch file lives
cd /d "%~dp0" || (
    echo Could not change to the site folder.
    pause
    exit /b 1
)

echo Current folder:
cd
echo.

echo Checking status...
git status || (
    echo Git status failed.
    pause
    exit /b 1
)
echo.

set /p msg=Enter commit message: 

if "%msg%"=="" (
    echo Commit message cannot be empty.
    pause
    exit /b 1
)

echo Staging changes...
git add . || (
    echo Git add failed.
    pause
    exit /b 1
)

echo Committing...
git commit -m "%msg%" || (
    echo Git commit failed. Nothing was pushed.
    pause
    exit /b 1
)

echo Pushing to GitHub...
git push || (
    echo Git push failed.
    pause
    exit /b 1
)

echo.
echo =========================================
echo Done. Cloudflare Pages is deploying.
echo =========================================
pause