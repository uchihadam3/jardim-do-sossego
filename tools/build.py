#!/usr/bin/env python3
"""Monta o jogo.

  python3 tools/build.py            -> dist/ (pagina publicada + local.html)
  python3 tools/build.py --app      -> tambem a versao instalavel:
       dist/instalar/Jardim-do-Sossego.html        (arquivo unico, funciona sem internet)
       instalador/Instalar Jardim do Sossego.exe   (instalador de Windows, precisa do makensis)
       dist/instalar/Jardim-do-Sossego-Windows.zip (o .exe + LEIA-ME, baixado de dentro do jogo)
  python3 tools/build.py --web URL  -> docs/ : o site publicado (GitHub Pages) que se atualiza sozinho,
       com o instalador de Windows que abre esse endereco numa janela propria
"""
import base64, hashlib, json, pathlib, re, shutil, subprocess, sys, zipfile
root = pathlib.Path(__file__).resolve().parent.parent
dist = root / "dist"; dist.mkdir(exist_ok=True)
minify = [] if "--dev" in sys.argv else ["--minify"]
subprocess.run(["npx", "esbuild", "src/main.js", "--bundle", "--format=iife", "--target=es2020", "--outfile=dist/game.js", "--log-level=warning", *minify], cwd=root, check=True)
body = (root / "web" / "index.html").read_text(encoding="utf-8")
(dist / "index.html").write_text(body, encoding="utf-8")
RESET = "*{box-sizing:border-box}body{margin:0}[hidden]{display:none!important}"
HEAD = '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
(dist / "local.html").write_text(f'<!doctype html><html lang="pt-BR"><head>{HEAD}<style>{RESET}</style></head><body>{body}</body></html>', encoding="utf-8")
print("ok", (dist / "game.js").stat().st_size // 1024, "KB")

if "--app" in sys.argv:
    b64 = lambda p: base64.b64encode(pathlib.Path(p).read_bytes()).decode()
    inst = root / "instalador"; out = dist / "instalar"; out.mkdir(exist_ok=True)
    fonts = ""
    for fam, f, w in (("Fredoka", "fredoka/files/fredoka-latin-wght-normal.woff2", "300 700"), ("Nunito", "nunito/files/nunito-latin-wght-normal.woff2", "200 1000")):
        fonts += f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{w};font-display:swap;src:url(data:font/woff2;base64,{b64(root / 'node_modules/@fontsource-variable' / f)}) format('woff2')}}"
    app = re.sub(r'<link rel="stylesheet" href="https://fonts.googleapis.com[^>]*>\n?', "", body)
    app = re.sub(r'<meta name="claude:viewport-fit-sides"[^>]*>\n?', "", app)
    app = app.replace("<title>Jardim do Sossego</title>\n", "").replace('<script src="game.js"></script>', "")
    audio = ",".join(f'"{p.stem}":"{b64(p)}"' for p in sorted((dist / "audio").glob("*.mp3")))
    game = (dist / "game.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
    html = (f'<!doctype html><html lang="pt-BR"><head>{HEAD}<title>Jardim do Sossego</title>'
            f'<link rel="icon" href="data:image/png;base64,{b64(inst / "icone64.png")}"><style>{RESET}{fonts}</style></head><body>'
            f'<script>window.__APP=true;/*__SAVE__*/</script>{app}<script>window.__AUDIO={{{audio}}};</script><script>{game}</script></body></html>')
    single = out / "Jardim-do-Sossego.html"; single.write_text(html, encoding="utf-8")
    shutil.copy(single, inst / "Jardim do Sossego.html")
    print("app", single.stat().st_size // 1024, "KB")
    if shutil.which("makensis"):
        subprocess.run(["makensis", "-V2", "-INPUTCHARSET", "UTF8", "instalador.nsi"], cwd=root / "tools", check=True)
        exe = inst / "Instalar Jardim do Sossego.exe"
        leia = ("JARDIM DO SOSSEGO\r\n\r\n1. Dê dois cliques em \"Instalar Jardim do Sossego\".\r\n"
                "2. Se o Windows mostrar a tela azul \"O Windows protegeu o computador\", clique em \"Mais informações\" e depois em \"Executar assim mesmo\". "
                "Isso aparece porque o instalador não tem assinatura digital paga.\r\n"
                "3. Clique em Instalar. No fim, o jogo abre sozinho e fica um atalho com uma flor na área de trabalho.\r\n\r\n"
                "O jogo funciona sem internet. Para remover: Configurações > Aplicativos > Jardim do Sossego > Desinstalar.\r\n")
        z = out / "Jardim-do-Sossego-Windows.zip"
        with zipfile.ZipFile(z, "w", zipfile.ZIP_STORED) as zf:
            zf.write(exe, exe.name); zf.writestr("LEIA-ME.txt", leia.encode("utf-8-sig"))
        print("exe", exe.stat().st_size // 1024, "KB  zip", z.stat().st_size // 1024, "KB")
    else:
        print("makensis nao encontrado: instalador de Windows nao foi gerado")

if "--web" in sys.argv:
    url = sys.argv[sys.argv.index("--web") + 1].rstrip("/") + "/"
    b64 = lambda p: base64.b64encode(pathlib.Path(p).read_bytes()).decode()
    inst = root / "instalador"; docs = root / "docs"
    if docs.exists(): shutil.rmtree(docs)
    (docs / "audio").mkdir(parents=True); (docs / "instalar").mkdir()
    for p in (dist / "audio").glob("*.mp3"): shutil.copy(p, docs / "audio" / p.name)
    shutil.copy(dist / "game.js", docs / "game.js")
    from PIL import Image
    icon = Image.open(inst / "icone.png")
    for n in (192, 512): icon.resize((n, n), Image.LANCZOS).save(docs / f"icone-{n}.png")
    fonts = ""
    for fam, f, w in (("Fredoka", "fredoka/files/fredoka-latin-wght-normal.woff2", "300 700"), ("Nunito", "nunito/files/nunito-latin-wght-normal.woff2", "200 1000")):
        fonts += f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{w};font-display:swap;src:url(data:font/woff2;base64,{b64(root / 'node_modules/@fontsource-variable' / f)}) format('woff2')}}"
    page = re.sub(r'<link rel="stylesheet" href="https://fonts.googleapis.com[^>]*>\n?', "", body)
    page = re.sub(r'<meta name="claude:viewport-fit-sides"[^>]*>\n?', "", page).replace("<title>Jardim do Sossego</title>\n", "")
    ver = hashlib.sha256((docs / "game.js").read_bytes() + page.encode()).hexdigest()[:10]
    page = page.replace('<script src="game.js"></script>', f'<script src="game.js?v={ver}"></script>')
    html = (f'<!doctype html><html lang="pt-BR"><head>{HEAD}<title>Jardim do Sossego</title>'
            '<meta name="description" content="Jogo cozy de jardinagem em 3D: plante, regue e veja o seu cantinho florescer.">'
            '<meta name="theme-color" content="#7fb86a"><link rel="manifest" href="manifest.webmanifest">'
            '<link rel="icon" href="icone-192.png"><link rel="apple-touch-icon" href="icone-192.png"><meta name="apple-mobile-web-app-capable" content="yes">'
            f'<style>{RESET}{fonts}</style></head><body><script>window.__WEB=true;window.__VER="{ver}";</script>{page}</body></html>')
    (docs / "index.html").write_text(html, encoding="utf-8")
    (docs / ".nojekyll").write_text("")
    (docs / "manifest.webmanifest").write_text(json.dumps({"name": "Jardim do Sossego", "short_name": "Jardim", "description": "Jogo cozy de jardinagem em 3D", "lang": "pt-BR",
        "start_url": "./", "scope": "./", "display": "standalone", "orientation": "any", "background_color": "#a9cfe6", "theme_color": "#7fb86a",
        "icons": [{"src": "icone-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "icone-512.png", "sizes": "512x512", "type": "image/png"}]}, ensure_ascii=False, indent=1), encoding="utf-8")
    assets = ["./", "index.html", f"game.js?v={ver}", "manifest.webmanifest", "icone-192.png", "icone-512.png"] + [f"audio/{p.name}" for p in sorted((docs / "audio").glob("*.mp3"))]
    (docs / "sw.js").write_text("""// Jardim do Sossego: copia offline + atualizacao automatica (gerado por tools/build.py)
const V = 'jardim-%s';
const ASSETS = %s;
// sounds and icons do not change from one version to the next: they are copied from the copy already on the device, so an update is a small download
self.addEventListener('install', (e) => { e.waitUntil((async () => { const c = await caches.open(V), old = (await caches.keys()).filter((k) => k.startsWith('jardim-') && k !== V);
  await Promise.all(ASSETS.map(async (u) => { if (/^(audio\\/|icone-)/.test(u)) for (const k of old) { const r = await (await caches.open(k)).match(u); if (r) { await c.put(u, r.clone()); return; } } await c.add(new Request(u, { cache: 'reload' })); }));
  await self.skipWaiting(); })()); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('jardim-') && k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(V).then((c) => c.match(e.request, { ignoreSearch: e.request.mode === 'navigate' })).then((r) => r || fetch(e.request)));
});
""" % (ver, json.dumps(assets)), encoding="utf-8")
    print("web", ver, sum(f.stat().st_size for f in docs.rglob("*") if f.is_file()) // 1024, "KB ->", url)
    if shutil.which("makensis"):
        subprocess.run(["makensis", "-V2", "-INPUTCHARSET", "UTF8", f"-DURL={url}", "instalador_online.nsi"], cwd=root / "tools", check=True)
        print("exe online", (docs / "instalar" / "Instalar-Jardim-do-Sossego.exe").stat().st_size // 1024, "KB")
