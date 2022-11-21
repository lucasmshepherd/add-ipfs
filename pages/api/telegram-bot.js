import TelegramBot from 'node-telegram-bot-api'

const TOKEN = process.env['5984603093:AAFeQ4-Bzwi8yEB7ynruDjXc_HojiGAHEnM']
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on('message', message => {
  bot.sendMessage(message.from.id, JSON.stringify(message))
});