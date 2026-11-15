Add-Type -AssemblyName System.Drawing

$srcPath = "d:\project\dhiwagar\public\assets\images\mockup-original.jpg"
$destDir = "d:\project\dhiwagar\public\assets\images"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

function Crop-Image($x, $y, $w, $h, $destName) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $src.Clone($rect, $src.PixelFormat)
    $outPath = Join-Path $destDir $destName
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $cropped.Dispose()
    Write-Output "Saved $destName : $w x $h"
}

# Hero mandap stage
Crop-Image 340 40 680 250 "hero-stage.jpg"

# About video photo
Crop-Image 58 362 222 150 "about-video.jpg"

# 6 Services cards
Crop-Image 58 580 142 88 "service-wedding.jpg"
Crop-Image 212 580 142 88 "service-birthday.jpg"
Crop-Image 366 580 142 88 "service-engagement.jpg"
Crop-Image 516 580 142 88 "service-reception.jpg"
Crop-Image 670 580 142 88 "service-babyshower.jpg"
Crop-Image 822 580 142 88 "service-corporate.jpg"

$src.Dispose()
