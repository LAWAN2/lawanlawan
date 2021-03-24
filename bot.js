const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');

client.login("");

client.on("ready", () => {
    console.log("The Berserk has woken up!");
});

client.on("message", msg => {

    if (msg.content.toLowerCase() === "generate male name") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/malename', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(json.name);
            })
            .catch(err => console.log(err));
    }

    if (msg.content.toLowerCase() === "generate female name") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/femalename', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(json.name);
            })
            .catch(err => console.log(err));
    }

    if (msg.content.toLowerCase() === "generate fake male") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/male/account', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.name} ${json.surname} ${json.age}`);
            })
            .catch(err => console.log(err));
    }

    if (msg.content.toLowerCase() === "generate fake female") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/female/account', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.name} ${json.surname} ${json.age}`);
            })
            .catch(err => console.log(err));
    }

    if (msg.content.toLowerCase() === "generate surname") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/surname', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.name}`);
            })
            .catch(err => console.log(err));
    }

    if (msg.content.toLowerCase() === "generate age") {
        fetch('https://fake-data-generator-api.herokuapp.com/ASKLFHASOIFGASUIFGHASUIPFGAIUSFGIUASGFIUASFGUASFGUASGFUAISFGAISUFGAUISFG/age', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(json => {
                msg.channel.send(`${json.age}`);
            })
            .catch(err => console.log(err));
    }
})