 module.exports = {
    config: {
        name: "ok",
        version: "1.0",
        author: "KYLE",
        countDown: 5,
        role: 0,
        shortDescription: "commande Ok",
        longDescription: "commande Ok",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "ok") return message.reply("pas de problème KYLE KAKOTA  est un génie de la science 😁");
    }
}
