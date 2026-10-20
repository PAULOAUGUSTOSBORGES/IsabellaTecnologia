# ==============================================================
# Sistema de Build e Cache-Busting - Primas Tecnologia
# Compila módulos e atualiza versões de cache para os navegadores
# ==============================================================

$root = $PSScriptRoot
if ([string]::IsNullOrEmpty($root)) { $root = (Get-Location).Path }

Write-Host "=======================================================" -ForegroundColor Cyan
Write-Host " PRIMAS TECNOLOGIA - COMPILADOR & CACHE BUSTING" -ForegroundColor Cyan
Write-Host "=======================================================" -ForegroundColor Cyan

# 1. Compilação do Módulo Consulta CNPJ se existir build-cnpj.js
$buildCnpj = Join-Path $root "build-cnpj.js"
if (Test-Path $buildCnpj) {
    Write-Host "[1/2] Compilando modulo Consulta CNPJ..." -ForegroundColor Yellow
    try {
        & node $buildCnpj
        Write-Host "Modulo Consulta CNPJ compilado com sucesso!" -ForegroundColor Green
    } catch {
        Write-Host "Aviso ao compilar Consulta CNPJ: $_" -ForegroundColor Red
    }
}

# 2. Atualiza versões de cache dos arquivos JS/CSS
Write-Host "[2/2] Atualizando versoes de cache nos arquivos HTML..." -ForegroundColor Yellow
$versao = Get-Date -Format "yyyyMMddHHmmss"
$cacheString = "?v=$versao"

$htmlFiles = Get-ChildItem -Path $root -Filter "*.html" -Recurse -ErrorAction SilentlyContinue
$arquivosAtualizados = 0

foreach ($file in $htmlFiles) {
    if ($file.FullName -match "\\\." -or $file.FullName -match "node_modules") { continue }

    $content = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $originalContent = $content

    # Substitui versoes existentes
    $content = $content -replace '(\.js\?v=)\w+', "`${1}$versao"
    $content = $content -replace '(\.css\?v=)\w+', "`${1}$versao"

    # Adiciona ?v= em scripts e css locais que ainda nao tenham
    $content = [regex]::Replace($content, 'src="([^"]+\.js)"', {
        param($match)
        if ($match.Groups[1].Value -match '\?') { return $match.Value }
        if ($match.Groups[1].Value -match '^http') { return $match.Value }
        return 'src="' + $match.Groups[1].Value + $cacheString + '"'
    })

    $content = [regex]::Replace($content, 'href="([^"]+\.css)"', {
        param($match)
        if ($match.Groups[1].Value -match '\?') { return $match.Value }
        if ($match.Groups[1].Value -match '^http') { return $match.Value }
        return 'href="' + $match.Groups[1].Value + $cacheString + '"'
    })

    if ($content -cne $originalContent) {
        $utf8NoBom = New-Object System.Text.UTF8Encoding $false
        [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
        $arquivosAtualizados++
    }
}

Write-Host "Cache atualizado para a versao $versao em $arquivosAtualizados arquivos HTML." -ForegroundColor Green
Write-Host "=======================================================" -ForegroundColor Cyan
