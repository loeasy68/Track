import sys
import subprocess

option = sys.argv[1]


if option == "startapp":
  subprocess.run("mkdir " + sys.argv[2], shell=True)
  subprocess.run("touch ./" + sys.argv[2] + "/index.html",  shell=True)
  subprocess.run("echo '<h1>Hello world</h1>' >> ./" + sys.argv[2] + '/index.html', shell=True)
  subprocess.run("touch ./" + sys.argv[2] + "/serve.sh", shell=True)
  subprocess.run("echo 'python3 -m http.server' >> ./" + sys.argv[2] + "/serve.sh", shell=True)
  subprocess.run("chmod +x ./" + sys.argv[2] + "/serve.sh", shell=True)