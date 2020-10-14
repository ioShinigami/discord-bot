
const axios = require('axios');
const Discord = require('discord.js');
const discordChannelId = "763856396030181396";
const url =
    "http://newsapi.org/v2/everything?" +
    "q=Javascript&" +
    "language=en&" +
    "sortBy=relevancy&" +
    "apiKey=dd8be9699fdd4771813e325303341f36"
module.exports = {
    name: 'get-js-news',
    description: 'Display latest javascript news',
    execute(message) {
        if (message.channel.id === discordChannelId && message.member.hasPermission('ADMINISTRATOR')) {
            axios.get(url)
                .then(response => {

                    var articles = response.data.articles;
                    var spliced = articles.slice(0, 100);
                    var articleAuthor = new Array();
                    var articleTitle = new Array();
                    var articleContent = new Array();
                    var articleImg = new Array();
                    var articleUrl = new Array();
                    articles = spliced;

                    var testData = Object.keys(articles)
                    var newRndData = randomTagGenerator(testData.length)
                    Object.entries(articles).map(item => {
                        articleAuthor.push(item[1].author);
                        articleTitle.push(item[1].title);
                        articleContent.push(item[1].content);
                        articleImg.push(item[1].urlToImage);
                        articleUrl.push(item[1].url);

                    })
                    const embed = new Discord.MessageEmbed()
                        .setColor('#f0db4f')
                        .setTitle(articleTitle[newRndData])
                        .setDescription(articleContent[newRndData])
                        .setURL(articleUrl[newRndData])
                        .setImage(articleImg[newRndData])
                        .setTimestamp()
                        .setFooter("Requested by : " + `${message.author.username}`)
                    message.channel.send(embed)
                        .catch(error => console.log(error))
                })
        } else {
            message.reply('This is not the correct channel for commands , please use #javascript-news or you arent an Administrator')
        }

    },
};


function randomTagGenerator(testData) {
    var rnd = Math.ceil(Math.random() * testData);
    return rnd
}

