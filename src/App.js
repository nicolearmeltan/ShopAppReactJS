import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { hot } from "react-hot-loader";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Shop } from "./components/Shop/Shop";
import { Contact } from "./components/Contact/Contact";
import { Faqs } from "./components/Faqs/Faqs";

const App = () => {
  return (
    <div className="App">
        <Nav />
    </div>
  );
};

export default hot(module)(App);
