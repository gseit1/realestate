Add-Type -AssemblyName System.Drawing
$filePath = "c:\Users\giorg\OneDrive\Documents\realEstate\public\logo3.png"
$bmp = New-Object System.Drawing.Bitmap($filePath)
$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.A -gt 15) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$w = $maxX - $minX + 1
$h = $maxY - $minY + 1
Write-Host "Crop bounds: $minX, $minY, $w, $h"

$rect = New-Object System.Drawing.Rectangle($minX, $minY, $w, $h)
$cropped = $bmp.Clone($rect, $bmp.PixelFormat)
$bmp.Dispose()
$outPath = "c:\Users\giorg\OneDrive\Documents\realEstate\public\logo3-cropped.png"
$cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()
Write-Host "Successfully saved $outPath"
