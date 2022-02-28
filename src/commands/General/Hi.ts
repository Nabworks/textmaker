import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'hi',
            description: 'Generally used to check if bot is Up',
            category: 'general',
            usage: `${client.config.prefix}hi`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`👾 Hello ${M.sender.username}!`))
    }
}
sendButImage(from, menu, "𓁩NAB🜲bot〠⃟⛐ •", thumb, [
          {
            buttonId: `${prefix}help`,
            buttonText: {
              displayText: `PING`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}mods`,
            buttonText: {
              displayText: `OWNER`,
            },
            type: 1,
          },
        ]);
