#!/usr/bin/env python3
"""Serve o jogo localmente:  python3 tools/serve.py   -> abra http://localhost:8000/local.html"""
import functools, http.server, pathlib, socketserver, sys
dist = pathlib.Path(__file__).resolve().parent.parent / "dist"
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(dist))
with socketserver.TCPServer(("", port), handler) as httpd:
    print(f"Jardim do Sossego em http://localhost:{port}/local.html  (Ctrl+C para sair)")
    httpd.serve_forever()
