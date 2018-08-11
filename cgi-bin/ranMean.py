#!/usr/bin/python
print ("""Content-type: text/html\n\n<!DOCTYPE html><html><body>""")
import sys
sys.path.insert(0, '/usr/lib/python3/dist-packages')
import cgi
import cgitb
cgitb.enable()
import requests
from bs4 import BeautifulSoup
from random import randint

form = cgi.FieldStorage()
c = form["word"].value
dic = requests.get('http://www.dictionary.com/browse/' + c)
soup = BeautifulSoup(dic.text, "lxml");

con = ""

idMeaning = randint(1, 3)

#span class="css-9sn2pa e10vl5dg6"
for link in soup.findAll("ol"):
	li = link.li
        for li in link:
            if "value" in li.attrs:
                #con += str(li)
                #con = li.find('span', {'class':'css-9sn2pa e10vl5dg6'})
                con = li
                idMeaning -= 1;
                if idMeaning == 0:
                    break;
        break;

print con
print ("""</body></html>""")

