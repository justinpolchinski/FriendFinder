var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friends = require("../data/friends");
var bestFriend;
var bestFriendIndex;

//console.log(friends[0].name);
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req,res){
        console.log("apiRoutes: " + req.body.scores);
        myData = req.body.scores;
        //console.log(req.body);
        var bestMatch = [];
        var bestmatchArr = [];
        console.log("first friend: " + friends[0].scores);
        for (var i = 0; i<friends.length; i++){
            for(var j = 0; j<friends[i].scores.length; j++){
                bestMatch.push(Math.abs(myData[j]-friends[i].scores[j]));
                if(j == friends[i].scores.length-1){
                    bestmatchArr.push(bestMatch);
                    bestMatch =[];
                }
            }
        }
        console.log(bestmatchArr);
        for (var a = 0; a<bestmatchArr.length; a++){
            function getSum(total, num){
                return total + num;
            }
            bestmatchArr[a] = bestmatchArr[a].reduce(getSum);
           
        }
        console.log("BestArr: " + bestmatchArr);
        console.log(bestmatchArr.indexOf(Math.min.apply(Math, bestmatchArr)));
        bestFriendIndex = bestmatchArr.indexOf(Math.min.apply(Math, bestmatchArr));
        bestFriend = friends[bestFriendIndex];
        console.log(bestFriend);
        res.json(bestFriend);
        friends.push(req.body);
    })
}