python pythonStuff/paraBuild.py

Set-Location config

Rename-Item "paths.js" -NewName "paths-debug.js"
Rename-Item "paths-deploy.js" -NewName "paths.js"

Rename-Item "webpack.config.js" -NewName "webpack.config-debug.js"
Rename-Item "webpack.config-deploy.js" -NewName "webpack.config.js"

Set-Location ..

npm run build

python  pythonStuff/paraDebug.py

Set-Location config

Rename-Item "webpack.config.js" -NewName "webpack.config-deploy.js"
Rename-Item "webpack.config-debug.js" -NewName "webpack.config.js"

Rename-Item "paths.js" -NewName "paths-deploy.js"
Rename-Item "paths-debug.js" -NewName "paths.js"

python pythonStuff/copiaECola.py