$excludeDirs = "node_modules"
$projectPath = Get-Location

# Função recursiva para listar diretórios e arquivos, excluindo diretórios específicos
function List-Directory {
    param (
        [string]$Path,
        [string]$Indent
    )
    
    Get-ChildItem -Path $Path -Force | ForEach-Object {
        $item = $_
        if ($item.PSIsContainer) {
            if ($item.Name -notmatch $excludeDirs) {
                "$Indent$item\" | Out-File -Append estrutura.txt
                List-Directory -Path $item.FullName -Indent "$Indent  "
            }
        } else {
            "$Indent$item" | Out-File -Append estrutura.txt
        }
    }
}

# Inicializa a saída
Remove-Item -Path estrutura.txt -ErrorAction Ignore
"" | Out-File estrutura.txt

# Inicia a listagem a partir do diretório do projeto
List-Directory -Path $projectPath -Indent ""
