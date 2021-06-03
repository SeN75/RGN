// import { faFacebook, faInstagram, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
// import { Tournament, TournamentGroup, TournamentMatch, TournamentMatchPlayer, TournamentPlayer, TournamentRound, TournamentRules, TournamentRuleTiebreaker, TournamentRuleWinnerOrder } from "./types";

import { Tournament, TournamentGroup, TournamentMatch, TournamentMatchPlayer, TournamentPlayer, TournamentRound, TournamentRules, TournamentRuleTiebreaker, TournamentRuleWinnerOrder } from "./types"

// export const ICON = {
//     facebook: faFacebook,
//     twitter: faTwitter,
//     insta: faInstagram,
//     twitch: faTwitch,
//     play: faPlay,
//     star: faStar
// }


export const user = {
    isLogin: true,
    name: "",
    email: "",
}

export const matchs = [
    {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'finished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    }, {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'notfinished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    },
    {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'finished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    }, {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'notfinished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    }
]



export const posts = [
    { category: "esport", path: ".", post_image: "_soccer_post-img1.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img3.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img5.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "_soccer_post-img1.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img3.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img5.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
]

export const tournaments = [
    {
        name: 'A new mage character is coming to the league', details: 'Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt ', poster: 'post-img3.jpg'
    },
    {
        name: 'A new mage character is coming to the league', details: 'Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt ', poster: 'post-img5.jpg'
    },
    {
        name: 'A new mage character is coming to the league', details: 'Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt ', poster: 'post-img3.jpg'
    }
]


export const matchFinished = [
    {
        date: '2020/02/02',
        leauge: "Pro League - World Championship",
        period: "Quater-Finals",
        team1: {
            name: "team1", place: 'jeddah', logo: "assets/images/esports/logos/alchemists-22x25.png", score: 5, totalKill: 50, totalDeath: 10, totalAssists: 30,
            players: [
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
            ]
        },
        team2: {
            name: "team2", place: 'jeddah', logo: "assets/images/samples/logos/icarus_wings_shield.png", score: 3, totalKill: 10, totalDeath: 50, totalAssists: 30,
            players: [
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
            ]
        },
        isTeam1Win: true
    },
    {
        date: '2020/02/02',
        team1: {
            name: "team1", place: 'jeddah', logo: "assets/images/esports/logos/alchemists-22x25.png", score: 5, totalKill: 50, totalDeath: 10, totalAssists: 30
        },
        team2: {
            name: "team2", place: 'jeddah', logo: "assets/images/samples/logos/icarus_wings_shield.png", score: 3, totalKill: 10, totalDeath: 50, totalAssists: 30
        },
        isTeam1Win: false
    },
    {
        date: '2020/02/02',
        team1: {
            name: "team1", place: 'jeddah', logo: "assets/images/esports/logos/alchemists-22x25.png", score: 5, totalKill: 50, totalDeath: 10, totalAssists: 30
        },
        team2: {
            name: "team2", place: 'jeddah', logo: "assets/images/samples/logos/icarus_wings_shield.png", score: 3, totalKill: 10, totalDeath: 50, totalAssists: 30
        },
        isTeam1Win: true
    },
]




export const tournamentTest: Tournament = {
    "name": "string",
    "description": "string1",
    "permalink": "string1",
    "banner": "string",
    "logo": "string",
    "gameId": 1,
    "numberOfParticipants": 5,
    "isTeam": true,
    "startDate": "2021-05-25T00:13:56.068Z",
    "endDate": "2021-05-25T00:13:56.068Z",
    "registrationBasedOnDates": false,
    "startRegistrationDate": "2021-05-25T00:13:56.068Z",
    "endRegistrationDate": "2021-05-25T00:13:56.068Z",
    "manuallyParticipantAccreditation": false,
    "registrationMessage": "string",
    "approvalMessage": "string",
    "rejectMessage": "string",
    "rule": "string",
    "prizes": "string",
    "createdBy": 1,
    "createdDate": "2021-05-25T00:13:56.068Z",
    "lastModifyDate": "2021-05-25T00:13:56.068Z",
    "deletedBy": 0,
    "timeZone": "2021-05-25T00:38:23.538Z",
    "gameNavigation": {}

}


export const tournmaentGroupTest: TournamentGroup = {
    "id": 0,
    "guidId": "string",
    "tournamentId": 0,
    "roundId": 0,
    "name": "string",
    "createdBy": 0,
    "createdDate": "2021-05-25T00:38:23.538Z",
    "lastModifyDate": "2021-05-25T00:38:23.538Z",
    "deletedBy": 0,
}

export const tournmaentMatchTest: TournamentMatch = {
    "id": 0,
    "guidId": "string",
    "tournamentId": 0,
    "tournamentGroupId": 0,
    "tournamentRoundId": 0,
    "playerIdWinner": 0,
    "dateTimeOfMatch": "2021-05-25T01:05:16.313Z",
    "createdBy": 0,
    "createdDate": "2021-05-25T01:05:16.313Z",
    "lastModifyDate": "2021-05-25T01:05:16.313Z",
    "deletedBy": 0
}
export const tournmaentMatchPlayerTest: TournamentMatchPlayer = {
    "id": 0,
    "guidId": "string",
    "tournamentMatchId": 0,
    "playerId": 0,
    "name": "name",
    "isWin": false,
    "isDraw": false,
    "isLoss": false,
    "forfeit": 0,
    "scoreFor": 0,
    "scoreAgainst": 0,
    "scoreDifference": 0,
    "points": 0,
    "score": 0,
    "createdBy": 0,
    "createdDate": "2021-05-25T01:03:23.664Z",
    "lastModifyDate": "2021-05-25T01:03:23.664Z",
    "deletedBy": 0
}

export const tournmaentPlayerTest: TournamentPlayer = {
    "id": 0,
    "guidId": "string",
    "tournamentId": 0,
    "playerId": 0,
    "createdBy": 0,
    "createdDate": "2021-05-25T01:12:18.586Z",
    "lastModifyDate": "2021-05-25T01:12:18.586Z",
    "deletedBy": 0
}
export const tournmaentRoundTest: TournamentRound = {
    "id": 0,
    "guidId": "string",
    "tournamentId": 0,
    "name": "string",
    "createdBy": 0,
    "createdDate": "2021-05-25T01:16:02.108Z",
    "lastModifyDate": "2021-05-25T01:16:02.108Z",
    "deletedBy": 0
}

export const tournmaentRulesTest: TournamentRules = {
    "id": 0,
    "guidId": "string",
    "tournamentId": 0,
    "tournamentRuleTypeId": 0,
    "name": "string",
    "orderItem": 0,
    "numberOfParticipants": 0,
    "numberOfGroups": 0,
    "numberOfParticipantsInGroup": 0,
    "numberOfWinnerInGroup": 0,
    "numberOfRounds": 0,
    "isRoundTrip": false,
    "isRandomDistribution": false,
    "calculatePoints": false,
    "countOfWins": 0,
    "countOfDraws": 0,
    "countOflosses": 0,
    "calculationBasedOnResult": false,
    "pointBasedOnKill": 0,
    "createdBy": 0,
    "createdDate": "2021-05-25T01:18:03.454Z",
    "lastModifyDate": "2021-05-25T01:18:03.454Z",
    "deletedBy": 0
}
export const tournmaentRuleTiebreakerTest: TournamentRuleTiebreaker = {
    "id": 0,
    "guidId": "string",
    "tournamentRuleId": 0,
    "tiebreakerId": 0,
    "orderItem": 0,
    "createdBy": 0,
    "createdDate": "2021-05-25T01:24:37.169Z",
    "lastModifyDate": "2021-05-25T01:24:37.169Z",
    "deletedBy": 0

}
export const tournmaentRuleWinnerOrderTest: TournamentRuleWinnerOrder = {
    "id": 0,
    "guidId": "string",
    "tournamentRuleId": 0,
    "name": "string",
    "countOfPoint": 0,
    "createdBy": 0,
    "createdDate": "2021-05-25T01:31:33.321Z",
    "lastModifyDate": "2021-05-25T01:31:33.321Z",
    "deletedBy": 0

}