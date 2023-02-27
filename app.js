 //------------------------------------------------------------------------------------\\
const { VK, Keyboard} = require('vk-io')
const { QuestionManager } = require('vk-io-question');
const vk = new VK({
    token: 'vk1.a.gEt3Pmk1wkTn0dhQoV-neJ18OVKcMLSQkMzbK3tBnjf0UhxKqU-6zzL4-UVvqKjCPrbGiWuGXY69Qu01vAwDGkFtAp1vLEKRdyXioPgyQhD3oBrWzSS3SrlPqoizWrOPLuVK3S31tW-9wfY0ANSXicSLG_jlB1B8lzRk2emGkUjzeWUmf2wAuTc3kWkjrSbG5s44PQFJlS4W-4Jpellmtg',
    pollingGroupId: 218697880
})
const questionManager = new QuestionManager();
const fs = require('fs')
const commands = [];
//const request = require('request');
const chalk = require('chalk'); // модуль 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');

 //------------------------------------------------------------------------------------\\
let startedproc = 1
	while(startedproc < 99) {
		startedproc += Number(1)
	console.log(chalk.keyword(`orange`).bold.underline(`» Starting Bot...`) + chalk.red.bold.underline(`${startedproc}%`)) // по приколу
}
 //------------------------------------------------------------------------------------\\
vk.updates.use(questionManager.middleware);
 //------------------------------------------------------------------------------------\\
var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
 //------------------------------------------------------------------------------------\\
const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн', 'трлд'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Бесконечно');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}
 //------------------------------------------------------------------------------------\\
let smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
let smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);
 //------------------------------------------------------------------------------------\\
let users = require('./database/users.json');
let botinfo = require('./database/botinfo.json');
//let airplanes = require('./components/airplanes.json');
//let apartments = require('./components/apartments.json');
//let cars = require('./components/cars.json');
//let helicopters = require('./components/helicopters.json');
//let homes = require('./components/homes.json');
//let phones = require('./components/phones.json');
//let yachts = require('./components/yachts.json');
 //------------------------------------------------------------------------------------\\
const graz = [

	{
		name: 'Бомж (без паспорта)',
		cost: 0,
		id: 1
    },
	{
		name: 'Гражданин',
		cost: 0,
		id: 2
    },

	{
		name: 'Чиновник',
		cost: 0,
		id: 3
    },

	{
		name: 'Лидер',
		cost: 0,
		id: 4
    }
]; 
const goss = [
	{
		name: 'Аригония',
		cost: 0,
		id: 1
    }
]; 
const rew = [
	{
		name: 'нету',
		cost: 0,
		id: 1
    },
	{
		name: 'Программист года',
		cost: 0,
		id: 2
    }
]; 
const dol = [
	{
		name: 'нету',
		cost: 0,
		id: 1
    },
	{
		name: 'Слесарь',
		cost: 0,
		id: 2
    }
]; 
const obr = [
	{
		name: 'нету',
		cost: 0,
		id: 1
    },
	{
		name: 'слесарь',
		cost: 0,
		id: 2
    }
]; 
const nsrpa = [
	{
		name: 'Нет',
		cost: 0,
		id: 1
    },
	{
		name: 'Участник НСРПА',
		cost: 0,
		id: 2
    },

	{
		name: 'Глава НСРПА',
		cost: 0,
		id: 3
    }
]; 
 //------------------------------------------------------------------------------------\\
let buttons = [];
let developer = 513655791; // Цифровой ID разработчика.
let owner = 513655791; // Цифровой ID создателя.
//------------------------------------------------------------------------------------\\

function displayTime(ticksInSecs) { 
var ticks = ticksInSecs; 
var hh = Math.floor(ticks / 3600); 
var mm = Math.floor((ticks % 3600) / 60); 
var ss = ticks % 60; 

return( pad(hh, 2) + ":" + pad(mm, 2) + ":" + pad(ss, 2) ); 
} 

function pad(n, width) { 
var n = n + ''; 
return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n; 
}
 //------------------------------------------------------------------------------------\\
function time() { 
let date = new Date(); 
let days = date.getDate(); 
let hours = date.getHours(); 
let minutes = date.getMinutes(); 
let seconds = date.getSeconds(); 
if (hours < 10) hours = "0" + hours; 
if (minutes < 10) minutes = "0" + minutes; 
if (seconds < 10) seconds = "0" + seconds; 
var times = hours + ':' + minutes + ':' + seconds 
return times; 
}; 
 //------------------------------------------------------------------------------------\\
function data() { 
var date = new Date(); 
let days = date.getDate(); 
let month = date.getMonth() + 1; 
let year = date.getFullYear(); 
if (month < 10) month = "0" + month; 
if (days < 10) days = "0" + days; 
var datas = days + '.' + month + '.' + year 
return datas; 
};

 //------------------------------------------------------------------------------------\\
setInterval(async () => {
	await saveAll();
}, 1);
 //------------------------------------------------------------------------------------\\
setInterval(async () => {
smileerror = utils.pick([`😒`, `😯`, `😔`, `🤔`]);
smilesuccess = utils.pick([`😯`, `🙂`, `🤑`, `☺`]);
}, 1);
 //------------------------------------------------------------------------------------\\
setInterval(async () => {
	users.map(user => {
		if(user.balance > 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
		{
			user.balance = 0;
		}
	});
}, 0);
 //------------------------------------------------------------------------------------\\
setInterval(async () => {
 users.map(user => {
  if(user.settings.adm > 3)
  {
   user.texrabot = false;
  }
 });
}, 0);
 //------------------------------------------------------------------------------------\\
function clearTemp()
{
	users.map(user => {
		user.timers.bonus = 0;
	});
}
 //------------------------------------------------------------------------------------\\
clearTemp(); 
 //------------------------------------------------------------------------------------\\
setInterval(async () => { 
		users.map(user => { 
		user.timers.bonus -= 1;
}); 
}, 1000);
 //------------------------------------------------------------------------------------\\
function generateKeyboard(array) { 
let kb = []; 
if(array.length > 40) return false; 
for (let i = 0; i < 10; i += 1) { 
if(!array.slice(i * 4, i * 4 + 4)[0]) break; 
kb.push(array.slice(i * 4, i * 4 + 4)); 
} 
kb.map((arr) => { 
arr.map((button, i) => { 
arr[i] = Keyboard.textButton({ label: button }); 
}); 
}); 
 //------------------------------------------------------------------------------------\\
return Keyboard.keyboard(kb); 
}
function msgError(messagetext)
{
	return bot(`${messagetext} ${utils.pick([`😯`, `🙂`, `🤑`, `☺`])}`);
}
 //------------------------------------------------------------------------------------\\
setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);
 //------------------------------------------------------------------------------------\\
async function saveAll()
{
	require('fs').writeFileSync('./database/users.json', JSON.stringify(users, null, '\t'));
	return true;
}
setInterval(function(){
	fs.writeFileSync('./database/users.json', JSON.stringify(users, null, "\t"))
	console.log(chalk.keyword(`blue`).bold.underline(`» SaveAll: Сохранение прошла успешна`));
}, 300000);
 //------------------------------------------------------------------------------------\\
const { updates, snippets } = vk;
 //------------------------------------------------------------------------------------\\
updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club218697880|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club218697880|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			id: message.senderId,
			uid: users.length,
			tag: user_info.first_name,
			regDate: `${data()}, ${time()}`,
			mention: true,
			ban: false,
			texrabot: false, 
			balance: 1000,
			pass: 1,
			partia: 1,
			gos: "",
			registration: false,
			photo: "",
			age: 0,
			citizenship: 0,
			obro: 1,
			dolz: 1,
			timers: {
				bonus: false
			},
			human: {
				hp: 100, // сытость
				thirst: 100, // жажда
				satiety: 100, // сытость
				disease: "нету", // Болезнь
				skills: 1, // Навыки
				knowledge: 1, // знания 
				endurance: 1, // Выносливость
			    awards: "", // Награды
			    power: 1, // сила
			},
			bank: {
				balance: 0,
				schet: false ,
			},
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			misc: {
				phone: 0,
			},
			settings: {
				firstmsg: true,
				adm: 1,
				trade: true,
				old: false,
				limit: 100000000000,
			}
		});
		console.log(chalk.keyword(`green`).bold.underline(`» +1 игрок [Игроков: ${users.length}]`));
		console.log(``);
		saveAll();
	}


	message.user = users.find(x=> x.id === message.senderId);

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if(message.user.ban == true)
	{

		if(message.isChat) return;
		if(!message.isChat) return bot(`ваш аккаунт заблокирован навсегда! ⛔`);
	}
	if(message.user.texrabot == true)
	{

		if(message.isChat) return;
		if(!message.isChat) return bot(`Тех.работы! ⛔`);
	}

	const command = commands.find(x=> x[0].test(message.text));

	if(message.user.settings.firstmsg)
	{
bot(`Приветствуем вас дорогой клиент, в нашем уникальном банке, для начала сотрудничество с нами вам необходимо заполнить анкету с помощью команды «Регистрация», для дальнейшего активного сотрудничества с нами, помните CrystalBank: Ваш гарант светлого будущего!`,
{ 
	keyboard:JSON.stringify( 
	{ 
	"inline": true,
	"one_time": false, 
	"buttons": [ 
	[{ 
	"action": { 
	"type": "text", 
	"payload": "{\"button\": \"1\"}", 
	"label": "🗒️ Регистрация" 
	}, 
	"color": "positive" 
	}] 
] 
}) 
});
		message.user.settings.firstmsg = false;
		saveAll();
	}
	if(!command)
	{

		if(message.isChat) return;
		if(!message.isChat) return bot(`такой команды не существует, отправь «помощь» что бы узнать мои команды. 🎲`);
	}
	let follow = await vk.api.call("groups.isMember", { user_id: message.senderId, group_id: 204117715 }); 
	message.user = users.find(x=> x.id === message.senderId); 
	message.args = message.text.match(command[0]);
	await command[1](message, bot);
	saveAll();
	console.log(``)
	console.log(`Executed: VK_ID: ${message.user.id} uID: ${message.user.uid} Nickname: ${message.user.tag} Command: ${message.text} `)
	console.log(``)
});
const cmd = {
    hear: (p, f) => {
        commands.push([p, f]);
    }
}
 //------------------------------------------------------------------------------------\\
cmd.hear(/^(?:@crystalllbank 🗒️ Регистрация|🗒️ Регистрация|Регистраци)/i, async (message, bot) => {
	if(message.user.registration === true) return bot(`вы и так уже зарегистрированы 🚫`);
const answer = await message.question(
        'Согласны-ли Вы на обработку персональных данных?'
    );

    if (!/да|yes|согласен|конечно/i.test(answer.text)) {
        await message.send('Тогда, мы не можем совершить регистрацию');
        return;
    }

    await message.send('Отлично, тогда продолжим');

    const age = await message.question('Введите Ваш возраст');
    const graz = await message.question('Введите название государства');
    const photo = await message.question('Введите ссылку на вашу фотографию \nПримечание: ссылка долна быть «photo-218697880_457239019», а не «https://vk.com/photo-218697880_457239019»');

    await message.send(
        `Вы успешно зарегистрировались в нашем банке, вот ваши данные:\nВозраст: ${age.text}\nГосударство: ${graz.text}\nФото: https://vk.com/${photo.text}`, 
		{ 
		keyboard:JSON.stringify(
		{
  "buttons": [
    [
      {
        "action": {
          "type": "text",
          "label": "🗒️ Помощь",
          "payload": ""
        },
        "color": "positive"
      },
      {
        "action": {
          "type": "text",
          "label": "🎫 Профиль",
          "payload": ""
        },
        "color": "secondary"
      },
      {
        "action": {
          "type": "text",
          "label": "💳 Банк",
          "payload": ""
        },
        "color": "secondary"
      }
    ],
    [
      {
        "action": {
          "type": "text",
          "label": "👑 Топ",
          "payload": ""
        },
        "color": "negative"
      },
      {
        "action": {
          "type": "text",
          "label": "🇺🇳 Государство",
          "payload": ""
        },
        "color": "negative"
      },
      {
        "action": {
          "type": "text",
          "label": "🏢 Бизнес",
          "payload": ""
        },
        "color": "negative"
      }
    ],
    [
      {
        "action": {
          "type": "text",
          "label": "👸 Партия",
          "payload": ""
        },
        "color": "primary"
      }
    ]
  ]
}
) 
		});
   message.user.gos = graz.text
   message.user.age = age.text
   message.user.photo = photo.text
   message.user.registration = true
  });
  cmd.hear(/^(?:➡️ Главное Меню|@crystalllbank ➡️ Главное Меню)/i, async (message, bot) => {
  return bot(`Вы вернулись на главное меню`, {
  	keyboard:JSON.stringify(
		{
  "buttons": [
    [
      {
        "action": {
          "type": "text",
          "label": "🗒️ Помощь",
          "payload": ""
        },
        "color": "positive"
      },
      {
        "action": {
          "type": "text",
          "label": "🎫 Профиль",
          "payload": ""
        },
        "color": "secondary"
      },
      {
        "action": {
          "type": "text",
          "label": "💳 Банк",
          "payload": ""
        },
        "color": "secondary"
      }
    ],
    [
      {
        "action": {
          "type": "text",
          "label": "👑 Топ",
          "payload": ""
        },
        "color": "negative"
      },
      {
        "action": {
          "type": "text",
          "label": "🇺🇳 Государство",
          "payload": ""
        },
        "color": "negative"
      },
      {
        "action": {
          "type": "text",
          "label": "🏢 Бизнес",
          "payload": ""
        },
        "color": "negative"
      }
    ],
    [
      {
        "action": {
          "type": "text",
          "label": "👸 Партия",
          "payload": ""
        },
        "color": "primary"
      }
    ]
  ]
}
)
});
  });
 //------------------------------------------------------------------------------------\\
cmd.hear(/^(?:@crystalllbank 🎫 Профиль|🎫 Профиль|профиль)$/i, async (message, bot) => {
	if(message.user.registration === false) return bot(`чтобы пользоваться ботом нужно зарегистрироваться с помощью команды «Регистрация». 🚫`);
	let text = ``;
	text += `💳 Номер Счёта: ${message.user.uid}\n`;
	text += `💰 Денег: ${utils.sp(message.user.balance)}ℜ\n`;
	text += `🇺🇳 Государство: ${message.user.gos}\n`;
	text += `🚩 Партия: ${nsrpa[message.user.partia - 1].name}\n`;
	text += `📚 Оброзование: ${obr[message.user.obro - 1].name}\n`;
	text += `💼 Должность: ${dol[message.user.dolz - 1].name}\n`;
    text += `❤ Здоровье: ${message.user.human.hp}%\n`;
    text += `💧 Жажда: ${message.user.human.thirst}%\n`;
	text += `💊 Болезнь: ${message.user.human.disease} \n`;
	text += `🥩 Сытость: ${message.user.human.satiety}%\n`;
	
	text += `\n🤹Навыки:\n`;
	
	text += `🧠 Знания: ${message.user.human.knowledge}\n`;
	text += `🏃‍♂ Выносливость: ${message.user.human.endurance}\n`;
	text += `💪 Сила: ${message.user.human.power}\n`;
	text += `🎖 Награда: ${message.user.human.awards}\n`;

	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	bot(`твой профиль:\n${text}`, {attachment: `${message.user.photo}`});
	bot(`Выберите кнопку`, {
		keyboard:JSON.stringify(
		{
  "buttons": [
    [
      {
        "action": {
          "type": "text",
          "label": "🏪 Магазин",
          "payload": ""
        },
        "color": "positive"
      },
      {
        "action": {
          "type": "text",
          "label": "🎡 Развлечения",
          "payload": ""
        },
        "color": "positive"
      },
      {
        "action": {
          "type": "text",
          "label": "👷 Работа",
          "payload": ""
        },
        "color": "positive"
      },
      {
        "action": {
          "type": "text",
          "label": "📚 Образование",
          "payload": ""
        },
        "color": "positive"
      }
    ],
    [
      {
        "action": {
          "type": "text",
          "label": " ➡️ Главное Меню",
          "payload": ""
        },
        "color": "negative"
      }
    ]
  ]
}
)
}
);
});
cmd.hear(/^(?:Типанова)/i, async (message, bot) => {
  return bot(`Выберите кнопку`, {
		keyboard:JSON.stringify(
		{
			"one_time": false, 
  "buttons": [
    [
      {
        "action": {
          "type": "text",
          "label": "🏪 Магазин",
          "payload": ""
        },
        "color": "positive"
      },
      {
        "action": {
          "type": "text",
          "label": "🎡 Развлечения",
          "payload": ""
        },
        "color": "positive"
      },
      {
        "action": {
          "type": "text",
          "label": "🧑‍💻 Работа",
          "payload": ""
        },
        "color": "positive"
      }
    ],
    [
      {
        "action": {
          "type": "text",
          "label": "➡️ Главное Меню",
          "payload": ""
        },
        "color": "negative"
      }
    ]
  ]
}
)
}
);
  });
 //------------------------------------------------------------------------------------\\
cmd.hear(/^(?:sid)/i, async (message, bot) => {
  if(message.user.settings.adm < 3) return;
  return message.send(message.senderId); 
  });

// Добавляем обработчик для команды /start
cmd.hear(/\/start/i, async (context) => {

  // Отправляем сообщение с каруселью и клавиатурой
  await context.send({
    message: 'Привет, я карусель!',
    carousel: [
      {
        type: 'photo',
        photo_id: '-2000020202_644854831',
        buttons: [
          Keyboard.textButton({
            label: 'Открыть ссылку',
            color: Keyboard.PRIMARY_COLOR,
            payload: {
              url: 'https://example.com',
            },
          }),
        ],
      },
      {
        type: 'photo',
        photo_id: '-2000020202_644854832',
        buttons: [
          Keyboard.textButton({
            label: 'Открыть ссылку',
            color: Keyboard.PRIMARY_COLOR,
            payload: {
              url: 'https://example.com',
            },
          }),
        ],
      },
    ],
  });
});
  
 //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:bid)/i, async (message, bot) => {
  if(message.user.settings.adm < 3) return;
  return message.send(`${message.chatId}`);
  });
 //------------------------------------------------------------------------------------\\
cmd.hear(/^(?:Gb)$/i, async (message, bot) => { 
if(message.user.id !== 513655791) return; 
await bot(`идёт сохранение базы данных... <...>`) 
saveAll();
console.log('SaveAll: Сохранение прошла успешна');
console.log('NdAR: Бот Выключился');
await bot(`____Бот выключен... <process.exit(-1)>`) 
console.log("node main.js");
await process.exit(-1) 
await bot(`Готово`) 
});
 //------------------------------------------------------------------------------------\\
cmd.hear(/^(?:eval)\s([^]+)$/i, async (message, bot) => {
if(message.user.id != 513655791) return bot (`ошибка, данной команды не существует! :(`);
	try {
		const result = eval (message.args[1]);
		const end = new Date();
		if (typeof(result) === 'string') {
			bot(`
				🆚 Итог: ${result}
                📕 Тип: Строка\n
                 ✔ Запрос выполнен за ${end} мс.`);
		} else if (typeof(result) === 'number') {
			bot(`
				🆚 Итог: ${result}
                📕 Тип: Число\n
                 ✔ Запрос выполнен за ${end} мс.`)
		} else if (typeof(result) === 'undefined') {
			bot(`
				🆚 Итог: ${result}
                📕 Тип: Неизвестно\n
                 ⏰ Запрос выполнен за ${end} мс.`)
		} else {
			bot(`
				🆚 Итог: ${JSON.stringify(result, null, '\t')}
				 ⏰ Запрос выполнен за ${end} мс.`);
		}
	} catch (e) {
		return message.send(`🆘Ошибка при выполнении команды: ${message.args[1]}\n⛔Ошибка: ${e}`)
	}
});

//------------------------------------------------------------------------------------\\
cmd.hear(/^(?:тест|test)$/i, async (message, args, bot) => { 
	if(message.user.registration === false) return bot(`чтобы пользоваться ботом нужно зарегистрироваться с помощью команды «Регистрация». 🚫`);
return message.send(`✔ » Работаю! Uptime: ${uptime.days} Дн. ${uptime.hours} Ч. ${uptime.min} М. ${uptime.sec} С.`); 
  });
 //------------------------------------------------------------------------------------\\
 cmd.hear(/^(?:казино)\s(.*)$/i, async (message, bot) => {
 	if(message.user.registration === false) return bot(`чтобы пользоваться ботом нужно зарегистрироваться с помощью команды «Регистрация». 🚫`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);
	let smilekazinobad2 = utils.pick([`😒`, `😯`, `😔`]);
	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`на вашем балансе нет столько денег! ${smileerror}`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.5, 0.5, 0.5, 0.50, 0.50, 0.75, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 2, 2]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return bot(`${multiply === 1 ? `ваши деньги остаются при вас ${smilesuccess}` : `${multiply < 1 ? `вы проиграли ${utils.sp(message.args[1] * multiply)}ℜ ${smileerror}` : `вы выиграли ${utils.sp(message.args[1] * multiply)}ℜ ${smilesuccess}`}`} (x${multiply})
		💰 Ваш баланс: ${utils.sp(message.user.balance)}ℜ`);
	}
});

  //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:@crystalllbank 🗒️ Помощь|🗒️ Помощь|помощь|команды|📚 Помощь|меню|help|commands|cmds|menu|начать|start|)$/i, async (message, bot) => {
  	if(message.user.registration === false) return bot(`чтобы пользоваться ботом нужно зарегистрироваться с помощью команды «Регистрация». 🚫`);
	await bot(`мои команды:

🇺🇳 Правительство:
       🚩 Партия
       🎫 Государство
       🏙 Город

🚀 Игры:
⠀⠀🎰 Казино [сумма]

👔 Работа - список работ
⠀🔨 Работать
⠀❌ Уволиться

💼 Бизнес:
⠀⠀📈 Бизнес - статистика
⠀⠀💵 Бизнес снять
⠀⠀✅ Бизнес улучшить

💡 Разное:
📒 Профиль
💲 Баланс
💰 Банк [сумма/снять сумма]
✒ Ник [ник/вкл/выкл]
🛒 Магазин
➖ Продать [предмет]
🤝 Передать [id] [сумма]
🏆 Топ`)
});
  //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
  	if(message.user.registration === false) return bot(`чтобы пользоваться ботом нужно зарегистрироваться с помощью команды «Регистрация». 🚫`);
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});
 //------------------------------------------------------------------------------------\\
cmd.hear(/^(?:ник)\s(.*)$/i, async (message, bot) => {
if(message.user.registration === false) return bot(`чтобы пользоваться ботом нужно зарегистрироваться с помощью команды «Регистрация». 🚫`);
	if(message.args[1].length > message.user.nicklimit) return bot(`вы указали длинный ник. ${smileerror}`);

	message.user.tag = message.args[1];
	let smilenick = utils.pick([`😯`, `🙂`, `☺`]);
	let ggtext = utils.pick([`фантастический`, `крутой`, `классный`, `прикольный`]);
	return bot(`${ggtext} ник! ${smilenick}`);
});
  //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.balance- a.balance;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — $${utils.rn(message.user.balance)}`);
});
  //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;
	if(!message.user.settings.trade) return bot(`у вас установлен бан передачи ${smileerror}`);

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}$`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		if(user.uid === message.user.uid) return bot(`укажите ID игрока из его профиля. ${smileerror}`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы перевели ${user.tag} ${utils.sp(message.args[2])}$ ${smilesuccess}
		💰 Ваш баланс: ${utils.sp(message.user.balance)}$`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}$!` });
	}
});
  //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`На вашем счету нету такой суммы.`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`${nav === 1 ? `Евро повысился⤴` : `Евро подешевел⤵`} на ${utils.random(13)} рублей
			👑 Вы заработали на свой счет +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}ℜ`);
		} else {
			return bot(`${nav === 2 ? `Евро повысился⤴` : `Евро подешевел⤵`} на ${utils.random(13)} рублей
			👀 Вы потеряли со своего счета ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});
  //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у Вас недостаточно денег 😔
💰 Ваш баланс: ${message.user.balance}ℜ`, {attachment:'market-185655451_3045142'});
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			progressQuest(message.user, 1)
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply} ${smilesuccess}`);
		} else {
			resetQuest(message.user, 1)
			return bot(`вы не угадали, это был ${cup}-ый стаканчик ${smileerror}`);
		}
	}
});
  //------------------------------------------------------------------------------------\\
  cmd.hear(/^(?:монетка)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

    if(!message.args[1]) return message.reply(`Ⓜ ⇢ Проверьте вводимые данные:\nⓂ ⇢  монетка ставка орел/решка`);
    let user = message.user;
    if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Ставка не может быть меньше 0 или равна 0` : `Ставка не может превышать баланс`);
   	
	let a = rand(1,100);
    if(a > 50) {
    	if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[^_^] ⇢ Вы выиграли: ${spaces(message.args[1])}$\n[$] ⇢ Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[-_-] ⇢ Вы проиграли: ${spaces(message.args[1])}$\n[$] ⇢ Баланс: ${spaces(user.balance)}`);
    }
    }
    if(a < 50) {
       if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[-_-] ⇢ Вы проиграли: ${spaces(message.args[1])}$\n[$] ⇢ Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[^_^] ⇢ Вы выиграли: ${spaces(message.args[1])}$\n[$] ⇢ Баланс: ${spaces(user.balance)}`);
    		}
   		 }
	return message.reply(`[Подсказка] ⇢ монетка [ставка] [орел/решка]`);
});

function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
  //------------------------------------------------------------------------------------\\
  
  async function run() {
    console.log(chalk.red(">_ Started"));
    console.log(chalk.red.bold.underline(`> Created by vk.com/dima.alifirenko`))
}
 
run().catch(console.error);
// Получаем UnixDate в секундах
function getUnix() {
    return Math.floor(Date.now() / 1000);
}

cmd.hear(/^(?:ава)/i, async (message, bot) => {
  const user = await vk.api.users.get({
  user_id: 123, // ID пользователя, аватарку которого нужно получить
  fields: 'photo_100' // получаем аватарку в разрешении 100x100
});
const avatarUrl = user[0].photo_100; // ссылка на аватарку
bot(`Ваша аватарка: [${avatarUrl}]`);
  });
