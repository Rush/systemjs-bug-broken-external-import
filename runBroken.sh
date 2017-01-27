#!/bin/sh
npm run makeBroken

echo "Now go to http://localhost:8000/index.html"
python -m SimpleHTTPServer