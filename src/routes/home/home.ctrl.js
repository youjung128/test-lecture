"use strict";

const hello = (req, res) => { // 컨트롤러
    res.render("home/index");
}

const login = (req, res) => { // 컨트롤러
    res.render("home/login");
}

module.exports = {
    hello,
    login,
};