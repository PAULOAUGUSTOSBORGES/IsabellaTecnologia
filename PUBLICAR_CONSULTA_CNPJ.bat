@echo off
title Consulta Avancada de CNPJ - Publicar na Nuvem (Firebase)
cls
echo =======================================================
echo     CONSULTA AVANCADA DE CNPJ - PUBLICADOR NA NUVEM
echo =======================================================
echo.
echo [1/2] Compilando codigo TSX da Consulta de CNPJ...
cd /d "%~dp0"
node "%~dp0build-cnpj.js"
powershell -ExecutionPolicy Bypass -File "%~dp0compilar.ps1"
echo.
echo [2/2] Enviando atualizacao para a nuvem (Firebase)...
where firebase >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    call firebase.cmd deploy --only hosting --project primas-tecnologia
) else (
    call npx --yes firebase-tools deploy --only hosting --project primas-tecnologia
)
echo.
echo =======================================================
echo  CONSULTA CNPJ PUBLICADA COM SUCESSO!
echo =======================================================
echo.
echo  Link direto: https://primas-tecnologia.web.app/consulta-cnpj.html
echo.
set /p ABRIR="Deseja abrir a Consulta CNPJ no navegador agora? (S/N): "
if /i "%ABRIR%"=="S" (
    start https://primas-tecnologia.web.app/consulta-cnpj.html
)
pause
