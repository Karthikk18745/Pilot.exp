import http.server
import ssl
import threading
import sys
import os

PORT_HTTP = 80
PORT_HTTPS = 443
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run_http():
    try:
        httpd = http.server.HTTPServer(('0.0.0.0', PORT_HTTP), Handler)
        print(f"HTTP Server running on http://realize.responsibly.com:{PORT_HTTP}")
        httpd.serve_forever()
    except Exception as e:
        print(f"HTTP Server Error on port {PORT_HTTP}: {e}")

def run_https():
    try:
        httpd = http.server.HTTPServer(('0.0.0.0', PORT_HTTPS), Handler)
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        context.load_cert_chain(certfile="cert.pem", keyfile="key.pem")
        httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
        print(f"HTTPS Server running on https://realize.responsibly.com:{PORT_HTTPS}")
        httpd.serve_forever()
    except Exception as e:
        print(f"HTTPS Server Error on port {PORT_HTTPS}: {e}")

if __name__ == "__main__":
    t_http = threading.Thread(target=run_http, daemon=True)
    t_https = threading.Thread(target=run_https, daemon=True)
    
    t_http.start()
    t_https.start()
    
    t_http.join()
    t_https.join()
