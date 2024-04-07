from flask import Flask, redirect 
# this is for WAY LATER IN THE PROJECT, im just starting the source code out rn
@app.route("/")
def mainpage():
  return redirect("https://bark-coding.vercel.app/")
