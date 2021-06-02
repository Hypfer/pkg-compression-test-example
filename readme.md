This is a minimal example for vercel/pkg#1200

To reproduce

- git clone
- npm install
- npm run build
- ./build/test
- open webbrowser and browse to http://localhost:3000
- Observe error message in log

```
PS D:\WebstormProjects\pkg-compression-test\build> .\test.exe
Example app listening at http://localhost:3000
Unhandled WebServer Error Error: incorrect header check
    at Zlib.zlibOnError [as onerror] (node:zlib:190:17) {
  errno: -3,
  code: 'Z_DATA_ERROR',
  expose: false,
  statusCode: 500,
  status: 500
}

```
