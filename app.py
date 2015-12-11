from flask import Flask, render_template, redirect, request, session, url_for
import weather

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
        
	return render_template("home.html", name = "Name")

@app.route("/temp")
def temp():
        if request.method == "GET":
                city = request.args.get("city")
                temp =  weather.get_temp(city)
                return temp
        return "no"

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "blah"
   app.run(host="0.0.0.0", port=8000)
