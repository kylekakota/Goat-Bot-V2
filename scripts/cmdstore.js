      message.reply(replyMessage, (err, info) => {
        global.GoatBot.onReply.set(info.messageID, {
          commandName: "cmdstore",
          messageID: info.messageID,
          author: event.senderID,
          commands,
        });
      });
    } catch (error) {
      console.error(error);
      message.reply("An error occurred while fetching commands.");
    }
  },

  onReply: async function ({ api, event, Reply, args, message }) {
    const { author, commandName, commands } = Reply;

    if (event.senderID !== author || !commands) {
      return;
    }

    const commandID = parseInt(args[0], 10);

    if (isNaN(commandID) || !commands.some(cmd => cmd.id === commandID)) {
      message.reply("Invalid input.\nPlease provide a valid command ID.");
      return;
    }

    const selectedCommand = commands.find(cmd => cmd.id === commandID);

    let replyMessage = `
    𝗜𝗗:${selectedCommand.id}
    𝗖𝗠𝗗:${selectedCommand.cmdName}
    𝗖𝗢𝗗𝗘:${selectedCommand.codeLink}
    𝗜𝗡𝗙𝗢:${selectedCommand.description}`;

    message.reply(replyMessage);
    global.GoatBot.onReply.delete(event.messageID);
  },
}
