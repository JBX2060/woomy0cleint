/*jslint node: true */
"use strict";

exports.random = x => {
  return x * Math.random();
};

exports.randomAngle = () => {
  return Math.PI * 2 * Math.random();
};

exports.randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

exports.irandom = i => {
  let max = Math.floor(i);
  return Math.floor(Math.random() * (max + 1)); //Inclusive
};

exports.irandomRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Inclusive
};

exports.gauss = (mean, deviation) => {
  let x1, x2, w;
  do {
    x1 = 2 * Math.random() - 1;
    x2 = 2 * Math.random() - 1;
    w = x1 * x1 + x2 * x2;
  } while (0 == w || w >= 1);

  w = Math.sqrt(-2 * Math.log(w) / w);
  return mean + deviation * x1 * w;
};

exports.gaussInverse = (min, max, clustering) => {
  let range = max - min;
  let output = exports.gauss(0, range / clustering);

  while (output < 0) {
    output += range;
  }

  while (output > range) {
    output -= range;
  }

  return output + min;
};

exports.gaussRing = (radius, clustering) => {
  let r = exports.random(Math.PI * 2);
  let d = exports.gauss(radius, radius * clustering);
  return {
    x: d * Math.cos(r),
    y: d * Math.sin(r),
  };
};

exports.chance = prob => {
  return exports.random(1) < prob;
};

exports.dice = sides => {
  return exports.random(sides) < 1;
};

exports.choose = arr => {
  return arr[exports.irandom(arr.length - 1)];
};

exports.chooseN = (arr, n) => {
  let o = [];
  for (let i = 0; i < n; i++) {
    o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0]);
  }
  return o;
};

exports.chooseChance = (...arg) => {
  let totalProb = 0;
  arg.forEach(function(value) {
    totalProb += value;
  });
  let answer = exports.random(totalProb);
  for (let i = 0; i < arg.length; i++) {
    if (answer < arg[i]) return i;
    answer -= arg[i];
  }
};


exports.chooseBotName = () => {
  return exports.choose([
    'Base Drones',
    'diep.io',
    'deeep',
    'best lol',
    'Google',
    'Freddy',
    'Gustav',
    '123',
    'Sandbox',
    'coconot',
    'Noice',
    'Lol',
    'OWO',
    'UWU',
    'speedrun to 1m',
    'HEEELP IM BEING HUNTED',
    'Void',
    'oww',
    'GIMME BETA TESTE',
    'Protector',
    'yyyy',
    '543 zw3rf2ew',
    'Press enter to respawn!',
    '',
    'Foxy',
    'Sinbadx',
    '1',
    '(͡o‿O͡)',
    '( ͡° ͜ʖ ͡°)',
    'Booster go brrrrr',
    'The Badlands',
    'Minecraft',
    'Stop copying my tank D:(',
    'Edith',
    'Let me Dominate',
    'Dominator',
    'ZOOOM',
    'A brah hee',
    '¯\_(ツ)_/¯',
    'Beep',
    'Boop',
    'REAL Developer',
    'Anaxagoras',
    '2Fast4You',
    'Paladin',
    'Athena',
    'Elite Player',
    'gg gamer',
    'Cheat',
    'song',
    'A',
    'Mothership',
    'Fathership',
    '(:D',
    'Windows XP',
    'SPEEDRUN MODE: ON',
    'r3jiwoefhu9g',
    'dwhgj2rwh4nujgre',
    'Basic in a nutshell: //====',
    'ultra mode',
    '------------',
    'Cola',
    'BTTOKEN=FAKETOKENFORYOUTOTRYOUT',
    'Bbbbbb',
    'd',
    'Elite Arraser',
    '',
    'Drone',
    'Chrome',
    'Blocker',
    'Bazzoka',
    'Masterov',
    'Delta',
    'Arras',
    'Diep Forever!',
    'When is the next update?',
    'Free Points!',
    'Free Score!',
    'Cheese',
    '987654321',
    '5',
    'X-Ray',
    'Cat and Mouse',
    'Instinct',
    'Eternal',
    'Lava',
    'Plz dont kill me :(',
    ':(D',
    'What is this?',
    'Chrome',
    'Gold',
    '$$$',
    '1234567890',
    'bhai',
    'QWERTY',
    'Glitch',
    'DONT KILL ME',
    'Hacker',
    'Pro Gamer',
    'Appllon',
    'Teleport me',
    '💀 Disconnected 💀',
    'Arras',
    'e',
  ]);
};

exports.chooseBossName = (code, n) => {
  switch (code) {
    case 'a':
      return exports.chooseN([
        'Archimedes',
        'Akilina',
        'Anastasios',
        'Athena',
        'Alkaios',
        'Amyntas',
        'Aniketos',
        'Artemis',
        'Anaxagoras',
        'Apollon',
      ], n);
    case 'castle':
      return exports.chooseN([
        'Berezhany',
        'Lutsk',
        'Dobromyl',
        'Akkerman',
        'Palanok',
        'Zolochiv',
        'Palanok',
        'Mangup',
        'Olseko',
        'Brody',
        'Isiaslav',
        'Kaffa',
        'Bilhorod',
      ], n);
    case 'Zaphkiel':
      return exports.chooseN([
        'Zaphkiel'
      ], n);
    case 'Paladin':
      return exports.chooseN([
        'Paladin'
      ], n);
    case 'Freyja':
      return exports.chooseN([
        'Freyja'
      ], n);
    case 'Kronos':
      return exports.chooseN([
        'Kronos'
      ], n);
    default:
      return Array(n).fill(code);
  }
};
