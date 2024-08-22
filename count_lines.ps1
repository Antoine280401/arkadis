$extensions = @("*.vue")

foreach ($ext in $extensions) {
    Write-Output "Processing files with extension $ext"
    $files = Get-ChildItem -Recurse -Include $ext
    $lineCount = 0
    $fileCount = $files.Count
    foreach ($file in $files) {
        $lineCount += (Get-Content $file.FullName).Length
    }
    Write-Output "$($ext): $($fileCount) files, $($lineCount) lines"
}
