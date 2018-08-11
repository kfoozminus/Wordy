#!/usr/bin/python
print ("""Content-type: text/html\n\n
		<!DOCTYPE html>
		<html>
		<body>""")
import sys
sys.path.insert(0, '/usr/lib/python3/dist-packages')
import cgi
import cgitb
cgitb.enable()
import requests
from bs4 import BeautifulSoup

form = cgi.FieldStorage()
c = form["word"].value
dic = requests.get('http://www.dictionary.com/browse/' + c)
soup = BeautifulSoup(dic.text, "lxml");

con = ""

for link in soup.findAll("ol"):
	li = link.li
	if "value" in li.attrs:
		con += str(link)

print con
print ("""</body>
        </html>""")

