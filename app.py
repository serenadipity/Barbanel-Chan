from flask import Flask, render_template, redirect, request, session, url_for
import urllib2, json

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
	return render_template("home.html")

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "blah"
   app.run(host="0.0.0.0", port=8000)