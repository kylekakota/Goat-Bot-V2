 module.exports = { 
    config: { 
        name: "respect", 
        aliases: [], 
        version: "1.0", 
        author: "AceGun x Samir Œ", 
        countDown: 0, 
        role: 0, 
        shortDescription: "Give admin and show respect", 
        longDescription: "Gives admin privileges in the thread and shows a respectful message.", 
        category: "owner", 
        guide: "/ai respect" 
    },  
    onStart: async function ({ message, args, api, event }) { 
        try { 
            console.log('Sender ID:', event.senderID);  
            const permission = ["100077705928783"]; 
            if (!permission.includes(event.senderID)) { 
                return api.sendMessage( " ✰ 𝐃𝐞́𝐬𝐨𝐥𝐞́ 𝐬𝐞𝐮𝐥 𝐦𝐨𝐧 𝐦𝐚𝐢𝐭𝐫𝐞 🌹Kyle Kakota 🌹𝐩𝐞𝐮𝐭 𝐮𝐭𝐢𝐥𝐢𝐬𝐞𝐫 𝐜𝐞𝐭𝐭𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 🙂 ✰ ", event.threadID, event.messageID ); 
            }  
            const threadID = event.threadID; 
            const adminID = event.senderID;  
            // Change the user to an admin 
            await api.changeAdminStatus(threadID, adminID, true);  
            api.sendMessage( ` ✰ partir d'aujourd'hui vous êtes administrateur du groupe de mon maître 🌹 Kyle Kakota 🌹 ! ✰`, threadID ); 
        } 
        catch (error) { 
            console.error("✰🏵Maitre je suis pas parmi les admin 👥 pour vous y intégrer toute mes excuses 😭 🛐 ✰:", error); 
            api.sendMessage(" ✰ 𝐃𝐞́𝐬𝐨𝐥𝐞́ 🌹 Kyle Kakota 🌹 veillez réessayer ✰", event.threadID); 
        } 
    },
};
