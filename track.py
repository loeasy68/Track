import sys
import subprocess

option = sys.argv[1]


if option == "startapp":
  subprocess.run("mkdir " + sys.argv[2], shell=True)
  subprocess.run("touch ./" + sys.argv[2] + "/index.html",  shell=True)
  subprocess.run("echo '<h1>Hello world</h1>' >> ./" + sys.argv[2] + '/index.html', shell=True)
  subprocess.run("touch ./" + sys.argv[2] + "/serve.sh", shell=True)
  subprocess.run("echo 'python3 -m http.server 9980' >> ./" + sys.argv[2] + "/serve.sh", shell=True)
  subprocess.run("chmod +x ./" + sys.argv[2] + "/serve.sh", shell=True)
if option == "react":
  subprocess.run("npx create-react-app " + sys.argv[2], shell=True)
  subprocess.run("touch ./" + sys.argv[2] + "/serve.sh", shell=True)
  subprocess.run("echo 'npm start' >> ./" + sys.argv[2] + "/serve.sh", shell=True)
  subprocess.run("chmod +x ./" + sys.argv[2] + "/serve.sh", shell=True)