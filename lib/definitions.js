const combineStats = function(e) {
    try {
      let T = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      return (
        e.forEach(function(e) {
          for (let S = 0; S < T.length; S++) T[S] = T[S] * e[S];
        }),
        {
          reload: T[0],
          recoil: T[1],
          shudder: T[2],
          size: T[3],
          health: T[4],
          damage: T[5],
          pen: T[6],
          speed: T[7],
          maxSpeed: T[8],
          range: T[9],
          density: T[10],
          spray: T[11],
          resist: T[12]
        }
      );
    } catch (T) {
      console.log(T), console.log(JSON.stringify(e));
    }
  },
  skillSet = (() => {
    let e = {
      rld: 0,
      pen: 1,
      str: 2,
      dam: 3,
      spd: 4,
      shi: 5,
      atk: 6,
      hlt: 7,
      rgn: 8,
      mob: 9
    };
    return T => {
      let S = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let E in T) T.hasOwnProperty(E) && (S[e[E]] = Math.round(9 * T[E]));
      return S;
    };
  })(),
  setBuild = e => {
    let T = e.split(e.includes("/") ? "/" : "").map(e => +e);
    if (10 !== T.length)
      throw new RangeError("Build must be made up of 10 numbers");
    return [6, 4, 3, 5, 2, 9, 0, 1, 8, 7].map(e => T[e]);
  },
  g = {
    bitweak: [1, 1, 1, 1, 0.95, 0.9, 1, 1, 1, 1, 1, 1, 1],
    machspraysmall: [0.3, 0.8, 1.7, 0.5, 0.7, 0.75, 1, 1, 0.8, 0.5, 1, 3, 1],
    trap: [36, 1, 0.1, 0.65, 3, 0.75, 0.5, 5, 1, 1, 1, 15, 3],
    swarm: [30, 0.25, 0.05, 0.35, 0.8, 0.65, 0.75, 4, 1, 1, 1, 5, 1],
    drone: [60, 0.25, 0.1, 0.6, 1.5, 1.25, 1.125, 1.8, 1, 1, 1, 0.1, 1],
    shooter: [60, 0.25, 0.1, 1, 1.5, 1.25, 1.125, 1.8, 1, 1, 1, 0.1, 1],
    summoner: [0.35, 1, 1, 1.125, 0.25, 0.15, 0.15, 1, 1, 1, 0.8, 1, 1],
    fallenOverlord: [0.35, 1, 1, 0.5, 0.25, 0.25, 0.15, 1, 1, 1, 0.8, 1, 1],
    factory: [60, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
    basic: [24, 2.5, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
    destroyDominator: [7.5, 0, 0.5, 1, 5, 5, 5, 0.5, 1, 1.25, 10, 0.1, 1],
    gunnerDominator: [0.6, 0, 1, 0.5, 0.5, 0.4, 0.9, 1.25, 1, 0.7, 1, 2.5, 1],
    trapperDominator: [2, 0, 1, 1.1, 1, 1.2, 1.2, 0.45, 2, 0.7, 1, 0.5, 1],
    artyDominator: [1.2, 0, 1, 0.9, 1, 0.3, 1, 1.15, 1.1, 1, 1.5, 1, 1],
    blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
    minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
    single: [1, 1, 1, 1, 1.1, 1.1, 1.1, 1, 1, 1.1, 1.5, 0.1, 1],
    sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
    rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
    assass: [1.65, 1, 0.15, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
    hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
    hunter2: [1, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
    preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
    snake: [0.4, 1, 4, 1, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 6, 0.5],
    sidewind: [1.5, 2, 1, 1, 1.5, 0.9, 1, 0.15, 0.5, 1, 1, 1, 1],
    snakeskin: [0.6, 1, 2, 1, 0.5, 0.5, 1, 1, 0.2, 0.4, 1, 5, 1],
    mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
    blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
    chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
    mini: [1.25, 0.6, 1, 0.8, 0.55, 0.35, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
    stream: [1, 0.1, 1, 1, 1, 0.4, 1, 1.24, 1, 1, 1, 1, 1],
    shotgun: [8, 0.4, 1, 1.5, 1, 0.2, 0.8, 1.8, 0.6, 1, 1.2, 1.2, 1],
    flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
    tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
    trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
    thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    auto: [1.8, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25],
    five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
    autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    pound: [2, 2, 1, 1, 1.25, 1.25, 1.25, 1, 1, 1, 1.5, 1, 1.15],
    destroy: [1.75, 2, 0.5, 1, 1.4, 1.5, 1.4, 0.8, 0.8, 1.25, 2, 1, 3],
    anni: [1.1, 0.9, 1, 1, 1.1, 0.9, 1.1, 1, 1, 1, 1, 1, 1],
    hive: [1.5, 0.8, 1, 0.8, 0.7, 0.3, 1, 1, 0.6, 1, 1, 1, 1],
    arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
    mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
    spreadmain: [
      0.78125,
      0.25,
      0.5,
      1,
      0.5,
      1,
      0.8,
      1.5 / 0.78,
      0.9 / 0.78,
      1,
      1,
      1,
      1
    ],
    spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
    skim: [1, 0.8, 0.8, 0.9, 1.35, 0.8, 2, 0.3, 0.3, 1, 1, 1, 1.1],
    twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
    bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.7, 1, 1, 1, 0.8, 0.5, 1],
    triple: [1.2, 0.667, 0.9, 1, 0.85, 0.85, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
    quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
    dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
    double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
    hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
    puregunner: [
      1,
      0.25,
      1.5,
      1.2,
      1.35,
      0.25,
      1.25,
      0.8,
      0.65,
      1,
      1.5,
      1.5,
      1.2
    ],
    machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
    gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
    power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
    nail: [0.85, 2.5, 1, 0.8, 1, 0.4, 1, 1, 1, 1, 2, 1, 1],
    fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
    turret: [2, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
    battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
    bees: [1, 1, 1, 1.4, 1.5, 1.5, 1, 2, 1.5, 1, 0.25, 1, 1],
    carrier: [1.5, 1, 1, 1, 1, 0.8, 1, 1.3, 1.2, 1.2, 1, 1, 1],
    hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
    block: [1.1, 2, 0.1, 1.5, 1, 1.25, 1, 1.5, 2.5, 1.25, 1, 1, 1.25],
    construct: [1.3, 1, 1, 0.9, 1.1, 1.3, 1.1, 1, 1.1, 1, 1, 1, 1],
    boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
    over: [1.25, 1, 1, 0.85, 0.7, 0.8, 1, 1, 0.9, 1, 2, 1, 1],
    meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
    weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
    master: [3, 1, 1, 0.85, 0.4, 0.6, 0.8, 1, 1, 0.1, 0.5, 1, 1],
    commander: [1.5, 1, 1, 1, 0.8, 0.9, 0.8, 1, 1, 1, 1.5, 1, 1],
    sunchip: [5, 1, 1, 1.4, 0.75, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
    babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
    overdrive: [5, 1, 1, 1, 0.7, 0.7, 0.7, 0.9, 0.9, 0.9, 1, 1.2, 1],
    lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
    halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    bitmorereload: [0.875, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    threequartersrof: [1.333, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
    bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
    slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
    halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
    notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
    halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
    fake: [1, 1, 1, 1e-5, 1e-4, 1, 1, 1e-5, 2, 0, 1, 1, 1],
    op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
    protectorswarm: [5, 1e-6, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
    protectordrone: [0.5, 0, 1, 1, 4, 3, 1, 5, 1, 1, 10, 0.1, 10]
  },
  dfltskl = 9,
  statnames = {
    smasher: 1,
    drone: 2,
    necro: 3,
    swarm: 4,
    trap: 5,
    generic: 6
  },
  gunCalcNames = {
    default: 0,
    bullet: 1,
    drone: 2,
    swarm: 3,
    fixedReload: 4,
    thruster: 5,
    sustained: 6,
    necro: 7,
    trap: 8
  };
(exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0,
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INDEPENDENT: !1,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: !1,
  MOTION_TYPE: "glide",
  FACING_TYPE: "toTarget",
  DRAW_HEALTH: !1,
  DRAW_SELF: !0,
  DAMAGE_EFFECTS: !0,
  RATEFFECTS: !0,
  MOTION_EFFECTS: !0,
  INTANGIBLE: !1,
  ACCEPTS_SCORE: !0,
  GIVE_KILL_MESSAGE: !1,
  CAN_GO_OUTSIDE_ROOM: !1,
  HITS_OWN_TYPE: "normal",
  DIE_AT_LOW_SPEED: !1,
  DIE_AT_RANGE: !1,
  CLEAR_ON_MASTER_UPGRADE: !1,
  PERSISTS_AFTER_DEATH: !1,
  VARIES_IN_SIZE: !1,
  HEALTH_WITH_LEVEL: !0,
  CAN_BE_ON_LEADERBOARD: !0,
  HAS_NO_RECOIL: !1,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: !1,
  OBSTACLE: !1,
  CRAVES_ATTENTION: !1,
  NECRO: !1,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,
    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2
  },
  FOOD: {
    LEVEL: -1
  }
}),
  (exports.food = {
    TYPE: "food",
    DAMAGE_CLASS: 1,
    CONTROLLERS: ["moveInCircles"],
    HITS_OWN_TYPE: "repel",
    MOTION_TYPE: "drift",
    FACING_TYPE: "turnWithSpeed",
    VARIES_IN_SIZE: !0,
    BODY: {
      STEALTH: 30,
      PUSHABILITY: 1
    },
    DAMAGE_EFFECTS: !1,
    RATEFFECTS: !1,
    HEALTH_WITH_LEVEL: !1
  });
const basePolygonDamage = 1,
  basePolygonHealth = 2;
(exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5
  },
  LABEL: "Alpha Pentagon",
  VALUE: 15e3,
  SHAPE: -5,
  SIZE: 58,
  COLOR: 14,
  BODY: {
    DAMAGE: 2,
    DENSITY: 80,
    HEALTH: 600,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 80,
    REGEN: 0.6
  },
  DRAW_HEALTH: !0,
  GIVE_KILL_MESSAGE: !0
}),
  (exports.bigPentagon = {
    PARENT: [exports.food],
    FOOD: {
      LEVEL: 4
    },
    LABEL: "Beta Pentagon",
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 14,
    BODY: {
      DAMAGE: 2,
      DENSITY: 30,
      HEALTH: 100,
      RESIST: Math.pow(1.25, 2),
      SHIELD: 40,
      REGEN: 0.2
    },
    DRAW_HEALTH: !0,
    GIVE_KILL_MESSAGE: !0
  }),
  (exports.pentagon = {
    PARENT: [exports.food],
    FOOD: {
      LEVEL: 3
    },
    LABEL: "Pentagon",
    VALUE: 400,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 14,
    BODY: {
      DAMAGE: 1.5,
      DENSITY: 8,
      HEALTH: 20,
      RESIST: 1.25,
      PENETRATION: 1.1
    },
    DRAW_HEALTH: !0
  }),
  (exports.triangle = {
    PARENT: [exports.food],
    FOOD: {
      LEVEL: 2
    },
    LABEL: "Triangle",
    VALUE: 120,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 2,
    BODY: {
      DAMAGE: 1,
      DENSITY: 6,
      HEALTH: 6,
      RESIST: 1.15,
      PENETRATION: 1.5
    },
    DRAW_HEALTH: !0
  }),
  (exports.square = {
    PARENT: [exports.food],
    FOOD: {
      LEVEL: 1
    },
    LABEL: "Square",
    VALUE: 30,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 13,
    BODY: {
      DAMAGE: 1,
      DENSITY: 4,
      HEALTH: 2,
      PENETRATION: 2
    },
    DRAW_HEALTH: !0,
    INTANGIBLE: !1
  }),
  (exports.egg = {
    PARENT: [exports.food],
    FOOD: {
      LEVEL: 0
    },
    LABEL: "Egg",
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 6,
    INTANGIBLE: !0,
    BODY: {
      DAMAGE: 0,
      DENSITY: 2,
      HEALTH: 0.0011,
      PUSHABILITY: 0
    },
    DRAW_HEALTH: !1
  }),
  (exports.greenpentagon = {
    PARENT: [exports.food],
    LABEL: "Pentagon",
    VALUE: 3e4,
    SHAPE: 5,
    SIZE: 16,
    COLOR: 1,
    BODY: {
      DAMAGE: 3,
      DENSITY: 8,
      HEALTH: 200,
      RESIST: 1.25,
      PENETRATION: 1.1
    },
    DRAW_HEALTH: !0
  }),
  (exports.greentriangle = {
    PARENT: [exports.food],
    LABEL: "Triangle",
    VALUE: 7e3,
    SHAPE: 3,
    SIZE: 9,
    COLOR: 1,
    BODY: {
      DAMAGE: 1,
      DENSITY: 6,
      HEALTH: 60,
      RESIST: 1.15,
      PENETRATION: 1.5
    },
    DRAW_HEALTH: !0
  }),
  (exports.greensquare = {
    PARENT: [exports.food],
    LABEL: "Square",
    VALUE: 2e3,
    SHAPE: 4,
    SIZE: 10,
    COLOR: 1,
    BODY: {
      DAMAGE: 0.5,
      DENSITY: 4,
      HEALTH: 20,
      PENETRATION: 2
    },
    DRAW_HEALTH: !0,
    INTANGIBLE: !1
  }),
  (exports.gem = {
    PARENT: [exports.food],
    LABEL: "Gem",
    VALUE: 2e3,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
      DAMAGE: 0.25,
      DENSITY: 4,
      HEALTH: 10,
      PENETRATION: 2,
      RESIST: 2,
      PUSHABILITY: 0.25
    },
    DRAW_HEALTH: !0,
    INTANGIBLE: !1
  }),
  (exports.obstacle = {
    TYPE: "maze",
    DAMAGE_CLASS: 1,
    LABEL: "Rock",
    FACING_TYPE: "turnWithSpeed",
    SHAPE: -9,
    BODY: {
      PUSHABILITY: 0,
      HEALTH: 9e9,
      SHIELD: 9e9,
      REGEN: 9e9,
      DAMAGE: 0,
      RESIST: 9e9,
      STEALTH: 1
    },
    VALUE: 0,
    SIZE: 60,
    COLOR: 16,
    VARIES_IN_SIZE: !0,
    GIVE_KILL_MESSAGE: !0,
    ACCEPTS_SCORE: !1
  }),
  (exports.mazeWall = {
    PARENT: [exports.genericEntity],
    TYPE: "maze",
    CAN_GO_OUTSIDE_ROOM: !0,
    LABEL: "Wall",
    ACCEPTS_SCORE: !1,
    SHAPE: 4
  }),
  (exports.babyObstacle = {
    PARENT: [exports.obstacle],
    SIZE: 25,
    SHAPE: 12,
    LABEL: "Gravel"
  });
const wepHealthFactor = 0.5,
  wepDamageFactor = 1.5;
let arrayofColors = [
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123,
  124,
  125,
  126,
  127,
  128,
  129,
  130,
  131,
  132,
  133,
  134,
  135,
  136,
  137,
  138,
  139,
  140,
  141,
  142,
  143,
  144,
  145,
  146,
  147,
  148,
  149,
  150,
  151,
  152,
  153,
  154,
  155,
  156,
  157,
  158,
  159,
  160,
  161,
  162,
  163,
  164,
  165,
  166,
  167,
  169,
  170,
  171,
  172,
  173,
  174,
  175,
  176,
  177,
  178,
  179,
  180,
  181,
  182,
  183,
  184,
  185
];
let randomcolor =
  arrayofColors[Math.floor(Math.random() * arrayofColors.length)];
exports.bullet = {
  // hold on a sec
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: !1,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.165,
    DAMAGE: 6,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: !0,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: !0
},
  exports.knife = {
  SHAPE: 3000,
  TYPE: "bullet",
  ACCEPTS_SCORE: !1,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.165,
    DAMAGE: 6,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: !0,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: !0
};
(exports.rainbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: !1,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.165,
    DAMAGE: 6,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: !0,
  HITS_OWN_TYPE: "never",
  DIE_AT_RANGE: !0,
  TURRET: [
    {
      POSITION: [20, 0, 0, 0, 0, 1],
      TYPE: [exports.genericTank, { COLOR: randomcolor }]
    }
  ]
}),
  (exports.homingbullet = {
    PARENT: [exports.bullet],
    INDEPENDENT: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"]
  }),
  (exports.cbullet = {
    LABEL: "Chaos Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    SHAPE: 1002,
    BODY: {
      PENETRATION: 5,
      SPEED: 10,
      RANGE: 180,
      DENSITY: 1.25,
      HEALTH: 50,
      DAMAGE: Infinity,
      PUSHABILITY: 0
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
  }),
  (exports.fireEffect5 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 10,
      DENSITY: 1.25,
      HEALTH: 1,
      DAMAGE: 0,
      PUSHABILITY: 0.3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    MOTION_TYPE: "fire5",
    DIE_AT_RANGE: !0
  }),
  (exports.fireEffect4 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 10,
      DENSITY: 1.25,
      HEALTH: 5,
      DAMAGE: 3,
      PUSHABILITY: 0.3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    MOTION_TYPE: "fire4",
    GUNS: [
      {
        POSITION: [1, 15, 1, 0, 5, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.fireEffect5
        }
      }
    ]
  }),
  (exports.fireEffect3 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 10,
      DENSITY: 1.25,
      HEALTH: 5,
      DAMAGE: 3,
      PUSHABILITY: 0.3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    MOTION_TYPE: "malice",
    GUNS: [
      {
        POSITION: [1, 15, 1, 0, 5, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.fireEffect4
        }
      }
    ]
  }),
  (exports.fireEffect2 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 10,
      DENSITY: 1.25,
      HEALTH: 5,
      DAMAGE: 3,
      PUSHABILITY: 0.3
    },
    MOTION_TYPE: "fire2",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    GUNS: [
      {
        POSITION: [1, 15, 1, 0, -5, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.fireEffect3
        }
      }
    ]
  }),
  (exports.fireEffect1 = {
    LABEL: "Bullet",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    COLOR: 12,
    SIZE: 1e-5,
    ALPHA: 1e-5,
    MOTION_TYPE: "fire1",
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 10,
      DENSITY: 1.25,
      HEALTH: 5,
      DAMAGE: 3,
      PUSHABILITY: 0.3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0,
    SIZE: 30,
    GUNS: [
      {
        POSITION: [1, 15, 1, 0, -5, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.fireEffect2
        }
      }
    ]
  }),
  (exports.fireinferno = {
    PARENT: [exports.bullet],
    LABEL: "Flared Inferno Bullet",
    POISON_TO_APPLY: 0.45,
    SHAPE: 4,
    POISON: !0,
    SHOWPOISON: !0
  }),
  (exports.bible = {
    LABEL: "The Holy Bible",
    TYPE: "bullet",
    ACCEPTS_SCORE: !1,
    SHAPE: 1e3,
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 90,
      DENSITY: 1.25,
      HEALTH: 0.165,
      DAMAGE: 6,
      PUSHABILITY: 0.3
    },
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
  }),
  (exports.infernobullet = {
    LABEL: "Flame",
    TYPE: "bullet",
    SHAPE: 4,
    ACCEPTS_SCORE: !1,
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 80,
      DENSITY: 1.25,
      HEALTH: 0.2,
      DAMAGE: 6,
      PUSHABILITY: 0.3
    },
    MOTION_TYPE: "growboom",
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
  }),
  (exports.casing = {
    PARENT: [exports.bullet],
    LABEL: "Shell",
    TYPE: "swarm"
  }),
  (exports.swarm = {
    LABEL: "Swarm Drone",
    TYPE: "swarm",
    ACCEPTS_SCORE: !1,
    SHAPE: 3,
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    CRAVES_ATTENTION: !0,
    BODY: {
      ACCELERATION: 3,
      PENETRATION: 1.5,
      HEALTH: 0.175,
      DAMAGE: 2.25,
      SPEED: 4.5,
      RESIST: 1.6,
      RANGE: 225,
      DENSITY: 12,
      PUSHABILITY: 0.5,
      FOV: 1.5
    },
    DIE_AT_RANGE: !0,
    BUFF_VS_FOOD: !0
  }),
  (exports.bee = {
    PARENT: [exports.swarm],
    PERSISTS_AFTER_DEATH: !0,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer"
  }),
  (exports.autoswarm = {
    PARENT: [exports.swarm],
    AI: {
      FARMER: !0
    },
    INDEPENDENT: !0
  }),
  (exports.bee2 = {
   PARENT: [exports.swarm],
   PERSISTS_AFTER_DEATH: !0,
   SHAPE: 4,
   LABEL: "Drone",
   CONTROLLERS: ["nearestDifferentMaster", "canRepel", "mapTargetToGoal", "hangOutNearMaster"],
  }),
  (exports.trap = {
    LABEL: "Thrown Trap",
    TYPE: "trap",
    ACCEPTS_SCORE: !1,
    SHAPE: -3,
    MOTION_TYPE: "glide",
    FACING_TYPE: "turnWithSpeed",
    HITS_OWN_TYPE: "push",
    DIE_AT_RANGE: !0,
    BODY: {
      HEALTH: 0.5,
      DAMAGE: 0.5,
      RANGE: 450,
      DENSITY: 2.5,
      RESIST: 2.5,
      SPEED: 0
    }
  }),
  (exports.block = {
    LABEL: "Set Trap",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    BODY: {
      SPEED: 1,
      DENSITY: 5
    }
  }),
  (exports.dominatorBlock = {
    LABEL: "Set Trap",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    BODY: {
      SPEED: 1,
      DENSITY: 5
    }
  }),
  (exports.boomerang = {
    LABEL: "Boomerang",
    PARENT: [exports.trap],
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
      SPEED: 1.25,
      RANGE: 120
    }
  }),
  (exports.drone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: !1,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
      "nearestDifferentMaster",
      "canRepel",
      "mapTargetToGoal",
      "hangOutNearMaster"
    ],
    AI: {
      BLIND: !0
    },
    BODY: {
      PENETRATION: 1.2,
      PUSHABILITY: 0.6,
      ACCELERATION: 0.05,
      HEALTH: 0.5,
      DAMAGE: 2.25,
      SPEED: 4.1,
      RANGE: 200,
      DENSITY: 0.03,
      RESIST: 1.5,
      FOV: 0.8
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    BUFF_VS_FOOD: !0
  }),
  (exports.baseDrone = {
    LABEL: "Drone",
    TYPE: "drone",
    ACCEPTS_SCORE: !1,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: "chase",
    FACING_TYPE: "smoothToTarget",
    CONTROLLERS: [
      "nearestDifferentMaster",
      "canRepel",
      "mapTargetToGoal",
      "hangOutNearMaster"
    ],
    AI: {
      BLIND: !0
    },
    BODY: {
      PENETRATION: 1.2,
      PUSHABILITY: 0.6,
      ACCELERATION: 0.05,
      HEALTH: 0.5,
      DAMAGE: 2.25,
      SPEED: 12.1,
      RANGE: 200,
      DENSITY: 0.03,
      RESIST: 1.5,
      FOV: 2
    },
    HITS_OWN_TYPE: "hard",
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    BUFF_VS_FOOD: !0
  }),
  (exports.sunchip = {
    PARENT: [exports.drone],
    SHAPE: 4,
    NECRO: !0,
    HITS_OWN_TYPE: "hard",
    BODY: {
      FOV: 0.5
    },
    AI: {
      BLIND: !0,
      FARMER: !0
    },
    DRAW_HEALTH: !1
  }),
  (exports.evolvedsquare = {
  PARENT: [exports.sunchip],
  GUNS: [
      {
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.single]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 10, -1.6, 6.5, 0, 0, 0]
      }
    ]
}),
  (exports.autosunchip = {
    PARENT: [exports.sunchip],
    AI: {
      BLIND: !0,
      FARMER: !0
    },
    INDEPENDENT: !0
  }),
  (exports.gemdrone = {
    PARENT: [exports.drone],
    SHAPE: 6
  }),
  (exports.gunchip = {
    PARENT: [exports.drone],
    SHAPE: -2,
    NECRO: !0,
    HITS_OWN_TYPE: "hard",
    BODY: {
      FOV: 0.5
    },
    AI: {
      BLIND: !0,
      FARMER: !0
    },
    DRAW_HEALTH: !1
  }),
  (exports.launcherMissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
      RANGE: 120
    },
    GUNS: [
      {
        POSITION: [14, 6, 1, 0, 0, 180, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 2, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.thruster
        }
      }
    ]
  });
(exports.rocketmissile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16.5, 10, 1.5, 0, 0, 180, 1.8],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          [0.25, 2, 3, 0.8, 0.7, 0.6, 0.8, 0.6, 0.6, 0.7, 1, 3, 1]
        ]),
        TYPE: [
          exports.bullet,
          {
            PERSISTS_AFTER_DEATH: true
          }
        ],
        STAT_CALCULATOR: gunCalcNames.thruster
      }
    }
  ]
}),
  (exports.betamissle = {
    PARENT: [exports.bullet],
    LABEL: "Rocket",
    INDEPENDENT: !0,
    BODY: {
      RANGE: 120
    },
    SHAPE: [
      [0.8, 0.7],
      [1, 0],
      [0.8, -0.7],
      [-0.4, -0.7],
      [-0.6, -1],
      [-1, -1],
      [-1, -0.6],
      [-0.7, -0.6],
      [-0.7, -0.2],
      [-1, -0.2],
      [-1, 0.2],
      [-0.7, 0.2],
      [-0.7, 0.6],
      [-1, 0.6],
      [-1, 1],
      [-0.6, 1],
      [-0.4, 0.7]
    ]
  }),
  (exports.missile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
      RANGE: 120
    },
    GUNS: [
      {
        POSITION: [14, 6, 1, 0, -2, 130, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 0.5, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.thruster
        }
      },
      {
        POSITION: [14, 6, 1, 0, 2, 230, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 0.5, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.spinmissile = {
    PARENT: [exports.bullet],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
      RANGE: 120
    },
    FACING_TYPE: "turnWithSpeed",
    GUNS: [
      {
        POSITION: [14, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 2, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.thruster
        }
      },
      {
        POSITION: [14, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 2, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.hypermissile = {
    PARENT: [exports.missile],
    GUNS: [
      {
        POSITION: [14, 6, 1, 0, -2, 150, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 0.5, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.thruster
        }
      },
      {
        POSITION: [14, 6, 1, 0, 2, 210, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 0.5, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.thruster
        }
      },
      {
        POSITION: [14, 6, 1, 0, -2, 90, 0.5],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 0.5, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ]
        }
      },
      {
        POSITION: [14, 6, 1, 0, 2, 270, 0.5],
        PROPERTIES: {
          AUTOFIRE: !0,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.5, 0.5, 1, 0.9, 1, 0.5, 1, 1, 1, 0.3, 10, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ]
        }
      }
    ]
  }),
  (exports.snake = {
    PARENT: [exports.bullet],
    LABEL: "Snake",
    INDEPENDENT: !0,
    BODY: {
      RANGE: 120
    },
    GUNS: [
      {
        POSITION: [6, 12, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
          AUTOFIRE: !0,
          STAT_CALCULATOR: gunCalcNames.thruster,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.8, 0.8, 0.1, 0.5, 1, 1, 1, 0.25, 1, 0.75, 2, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ]
        }
      },
      {
        POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
        PROPERTIES: {
          AUTOFIRE: !0,
          NEGATIVE_RECOIL: !0,
          STAT_CALCULATOR: gunCalcNames.thruster,
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [0.8, 0.8, 0.25, 0.75, 1, 1, 1, 0.25, 1, 0.75, 2, 2, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              PERSISTS_AFTER_DEATH: !0
            }
          ]
        }
      }
    ]
  }),
  (exports.hive = {
    PARENT: [exports.bullet],
    LABEL: "Hive",
    BODY: {
      RANGE: 90,
      FOV: 0.5
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: !0,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
      NO_LEAD: !0
    },
    GUNS: [
      {
        POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
          TYPE: exports.bee,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
          TYPE: exports.bee,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
          TYPE: exports.bee,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
          TYPE: exports.bee,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
          TYPE: exports.bee,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  });
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: !1,
  BODY: {
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: !0,
  DRAW_HEALTH: !0,
  HITS_OWN_TYPE: "hardOnlyTanks"
};
let gun = {};

function makeAuto(e, T = -1, S = {}) {
  let E = {
    type: exports.autoTurret,
    size: 10,
    independent: !0
  };
  null != S.type && (E.type = S.type),
    null != S.size && (E.size = S.size),
    null != S.independent && (E.independent = S.independent);
  let t = JSON.parse(JSON.stringify(e)),
    O = {
      POSITION: [E.size, 0, 0, 180, 360, 1],
      TYPE: [
        E.type,
        {
          CONTROLLERS: ["nearestDifferentMaster"],
          INDEPENDENT: E.independent
        }
      ]
    };
  return (
    null != e.GUNS && (t.GUNS = e.GUNS),
    null == e.TURRETS ? (t.TURRETS = [O]) : (t.TURRETS = [...e.TURRETS, O]),
    (t.LABEL = -1 == T ? "Auto-" + e.LABEL : T),
    (t.DANGER = e.DANGER ? e.DANGER + 1 : 9),
    t
  );
}

function makeHybrid(e, T = -1) {
  let S = JSON.parse(JSON.stringify(e)),
    E = {
      POSITION: [7, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
        TYPE: [
          exports.drone,
          {
            INDEPENDENT: !0
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: !1,
        MAX_CHILDREN: 3
      }
    };
  return (
    null != e.TURRETS && (S.TURRETS = e.TURRETS),
    null == e.GUNS ? (S.GUNS = [E]) : (S.GUNS = [...e.GUNS, E]),
    (S.LABEL = -1 == T ? "Hybrid " + e.LABEL : T),
    S
  );
}
(exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8
  },
  COLOR: 16,
  GUNS: [
    {
      POSITION: [22, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          [1.5, 0.3, 1, 1, 0.8, 0.2, 1.5, 1.25, 1.25, 1, 2, 1, 1]
        ]),
        TYPE: exports.bullet
      }
    }
  ]
}),
  (exports.droneAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    BODY: {
      FOV: 0.8
    },
    GUNS: [
      {
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.morerecoil,
            g.turret,
            g.overdrive
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.machineAutoTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
      {
        POSITION: [14, 11, 1.3, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.morerecoil,
            g.turret,
            g.mach,
            g.slow
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.autoSmasherTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
      {
        POSITION: [20, 6, 1, 0, 5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.morerecoil,
            g.turret,
            g.fast,
            g.mach,
            g.pound,
            g.morereload,
            g.morereload
          ]),
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.fixedReload
        }
      },
      {
        POSITION: [20, 6, 1, 0, -5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.morerecoil,
            g.turret,
            g.fast,
            g.mach,
            g.pound,
            g.morereload,
            g.morereload
          ]),
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.fixedReload
        }
      }
    ]
  }),
  (exports.auto3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 3
    },
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.auto5gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 3
    },
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [24, 11, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.heavy3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2,
      SPEED: 0.9
    },
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [22, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.sniper3gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 5
    },
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [27, 9, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.auto,
            g.assass,
            g.autosnipe
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0]
      }
    ]
  }),
  (exports.bansheegun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    COLOR: 16,
    INDEPENDENT: !0,
    GUNS: [
      {
        POSITION: [26, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.auto]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.auto4gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2
    },
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [16, 4, 1, 0, -3.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.auto,
            g.gunner,
            g.twin,
            g.power,
            g.slow
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.auto,
            g.gunner,
            g.twin,
            g.power,
            g.slow
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.bigauto4gun = {
    PARENT: [exports.genericTank],
    LABEL: "",
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [14, 5, 1, 0, -4.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.auto,
            g.gunner,
            g.twin,
            g.twin,
            g.power,
            g.halfreload
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.auto,
            g.gunner,
            g.twin,
            g.twin,
            g.power,
            g.halfreload
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 5, 1, 0, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.auto,
            g.gunner,
            g.twin,
            g.twin,
            g.power,
            g.halfreload
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.tritrapgun = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
      {
        POSITION: [20, 16, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 16, 1.1, 20, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            [2, 1, 1, 0.9, 0.6, 0.8, 0.7, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: exports.block
        }
      }
    ]
  }),
  (exports.smasherBody = {
    LABEL: "",
    CONTROLLERS: ["spin"],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: !0
  }),
  (exports.spikeBody = {
    LABEL: "",
    CONTROLLERS: ["spin"],
    COLOR: 9,
    SHAPE: 4,
    INDEPENDENT: !0
  }),
  (exports.spikeBody1 = {
    LABEL: "",
    CONTROLLERS: ["fastspin"],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: !0
  }),
  (exports.landmineBody = {
    LABEL: "",
    CONTROLLERS: ["fastspin"],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true
  }),
  (exports.spikeBody2 = {
    LABEL: "",
    CONTROLLERS: ["reversespin"],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: !0
  }),
  (exports.megasmashBody = {
    LABEL: "",
    CONTROLLERS: ["spin"],
    COLOR: 9,
    SHAPE: -6,
    INDEPENDENT: !0
  }),
  (exports.dominationBody = {
    LABEL: "",
    CONTROLLERS: ["dontTurn"],
    COLOR: 9,
    SHAPE: 600,
    INDEPENDENT: !0
  }),
  (exports.baseDroneSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Base",
    TYPE: "fixed",
    SIZE: 15,
    DAMAGE_CLASS: 0,
    ACCEPTS_SCORE: !1,
    SKILL: skillSet("0099999000"),
    HITS_OWN_TYPE: "never",
    BODY: {
      RESIST: 100,
      SPEED: 0,
      HEALTH: 1e4,
      DAMAGE: 10,
      PENETRATION: 0.25,
      SHIELD: 1e3,
      REGEN: 100,
      FOV: 10,
      PUSHABILITY: 0,
      HETERO: 0,
      FOV: 1
    },
    CAN_BE_ON_LEADERBOARD: !1,
    INVISIBLE: [0, 0.1],
    AI: {
      shapeFriend: !0,
      parentView: !0
    },
    MAX_CHILDREN: 6,
    STAT_NAMES: statnames.drone,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.protectordrone]),
          TYPE: [
            exports.baseDrone,
            {
              AI: {
                shapeFriend: !0,
                parentView: !0
              }
            }
          ],
          AUTOFIRE: !0,
          STAT_CALCULATOR: gunCalcNames.drone
        }
      }
    ]
  }),
  (exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    BODY: {
      FOV: 0.5,
      SPEED: 3,
      ACCELERATION: 0.4,
      HEALTH: 5,
      SHIELD: 0,
      DAMAGE: 1.2,
      RESIST: 1,
      PENETRATION: 1,
      DENSITY: 0.4
    },
    AI: {
      BLIND: !0
    },
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    GIVE_KILL_MESSAGE: !1,
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "canRepel",
      "hangOutNearMaster"
    ],
    GUNS: [
      {
        POSITION: [17, 9, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
          WAIT_TO_CYCLE: !0,
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.baseMinion = {
    PARENT: [exports.baseDrone],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hardWithBuffer",
    FACING_TYPE: "smoothToTarget",
    SHAPE: 0,
    AI: {
      BLIND: !0
    },
    DRAW_HEALTH: !1,
    CLEAR_ON_MASTER_UPGRADE: !0,
    GIVE_KILL_MESSAGE: !1,
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "canRepel",
      "hangOutNearMaster"
    ],
    GUNS: [
      {
        POSITION: [17, 9, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.op]),
          WAIT_TO_CYCLE: !0,
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.baseMinionSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Base",
    TYPE: "fixed",
    DAMAGE_CLASS: 0,
    RANGE: 5,
    ACCEPTS_SCORE: !1,
    SKILL: skillSet("0099999000"),
    HITS_OWN_TYPE: "never",
    BODY: {
      RESIST: 100,
      SPEED: 0,
      HEALTH: 1e4,
      DAMAGE: 10,
      PENETRATION: 0.25,
      SHIELD: 1e3,
      REGEN: 100,
      FOV: 10,
      PUSHABILITY: 0,
      HETERO: 0,
      FOV: 1
    },
    CAN_BE_ON_LEADERBOARD: !0,
    ACCEPTS_SCORE: !0,
    INVISIBLE: [0, 0.1],
    AI: {
      shapeFriend: !0,
      parentView: !0
    },
    STAT_NAMES: statnames.drone,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.protectordrone]),
          TYPE: [
            exports.baseMinion,
            {
              AI: {
                shapeFriend: !0,
                parentView: !0
              }
            }
          ],
          MAX_CHILDREN: 50,
          AUTOFIRE: !0,
          STAT_CALCULATOR: gunCalcNames.drone
        }
      }
    ]
  }),
  (exports.pillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COLOR: 16,
    BODY: {
      FOV: 2
    },
    HAS_NO_RECOIL: !0,
    GUNS: [
      {
        POSITION: [22, 11, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.minion,
            g.turret,
            g.power,
            g.auto,
            g.notdense
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.pillbox = {
    LABEL: "Pillbox",
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: !0,
    BODY: {
      SPEED: 1,
      DENSITY: 5
    },
    DIE_AT_RANGE: !0,
    TURRETS: [
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.pillboxTurret
      }
    ]
  }),
  (exports.skimturret = {
    PARENT: [exports.genericTank],
    BODY: {
      FOV: 2 * base.FOV
    },
    COLOR: 2,
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ],
    LABEL: "",
    GUNS: [
      {
        POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            [2, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.4, 0.4, 1, 10, 1, 1]
          ]),
          TYPE: exports.hypermissile
        }
      },
      {
        POSITION: [17, 15, 1, 0, 0, 0, 0]
      }
    ]
  }),
  (exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: "Basic",
    ALPHA: 1,
    RESET_UPGRADES: !0,
    GOES_THROUGH_WALLS: !0,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet,
          LABEL: "",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      }
    ]
  }),
  (exports.testbed = {
    PARENT: [exports.genericTank],
    LABEL: "TESTBED",
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.unfinished = {
    PARENT: [exports.genericTank],
    LABEL: "Unfinished",
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.dominators = {
    PARENT: [exports.genericTank],
    LABEL: "Dominators",
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.administrator = {
    PARENT: [exports.genericTank],
    LABEL: "Administrator",
    RESET_UPGRADES: !0,
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.moderator = {
    PARENT: [exports.genericTank],
    LABEL: "Moderator",
    RESET_UPGRADES: !0,
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.seniorTester = {
    PARENT: [exports.genericTank],
    LABEL: "Alpha Tester",
    RESET_UPGRADES: !0,
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.developer = {
    PARENT: [exports.genericTank],
    LABEL: "Developer",
    RESET_UPGRADES: !0,
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.celestials = {
    PARENT: [exports.genericTank],
    LABEL: "Celestials",
    RESET_UPGRADES: !0,
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.observer = {
    PARENT: [exports.genericTank],
    LABEL: "Spectator",
    BODY: {
      REGEN: 1e5,
      HEALTH: 1e5,
      DAMAGE: 0.001 * base.DAMAGE,
      DENSITY: 0.001 * base.DENSITY,
      SPEED: 2 * base.SPEED,
      FOV: 2 * base.FOV
    },
    ALPHA: 0.2,
    SKILL: setBuild("9999999999")
  }),
  (exports.betaTanks = {
    PARENT: [exports.genericTank],
    LABEL: "Beta Tanks A",
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.bosses = {
    PARENT: [exports.genericTank],
    LABEL: "Bosses",
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.bossesB = {
    PARENT: [exports.genericTank],
    LABEL: "Bosses B",
    RESET_UPGRADES: !0,
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.misc = {
    PARENT: [exports.genericTank],
    LABEL: "Assorted",
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.arenaClosers = {
    PARENT: [exports.genericTank],
    LABEL: "Arena Closers",
    GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.single = {
    PARENT: [exports.genericTank],
    LABEL: "Single",
    GUNS: [
      {
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.single]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 10, -1.6, 6.5, 0, 0, 0]
      }
    ]
  });
let smshskl = 12;
(exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: 1.05 * base.FOV,
    DENSITY: 2 * base.DENSITY
  },
  TURRETS: [
    {
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody
    }
  ],
  IS_SMASHER: !0,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher
}),
  (exports.megasmash = {
    PARENT: [exports.genericTank],
    LABEL: "Mega-Smasher",
    DANGER: 7,
    BODY: {
      SPEED: 1.05 * base.speed,
      FOV: 1.1 * base.FOV,
      DENSITY: 4 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [
      smshskl,
      0,
      0,
      0,
      0,
      smshskl,
      smshskl,
      smshskl,
      smshskl,
      smshskl
    ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
      {
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: exports.megasmashBody
      }
    ]
  }),
  (exports.landmine = {
    PARENT: [exports.genericTank],
    LABEL: "Landmine",
    DANGER: 7,
    INVISIBILITY_TOOLTIP: !0,
    INVISIBLE: [0.08, 0.03],
    BODY: {
      SPEED: base.SPEED * 1.1,
      FOV: base.FOV * 1.05,
      DENSITY: base.DENSITY * 2
    },
    IS_SMASHER: !0,
    SKILL_CAP: [
      smshskl,
      0,
      0,
      0,
      0,
      smshskl,
      smshskl,
      smshskl,
      smshskl,
      smshskl
    ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
      {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
      },
      {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.landmineBody
      }
    ]
  }),
  (exports.spike = {
    PARENT: [exports.genericTank],
    LABEL: "Spike",
    DANGER: 7,
    BODY: {
      SPEED: 0.9 * base.speed,
      DAMAGE: 1.1 * base.DAMAGE,
      FOV: 1.05 * base.FOV,
      DENSITY: 2 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [
      smshskl,
      0,
      0,
      0,
      0,
      smshskl,
      smshskl,
      smshskl,
      smshskl,
      smshskl
    ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
      {
        POSITION: [20.5, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody
      },
      {
        POSITION: [20.5, 0, 0, 120, 360, 0],
        TYPE: exports.spikeBody
      },
      {
        POSITION: [20.5, 0, 0, 240, 360, 0],
        TYPE: exports.spikeBody
      }
    ]
  }),
  (exports.weirdspike = {
    PARENT: [exports.genericTank],
    LABEL: "Spike",
    DANGER: 7,
    BODY: {
      DAMAGE: 1.15 * base.DAMAGE,
      FOV: 1.05 * base.FOV,
      DENSITY: 1.5 * base.DENSITY
    },
    IS_SMASHER: !0,
    SKILL_CAP: [
      smshskl,
      0,
      0,
      0,
      0,
      smshskl,
      smshskl,
      smshskl,
      smshskl,
      smshskl
    ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
      {
        POSITION: [20.5, 0, 0, 0, 360, 0],
        TYPE: exports.spikeBody1
      },
      {
        POSITION: [20.5, 0, 0, 180, 360, 0],
        TYPE: exports.spikeBody2
      }
    ]
  }),
  (exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
    type: exports.autoSmasherTurret,
    size: 11
  })),
  (exports.autosmash.SKILL_CAP = [
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl,
    smshskl
  ]),
  (exports.twin = {
    PARENT: [exports.genericTank],
    LABEL: "Twin",
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.ttr1 = {
    PARENT: [exports.genericTank],
    LABEL: "Taste The Rainbow",
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.rainbullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.rainbullet
        }
      }
    ]
  }),
  (exports.imerium = {
    PARENT: [exports.genericTank],
    LABEL: "Imerium",
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.boxer = {
    PARENT: [exports.genericTank],
    LABEL: "Boxer",
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [1, 0.5, 0.9, 1, 0.9, 0.4, 1, 1, 1, 1, 1, 1.2, 1]
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [1, 0.5, 0.9, 1, 0.9, 0.4, 1, 1, 1, 1, 1, 1.2, 1]
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.eyeofender = {
    PARENT: [exports.genericTank],
    LABEL: "Eye of Ender",
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 0, 0.7],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8, 1, 0, 5.5, 0, 0.7],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8, 1, 0, -5.5, 0, 0.9],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.flashlight = {
    PARENT: [exports.genericTank],
    LABEL: "Flashlight",
    GUNS: [
      {
        POSITION: [20, 7, 1.3, 0, 5.75, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 7, 1.3, 0, -5.75, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.gunner = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
      {
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.dualgunner = {
    PARENT: [exports.genericTank],
    LABEL: "Dual Gunner",
    DANGER: 6,
    GUNS: [
      {
        POSITION: [14, 2, 1, 0, 7.25, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.dual,
            g.lowpower,
            g.puregunner,
            g.fast
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 2, 1, 0, -7.25, 0, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.dual,
            g.lowpower,
            g.puregunner,
            g.fast
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 2, 1, 0, 3.75, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.dual,
            g.lowpower,
            g.puregunner,
            g.fast
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 2, 1, 0, -3.75, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.dual,
            g.lowpower,
            g.puregunner,
            g.fast
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.dualgunner2 = {
    PARENT: [exports.dualgunner],
    LABEL: "",
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ]
  }),
  (exports.sharpshooter = {
    PARENT: [exports.genericTank],
    LABEL: "Sharpshooter",
    DANGER: 6,
    MAX_CHILDREN: 12,
    GUNS: [
      {
        POSITION: [12, 3.5, 1.9, 0, 7.25, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.shooter, g.over, g.weak]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [12, 3.5, 1.9, 0, -7.25, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.shooter, g.over, g.weak]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [16, 3.5, 1.9, 0, 3.75, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.shooter, g.over, g.weak]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [16, 3.5, 1.9, 0, -3.75, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.shooter, g.over, g.weak]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.cyclone = {
    PARENT: [exports.genericTank],
    LABEL: "Cyclone",
    DANGER: 6,
    GUNS: []
  });
for (let e = 0; e < 12; e++)
  exports.cyclone.GUNS.push({
    POSITION: [16, 3.5, 1, 0, 0, 30 * e, e % 2 == 0 ? 0.5 : 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
      TYPE: exports.bullet
    }
  });

function makeSwarmSpawner(e) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: !0,
      SKYNET: !0,
      FULL_VIEW: !0
    },
    GUNS: [
      {
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: e,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  };
}

function bossStats(e = {}) {
  return (
    e.health || (e.health = 1),
    e.damage || (e.damage = 1),
    e.speed || (e.speed = 1),
    e.fov || (e.fov = 1),
    {
      HEALTH: 13 * base.HEALTH * e.health,
      DAMAGE: 1.5 * base.DAMAGE * e.damage,
      SPEED: 0.1 * base.SPEED * e.speed,
      DENSITY: 500,
      FOV: 1.125 * base.FOV * e.fov,
      SHIELD: 0.75 * base.SHIELD
    }
  );
}
(exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: 0.9 * base.SPEED
  },
  GUNS: [
    {
      POSITION: [14, 3, 4, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [14, 3, 4, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun
        ]),
        TYPE: exports.bullet
      }
    }
  ]
}),
  (exports.autogunner = makeAuto(exports.gunner)),
  (exports.nailgun = {
    PARENT: [exports.genericTank],
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
      FOV: 1.1 * base.FOV,
      SPEED: 0.9 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
      }
    ]
  }),
  (exports.double = {
    PARENT: [exports.genericTank],
    LABEL: "Double",
    DANGER: 6,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 5.5, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.tripletwin = {
    PARENT: [exports.genericTank],
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 5.5, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 120, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 5.5, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 240, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.autodouble = makeAuto(exports.double, "Auto-Double")),
  (exports.split = {
    PARENT: [exports.genericTank],
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.twin,
            g.double,
            g.hewn,
            g.morerecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 8, 1, 0, -5.5, -25, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.twin,
            g.double,
            g.hewn,
            g.morerecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.double,
            g.hewn,
            g.morerecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.twin,
            g.double,
            g.hewn,
            g.morerecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.bent = {
    PARENT: [exports.genericTank],
    LABEL: "Bent",
    DANGER: 6,
    BODY: {
      SPEED: 0.9 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [17, 8, 1, 0, -2, -20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, 2, 20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.bentswarm = {
    PARENT: [exports.genericTank],
    LABEL: "Bent Swarm",
    DANGER: 6,
    BODY: {
      SPEED: 0.9 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [17, 8, 1, 0, -2, -20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, 2, 20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [7, 9, 0.6, 7, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 9, 0.6, 7, 0, 270, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  }),
  (exports.bentdouble = {
    PARENT: [exports.genericTank],
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [17, 8, 1, 0, -1, -25, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, 1, 25, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, -1, 155, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, 1, -155, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.penta = {
    PARENT: [exports.genericTank],
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
      SPEED: 0.85 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [14, 8, 1, 0, -3, -30, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 8, 1, 0, 3, 30, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, -2, -15, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, 2, 15, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid")),
  (exports.triple = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
      FOV: 1.05 * base.FOV
    },
    LABEL: "Triplet",
    GUNS: [
      {
        POSITION: [16, 8, 1, 0, 5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8, 1, 0, -5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.quint = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
      FOV: 1.1 * base.FOV
    },
    LABEL: "Quintuplet",
    GUNS: [
      {
        POSITION: [16, 10, 1, 0, -5, 0, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 10, 1, 0, 5, 0, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 10, 1, 0, -3, 0, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 10, 1, 0, 3, 0, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.dual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
      ACCEL: 0.8 * base.ACCEL,
      FOV: 1.1 * base.FOV
    },
    LABEL: "Dual",
    GUNS: [
      {
        POSITION: [18, 7, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small"
        }
      },
      {
        POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small"
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.doubledual = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
      ACCEL: 0.8 * base.ACCEL,
      FOV: 1.1 * base.FOV
    },
    LABEL: "Double Dual",
    GUNS: [
      {
        POSITION: [18, 7, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small"
        }
      },
      {
        POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small"
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 7, 1, 0, 5.5, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small"
        }
      },
      {
        POSITION: [18, 7, 1, 0, -5.5, 180, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small"
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, 5.5, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, -5.5, 180, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.pair = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    BODY: {
      ACCEL: 0.8 * base.ACCEL,
      FOV: 1.1 * base.FOV
    },
    LABEL: "Griffin",
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [
      {
        POSITION: [18, 7, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
          TYPE: exports.bullet,
          LABEL: "Small",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet,
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
          TYPE: exports.bullet,
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.sniper = {
    PARENT: [exports.genericTank],
    LABEL: "Sniper",
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [22, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.rifle = {
    PARENT: [exports.genericTank],
    LABEL: "Rifle",
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      FOV: 1.225 * base.FOV
    },
    GUNS: [
      {
        POSITION: [20, 10.5, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [24, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.musket = {
    PARENT: [exports.genericTank],
    LABEL: "Musket",
    BODY: {
      ACCELERATION: 0.7 * base.ACCELERATION,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [15.5, 19.5, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [18, 7, 1, 0, 4.15, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.twin,
            g.rifle,
            g.bitweak
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 7, 1, 0, -4.15, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.twin,
            g.rifle,
            g.bitweak
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.assassin = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
      ACCELERATION: 0.6 * base.ACCEL,
      SPEED: 0.85 * base.SPEED,
      FOV: 1.4 * base.FOV
    },
    GUNS: [
      {
        POSITION: [27, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
      }
    ]
  });
(exports.stalker = {
  PARENT: [exports.genericTank],
  LABEL: "Stalker",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCELERATION * 0.55,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.35
  },
  INVISIBLE: [0.08, 0.03],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet
      }
    }
  ]
}),
  (exports.ambusher = {
    // thats what the turret is called
    PARENT: [exports.auto3gun],
    LABEL: "",
    BODY: {
      FOV: 0.6
    },
    INVISIBLE: [0.08, 0.03],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [36, 12, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.power]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.ranger = {
    PARENT: [exports.genericTank],
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.5 * base.ACCEL,
      SPEED: 0.8 * base.SPEED,
      FOV: 1.5 * base.FOV
    },
    GUNS: [
      {
        POSITION: [32, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
      }
    ]
  }),
  (exports.autoass = makeAuto(exports.assassin, "")),
  (exports.hunter = {
    PARENT: [exports.genericTank],
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      SPEED: 0.9 * base.SPEED,
      FOV: 1.25 * base.FOV
    },
    GUNS: [
      {
        POSITION: [24, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.hunter,
            g.hunter2
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [21, 12, 1, 0, 0, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.autoHunter = makeAuto(exports.hunter)),
  (exports.ordnance = {
    PARENT: [exports.genericTank],
    LABEL: "Ordnance",
    DANGER: 6,
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      SPEED: 0.9 * base.SPEED,
      FOV: 1.25 * base.FOV
    },
    GUNS: [
      {
        POSITION: [17, 3, 1, 0, -6, -7, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [24, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.hunter,
            g.hunter2
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [21, 12, 1, 0, 0, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.preda = {
    PARENT: [exports.genericTank],
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      SPEED: 0.85 * base.SPEED,
      FOV: 1.3 * base.FOV
    },
    ZOOM_TOOLTIP: !0,
    GUNS: [
      {
        POSITION: [24, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.hunter,
            g.hunter2,
            g.hunter2,
            g.preda
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [21, 11, 1, 0, 0, 0, 0.15],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.hunter,
            g.hunter2,
            g.preda
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 15, 1, 0, 0, 0, 0.3],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.poach = makeHybrid(exports.hunter, "Poacher")),
  (exports.sidewind = {
    PARENT: [exports.genericTank],
    LABEL: "Sidewinder",
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      SPEED: 0.8 * base.SPEED,
      FOV: 1.3 * base.FOV
    },
    GUNS: [
      {
        POSITION: [10, 11, -0.5, 14, 0, 0, 0]
      },
      {
        POSITION: [21, 12, -1.1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.hunter,
            g.sidewind
          ]),
          TYPE: exports.snake,
          STAT_CALCULATOR: gunCalcNames.sustained
        }
      }
    ]
  }),
  (exports.director = {
    PARENT: [exports.genericTank],
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone
        }
      }
    ]
  }),
  (exports.manager = {
    PARENT: [exports.genericTank],
    LABEL: "Manager",
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      FOV: 1.1 * base.FOV
    },
    INVISIBILITY_TOOLTIP: !0,
    MAX_CHILDREN: 8,
    INVISIBLE: [0.08, 0.03],
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          SKIN: 2,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone
        }
      }
    ]
  }),
  (exports.commander = {
    PARENT: [exports.genericTank],
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.master, g.commander]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 4
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.master, g.commander]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          MAX_CHILDREN: 4
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 1 / 3],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
          TYPE: [
            exports.swarm,
            {
              CONTROLLERS: ["canRepel"]
            }
          ],
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 0, 180, 2 / 3],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.commander]),
          TYPE: [
            exports.swarm,
            {
              CONTROLLERS: ["canRepel"]
            }
          ],
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  }),
  (exports.overseer = {
    PARENT: [exports.genericTank],
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      SPEED: 0.9 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.autodrone = makeAuto(exports.drone, "Auto-Drone", {
    type: exports.droneAutoTurret,
    size: 9
  })),
  (exports.drivesquare = {
    PARENT: [exports.genericTank],
    LABEL: "Drive Square",
    SHAPE: 4,
    SIZE: 10
  }),
  (exports.overdrive = {
    PARENT: [exports.genericTank],
    LABEL: "Overdrive",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      SPEED: 0.9 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.autodrone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.autodrone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.drivesquare
      }
    ]
  }),
  (exports.overlord = {
    PARENT: [exports.genericTank],
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      SPEED: 0.8 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 8,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.overtrap = {
    PARENT: [exports.genericTank],
    LABEL: "Overtrapper",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
      ACCELERATION: 0.6 * base.ACCEL,
      SPEED: 0.8 * base.SPEED,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [6, 11, 1.2, 8, 0, 125, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 3
        }
      },
      {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 3
        }
      },
      {
        POSITION: [14, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 8, 1.5, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.banshee = {
    PARENT: [exports.genericTank],
    LABEL: "Banshee",
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.5 * base.ACCEL,
      SPEED: 0.8 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [10, 8, 0, 0, 80, 0],
        TYPE: exports.bansheegun
      },
      {
        POSITION: [10, 8, 0, 120, 80, 0],
        TYPE: exports.bansheegun
      },
      {
        POSITION: [10, 8, 0, 240, 80, 0],
        TYPE: exports.bansheegun
      }
    ],
    GUNS: [
      {
        POSITION: [6, 11, 1.2, 8, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 2
        }
      },
      {
        POSITION: [6, 11, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 2
        }
      },
      {
        POSITION: [6, 11, 1.2, 8, 0, 300, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 2
        }
      }
    ]
  }),
  (exports.autoover = makeAuto(exports.overseer)),
  (exports.overgunner = {
    PARENT: [exports.genericTank],
    LABEL: "Overgunner",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      SPEED: 0.9 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    GUNS: [
      {
        POSITION: [6, 11, 1.2, 8, 0, 125, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 3
        }
      },
      {
        POSITION: [6, 11, 1.2, 8, 0, 235, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 3
        }
      },
      {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.slow,
            g.flank,
            g.lotsmorrecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.slow,
            g.flank,
            g.lotsmorrecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 11, 1, 0, 0, 0, 0]
      }
    ]
  }),
  (exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]))),
  (exports.cruiser = {
    PARENT: [exports.genericTank],
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  }),
  (exports.battleship = {
    PARENT: [exports.genericTank],
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
      ACCELERATION: base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
          LABEL: "Guided"
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: [exports.autoswarm],
          STAT_CALCULATOR: gunCalcNames.swarm,
          LABEL: "Autonomous"
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: [exports.autoswarm],
          STAT_CALCULATOR: gunCalcNames.swarm,
          LABEL: "Autonomous"
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
          LABEL: "Guided"
        }
      }
    ]
  }),
  (exports.carrier = {
    PARENT: [exports.genericTank],
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      FOV: 1.3 * base.FOV
    },
    GUNS: [
      {
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  }),
  (exports.autocruiser = makeAuto(exports.cruiser)),
  (exports.fortress = {
    PARENT: [exports.genericTank],
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: [
            exports.swarm,
            {
              CONTROLLERS: ["canRepel"]
            }
          ],
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: [
            exports.swarm,
            {
              CONTROLLERS: ["canRepel"]
            }
          ],
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm]),
          TYPE: [
            exports.swarm,
            {
              CONTROLLERS: ["canRepel"]
            }
          ],
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [14, 9, 1, 0, 0, 60, 0]
      },
      {
        POSITION: [4, 9, 1.5, 14, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [14, 9, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [4, 9, 1.5, 14, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [14, 9, 1, 0, 0, 300, 0]
      },
      {
        POSITION: [4, 9, 1.5, 14, 0, 300, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.bunker = {
    PARENT: [exports.genericTank],
    LABEL: "Bunker",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 4, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -4, 120, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 4, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -4, 240, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload, g.lessreload]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [14, 9, 1, 0, 0, 60, 0]
      },
      {
        POSITION: [4, 9, 1.5, 14, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [14, 9, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [4, 9, 1.5, 14, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [14, 9, 1, 0, 0, 300, 0]
      },
      {
        POSITION: [4, 9, 1.5, 14, 0, 300, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.underseer = {
    PARENT: [exports.genericTank],
    LABEL: "Underseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      SPEED: 0.9 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
      {
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
          TYPE: exports.sunchip,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
          TYPE: exports.sunchip,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      }
    ]
  }),
  (exports.sentinal = {
    PARENT: [exports.genericTank],
    LABEL: "Sentinal",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      SPEED: 0.9 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    MAX_CHILDREN: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
          TYPE: exports.autosunchip,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      }
    ]
  }),
  (exports.necromancer = {
    PARENT: [exports.genericTank],
    LABEL: "Necromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      SPEED: 0.8 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    SHAPE: 4,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 16,
    GUNS: [
      {
        POSITION: [5, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
          TYPE: exports.sunchip,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
          TYPE: exports.sunchip,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
          TYPE: exports.sunchip,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
          TYPE: exports.sunchip,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      }
    ]
  }),
  (exports.maleficitor = {
    PARENT: [exports.genericTank],
    LABEL: "Maleficitor",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL,
      SPEED: 0.85 * base.SPEED,
      FOV: 1.1 * base.FOV
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
      {
        POSITION: [5, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.drone,
            g.sunchip,
            [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1]
          ]),
          TYPE: [
            exports.sunchip,
            {
              INVISIBLE: [0.06, 0.03]
            }
          ],
          SKIN: 2,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      }
    ]
  }),
  (exports.lilfact = {
    PARENT: [exports.genericTank],
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      ACCELERATION: 0.5 * base.ACCEL,
      FOV: 1.1
    },
    GUNS: [
      {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [1, 12, 1, 15, 0, 0, 0],
        PROPERTIES: {
          MAX_CHILDREN: 4,
          SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
      }
    ]
  }),
  (exports.general = {
    PARENT: [exports.genericTank],
    LABEL: "General",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      ACCELERATION: 0.5 * base.ACCEL,
      FOV: 1.1
    },
    GUNS: [
      {
        POSITION: [4.5, 10, 1, 10.5, 0, 180, 0]
      },
      {
        POSITION: [1, 12, 1, 15, 0, 180, 0],
        PROPERTIES: {
          MAX_CHILDREN: 2,
          SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
          TYPE: [
            exports.minion,
            {
              INDEPENDENT: !0
            }
          ],
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [3.5, 12, 1, 8, 0, 180, 0]
      },
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet,
          LABEL: "",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      }
    ]
  }),
  (exports.autoSpawner = makeAuto(exports.lilfact)),
  (exports.factory = {
    PARENT: [exports.genericTank],
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.1
    },
    MAX_CHILDREN: 6,
    GUNS: [
      {
        POSITION: [5, 11, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [2, 14, 1, 15.5, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [4, 14, 1, 8, 0, 0, 0]
      }
    ]
  }),
  (exports.machine = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gun",
    GUNS: [
      {
        POSITION: [10, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.flamethrower = {
    PARENT: [exports.genericTank],
    LABEL: "Flamethrower",
    GUNS: [
      {
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.furnace = {
    PARENT: [exports.genericTank],
    LABEL: "Furnace",
    GUNS: [
      {
        POSITION: [14.5, 10, 1, 2, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil,
            g.blaster
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.pyro = {
    PARENT: [exports.genericTank],
    LABEL: "Pyro",
    GUNS: [
      {
        POSITION: [16, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 8, 1, 2, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.firehydrant = makeAuto(exports.flamethrower, "Fire Hydrant", {
    type: exports.auto3gun,
    size: 10
  })),
  (exports.firetruck = makeHybrid(exports.flamethrower, "Fire Truck")),
  (exports.flareguard = {
    PARENT: [exports.genericTank],
    LABEL: "Flare Guard",
    BODY: {
      SPEED: 1.1 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.lavapup = {
    PARENT: [exports.genericTank],
    LABEL: "Laba Pup",
    BODY: {
      SPEED: 1.1 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, -150, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.wildfire = {
    PARENT: [exports.genericTank],
    LABEL: "Wild Fire",
    GUNS: [
      {
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.inferno = {
    PARENT: [exports.genericTank],
    LABEL: "Inferno",
    GUNS: [
      {
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
      },
      {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
          TYPE: exports.infernobullet,
          LABEL: "Inferno Flare",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      }
    ]
  }),
  (exports.backfire = {
    PARENT: [exports.genericTank],
    LABEL: "Backfire",
    GUNS: [
      {
        POSITION: [13, 8, 1, 2, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
      },
      {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
          TYPE: exports.infernobullet,
          LABEL: "Inferno Flare",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      }
    ]
  }),
  (exports.firething = {
    PARENT: [exports.genericTank],
    COLOR: 31
  }),
  (exports.forestfire = {
    PARENT: [exports.genericTank],
    LABEL: "Forest Fire",
    GUNS: [
      {
        POSITION: [15, 4, 1.4, 0, 5, 0, 0]
      },
      {
        POSITION: [25, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
          TYPE: exports.fireinferno
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [10, 0, 0, 0, 0, 1],
        TYPE: exports.firething
      }
    ]
  }),
  (exports.hothead = {
    PARENT: [exports.genericTank],
    LABEL: "Hot Head",
    GUNS: [
      {
        POSITION: [12, 4, 1.4, 0, 5, 0, 0]
      },
      {
        POSITION: [18, 7, 1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.bitmorereload,
            g.machspraysmall,
            g.lowpower,
            g.lowpower,
            g.halfrecoil,
            g.halfrecoil
          ]),
          TYPE: exports.infernobullet,
          LABEL: "Inferno Flare",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      }
    ]
  }),
  (exports.welder = {
    PARENT: [exports.genericTank],
    LABEL: "Welder",
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    GUNS: [
      {
        POSITION: [22, 4, 1.4, -3, 5, 0, 0]
      },
      {
        POSITION: [30, 7, 1, 3, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload, g.sniper]),
          TYPE: exports.infernobullet,
          LABEL: "Inferno Flare",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      },
      {
        POSITION: [16, 7, -2, 0, 0, 0, 0]
      }
    ]
  }),
  (exports.twinferno = {
    PARENT: [exports.genericTank],
    LABEL: "Twinferno",
    GUNS: [
      {
        POSITION: [15, 4, 1.4, 0, 7, 0, 0]
      },
      {
        POSITION: [25, 5, 1, 0, 3.6, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
          TYPE: exports.infernobullet,
          LABEL: "Inferno Flare",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      },
      {
        POSITION: [15, 4, 1.4, 0, -7, 0, 0]
      },
      {
        POSITION: [25, 5, 1, 0, -3.6, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.bitmorereload]),
          TYPE: exports.infernobullet,
          LABEL: "Inferno Flare",
          STAT_CALCULATOR: 0,
          WAIT_TO_CYCLE: !1,
          AUTOFIRE: !1,
          SYNCS_SKILLS: !1,
          MAX_CHILDREN: 0,
          ALT_FIRE: !1,
          NEGATIVE_RECOIL: !1
        }
      }
    ]
  }),
  (exports.machineTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Machine Gun",
    GUNS: [
      {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.spray = {
    PARENT: [exports.genericTank],
    LABEL: "Sprayer",
    GUNS: [
      {
        POSITION: [23, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.lowpower,
            g.mach,
            g.morerecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.sprayTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Sprayer",
    GUNS: [
      {
        POSITION: [23, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1]
          ]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.micro = {
    PARENT: [exports.genericTank],
    LABEL: "Microgun",
    DANGER: 6,
    BODY: {
      FOV: 1.2
    },
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
      }
    ]
  }),
  (exports.microbrid = makeHybrid(exports.micro, "Microbrid")),
  (exports.mini = {
    PARENT: [exports.genericTank],
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
      FOV: 1.2
    },
    GUNS: [
      {
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.stream = {
    PARENT: [exports.genericTank],
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
      FOV: 1.3
    },
    GUNS: [
      {
        POSITION: [25, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [23, 8, 1, 0, 0, 0, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [21, 8, 1, 0, 0, 0, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 8, 1, 0, 0, 0, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [17, 8, 1, 0, 0, 0, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.hybridmini = makeHybrid(exports.mini, "Cropduster")),
  (exports.minitrap = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
      FOV: 1.15
    },
    GUNS: [
      {
        POSITION: [24, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 8, 1.3, 22, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.pound = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    BODY: {
      ACCELERATION: 0.8 * base.ACCEL
    },
    LABEL: "Pounder",
    GUNS: [
      {
        POSITION: [18, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.onslaught = {
    PARENT: [exports.genericTank],
    DANGER: 8,
    BODY: {
      ACCELERATION: 0.8 * base.ACCEL
    },
    LABEL: "Onslaught",
    GUNS: [
      {
        POSITION: [13, 8, 1, 2, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.doublereload,
            g.machspraysmall,
            g.bitweak,
            g.halfrecoil,
            g.halfrecoil
          ]),
          SKIN: 1,
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 12, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.eaglet = {
    PARENT: [exports.genericTank],
    LABEL: "Eaglet",
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.8 * base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [
      {
        POSITION: [20, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
          TYPE: exports.bullet,
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.eagle = {
    PARENT: [exports.genericTank],
    LABEL: "Eagle",
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.8 * base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [
      {
        POSITION: [20, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
          TYPE: exports.bullet,
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.destroy = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL
    },
    LABEL: "Destroyer",
    GUNS: [
      {
        POSITION: [19, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.anni = {
    PARENT: [exports.genericTank],
    BODY: {
      ACCELERATION: 0.75 * base.ACCEL
    },
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.hiveshooter = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Swarmer",
    GUNS: [
      {
        POSITION: [14, 14, -1.2, 5, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
          TYPE: exports.hive
        }
      },
      {
        POSITION: [15, 12, 1, 5, 0, 0, 0]
      }
    ]
  }),
  (exports.hybrid = makeHybrid(exports.destroy, "Hybrid")),
  (exports.multishot = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Ruminator",
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL
    },
    GUNS: [
      {
        POSITION: [20, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [8, 12, -1.4, 4, 0, 0, 0]
      }
    ]
  }),
  (exports.autohiveshooter = makeHybrid(exports.hiveshooter, "Hivebrid")),
  (exports.shotgun2 = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Shotgun",
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL
    },
    GUNS: [
      {
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.casing
        }
      },
      {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.casing
        }
      },
      {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.casing
        }
      },
      {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [1, 3, 1, 13, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [1, 2, 1, 13, 2, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.casing
        }
      },
      {
        POSITION: [1, 2, 1, 13, -2, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.casing
        }
      },
      {
        POSITION: [15, 14, 1, 6, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
          TYPE: exports.casing
        }
      },
      {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0]
      }
    ]
  }),
  (exports.broad = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Broad",
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL
    },
    GUNS: [
      {
        POSITION: [4, 3, 1, 11, -3, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [4, 3, 1, 11, 3, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [4, 4, 1, 13, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 4, 1, 12, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 4, 1, 11, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 3, 1, 13, -1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 3, 1, 13, 1, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 2, 1, 13, 2, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [1, 2, 1, 13, -2, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [15, 14, 1.4, 6, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
          TYPE: exports.homingbullet
        }
      },
      {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        POSITION: [14, 0, 0, 0, 0, 1],
        TYPE: [exports.genericTank, { COLOR: 13 }]
      }
    ]
  }),
  (exports.builder = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [18, 12, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.block
        }
      }
    ]
  }),
  (exports.engineer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
      SPEED: 0.75 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [13, 10, -1.4, 0, 0, 180, 0]
      },
      {
        POSITION: [18, 12, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: exports.pillbox,
          SYNC_SKILLS: !0
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: exports.drivesquare
      }
    ]
  }),
  (exports.construct = {
    PARENT: [exports.genericTank],
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.5 * base.ACCEL,
      SPEED: 0.7 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [18, 18, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 18, 1.2, 18, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
          TYPE: exports.block
        }
      }
    ]
  }),
  (exports.autobuilder = makeAuto(exports.builder)),
  (exports.conq = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.trap,
    BODY: {
      SPEED: 0.8 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 14, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 14, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.block
        }
      }
    ]
  }),
  (exports.bentboomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Bent Boomer",
    STAT_NAMES: statnames.trap,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [8, 10, 1, 8, -2, -35, 0]
      },
      {
        POSITION: [8, 10, 1, 8, 2, 35, 0]
      },
      {
        POSITION: [2, 10, 1.3, 16, -2, -35, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
          TYPE: exports.boomerang
        }
      },
      {
        POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
          TYPE: exports.boomerang
        }
      }
    ]
  }),
  (exports.boomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [5, 10, 1, 14, 0, 0, 0]
      },
      {
        POSITION: [6, 10, -1.5, 7, 0, 0, 0]
      },
      {
        POSITION: [2, 10, 1.3, 18, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
          TYPE: exports.boomerang
        }
      }
    ]
  }),
  (exports.megaboomer = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Mega Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [5, 13, 1, 14, 0, 0, 0]
      },
      {
        POSITION: [8, 13, -1.3, 5, 0, 0, 0]
      },
      {
        POSITION: [2, 13, 1.3, 18, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            g.boomerang,
            g.construct
          ]),
          TYPE: exports.boomerang
        }
      }
    ]
  }),
  (exports.quadtrapper = {
    PARENT: [exports.genericTank],
    DANGER: 7,
    LABEL: "Quadtrapper",
    STAT_NAMES: statnames.trap,
    BODY: {
      SPEED: 0.8 * base.SPEED,
      FOV: 1.15 * base.FOV
    },
    GUNS: [
      {
        POSITION: [14, 6, 1, 0, 0, 45, 0]
      },
      {
        POSITION: [2, 6, 1.1, 14, 0, 45, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            [1, 1, 1, 1, 0.6, 0.6, 0.6, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: exports.block
        }
      },
      {
        POSITION: [14, 6, 1, 0, 0, 135, 0]
      },
      {
        POSITION: [2, 6, 1.1, 14, 0, 135, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            [1, 1, 1, 1, 0.6, 0.6, 0.6, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: exports.block
        }
      },
      {
        POSITION: [14, 6, 1, 0, 0, 225, 0]
      },
      {
        POSITION: [2, 6, 1.1, 14, 0, 225, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            [1, 1, 1, 1, 0.6, 0.6, 0.6, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: exports.block
        }
      },
      {
        POSITION: [14, 6, 1, 0, 0, 315, 0]
      },
      {
        POSITION: [2, 6, 1.1, 14, 0, 315, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            [1, 1, 1, 1, 0.6, 0.6, 0.6, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: exports.block
        }
      }
    ]
  }),
  (exports.artillery = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Artillery",
    GUNS: [
      {
        POSITION: [17, 3, 1, 0, -6, -7, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Heavy"
        }
      }
    ]
  }),
  (exports.artillery2 = {
    PARENT: [exports.auto3gun],
    LABEL: "",
    BODY: {
      FOV: 1
    },
    GUNS: [
      {
        POSITION: [17, 3, 1, 0, -6, -7, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Heavy"
        }
      }
    ]
  }),
  (exports.driller = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Driller",
    GUNS: [
      {
        POSITION: [18, 4, 1, 0, -3, -8, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.arty,
            g.morereload
          ]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [17, 4, 1, 0, 3, 8, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.arty,
            g.morereload
          ]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.arty,
            g.morereload
          ]),
          TYPE: exports.bullet,
          LABEL: "Heavy"
        }
      },
      {
        POSITION: [6, 13, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.arty,
            g.morereload
          ]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      }
    ]
  }),
  (exports.cannonry = {
    PARENT: [exports.genericTank],
    DANGER: 6,
    LABEL: "Cannonry",
    GUNS: [
      {
        POSITION: [17, 3, 1, 0, -6, -7, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [17, 3, 1, 0, 6, 7, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
          TYPE: exports.bullet,
          LABEL: "Heavy"
        }
      },
      {
        POSITION: [23, 7, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.lowpower,
            g.mach,
            g.morerecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.mortar = {
    PARENT: [exports.genericTank],
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [13, 3, 1, 0, -8, -7, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [13, 3, 1, 0, 8, 7, 0.8],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [17, 3, 1, 0, -6, -7, 0.2],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [17, 3, 1, 0, 6, 7, 0.4],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [19, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            [2, 2, 1, 1, 1.25, 1.1, 1.25, 1, 1, 1, 1.5, 1, 1.15],
            g.arty
          ]),
          TYPE: exports.bullet,
          LABEL: "Heavy"
        }
      }
    ]
  }),
  (exports.launcher = {
    PARENT: [exports.genericTank],
    BODY: {
      FOV: 1.15 * base.FOV
    },
    LABEL: "Launcher",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [10, 11.5, -0.5, 9, 0, 0, 0]
      },
      {
        POSITION: [17, 12, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            [1, 1, 1, 0.8, 1, 1, 1, 0.4, 0.4, 1, 10, 1, 1]
          ]),
          TYPE: exports.launcherMissile,
          STAT_CALCULATOR: gunCalcNames.sustained
        }
      }
    ]
  }),
  (exports.autoLauncher = makeAuto(exports.launcher)),
  (exports.skimmer = {
    PARENT: [exports.genericTank],
    BODY: {
      FOV: 1.15 * base.FOV
    },
    LABEL: "Skimmer",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [10, 14, -0.5, 9, 0, 0, 0]
      },
      {
        POSITION: [17, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            [1, 1, 1, 0.8, 0.8, 0.8, 0.8, 0.4, 0.4, 1, 10, 1, 1]
          ]),
          TYPE: exports.missile,
          STAT_CALCULATOR: gunCalcNames.sustained
        }
      }
    ]
  }),
  (exports.spinner = {
    PARENT: [exports.genericTank],
    BODY: {
      FOV: 1.1 * base.FOV
    },
    LABEL: "Twister",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [10, 13, -0.5, 9, 0, 0, 0]
      },
      {
        POSITION: [17, 14, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            [1, 0.4, 1, 0.8, 0.8, 0.8, 0.8, 0.4, 0.4, 1, 10, 1, 1]
          ]),
          TYPE: exports.spinmissile,
          STAT_CALCULATOR: gunCalcNames.sustained
        }
      }
    ]
  }),
  (exports.rocketeer = {
    PARENT: [exports.genericTank],
    BODY: {
      FOV: base.FOV * 1.15
    },
    LABEL: "Rocketeer",
    DANGER: 7,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            [1.3, 1.5, 1, 1, 2, 1.15, 0.8, 1, 1, 1.25, 1.25, 1, 1]
          ]),
          TYPE: exports.rocketmissile,
          STAT_CALCULATOR: gunCalcNames.sustained
        }
      },
      {
        POSITION: [17, 18, 0.65, 0, 0, 0, 0]
      }
    ]
  });
(exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 9, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder"
      }
    }
  ]
}),
  (exports.flank = {
    PARENT: [exports.genericTank],
    LABEL: "Flank Guard",
    BODY: {
      SPEED: 1.1 * base.SPEED
    },
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.accelerator = {
    PARENT: [exports.genericTank],
    LABEL: "Accelerator",
    GUNS: [
      {
        POSITION: [19, 8, 1, 0, -2, -20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 8, 1, 0, 2, 20, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [22, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.hexa = {
    PARENT: [exports.genericTank],
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.flankz = {
    PARENT: [exports.genericTank],
    LABEL: "Flank-Z",
    DANGER: 6,
    FACING_TYPE: "autospin",
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [11, 8, 0, 60, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 8, 0, 180, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 8, 0, 300, 190, 0],
        TYPE: exports.auto3gun
      }
    ]
  }),
  (exports.octo = {
    PARENT: [exports.genericTank],
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 45, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 135, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 225, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 315, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.trapper = {
    PARENT: [exports.genericTank],
    LABEL: "Trapper",
    GUNS: [
      {
        POSITION: [14, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 8, 1.5, 14, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.megatrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Mega Trapper",
    GUNS: [
      {
        POSITION: [13, 13, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 13, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            [1.75, 2, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1, 10, 1, 1]
          ]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.terratrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Terra Trapper",
    GUNS: [
      {
        POSITION: [13, 16, 1.5, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 21, 1.7, 13, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            [1.75, 2, 1, 1, 1.5, 1.5, 1.5, 1, 1, 1, 10, 1, 1]
          ]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.autoTrapper = makeAuto(exports.trapper)),
  (exports.tritrapper = {
    PARENT: [exports.genericTank],
    LABEL: "Tri-Trapper",
    GUNS: [
      {
        POSITION: [14, 8, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 8, 1.5, 14, 0, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [14, 8, 1, 0, 0, 120, 0]
      },
      {
        POSITION: [4, 8, 1.5, 14, 0, 120, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [14, 8, 1, 0, 0, 240, 0]
      },
      {
        POSITION: [4, 8, 1.5, 14, 0, 240, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.autotritrap = makeAuto(exports.tritrapper)),
  (exports.heptatrap = (() => {
    let e = 360 / 8,
      T = 1 / 8;
    return {
      PARENT: [exports.genericTank],
      LABEL: "Octo-Trapper",
      DANGER: 7,
      BODY: {
        SPEED: 0.8 * base.SPEED
      },
      STAT_NAMES: statnames.trap,
      HAS_NO_RECOIL: !0,
      GUNS: [
        {
          POSITION: [14, 8, 1, 0, 0, 0, 0]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, 0, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, e, 4 * T]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, e, 4 * T],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 2 * e, 1 * T]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, 2 * e, 1 * T],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 3 * e, 5 * T]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, 3 * e, 5 * T],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 4 * e, 2 * T]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, 4 * e, 2 * T],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 5 * e, 6 * T]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, 5 * e, 6 * T],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 6 * e, 3 * T]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, 6 * e, 3 * T],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 7 * e, 7 * T]
        },
        {
          POSITION: [4, 8, 1.5, 14, 0, 7 * e, 7 * T],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        }
      ]
    };
  })()),
  (exports.hexatrap = makeAuto(
    {
      PARENT: [exports.genericTank],
      LABEL: "Hexa-Trapper",
      DANGER: 7,
      BODY: {
        SPEED: 0.8 * base.SPEED
      },
      STAT_NAMES: statnames.trap,
      HAS_NO_RECOIL: !0,
      GUNS: [
        {
          POSITION: [14, 8, 1, 0, 0, 0, 0]
        },
        {
          POSITION: [3, 8, 1.5, 14, 0, 0, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 60, 0.5]
        },
        {
          POSITION: [3, 8, 1.5, 14, 0, 60, 0.5],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 120, 0]
        },
        {
          POSITION: [3, 8, 1.5, 14, 0, 120, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 180, 0.5]
        },
        {
          POSITION: [3, 8, 1.5, 14, 0, 180, 0.5],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 240, 0]
        },
        {
          POSITION: [3, 8, 1.5, 14, 0, 240, 0],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        },
        {
          POSITION: [14, 8, 1, 0, 0, 300, 0.5]
        },
        {
          POSITION: [3, 8, 1.5, 14, 0, 300, 0.5],
          PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
            TYPE: exports.trap,
            STAT_CALCULATOR: gunCalcNames.trap
          }
        }
      ]
    },
    "Hexa-Trapper"
  )),
  (exports.tri = {
    PARENT: [exports.genericTank],
    LABEL: "Tri-Angle",
    BODY: {
      HEALTH: 0.8 * base.HEALTH,
      SHIELD: 0.8 * base.SHIELD,
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 6,
    GUNS: [
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.booster = {
    PARENT: [exports.genericTank],
    LABEL: "Booster",
    BODY: {
      HEALTH: 0.6 * base.HEALTH,
      SHIELD: 0.6 * base.SHIELD,
      DENSITY: 0.2 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.muchmorerecoil
          ]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.fighter = {
    PARENT: [exports.genericTank],
    LABEL: "Fighter",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [16, 8, 1, 0, -1, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [16, 8, 1, 0, 1, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.twighter = {
    PARENT: [exports.genericTank],
    LABEL: "Twighter",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.weak]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [18, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.weak]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [16, 8, 1, 0, -1, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [16, 8, 1, 0, 1, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.raptor = {
    PARENT: [exports.genericTank],
    LABEL: "Raptor",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [16, 8, 1, 0, -1, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [16, 8, 1, 0, 1, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Side"
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.brutalizer = {
    PARENT: [exports.genericTank],
    LABEL: "Surfer",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
          TYPE: [exports.autoswarm],
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
          TYPE: [exports.autoswarm],
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.jet = {
    PARENT: [exports.genericTank],
    LABEL: "Jet",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 130, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 230, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.torpedo = {
    PARENT: [exports.genericTank],
    LABEL: "Torpedo",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 5.5, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 130, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 230, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      }
    ]
  }),
  (exports.warplane = {
    PARENT: [exports.genericTank],
    LABEL: "Warplane",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 130, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 230, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.bomber = {
    PARENT: [exports.genericTank],
    LABEL: "Bomber",
    BODY: {
      DENSITY: 0.6 * base.DENSITY
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 130, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 230, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
          TYPE: exports.bullet,
          LABEL: "Wing"
        }
      },
      {
        POSITION: [14, 8, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.autotri = makeAuto(exports.tri)),
  (exports.autotri.BODY = {
    SPEED: base.SPEED
  }),
  (exports.falcon = {
    PARENT: [exports.genericTank],
    LABEL: "Falcon",
    DANGER: 7,
    BODY: {
      ACCELERATION: 0.8 * base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    ALT_FIRE_TOOLTIP: !0,
    GUNS: [
      {
        POSITION: [27, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.sniper,
            g.assass,
            g.lessreload
          ]),
          TYPE: exports.bullet,
          LABEL: "Assassin",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0]
      },
      {
        POSITION: [16, 8, 1, 0, 0, 150, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 210, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 180, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.auto = {
    PARENT: [exports.genericTank],
    LABEL: "Auto",
    DANGER: 6,
    BODY: {
      HEALTH: 0.8 * base.HEALTH
    },
    TURRETS: [
      {
        POSITION: [11, 0, 0, 0, 190, 1],
        TYPE: exports.autoTurret
      }
    ]
  }),
  (exports.auto3 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-3",
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.auto3gun
      }
    ]
  }),
  (exports.auto5 = {
    PARENT: [exports.genericTank],
    LABEL: "Auto-5",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto5gun
      },
      {
        POSITION: [11, 8, 0, 72, 190, 0],
        TYPE: exports.auto5gun
      },
      {
        POSITION: [11, 8, 0, 144, 190, 0],
        TYPE: exports.auto5gun
      },
      {
        POSITION: [11, 8, 0, 216, 190, 0],
        TYPE: exports.auto5gun
      },
      {
        POSITION: [11, 8, 0, 288, 190, 0],
        TYPE: exports.auto5gun
      }
    ]
  }),
  (exports.heavy3 = {
    BODY: {
      SPEED: 0.95 * base.SPEED
    },
    PARENT: [exports.genericTank],
    LABEL: "Mega-3",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [14, 8, 0, 0, 190, 0],
        TYPE: exports.heavy3gun
      },
      {
        POSITION: [14, 8, 0, 120, 190, 0],
        TYPE: exports.heavy3gun
      },
      {
        POSITION: [14, 8, 0, 240, 190, 0],
        TYPE: exports.heavy3gun
      }
    ]
  }),
  (exports.architect = {
    LABEL: "Architect",
    BODY: {
      SPEED: 1.1 * base.SPEED
    },
    PARENT: [exports.genericTank],
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [12, 8, 0, 0, 190, 0],
        TYPE: exports.tritrapgun
      },
      {
        POSITION: [12, 8, 0, 120, 190, 0],
        TYPE: exports.tritrapgun
      },
      {
        POSITION: [12, 8, 0, 240, 190, 0],
        TYPE: exports.tritrapgun
      }
    ]
  }),
  (exports.auto4 = {
    PARENT: [exports.genericTank],
    DANGER: 5,
    LABEL: "Auto-4",
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: exports.auto4gun
      }
    ]
  }),
  (exports.flanktrap = {
    PARENT: [exports.genericTank],
    LABEL: "Trap Guard",
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 8, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [4, 8, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.guntrap = {
    PARENT: [exports.genericTank],
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
      FOV: 1.25 * base.FOV
    },
    GUNS: [
      {
        POSITION: [16, 4, 1, 0, -3.5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.tonsmorrecoil,
            g.lotsmorrecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.tonsmorrecoil,
            g.lotsmorrecoil
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 11, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [4, 11, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.snipeGuard = {
    PARENT: [exports.genericTank],
    LABEL: "Snipe Guard",
    BODY: {
      ACCELERATION: 0.7 * base.ACCEL,
      FOV: 1.2 * base.FOV
    },
    DANGER: 7,
    GUNS: [
      {
        POSITION: [24, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [13, 8.5, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.testbed.UPGRADES_TIER_1 = [exports.betaTanks, exports.observer]),
  (exports.betaTanks.UPGRADES_TIER_1 = [
    exports.rocketeer,
    exports.sentinal,
    exports.general,
    exports.autohiveshooter,
    exports.ordnance,
    exports.flamethrower,
    exports.inferno,
    exports.bentswarm
  ]),
  (exports.moderator.UPGRADES_TIER_1 = [
    exports.testbed,
    exports.misc,
    exports.dominators
  ]),
  (exports.seniorTester.UPGRADES_TIER_1 = [exports.testbed, exports.misc]),
  (exports.developer.UPGRADES_TIER_1 = [
    exports.testbed,
    exports.bosses,
    exports.misc,
    exports.arenaClosers,
    exports.unfinished,
    exports.dominators
  ]),
  (exports.administrator.UPGRADES_TIER_1 = [
    exports.testbed,
    exports.misc,
    exports.dominators
  ]),
  (exports.basic.UPGRADES_TIER_1 = [
    exports.twin,
    exports.sniper,
    exports.machine,
    exports.flank,
    exports.director,
    exports.pound,
    exports.trapper,
    exports.auto,
    exports.micro
  ]),
  (exports.basic.UPGRADES_TIER_3 = [exports.single]),
  (exports.auto.UPGRADES_TIER_3 = [exports.auto3]),
  (exports.basic.UPGRADES_TIER_2 = [exports.smash]),
  (exports.smash.UPGRADES_TIER_3 = [
    exports.megasmash,
    exports.landmine,
    exports.spike,
    exports.autosmash
  ]),
  (exports.twin.UPGRADES_TIER_2 = [
    exports.double,
    exports.bent,
    exports.gunner,
    exports.hexa,
    exports.imerium
  ]),
  (exports.twin.UPGRADES_TIER_3 = [exports.triple, exports.dual]),
  (exports.dual.UPGRADES_TIER_3 = [exports.pair]),
  (exports.imerium.UPGRADES_TIER_3 = [exports.boxer, exports.flashlight]),
  (exports.flashlight.UPGRADES_TIER_3 = [exports.eyeofender]),
  (exports.double.UPGRADES_TIER_3 = [
    exports.tripletwin,
    exports.split,
    exports.autodouble,
    exports.bentdouble
  ]),
  (exports.bent.UPGRADES_TIER_3 = [
    exports.penta,
    exports.spread,
    exports.benthybrid,
    exports.bentdouble,
    exports.triple
  ]),
  (exports.gunner.UPGRADES_TIER_3 = [
    exports.autogunner,
    exports.sharpshooter,
    exports.nailgun,
    exports.auto4,
    exports.machinegunner,
    exports.cyclone
  ]),
  (exports.sniper.UPGRADES_TIER_2 = [
    exports.assassin,
    exports.hunter,
    exports.mini,
    exports.flanktrap,
    exports.rifle
  ]),
  (exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon]),
  (exports.hunter.UPGRADES_TIER_3 = [
    exports.preda,
    exports.autoHunter,
    exports.poach
  ]),
  (exports.builder.UPGRADES_TIER_3 = [
    exports.construct,
    exports.autobuilder,
    exports.engineer,
    exports.conq
  ]),
  (exports.machine.UPGRADES_TIER_2 = [
    exports.artillery,
    exports.mini,
    exports.gunner
  ]),
  (exports.machine.UPGRADES_TIER_3 = [exports.spray]),
  (exports.inferno.UPGRADES_TIER_3 = [
    exports.backfire,
    exports.twinferno,
    exports.hothead,
    exports.welder
  ]),
  (exports.flamethrower.UPGRADES_TIER_3 = [
    exports.backfire,
    exports.onslaught,
    exports.firehydrant,
    exports.firetruck,
    exports.wildfire,
    exports.lavapup,
    exports.pyro,
    exports.furnace
  ]),
  (exports.destroy.UPGRADES_TIER_3 = [
    exports.anni,
    exports.hybrid,
    exports.construct,
    exports.shotgun2
  ]),
  (exports.artillery.UPGRADES_TIER_3 = [
    exports.mortar,
    exports.driller,
    exports.cannonry,
    exports.spread,
    exports.skimmer
  ]),
  (exports.mini.UPGRADES_TIER_3 = [
    exports.stream,
    exports.nailgun,
    exports.hybridmini
  ]),
  (exports.flank.UPGRADES_TIER_2 = [
    exports.hexa,
    exports.tri,
    exports.auto3,
    exports.flanktrap,
    exports.accelerator,
    exports.imerium
  ]),
  (exports.flank.UPGRADES_TIER_3 = []),
  (exports.tri.UPGRADES_TIER_3 = [
    exports.fighter,
    exports.booster,
    exports.falcon,
    exports.jet,
    exports.autotri,
    exports.brutalizer
  ]),
  (exports.jet.UPGRADES_TIER_3 = [
    exports.torpedo,
    exports.warplane,
    exports.bomber
  ]),
  (exports.fighter.UPGRADES_TIER_3 = [exports.twighter, exports.raptor]),
  (exports.hexa.UPGRADES_TIER_3 = [
    exports.octo,
    exports.hexatrap,
    exports.flankz,
    exports.cyclone,
    exports.heptatrap
  ]),
  (exports.auto3.UPGRADES_TIER_3 = [
    exports.auto5,
    exports.heavy3,
    exports.auto4,
    exports.architect
  ]),
  (exports.flanktrap.UPGRADES_TIER_3 = [
    exports.snipeGuard,
    exports.guntrap,
    exports.fortress
  ]),
  (exports.fortress.UPGRADES_TIER_3 = [exports.bunker]),
  (exports.director.UPGRADES_TIER_2 = [
    exports.overseer,
    exports.cruiser,
    exports.underseer,
    exports.lilfact,
    exports.manager
  ]),
  (exports.manager.UPGRADES_TIER_3 = [exports.maleficitor]),
  (exports.lilfact.UPGRADES_TIER_3 = [exports.factory, exports.autoSpawner]),
  (exports.overseer.UPGRADES_TIER_3 = [
    exports.overlord,
    exports.overtrap,
    exports.overgunner,
    exports.autoover,
    exports.banshee,
    exports.overdrive,
    exports.commander
  ]),
  (exports.underseer.UPGRADES_TIER_3 = [
    exports.necromancer,
    exports.maleficitor
  ]),
  (exports.cruiser.UPGRADES_TIER_3 = [
    exports.carrier,
    exports.battleship,
    exports.fortress,
    exports.autocruiser
  ]),
  (exports.pound.UPGRADES_TIER_2 = [
    exports.destroy,
    exports.artillery,
    exports.multishot,
    exports.launcher
  ]),
  (exports.pound.UPGRADES_TIER_3 = [exports.eaglet]),
  (exports.eaglet.UPGRADES_TIER_3 = [exports.eagle]),
  (exports.launcher.UPGRADES_TIER_3 = [
    exports.skimmer,
    exports.sidewind,
    exports.spinner,
    exports.autoLauncher
  ]),
  (exports.multishot.UPGRADES_TIER_3 = [exports.shotgun2]),
  (exports.trapper.UPGRADES_TIER_2 = [
    exports.tritrapper,
    exports.megatrapper,
    exports.autoTrapper,
    exports.flanktrap,
    exports.builder,
    exports.boomer
  ]),
  (exports.trapper.UPGRADES_TIER_3 = [exports.minitrap]),
  (exports.tritrapper.UPGRADES_TIER_3 = [
    exports.hexatrap,
    exports.heptatrap,
    exports.autotritrap,
    exports.quadtrapper,
    exports.architect
  ]),
  (exports.autoTrapper.UPGRADES_TIER_3 = [
    exports.autotritrap,
    exports.autobuilder
  ]),
  (exports.micro.UPGRADES_TIER_3 = [exports.mini, exports.microbrid]),
  (exports.crasher = {
    TYPE: "crasher",
    LABEL: "Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
      NO_LEAD: !0
    },
    BODY: {
      SPEED: 5,
      ACCEL: 0.01,
      HEALTH: 0.5,
      DAMAGE: 5,
      PENETRATION: 2,
      PUSHABILITY: 0.5,
      DENSITY: 10,
      RESIST: 2
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: !0,
    DRAW_HEALTH: !0
  }),
  (exports.craizer = {
    TYPE: "crasher",
    LABEL: "Crasher",
    COLOR: 1,
    SHAPE: 300,
    SIZE: 19,
    VARIES_IN_SIZE: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
      NO_LEAD: !0
    },
    BODY: {
      SPEED: 5,
      ACCEL: 0.01,
      HEALTH: 0.5,
      DAMAGE: 5,
      PENETRATION: 2,
      PUSHABILITY: 0.5,
      DENSITY: 10,
      RESIST: 2
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothWithMotion",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: !0,
    DRAW_HEALTH: !0
  }),
  (exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: "crasher",
    LABEL: "Sentry",
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    SIZE: 10,
    SKILL: skillSet({
      rld: 0.5,
      dam: 0.8,
      pen: 0.8,
      str: 0.1,
      spd: 1,
      atk: 0.5,
      hlt: 0,
      shi: 0,
      rgn: 0.7,
      mob: 0
    }),
    VALUE: 1500,
    VARIES_IN_SIZE: !0,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    AI: {
      NO_LEAD: !0
    },
    BODY: {
      FOV: 0.5,
      ACCEL: 0.006,
      DAMAGE: 2 * base.DAMAGE,
      SPEED: 0.5 * base.SPEED
    },
    MOTION_TYPE: "motor",
    FACING_TYPE: "smoothToTarget",
    HITS_OWN_TYPE: "hard",
    HAS_NO_MASTER: !0,
    DRAW_HEALTH: !0,
    GIVE_KILL_MESSAGE: !0
  }),
  (exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    INDEPENDENT: !1,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
      {
        POSITION: [16, 14, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.lowpower,
            g.fast,
            g.halfreload
          ]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      }
    ]
  }),
  (exports.sentrySwarm2 = {
    PARENT: [exports.genericTank],
    DANGER: 3,
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "hangOutNearMaster",
      "mapTargetToGoal"
    ],
    HITS_OWN_TYPE: "hard",
    TYPE: "minion",
    CLEAR_ON_MASTER_UPGRADE: !0,
    SHAPE: 3,
    GUNS: [
      {
        POSITION: [7, 14, 0.6, 7, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  }),
  (exports.sentryTrap2 = {
    PARENT: [exports.genericTank],
    DANGER: 3,
    TYPE: "minion",
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "hangOutNearMaster",
      "mapTargetToGoal"
    ],
    CLEAR_ON_MASTER_UPGRADE: !0,
    SHAPE: 3,
    TURRETS: [
      {
        POSITION: [12, 0, 0, 180, 360, 1],
        TYPE: exports.trapTurret
      }
    ]
  }),
  (exports.sentryGun2 = {
    PARENT: [exports.genericTank],
    HITS_OWN_TYPE: "hard",
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "hangOutNearMaster",
      "mapTargetToGoal"
    ],
    TYPE: "minion",
    CLEAR_ON_MASTER_UPGRADE: !0,
    DANGER: 3,
    SHAPE: 3,
    TURRETS: [
      {
        POSITION: [12, 0, 0, 180, 360, 1],
        TYPE: exports.heavy3gun
      }
    ]
  }),
  (exports.sentrySwarm = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [
      {
        POSITION: [7, 14, 0.6, 7, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  }),
  (exports.summoner_lite = {
    PARENT: [exports.sentry],
    LABEL: 'Summoner Lite',
    SHAPE: 4,
    FACING_TYPE: 'autospin',
    DANGER: 5,
    COLOR: 3,
    MAX_CHILDREN: 48,
    GUNS: [
      {
        POSITION: [5, 10, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
          TYPE: exports.bee2,
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: !0,
        }
      }, {
        POSITION: [5, 10, 0.6, 7, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
          TYPE: exports.bee2,
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: !0,
        }
      }, {
        POSITION: [5, 10, 0.6, 7, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
          TYPE: exports.bee2,
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: !0,
        }
      }, {
        POSITION: [5, 10, 0.6, 7, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.doublereload]),
          TYPE: exports.bee2,
          STAT_CALCULATOR: gunCalcNames.swarm,
          AUTOFIRE: !0,
        }
      }
    ]
  }),  (exports.sentrySwarmpet = {
    PARENT: [exports.genericTank],
    DANGER: 3,
    COLOR: 5,
    SHAPE: 3,
    INDEPENDENT: !0,
    GUNS: [
      {
        POSITION: [7, 14, 0.6, 7, 0, 180, 0]
      }
    ]
  }),
  (exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
    type: exports.heavy3gun,
    size: 12
  })),
  (exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
    type: exports.trapTurret,
    size: 12
  })),
  (exports.sentries = {
  PARENT: [exports.genericTank],
  LABEL: 'Sentries/Crashers',
  GUNS: [
      {
        POSITION: [18, 10, -1.4, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.sentries.UPGRADES_TIER_1 = [exports.crasher, exports.sentrySwarm, exports.sentryGun, exports.sentryTrap, exports.summoner_lite]),
  (exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: "miniboss",
    DANGER: 6,
    SKILL: skillSet({
      rld: 0.7,
      dam: 0.5,
      pen: 0.8,
      str: 0.8,
      spd: 0.2,
      atk: 0.3,
      hlt: 1,
      shi: 0.7,
      rgn: 0.7,
      mob: 0
    }),
    LEVEL: 45,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: {
      NO_LEAD: !0
    },
    FACING_TYPE: "autospin",
    HITS_OWN_TYPE: "hard",
    BROADCAST_MESSAGE: "A visitor has left!"
  }),
  (exports.crasherSpawner = {
    PARENT: [exports.genericTank],
    LABEL: "Spawned",
    STAT_NAMES: statnames.drone,
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 5,
    INDEPENDENT: !0,
    AI: {
      chase: !0
    },
    MAX_CHILDREN: 4,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
          TYPE: [
            exports.drone,
            {
              LABEL: "Crasher",
              VARIES_IN_SIZE: !0,
              DRAW_HEALTH: !0
            }
          ],
          SYNCS_SKILLS: !0,
          AUTOFIRE: !0,
          STAT_CALCULATOR: gunCalcNames.drone
        }
      }
    ]
  }),
  (exports.elite = {
    PARENT: [exports.miniboss],
    LABEL: "Elite Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 30,
    VARIES_IN_SIZE: !0,
    VALUE: 15e4,
    BODY: bossStats()
  }),
  (exports.elite_destroyer = {
    PARENT: [exports.elite],
    GUNS: [
      {
        POSITION: [5, 16, 1, 6, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
          TYPE: exports.bullet,
          LABEL: "Devastator"
        }
      },
      {
        POSITION: [5, 16, 1, 6, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
          TYPE: exports.bullet,
          LABEL: "Devastator"
        }
      },
      {
        POSITION: [5, 16, 1, 6, 0, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
          TYPE: exports.bullet,
          LABEL: "Devastator"
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [11, 0, 0, 180, 360, 0],
        TYPE: [exports.crasherSpawner]
      },
      {
        POSITION: [11, 0, 0, 60, 360, 0],
        TYPE: [exports.crasherSpawner]
      },
      {
        POSITION: [11, 0, 0, -60, 360, 0],
        TYPE: [exports.crasherSpawner]
      },
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: [
          exports.bigauto4gun,
          {
            INDEPENDENT: !0,
            COLOR: 5
          }
        ]
      }
    ]
  }),
  (exports.elite_spawner = {
    PARENT: [exports.elite],
    GUNS: [
      {
        POSITION: [4, 17, 1, 7.5, 0, 180, 0]
      },
      {
        POSITION: [2, 20, 1, 10.5, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.sentrySwarm2,
          MAX_CHILDREN: 2,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [4, 17, 1, 7.5, 0, 60, 0]
      },
      {
        POSITION: [2, 20, 1, 10.5, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.sentryTrap2,
          MAX_CHILDREN: 2,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [4, 17, 1, 7.5, 0, -60, 0]
      },
      {
        POSITION: [2, 20, 1, 10.5, 0, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory]),
          TYPE: exports.sentryGun2,
          MAX_CHILDREN: 2,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
          exports.auto4gun,
          {
            INDEPENDENT: !0,
            COLOR: 5
          }
        ]
      }
    ]
  }),
  (exports.elite_gunner = {
    PARENT: [exports.elite],
    FACING_TYPE: "toTarget",
    GUNS: [
      {
        POSITION: [14, 16, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [4, 16, 1.5, 14, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: [
            exports.pillbox,
            {
              INDEPENDENT: !0
            }
          ]
        }
      },
      {
        POSITION: [6, 14, -2, 2, 0, 60, 0]
      },
      {
        POSITION: [6, 14, -2, 2, 0, 300, 0]
      }
    ],
    AI: {
      NO_LEAD: !1
    },
    TURRETS: [
      {
        POSITION: [14, 8, 0, 60, 180, 0],
        TYPE: [exports.auto4gun]
      },
      {
        POSITION: [14, 8, 0, 300, 180, 0],
        TYPE: [exports.auto4gun]
      }
    ]
  }),
  (exports.elite_sprayer = {
    PARENT: [exports.elite],
    AI: {
      NO_LEAD: !1
    },
    TURRETS: [
      {
        POSITION: [9, 6, 6, 180, 190, 0],
        TYPE: [
          exports.sprayTurret,
          {
            COLOR: 16
          }
        ]
      },
      {
        POSITION: [9, 6, 6, 60, 190, 0],
        TYPE: [
          exports.sprayTurret,
          {
            COLOR: 16
          }
        ]
      },
      {
        POSITION: [9, 6, 6, -60, 190, 0],
        TYPE: [
          exports.sprayTurret,
          {
            COLOR: 16
          }
        ]
      },
      {
        POSITION: [9, 6, -6, 180, 190, 0],
        TYPE: [
          exports.sprayTurret,
          {
            COLOR: 16
          }
        ]
      },
      {
        POSITION: [9, 6, -6, 60, 190, 0],
        TYPE: [
          exports.sprayTurret,
          {
            COLOR: 16
          }
        ]
      },
      {
        POSITION: [9, 6, -6, -60, 190, 0],
        TYPE: [
          exports.sprayTurret,
          {
            COLOR: 16
          }
        ]
      },
      {
        POSITION: [6, 0, 0, 360, 360, 1],
        TYPE: [
          exports.machineTurret,
          {
            COLOR: 16
          }
        ]
      }
    ]
  }),
  (exports.elite_battleship = {
    PARENT: [exports.elite],
    VALUE: 3e5,
    GUNS: [],
    TURRETS: [
      {
        POSITION: [5, 8, 0, 0, 360, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [5, 8, 0, 120, 360, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [5, 8, 0, 240, 360, 1],
        TYPE: exports.auto3gun
      }
    ]
  });
for (let e = 0; e < 3; e++)
  exports.elite_battleship.GUNS.push(
    {
      POSITION: [4, 7, 0.6, 7, 0, 120 * e + 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          [3, 1, 1, 1, 1, 0.2, 1, 2, 2, 1, 1, 1, 1]
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 7, 0.6, 7, -8, 120 * e + 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          [3, 1, 1, 1, 1, 0.2, 1, 2, 2, 1, 1, 1, 1]
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [4, 7, 0.6, 7, 8, 120 * e + 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          [3, 1, 1, 1, 1, 0.2, 1, 2, 2, 1, 1, 1, 1]
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  );
(exports.palisade = (() => {
  let e = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload
    ]),
    TYPE: exports.minion,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: !0,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: !0,
    WAIT_TO_CYCLE: !0
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 30,
    VALUE: 5e5,
    BODY: bossStats({
      health: 2,
      speed: 0.5
    }),
    GUNS: [
      {
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: e
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: e
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: e
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: !0,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: e
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: e
      }
    ],
    TURRETS: [
      {
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.trapTurret
      }
    ]
  };
})()),
  (exports.skimboss = {
    PARENT: [exports.miniboss],
    LABEL: "Elite Skimmer",
    SIZE: 40,
    VALUE: 5e5,
    BODY: bossStats(),
    SHAPE: 3,
    COLOR: 2,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [15, 5, 0, 60, 170, 0],
        TYPE: exports.skimturret
      },
      {
        POSITION: [15, 5, 0, 180, 170, 0],
        TYPE: exports.skimturret
      },
      {
        POSITION: [15, 5, 0, 300, 170, 0],
        TYPE: exports.skimturret
      }
    ]
 }),
  (exports.summoner = {
    PARENT: [exports.miniboss],
    LABEL: "Summoner",
    DANGER: 8,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 30,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 270, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.unnamedBoss = {
    PARENT: [exports.miniboss],
    LABEL: "Unnamed Boss",
    DANGER: 8,
    SHAPE: 8,
    COLOR: 0,
    SIZE: 40,
    MAX_CHILDREN: 4,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 270, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [2.7, 8.65, 1.2, 8, 0, 180, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
          TYPE: [
            exports.sunchip,
            {
              MOTION_TYPE: "summoned"
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.autobullet = {
    PARENT: [exports.bullet],
    CONTROLLERS: ["nearestDifferentMaster"],
    TURRETS: [
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: exports.autoTurret
      }
    ]
  }),
  (exports.conjure = {
    PARENT: [exports.miniboss],
    LABEL: "Conjure",
    COLOR: 17,
    SIZE: 30,
    FACING_TYPE: 'toTarget',
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [
      {
        POSITION: [15, 13, 1, 6, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.anni]),
          TYPE: exports.autobullet
        }
      },
      {
        POSITION: [8, 14, -1.3, 4, 0, 0, 0]
      }
    ]
  }),
  (exports.tatapo_shard = {
    PARENT: [exports.genericTank],
    LABEL: "",
    COLOR: 7,
    TURRETS: [
      {
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: exports.auto3gun
      }
    ]
  }),
  (exports.tatapo_core = {
    PARENT: [exports.miniboss],
    LABEL: "Tatapo Core",
    DANGER: 12,
    SHAPE: 4,
    COLOR: 6,
    SIZE: 30,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [
      {
        POSITION: [14, 1.25, 1, 0, -2, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      }, 
        {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 0, 0]
      },
      {
        POSITION: [14, 1.25, 1, 0, -2, 90, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 90, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 90, 0]
      },
      {
        POSITION: [14, 1, 1, 0, -2, 180, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 180, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 180, 0]
      },
      {
        POSITION: [14, 1.25, 1, 0, -2, 270, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 270, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 270, 0]
      }
    ],
    TURRETS: [
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.preda
      }
    ]
  }),
  (exports.tataposhard = {
    PARENT: [exports.miniboss],
    LABEL: "Tatapo Shard",
    COLOR: 7,
    SIZE: 20,
    TURRETS: [
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.sniper
      },
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.twin
      },
      {
        POSITION: [11, 8, 0, 0, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 8, 0, 120, 190, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [11, 8, 0, 240, 190, 0],
        TYPE: exports.auto3gun
      }
    ]
  }),
  (exports.tatapo = {
    PARENT: [exports.miniboss],
    LABEL: "Tatapo",
    DANGER: 12,
    SHAPE: 4,
    COLOR: 6,
    SIZE: 30,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [
      {
        POSITION: [14, 1.25, 1, 0, -2, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
        {
        POSITION: [1, 1.25, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([[
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]]),
          //TYPE: exports.tatapo_core,
          TYPE: exports.bullet,
          SHOOT_ON_DEATH: !0,
          MAX_CHILDREN: 1,
          PERSISTS_AFTER_DEATH: true
        }
      },
        {
        POSITION: [1, 1.25, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([[
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]]),
          //TYPE: exports.tataposhard,
          TYPE: exports.bullet,
          SHOOT_ON_DEATH: !0,
          MAX_CHILDREN: 4,
         PERSISTS_AFTER_DEATH: true
        }
      }, 
        {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 0, 0]
      },
      {
        POSITION: [14, 1.25, 1, 0, -2, 90, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 90, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 90, 0]
      },
      {
        POSITION: [14, 1, 1, 0, -2, 180, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 180, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 180, 0]
      },
      {
        POSITION: [14, 1.25, 1, 0, -2, 270, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14, 1.25, 1, 0, 2, 270, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15, 1.25, 1, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 6, -1.8, 6.5, 0, 270, 0]
      }
    ],
    TURRETS: [
      {
        POSITION: [10, 13.5, 0, 45, 0, 1],
        TYPE: exports.tatapo_shard
      },
      {
        POSITION: [10, 13.5, 0, 45 * 3, 0, 1],
        TYPE: exports.tatapo_shard
      },
      {
        POSITION: [10, 13.5, 0, 45 * 5, 0, 1],
        TYPE: exports.tatapo_shard
      },
      {
        POSITION: [10, 13.5, 0, -45, 0, 1],
        TYPE: exports.tatapo_shard
      },
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: exports.preda
      }
    ]
  }),
  (exports.abomination = {
    PARENT: [exports.miniboss],
    DANGER: 12,
    COLOR: 0,
    SIZE: 30,
    LABEL: "Abomination",
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [13, 6, 0, 45, 160, 0],
        TYPE: [exports.bigauto4gun, { COLOR: 0 }]
      },
      {
        POSITION: [13, 6, 0, 135, 160, 0],
        TYPE: [exports.bigauto4gun, { COLOR: 0 }]
      },
      {
        POSITION: [13, 6, 0, 225, 160, 0],
        TYPE: [exports.bigauto4gun, { COLOR: 0 }]
      },
      {
        POSITION: [13, 6, 0, 315, 160, 0],
        TYPE: [exports.bigauto4gun, { COLOR: 0 }]
      },
      {
        POSITION: [4, 8, 0, 0, 360, 1],
        TYPE: [exports.director, { COLOR: 0 }]
      },
      {
        POSITION: [4, 8, 0, 90, 360, 1],
        TYPE: [exports.director, { COLOR: 0 }]
      },
      {
        POSITION: [4, 8, 0, 180, 360, 1],
        TYPE: [exports.director, { COLOR: 0 }]
      },
      {
        POSITION: [4, 8, 0, 270, 360, 1],
        TYPE: [exports.director, { COLOR: 0 }]
      },
      {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [exports.mortar, { COLOR: 0 }]
      }
    ]
  });
let omegaOctogonArray = [];
for (let e = 0; e < 6; e++)
  omegaOctogonArray.push({
    POSITION: [6, 9, 0, e * (360 / 6) + 10, 190, 1],
    TYPE: [
      exports.assassin,
      {
        CONTROLLERS: ["nearestDifferentMaster"]
      }
    ]
  });
(exports.omegaocto = {
  PARENT: [exports.miniboss],
  LABEL: "Omega Octogon",
  DANGER: 8,
  SHAPE: -8,
  COLOR: 14,
  SIZE: 40,
  MAX_CHILDREN: 28,
  FACING_TYPE: "autospin",
  VALUE: 3e5,
  BODY: bossStats(),
  GUNS: [
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 45, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 135, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 225, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [2.7, 5.65, -1.2, 8, 0, 315, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
        TYPE: [
          exports.sunchip,
          {
            MOTION_TYPE: "summoned"
          }
        ],
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    }
  ],
  TURRETS: [
    ...omegaOctogonArray,
    {
      POSITION: [9, 0, 0, 0, 190, 1],
      TYPE: exports.micro
    }
  ]
}),
  (exports.guardian = {
    PARENT: [exports.miniboss],
    LABEL: "Guardian",
    DANGER: 8,
    COLOR: 5,
    SIZE: 30,
    SHAPE: 3,
    MAX_CHILDREN: 28,
    FACING_TYPE: "toTarget",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [
      {
        POSITION: [2.7, 13.65, 1.1, 8, 0, 180, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
          TYPE: exports.swarm,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.swarm,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.fallenOverlord = {
    PARENT: [exports.miniboss],
    LABEL: "Fallen Overlord",
    DANGER: 8,
    COLOR: 18,
    SIZE: 30,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.fallenBooster = {
    PARENT: [exports.miniboss],
    LABEL: "Fallen Booster",
    DANGER: 8,
    COLOR: 18,
    SIZE: 30,
    FACING_TYPE: "toTarget",
    VALUE: 3e5,
    BODY: bossStats({
      speed: 12
    }),
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.muchmorerecoil
          ]),
          TYPE: exports.bullet,
          LABEL: "Front"
        }
      },
      {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.thruster,
            g.halfrecoil
          ]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
          TYPE: exports.bullet,
          LABEL: gunCalcNames.thruster
        }
      }
    ]
  }),
  (exports.quadMachine = {
    PARENT: [exports.genericTank],
    LABEL: "Quad Machine",
    GUNS: [
      {
        POSITION: [12, 10, 1.4, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [12, 10, 1.4, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet
        }
      }
    ]
  }),
  (exports.hexaraider = {
    PARENT: [exports.miniboss],
    LABEL: "Hexaraider",
    SHAPE: 6,
    SIZE: 30,
    COLOR: 0,
    VALUE: 3e5,
    GUNS: [],
    TURRETS: [
      {
        POSITION: [7, 0, 0, 360, 360, 1],
        TYPE: [
          exports.quadMachine,
          {
            COLOR: 0
          }
        ]
      }
    ]
  });
for (let e = 0; e < 6; e++)
  exports.hexaraider.GUNS.push(
    {
      POSITION: [6, 2, 1.6, 7, 0, 60 * e + 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 2, 1.6, 7, -4, 60 * e + 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    },
    {
      POSITION: [6, 2, 1.6, 7, 4, 60 * e + 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.swarm
      }
    }
  );
exports.nestKeeper = {
  PARENT: [exports.miniboss],
  LABEL: "Nest Keeper",
  SHAPE: 5,
  SIZE: 50,
  COLOR: 14,
  VALUE: 500000,
  BODY: bossStats({
    health: 1.5,
    damage: 0.6,
    speed: 2.5
  }),
  GUNS: [],
  TURRETS: [
    {
      POSITION: [8.5, 0, 0, 360, 360, 1],
      TYPE: exports.boomer
    }
  ]
};
for (let i = 0; i < 5; i++) {
  exports.nestKeeper.GUNS.push({
    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [4.15, 7, 1.25, 8, 0, (360 * i) / 5 + 36, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.drone,
        g.over,
        [1, 1, 1, 0.9, 2, 0.45, 0.75, 0.9, 0.9, 1, 0.9, 1, 1]
      ]),
      TYPE: [exports.drone, { BODY: { FOV: 5 }, INDEPENDENT: true }],
      MAX_CHILDREN: 2,
      STAT_CALCULATOR: gunCalcNames.drone
    }
  });
  exports.nestKeeper.TURRETS.push({
    POSITION: [7.75, 9, 0, (360 * i) / 5, 90, 0],
    TYPE: exports.auto4gun
  });
}
(exports.eliteCruiser = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Cruiser",
  DANGER: 8,
  SHAPE: 4,
  COLOR: 1,
  SIZE: 30,
  FACING_TYPE: "autospin",
  VALUE: 3e5,
  BODY: bossStats({
    health: 2,
    speed: 0.5
  }),
  GUNS: [
    {
      POSITION: [3.5, 2.65, 1.2, 8, -5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
        TYPE: exports.swarm,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [3.5, 2.65, 1.2, 8, -5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
        TYPE: exports.swarm,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [3.5, 2.65, 1.2, 8, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [3.5, 2.65, 1.2, 8, -5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [3.5, 2.65, 1.2, 8, 5, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.weak]),
        TYPE: exports.swarm,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [3.5, 2.65, 1.2, 8, 5, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bitlessreload, g.weak]),
        TYPE: exports.swarm,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [3.5, 2.65, 1.2, 8, 5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bitlessreload, g.weak]),
        TYPE: exports.swarm,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    },
    {
      POSITION: [3.5, 2.65, 1.2, 8, 5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.bitlessreload, g.weak]),
        TYPE: exports.swarm,
        AUTOFIRE: !0,
        SYNCS_SKILLS: !0,
        STAT_CALCULATOR: gunCalcNames.necro,
        WAIT_TO_CYCLE: !0
      }
    }
  ],
  TURRETS: [
    {
      POSITION: [11, 0, 0, 360, 180, 1],
      TYPE: exports.single
    },
    {
      POSITION: [4, 10, 0, 0, 180, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 90, 180, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 180, 180, 0],
      TYPE: exports.autoTurret
    },
    {
      POSITION: [4, 10, 0, 270, 180, 0],
      TYPE: exports.autoTurret
    }
  ]
}),
  (exports.destructor = {
    PARENT: [exports.miniboss],
    LABEL: "Destructor",
    DANGER: 8,
    SHAPE: 8,
    COLOR: 2,
    SIZE: 40,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: bossStats(),
    TURRETS: [
      {
        POSITION: [10, 0, 0, 360, 360, 1],
        TYPE: exports.assassin
      },
      {
        POSITION: [5, 9, 0, 0, 190, 0],
        TYPE: exports.preda
      },
      {
        POSITION: [5, 9, 0, 90, 190, 0],
        TYPE: exports.preda
      },
      {
        POSITION: [5, 9, 0, 180, 190, 0],
        TYPE: exports.preda
      },
      {
        POSITION: [5, 9, 0, 270, 190, 0],
        TYPE: exports.preda
      },
      {
        POSITION: [5, 9, 0, 45, 190, 0],
        TYPE: exports.artillery
      },
      {
        POSITION: [5, 9, 0, 135, 190, 0],
        TYPE: exports.artillery
      },
      {
        POSITION: [5, 9, 0, 225, 190, 0],
        TYPE: exports.artillery
      },
      {
        POSITION: [5, 9, 0, 315, 190, 0],
        TYPE: exports.artillery
      }
    ]
  }),
  (exports.celestialTrapTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Turret",
    INDEPENDENT: !0,
    COLOR: 16,
    GUNS: [
      {
        POSITION: [16, 14, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [4, 14, 1.8, 16, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            [4, 1, 1, 1, 2, 1, 0.25, 1, 1, 1, 10, 1, 1]
          ]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
          AUTOFIRE: !0
        }
      }
    ]
  });
let celestialTrapTurretArray = [];
for (let e = 0; e < 9; e++)
  celestialTrapTurretArray.push({
    POSITION: [6, 9, 0, 40 * e + 20, 0, 0],
    TYPE: [
      exports.celestialTrapTurret,
      {
        CONTROLLERS: ["nearestDifferentMaster"]
      }
    ]
  });
let kronosTrapTurretArray = [];
for (let e = 0; e < 11; e++)
  kronosTrapTurretArray.push({
    POSITION: [6, 9, 0, e * (360 / 11) + 20, 0, 0],
    TYPE: [
      exports.celestialTrapTurret,
      {
        CONTROLLERS: ["nearestDifferentMaster"]
      }
    ]
  });
exports.paladinSunchipBody = {
  PARENT: [exports.genericTank],
  LABEL: "Paladin Sunchip",
  SHAPE: 7,
  SIZE: 10,
  BODY: {
    FOV: 100
  },
  CONTROLLERS: ["counterslowspin", "nearestDifferentMaster"],
  MAX_CHILDREN: 28,
  GUNS: []
};
for (let e = 0; e < 7; e++)
  exports.paladinSunchipBody.GUNS.push({
    POSITION: [4, 6.5, 1.2, 7.5, 0, (360 / 7) * e + 360 / 14, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.summoner]),
      TYPE: [
        exports.sunchip,
        {
          INDEPENDENT: !0,
          BODY: {
            FOV: 5
          }
        }
      ],
      AUTOFIRE: !0,
      SYNCS_SKILLS: !0,
      STAT_CALCULATOR: gunCalcNames.necro
    }
  });
exports.celestialHive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 90
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: !0,
  GUNS: []
};
for (let e = 0; e < 5; e++)
  exports.celestialHive.GUNS.push({
    POSITION: [7, 9.5, 0.6, 7, 0, 72 * e, 0.2 * e],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.swarm,
        g.hive,
        g.bees,
        [1.5, 1, 1, 1, 1, 1.5, 1, 1.5, 1.5, 0.5, 10, 1, 1]
      ]),
      TYPE: exports.bee,
      AUTOFIRE: !0,
      STAT_CALCULATOR: gunCalcNames.swarm
    }
  });
(exports.paladinSwarmer = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  BODY: {
    FOV: 1.5 * base.FOV
  },
  INDEPENDENT: !0,
  LABEL: "Swarmer",
  GUNS: [
    {
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 0.75, 1, 1, 1]
        ]),
        TYPE: exports.celestialHive
      }
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0]
    }
  ]
}),
  (exports.paladinSwarmerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Paladin Swarmer",
    SHAPE: 5,
    SKILL: setBuild("5555550555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.paladinSwarmer
      },
      {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.paladinSwarmer
      },
      {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.paladinSwarmer
      },
      {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.paladinSwarmer
      },
      {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.paladinSwarmer
      }
    ]
  }),
  (exports.zaphkielLite = {
    PARENT: [exports.genericTank],
    LABEL: "Celestial Lite",
    SIZE: 30,
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
      HEALTH: 25 * base.HEALTH,
      PUSHABILITY: 3
    },
    MAX_CHILDREN: 25,
    SHAPE: 3,
    VALUE: 25e4,
    CONTROLLERS: ["slowSpin"],
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    COLOR: 2,
    GUNS: [
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [3, 12, 1.2, 8, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [3, 2, 2, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: [
            exports.triangle,
            {
              BODY: {
                ACCELERATION: 0.005
              }
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [3, 12, 1.2, 8, 0, -60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [3, 2, 2, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: [
            exports.triangle,
            {
              BODY: {
                ACCELERATION: 0.005
              }
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [3, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [3, 2, 2, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: [
            exports.triangle,
            {
              BODY: {
                ACCELERATION: 0.005
              }
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: [
          exports.skimturret,
          {
            COLOR: 2
          }
        ]
      }
    ]
  }),
  (exports.theiaLite = {
    PARENT: [exports.genericTank],
    LABEL: "Celestial Lite",
    SIZE: 30,
    STAT_NAMES: statnames.drone,
    DANGER: 5,
    BODY: {
      HEALTH: 25 * base.HEALTH,
      PUSHABILITY: 3
    },
    MAX_CHILDREN: 25,
    SHAPE: 4,
    VALUE: 25e4,
    CONTROLLERS: ["slowSpin"],
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    COLOR: 13,
    GUNS: [
      {
        POSITION: [15, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 90, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [15, 7, 1, 0, 0, 270, 0]
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap
        }
      },
      {
        POSITION: [3, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [3, 2, 2, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: [
            exports.square,
            {
              BODY: {
                ACCELERATION: 0.005
              }
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [3, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [3, 2, 2, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: [
            exports.square,
            {
              BODY: {
                ACCELERATION: 0.005
              }
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [3, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [3, 2, 2, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: [
            exports.square,
            {
              BODY: {
                ACCELERATION: 0.005
              }
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      },
      {
        POSITION: [3, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [3, 2, 2, 0.6, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          ]),
          TYPE: [
            exports.square,
            {
              BODY: {
                ACCELERATION: 0.005
              }
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.necro
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: [
          exports.spinner,
          {
            COLOR: 13
          }
        ]
      }
    ]
  }),
  (exports.paladin = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Paladin",
    COLOR: 14,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...celestialTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.paladinSunchipBody,
          {
            COLOR: 14
          }
        ]
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
          exports.paladinSwarmerBody,
          {
            COLOR: 14
          }
        ]
      }
    ]
  }),
  (exports.freyjaCruiserTurret = {
    PARENT: [exports.genericTank],
    LABEL: "",
    DANGER: 6,
    INDEPENDENT: !0,
    CONTROLLERS: ["nearestDifferentMaster"],
    STAT_NAMES: statnames.swarm,
    BODY: {
      FOV: 10 * base.FOV
    },
    GUNS: [
      {
        POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.swarm,
            [4, 0, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 10, 1, 1]
          ]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.swarm,
            [4, 0, 1, 1, 0.9, 0.9, 0.9, 1, 1, 1, 10, 1, 1]
          ]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm
        }
      }
    ]
  }),
  (exports.freyjaCruiserBody = {
    PARENT: [exports.genericTank],
    LABEL: "Freyja Swarm",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [
      {
        POSITION: [8, 9, 0, 180, 180, 0],
        TYPE: exports.freyjaCruiserTurret
      },
      {
        POSITION: [8, 9, 0, 900 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
      },
      {
        POSITION: [8, 9, 0, 540 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
      },
      {
        POSITION: [8, 9, 0, 180 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
      },
      {
        POSITION: [8, 9, 0, -180 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
      },
      {
        POSITION: [8, 9, 0, -540 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
      },
      {
        POSITION: [8, 9, 0, -900 / 7, 180, 0],
        TYPE: exports.freyjaCruiserTurret
      }
    ]
  }),
  (exports.freyjaGunnerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Freyja Gunner",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin", "alwaysFire"],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [10, 8, 0, 180, 120, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [10, 8, 0, 108, 120, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [10, 8, 0, 35, 120, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [10, 8, 0, -35, 120, 0],
        TYPE: exports.auto4gun
      },
      {
        POSITION: [10, 8, 0, -108, 120, 0],
        TYPE: exports.auto4gun
      }
    ]
  }),
  (exports.freyja = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Freyja",
    COLOR: 1,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...celestialTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.freyjaCruiserBody,
          {
            COLOR: 1
          }
        ]
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
          exports.freyjaGunnerBody,
          {
            COLOR: 1
          }
        ]
      }
    ]
  }),
  (exports.zaphkielDroneBody = {
    PARENT: [exports.genericTank],
    LABEL: "Zaphkiel Drone",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
      FOV: 100
    },
    CONTROLLERS: ["counterslowspin"],
    MAX_CHILDREN: 28,
    GUNS: []
  });
for (let e = 0; e < 7; e++)
  exports.zaphkielDroneBody.GUNS.push({
    POSITION: [4, 6.5, 1.2, 7.5, 0, (360 / 7) * e + 360 / 14, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.drone,
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ]),
      TYPE: [
        exports.drone,
        {
          INDEPENDENT: !0,
          BODY: {
            FOV: 5
          }
        }
      ],
      AUTOFIRE: !0,
      SYNCS_SKILLS: !0,
      STAT_CALCULATOR: gunCalcNames.drone
    }
  });
(exports.zaphkielSkimmer = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  BODY: {
    FOV: 1.15 * base.FOV
  },
  LABEL: "Skimmer",
  DANGER: 7,
  INDEPENDENT: !0,
  GUNS: [
    {
      POSITION: [10, 14, -0.5, 9, 0, 0, 0]
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          [1.75, 1, 1, 1, 1, 1, 1, 1, 1, 0.4, 1, 1, 1]
        ]),
        TYPE: exports.hypermissile,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    }
  ]
}),
  (exports.zaphkielSkimmerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Zaphkiel Skimmer",
    SHAPE: 5,
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    SKILL: setBuild("5555555555"),
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.zaphkielSkimmer
      },
      {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.zaphkielSkimmer
      },
      {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.zaphkielSkimmer
      },
      {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.zaphkielSkimmer
      },
      {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.zaphkielSkimmer
      }
    ]
  }),
  (exports.zaphkiel = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Zaphkiel",
    COLOR: 2,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...celestialTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.zaphkielDroneBody,
          {
            COLOR: 2
          }
        ]
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
          exports.zaphkielSkimmerBody,
          {
            COLOR: 2
          }
        ]
      }
    ]
  }),
  (exports.cronusSingle = {
    PARENT: [exports.genericTank],
    BODY: {
      FOV: 1.15 * base.FOV
    },
    LABEL: "Single",
    DANGER: 7,
    INDEPENDENT: !0,
    GUNS: [
      {
        POSITION: [19, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.single]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
      }
    ]
  }),
  (exports.cronusSingleBody = {
    PARENT: [exports.genericTank],
    LABEL: "Cronus Single",
    SHAPE: 7,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    TURRETS: [
      {
        POSITION: [8, 9, 0, 180, 180, 0],
        TYPE: exports.cronusSingle
      },
      {
        POSITION: [8, 9, 0, 900 / 7, 180, 0],
        TYPE: exports.cronusSingle
      },
      {
        POSITION: [8, 9, 0, 540 / 7, 180, 0],
        TYPE: exports.cronusSingle
      },
      {
        POSITION: [8, 9, 0, 180 / 7, 180, 0],
        TYPE: exports.cronusSingle
      },
      {
        POSITION: [8, 9, 0, -180 / 7, 180, 0],
        TYPE: exports.cronusSingle
      },
      {
        POSITION: [8, 9, 0, -540 / 7, 180, 0],
        TYPE: exports.cronusSingle
      },
      {
        POSITION: [8, 9, 0, -900 / 7, 180, 0],
        TYPE: exports.cronusSingle
      }
    ]
  }),
  (exports.cronusNailgun = {
    PARENT: [exports.genericTank],
    BODY: {
      FOV: 1.15 * base.FOV
    },
    LABEL: "Nailgun",
    DANGER: 7,
    INDEPENDENT: !0,
    GUNS: [
      {
        POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [20, 2, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.power,
            g.twin,
            g.nail
          ]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
      }
    ]
  }),
  (exports.cronusNailgunBody = {
    PARENT: [exports.genericTank],
    LABEL: "Cronus Nailgun",
    SHAPE: 5,
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    SKILL: setBuild("5555555555"),
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.cronusNailgun
      },
      {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.cronusNailgun
      },
      {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.cronusNailgun
      },
      {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.cronusNailgun
      },
      {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.cronusNailgun
      }
    ]
  }),
  (exports.cronus = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Cronus",
    COLOR: 18,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...celestialTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.cronusSingleBody,
          {
            COLOR: 18
          }
        ]
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
          exports.cronusNailgunBody,
          {
            COLOR: 18
          }
        ]
      }
    ]
  }),
  (exports.urielMinionBody = {
    PARENT: [exports.genericTank],
    LABEL: "Uriel Minion",
    SHAPE: 7,
    SIZE: 10,
    BODY: {
      FOV: 100
    },
    CONTROLLERS: ["counterslowspin"],
    MAX_CHILDREN: 12,
    GUNS: []
  });
for (let e = 0; e < 7; e++)
  exports.urielMinionBody.GUNS.push({
    POSITION: [4, 6.5, -1.6, 7.5, 0, (360 / 7) * e + 360 / 14, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.drone,
        [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ]),
      TYPE: [
        exports.minion,
        {
          INDEPENDENT: !0,
          BODY: {
            FOV: 5
          }
        }
      ],
      AUTOFIRE: !0,
      SYNCS_SKILLS: !0,
      STAT_CALCULATOR: gunCalcNames.drone
    }
  });
(exports.urielAnnihilator = {
  PARENT: [exports.genericTank],
  CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
  BODY: {
    FOV: 1.15 * base.FOV
  },
  LABEL: "Annihilator",
  DANGER: 7,
  INDEPENDENT: !0,
  GUNS: [
    {
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet
      }
    }
  ]
}),
  (exports.urielAnnihilatorBody = {
    PARENT: [exports.genericTank],
    LABEL: "Uriel Annihilator",
    SHAPE: 5,
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    SKILL: setBuild("5555555555"),
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [9, 8, 0, 180, 180, 0],
        TYPE: exports.urielAnnihilator
      },
      {
        POSITION: [9, 8, 0, 108, 180, 0],
        TYPE: exports.urielAnnihilator
      },
      {
        POSITION: [9, 8, 0, 35, 180, 0],
        TYPE: exports.urielAnnihilator
      },
      {
        POSITION: [9, 8, 0, -35, 180, 0],
        TYPE: exports.urielAnnihilator
      },
      {
        POSITION: [9, 8, 0, -108, 180, 0],
        TYPE: exports.urielAnnihilator
      }
    ]
  }),
  (exports.uriel = {
    PARENT: [exports.miniboss],
    LABEL: "Celestial",
    NAME: "Uriel",
    COLOR: 22,
    SHAPE: 9,
    SIZE: 40,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...celestialTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.urielMinionBody,
          {
            COLOR: 22
          }
        ]
      },
      {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
          exports.urielAnnihilatorBody,
          {
            COLOR: 22
          }
        ]
      }
    ]
  }),
  (exports.gaeaAssassinBody = {
    PARENT: [exports.genericTank],
    LABEL: "Gaeo Assassin",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [
      {
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [
          exports.boomer,
          {
            COLOR: 14
          }
        ]
      }
    ]
  });
for (let e = 0; e < 11; e++)
  exports.gaeaAssassinBody.TURRETS.push({
    POSITION: [5, 9, 0, (360 * e) / 11, 190, 0],
    TYPE: [
      exports.assassin,
      {
        COLOR: 5
      }
    ]
  });
(exports.gaeaMixedBody = {
  PARENT: [exports.genericTank],
  LABEL: "Gaea Mixed",
  SHAPE: 7,
  SIZE: 10,
  SKILL: setBuild("5555550555"),
  CONTROLLERS: ["counterslowspin"],
  TURRETS: [
    {
      POSITION: [8, 9, 0, 180, 190, 0],
      TYPE: exports.director
    },
    {
      POSITION: [8, 9, 0, 900 / 7, 190, 0],
      TYPE: exports.twin
    },
    {
      POSITION: [8, 9, 0, 540 / 7, 190, 0],
      TYPE: exports.machine
    },
    {
      POSITION: [8, 9, 0, 180 / 7, 190, 0],
      TYPE: exports.trapper
    },
    {
      POSITION: [8, 9, 0, -180 / 7, 190, 0],
      TYPE: exports.hiveshooter
    },
    {
      POSITION: [8, 9, 0, -540 / 7, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [8, 9, 0, -900 / 7, 190, 0],
      TYPE: exports.launcher
    }
  ]
}),
  (exports.gaeaBoomerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Gaea Boomer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.boomer
      },
      {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.boomer
      },
      {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.boomer
      },
      {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.boomer
      },
      {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.boomer
      }
    ]
  }),
  (exports.gaea = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    COLOR: 5,
    SHAPE: 11,
    SIZE: 110,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...kronosTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.gaeaAssassinBody,
          {
            COLOR: 5
          }
        ]
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [
          exports.gaeaMixedBody,
          {
            COLOR: 5
          }
        ]
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [
          exports.gaeaBoomerBody,
          {
            COLOR: 5
          }
        ]
      }
    ]
  }),
  (exports.atlasDualBody = {
    PARENT: [exports.genericTank],
    LABEL: "Atlas Dual",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [
      {
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [
          exports.dual,
          {
            COLOR: -3
          }
        ]
      }
    ]
  });
for (let e = 0; e < 11; e++)
  exports.atlasDualBody.TURRETS.push({
    POSITION: [5, 9, 0, (360 * e) / 11, 190, 0],
    TYPE: [
      exports.dual,
      {
        COLOR: -3
      }
    ]
  });
(exports.atlasSniperBody = {
  PARENT: [exports.genericTank],
  LABEL: "Atlas Sniper",
  SHAPE: 7,
  SIZE: 10,
  SKILL: setBuild("5555550555"),
  CONTROLLERS: ["counterslowspin"],
  TURRETS: [
    {
      POSITION: [8, 9, 0, 180, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [8, 9, 0, 900 / 7, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [8, 9, 0, 540 / 7, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [8, 9, 0, 180 / 7, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [8, 9, 0, -180 / 7, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [8, 9, 0, -540 / 7, 190, 0],
      TYPE: exports.sniper
    },
    {
      POSITION: [8, 9, 0, -900 / 7, 190, 0],
      TYPE: exports.sniper
    }
  ]
}),
  (exports.atlasSprayerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Atlas Sprayer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.sprayTurret
      },
      {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.sprayTurret
      },
      {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.sprayTurret
      },
      {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.sprayTurret
      },
      {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.sprayTurret
      }
    ]
  }),
  (exports.atlas = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    COLOR: 24,
    SHAPE: 11,
    SIZE: 110,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...kronosTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.atlasDualBody,
          {
            COLOR: 24
          }
        ]
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [
          exports.atlasSniperBody,
          {
            COLOR: 24
          }
        ]
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [
          exports.atlasSprayerBody,
          {
            COLOR: 24,
            INDEPENDENT: !0
          }
        ]
      }
    ]
  }),
  (exports.arkeminesMiniBody = {
    PARENT: [exports.genericTank],
    LABEL: "Arkemines Minigun",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [
      {
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [
          exports.assassin,
          {
            COLOR: -3
          }
        ]
      }
    ]
  });
for (let e = 0; e < 11; e++)
  exports.arkeminesMiniBody.TURRETS.push({
    POSITION: [5, 9, 0, (360 * e) / 11, 190, 0],
    TYPE: [
      exports.mini,
      {
        COLOR: -3
      }
    ]
  });
(exports.arkeminesMixedBody = {
  PARENT: [exports.genericTank],
  LABEL: "Arkemines Mixed",
  SHAPE: 7,
  SIZE: 10,
  SKILL: setBuild("5555550555"),
  CONTROLLERS: ["counterslowspin"],
  TURRETS: [
    {
      POSITION: [8, 9, 0, 180, 190, 0],
      TYPE: exports.necromancer
    },
    {
      POSITION: [8, 9, 0, 900 / 7, 190, 0],
      TYPE: exports.shotgun2
    },
    {
      POSITION: [8, 9, 0, 540 / 7, 190, 0],
      TYPE: exports.boomer
    },
    {
      POSITION: [8, 9, 0, 180 / 7, 190, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, -180 / 7, 190, 0],
      TYPE: exports.hiveshooter
    },
    {
      POSITION: [8, 9, 0, -540 / 7, 190, 0],
      TYPE: exports.nailgun
    },
    {
      POSITION: [8, 9, 0, -900 / 7, 190, 0],
      TYPE: exports.director
    }
  ]
}),
  (exports.arkeminesBoomerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Arkemines Boomer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.factory
      },
      {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.factory
      }
    ]
  }),
  (exports.arkemines = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    COLOR: 14,
    SHAPE: 11,
    SIZE: 110,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...kronosTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.arkeminesMiniBody,
          {
            COLOR: 14
          }
        ]
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [
          exports.arkeminesMixedBody,
          {
            COLOR: 14
          }
        ]
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [
          exports.arkeminesBoomerBody,
          {
            COLOR: 14,
            INDEPENDENT: !0
          }
        ]
      }
    ]
  }),
    (exports.heliosMiniBody = {
    PARENT: [exports.genericTank],
    LABEL: "Helios Minigun",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [
      {
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [
          exports.assassin,
          {
            COLOR: -3
          }
        ]
      }
    ]
  });
for (let e = 0; e < 11; e++)
  exports.heliosMiniBody.TURRETS.push({
    POSITION: [5, 9, 0, (360 * e) / 11, 190, 0],
    TYPE: [
      exports.anni,
      {
        COLOR: -3
      }
    ]
  });
(exports.heliosMixedBody = {
  PARENT: [exports.genericTank],
  LABEL: "Helios Mixed",
  SHAPE: 7,
  SIZE: 10,
  SKILL: setBuild("5555550555"),
  CONTROLLERS: ["counterslowspin"],
  GUNS: [{
    POSITION: [11, 6.5, -1.4, 0, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
      TYPE: [
        exports.evolvedsquare,{
        INDEPENDENT: !0
        }
      ],
      AUTOFIRE: !0,
      MAX_CHILDREN: 3,
    }
  }, {
    POSITION: [11, 6.5, -1.4, 0, 0, 900 / 7, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
      TYPE: [
        exports.evolvedsquare,{
        INDEPENDENT: !0
        }
      ],
      AUTOFIRE: !0,
      MAX_CHILDREN: 3,
    }
  }, {
    POSITION: [11, 6.5, -1.4, 0, 0, 540 / 7, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
      TYPE: [
        exports.evolvedsquare,{
        INDEPENDENT: !0
        }
      ],
      AUTOFIRE: !0,
      MAX_CHILDREN: 3,
    }
  }, {
    POSITION: [11, 6.5, -1.4, 0, 0, 180 / 7, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
      TYPE: [
        exports.evolvedsquare,{
        INDEPENDENT: !0
        }
      ],
      AUTOFIRE: !0,
      MAX_CHILDREN: 3,
    }
  }, {
    POSITION: [11, 6.5, -1.4, 0, 0, -180 / 7, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
      TYPE: [
        exports.evolvedsquare,{
        INDEPENDENT: !0
        }
      ],
       AUTOFIRE: !0,
     MAX_CHILDREN: 3,
    }
  }, {
    POSITION: [11, 6.5, -1.4, 0, 0, -540 / 7, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
      TYPE: [
        exports.evolvedsquare,{
        INDEPENDENT: !0
        }
      ],
      AUTOFIRE: !0,
      MAX_CHILDREN: 3,
    }
  }, {
    POSITION: [11, 6.5, -1.4, 0, 0, -900 / 7, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.babyfactory, g.factory]),
      TYPE: [
        exports.evolvedsquare,{
        INDEPENDENT: !0
        }
      ],
      AUTOFIRE: !0,
      MAX_CHILDREN: 3,
    }
  }]
}),
  (exports.heliosBoomerBody = {
    PARENT: [exports.genericTank],
    LABEL: "Helios Boomer",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.ranger
      },
      {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.ranger
      },
      {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.ranger
      },
      {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.ranger
      },
      {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.ranger
      }
    ]
  }),
  (exports.helios = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    COLOR: 26,
    SHAPE: 11,
    SIZE: 50,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...kronosTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.heliosMiniBody,
          {
            COLOR: 26
          }
        ]
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [
          exports.heliosMixedBody,
          {
            COLOR: 26
          }
        ]
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [
          exports.heliosBoomerBody,
          {
            COLOR: 26,
            INDEPENDENT: !0
          }
        ]
      }
    ]
  }),
  (exports.kronosMissileTurret = {
    PARENT: [exports.genericTank],
    LABEL: "Skimmer",
    GUNS: [
      {
        POSITION: [23, 10, 2, 0, 0, 0, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.pound,
            g.destroy,
            g.lessreload,
            g.lessreload,
            g.lessreload
          ]),
          TYPE: exports.kronosMissile
        }
      },
      {
        POSITION: [12, 17, 1.3, 6, 0, 0, 0]
      }
    ]
  }),
  (exports.kronosMissileBody = {
    PARENT: [exports.genericTank],
    LABEL: "Kronos Missile",
    SHAPE: 11,
    SIZE: 10,
    SKILL: setBuild("5555550555"),
    CONTROLLERS: ["counterslowspin"],
    GUNS: [],
    TURRETS: [
      {
        POSITION: [0, 0, 0, 360, 360, 1],
        TYPE: [
          exports.boomer,
          {
            COLOR: 14
          }
        ]
      }
    ]
  });
for (let e = 0; e < 11; e++)
  exports.kronosMissileBody.TURRETS.push({
    POSITION: [5, 9, 0, (360 * e) / 11, 190, 0],
    TYPE: [
      exports.kronosMissileTurret,
      {
        COLOR: 6
      }
    ]
  });
(exports.kronosCarrierBody = {
  PARENT: [exports.genericTank],
  LABEL: "Kronos Carrier",
  SHAPE: 7,
  SIZE: 10,
  SKILL: setBuild("5555550555"),
  CONTROLLERS: ["counterslowspin"],
  TURRETS: [
    {
      POSITION: [8, 9, 0, 180, 190, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, 900 / 7, 190, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, 540 / 7, 190, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, 180 / 7, 190, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, -180 / 7, 190, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, -540 / 7, 190, 0],
      TYPE: exports.carrier
    },
    {
      POSITION: [8, 9, 0, -900 / 7, 190, 0],
      TYPE: exports.carrier
    }
  ]
}),
  (exports.kronosTripleBody = {
    PARENT: [exports.genericTank],
    LABEL: "Kronos Triplet",
    SHAPE: 5,
    SKILL: setBuild("5555555555"),
    SIZE: 10,
    CONTROLLERS: ["slowSpin"],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [10, 8, 0, 180, 190, 0],
        TYPE: exports.triple
      },
      {
        POSITION: [10, 8, 0, 108, 190, 0],
        TYPE: exports.triple
      },
      {
        POSITION: [10, 8, 0, 35, 190, 0],
        TYPE: exports.triple
      },
      {
        POSITION: [10, 8, 0, -35, 190, 0],
        TYPE: exports.triple
      },
      {
        POSITION: [10, 8, 0, -108, 190, 0],
        TYPE: exports.triple
      }
    ]
  }),
  (exports.kronos = {
    PARENT: [exports.miniboss],
    LABEL: "Eternal",
    COLOR: 6,
    SHAPE: 11,
    SIZE: 110,
    VARIES_IN_SIZE: !1,
    VALUE: 1e6,
    BODY: bossStats({
      health: 3,
      speed: 0.5
    }),
    SKILL: setBuild("6929987040"),
    TURRETS: [
      ...kronosTrapTurretArray,
      {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
          exports.kronosMissileBody,
          {
            COLOR: 6
          }
        ]
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [
          exports.kronosCarrierBody,
          {
            COLOR: 6
          }
        ]
      },
      {
        POSITION: [6, 0, 0, 0, 360, 1],
        TYPE: [
          exports.kronosTripleBody,
          {
            COLOR: 6
          }
        ]
      }
    ]
  }),
  (exports.dominator = {
    PARENT: [exports.genericTank],
    LABEL: "Dominator",
    TYPE: "fixed",
    HEALTH_WITH_LEVEL: !1,
    DANGER: 10,
    SKILL: skillSet({
      rld: 1,
      dam: 1,
      pen: 1,
      str: 1,
      spd: 1
    }),
    BODY: {
      HEALTH: 10 * base.HEALTH,
      DAMAGE: 10 * base.DAMAGE,
      FOV: 1,
      PUSHABILITY: 0,
      SHIELD: 5 * base.SHIELD,
      DENSITY: 100
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    DISPLAY_NAME: !0,
    SIZE: 30,
    TURRETS: [
      {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
      }
    ],
    CAN_BE_ON_LEADERBOARD: !1,
    GIVE_KILL_MESSAGE: !1,
    ACCEPTS_SCORE: !1,
    DOMTIME: !0
  }),
  (exports.destroyerDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    GUNS: [
      {
        POSITION: [15.25, 6.75, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.destroyDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 6.75, -1.6, 6.75, 0, 0, 0]
      }
    ]
  }),
  (exports.gunnerDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    SKILL: skillSet({
      rld: 1,
      dam: 1,
      pen: 1,
      str: 1,
      spd: 1
    }),
    GUNS: [
      {
        POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15.85, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
      }
    ]
  }),
  (exports.gunnerx = {
    LABEL: "",
    GUNS: [
      {
        POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15.85, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
      }
    ]
  }),
  (exports.antitank = {
    LABEL: "Anti-Tank Machine Gun",
    PARENT: [exports.genericTank],
    SKILL: skillSet({
      rld: 1,
      dam: 1,
      pen: 1,
      str: 1,
      spd: 1
    }),
    GUNS: [
      {
        POSITION: [14.25, 3, 1, 0, -2, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [14.25, 3, 1, 0, 2, 0, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [15.85, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunnerDominator]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
      },
      {
        POSITION: [20, 8.5, 1, 0, 0, 270, 0]
      },
      {
        POSITION: [20, 8.5, 1, 0, 0, 90, 0]
      }
    ],
    TURRETS: [
      {
        POSITION: [15, 0, -20, 0, 360, 1],
        TYPE: exports.gunnerx
      },
      {
        POSITION: [15, 0, 20, 0, 360, 1],
        TYPE: exports.gunnerx
      },
      {
        POSITION: [22, 0, 0, 0, 360, 0],
        TYPE: exports.dominationBody
      }
    ]
  }),
  (exports.trapperDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    FACING_TYPE: "autospin",
    GUNS: [
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      },
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 45, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 45, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      },
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 90, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      },
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 135, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 135, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      },
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 180, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      },
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 225, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 225, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      },
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 270, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      },
      {
        POSITION: [3.5, 3.75, 1, 8, 0, 315, 0]
      },
      {
        POSITION: [1.25, 3.75, 1.7, 12, 0, 315, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.trapperDominator]),
          TYPE: exports.trap,
          AUTOFIRE: !0
        }
      }
    ]
  }),
  (exports.builderDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    GUNS: [
      {
        POSITION: [14, 7, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 7, 1.1, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.dominatorBlock
        }
      },
      {
        POSITION: [14, 7, 1, 0, 0, 120, 0]
      },
      {
        POSITION: [2, 7, 1.1, 14, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.dominatorBlock
        }
      },
      {
        POSITION: [14, 7, 1, 0, 0, 240, 0]
      },
      {
        POSITION: [2, 7, 1.1, 14, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.dominatorBlock
        }
      },
      {
        POSITION: [14, 7, 1, 0, 0, 60, 0]
      },
      {
        POSITION: [2, 7, 1.1, 14, 0, 60, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.dominatorBlock
        }
      },
      {
        POSITION: [14, 7, 1, 0, 0, 180, 0]
      },
      {
        POSITION: [2, 7, 1.1, 14, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.dominatorBlock
        }
      },
      {
        POSITION: [14, 7, 1, 0, 0, 300, 0]
      },
      {
        POSITION: [2, 7, 1.1, 14, 0, 300, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block]),
          TYPE: exports.dominatorBlock
        }
      }
    ]
  }),
  (exports.artyDominator = {
    LABEL: "Dominator",
    PARENT: [exports.dominator],
    GUNS: [
      {
        POSITION: [15, 3, 1, 0, -4, -1.5, 0.25],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.gunner,
            g.arty,
            g.artyDominator
          ]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [15, 3, 1, 0, 4, 1.5, 0.75],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.artyDominator]),
          TYPE: exports.bullet,
          LABEL: "Secondary"
        }
      },
      {
        POSITION: [17, 8.5, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.artyDominator]),
          TYPE: exports.bullet,
          LABEL: "Heavy"
        }
      },
      {
        POSITION: [5, 8.5, -1.6, 6.25, 0, 0, 0]
      }
    ]
  });
let mothershipProperties = {
    MAX_CHILDREN: 2,
    SHOOT_SETTINGS: combineStats([
      g.drone,
      g.over,
      [2, 1, 1, 1, 0.5, 0.75, 0.75, 1, 1, 1, 10, 1, 1]
    ]),
    TYPE: exports.drone,
    AUTOFIRE: !0,
    SYNCS_SKILLS: !0,
    STAT_CALCULATOR: gunCalcNames.drone,
    WAIT_TO_CYCLE: !0
  },
  mothershipAutoProperties = {
    MAX_CHILDREN: 2,
    SHOOT_SETTINGS: combineStats([
      g.drone,
      g.over,
      [2, 1, 1, 1, 0.5, 0.75, 0.75, 1, 1, 1, 10, 1, 1]
    ]),
    TYPE: [
      exports.drone,
      {
        AI: {
          skynet: !0
        },
        INDEPENDENT: !0,
        BODY: {
          FOV: 2
        }
      }
    ],
    AUTOFIRE: !0,
    SYNCS_SKILLS: !0,
    STAT_CALCULATOR: gunCalcNames.drone,
    WAIT_TO_CYCLE: !0
  };
(exports.mothership = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",
  DANGER: 7,
  CRAVES_ATTENTION: !0,
  SIZE: 30,
  SHAPE: 1600,
  STAT_NAMES: statnames.drone,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 1,
    hlt: 1,
    shi: 1,
    rgn: 1,
    mob: 1
  }),
  VALUE: 5e5,
  BODY: bossStats({
    health: 1.5,
    speed: 0.8
  }),
  GUNS: [
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 1],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 45, 0.0625],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 67.5, 0.9375],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 90, 0.125],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 112.5, 0.875],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 135, 0.1875],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 157.5, 0.8125],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 180, 0.25],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 202.5, 0.75],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 225, 0.3125],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 247.5, 0.6875],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 270, 0.375],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 292.5, 0.625],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 315, 0.4375],
      PROPERTIES: mothershipAutoProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 337.5, 0.5625],
      PROPERTIES: mothershipProperties
    },
    {
      POSITION: [4.3, 3.1, 1.2, 8, 0, 360, 0.5],
      PROPERTIES: mothershipAutoProperties
    }
  ]
}),
  (exports.mothershipAI = {
    PARENT: [exports.mothership],
    CONTROLLERS: ["nearestDifferentMaster", "minion", "botMoving"],
    ACCEPTS_SCORE: !1,
    BODY: {
      FOV: 10
    }
  }),
  (exports.rainbowthing = {
    PARENT: [exports.genericTank],
    COLOR: 36
  }),
  (exports.yellowthing = {
    PARENT: [exports.genericTank],
    COLOR: 3
  }),
  (exports.motpet = {
    PARENT: [exports.genericTank],
    SHAPE: 1600,
    COLOR: 25,
    BODY: {
      HEALTH: 9e9,
      RESIST: 1 / 0,
      REGEN: 1 / 0,
      DAMAGE: 0
    },
    INDEPENDENT: !0,
    CAN_BE_ON_LEADERBOARD: !1,
    ACCEPTS_SCORE: !1,
    CONTROLLERS: ["hangOutNearMaster"],
    GUNS: [
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 22.5, 1]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 45, 0.0625]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 67.5, 0.9375]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 90, 0.125]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 112.5, 0.875]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 135, 0.1875]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 157.5, 0.8125]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 180, 0.25]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 202.5, 0.75]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 225, 0.3125]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 247.5, 0.6875]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 270, 0.375]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 292.5, 0.625]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 315, 0.4375]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 337.5, 0.5625]
      },
      {
        POSITION: [4.3, 3.1, 1.2, 8, 0, 360, 0.5]
      }
    ],
    TURRETS: [
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.rainbowthing
      }
    ]
  }),
  (exports.acpet = {
    PARENT: [exports.genericTank],
    SHAPE: 1600,
    COLOR: 25,
    BODY: {
      HEALTH: 9e9,
      RESIST: 1 / 0,
      REGEN: 1 / 0,
      DAMAGE: 0
    },
    INDEPENDENT: !0,
    CAN_BE_ON_LEADERBOARD: !1,
    ACCEPTS_SCORE: !1,
    CONTROLLERS: ["hangOutNearMaster"],
    GUNS: [
      {
        POSITION: [15, 10, 1, 0, 0, 0, 1]
      }
    ],
    TURRETS: [
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.yellowthing
      }
    ]
  }),
  (exports.sentrypet = {
    PARENT: [exports.motpet],
    GUNS: [],
    SHAPE: [[0, 0]],
    INDEPENDENT: !0,
    TURRETS: [
      {
        POSITION: [18, 0, 0, 0, 0, 1],
        TYPE: exports.sentrySwarmpet
      }
    ]
  }),
  (exports.flankCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Arena Closer",
    PASS_THROUGH_WALLS: !0,
    ACCEPTS_SCORE: !1,
    CAN_GO_OUTSIDE_ROOM: !0,
    COLOR: 3,
    SIZE: 40,
    BODY: {
      HEALTH: 9e9 * base.HEALTH,
      REGEN: 1e3 * base.REGEN,
      DAMAGE: 100 * base.DAMAGE,
      FOV: 1.5
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion"],
    GUNS: [
      {
        POSITION: [18, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: [
            exports.bullet,
            {
              PASS_THROUGH_WALLS: !0
            }
          ]
        }
      },
      {
        POSITION: [14, 10, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: [
            exports.bullet,
            {
              PASS_THROUGH_WALLS: !0
            }
          ]
        }
      }
    ]
  }),
  (exports.flankAI = {
    PARENT: [exports.flankCloser],
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    ACCEPTS_SCORE: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    HITS_OWN_TYPE: "hard",
    BODY: {
      FOV: 10,
      SPEED: 2
    }
  }),
  (exports.fighterCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Fighter Closer",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
      HEALTH: 9e9,
      REGEN: 9e9,
      DAMAGE: 9e9,
      FOV: 2,
      SPEED: 8
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    GUNS: [
      {
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.op,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              GOES_THROUGH_WALLS: !0
            }
          ]
        }
      },
      {
        POSITION: [14, 10, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.op,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              GOES_THROUGH_WALLS: !0
            }
          ]
        }
      },
      {
        POSITION: [14, 10, 1, 0, 0, -90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.op,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              GOES_THROUGH_WALLS: !0
            }
          ]
        }
      },
      {
        POSITION: [14, 10, 1, 0, 0, 150, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.op,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              GOES_THROUGH_WALLS: !0
            }
          ]
        }
      },
      {
        POSITION: [14, 10, 1, 0, 0, 210, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.op,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.bullet,
            {
              GOES_THROUGH_WALLS: !0
            }
          ]
        }
      }
    ]
  }),
  (exports.arenaCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Arena Closer",
    PASS_THROUGH_WALLS: !0,
    ACCEPTS_SCORE: !1,
    CAN_GO_OUTSIDE_ROOM: !0,
    COLOR: 3,
    SIZE: 40,
    BODY: {
      HEALTH: 9e9 * base.HEALTH,
      REGEN: 1e3 * base.REGEN,
      DAMAGE: 100 * base.DAMAGE,
      FOV: 1.5
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion"],
    GUNS: [
      {
        POSITION: [14, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: [
            exports.bullet,
            {
              PASS_THROUGH_WALLS: !0
            }
          ]
        }
      }
    ]
  }),
  (exports.smashCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Smash Closer",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
      HEALTH: 9e9,
      REGEN: 9e9,
      DAMAGE: 9e9,
      FOV: 1.5,
      SPEED: 20
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    IS_SMASHER: !0,
    SKILL_CAP: [
      smshskl,
      0,
      0,
      0,
      0,
      smshskl,
      smshskl,
      smshskl,
      smshskl,
      smshskl
    ],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
      {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
      }
    ]
  }),
  (exports.builderCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Builder Closer",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
      HEALTH: 9e9,
      REGEN: 9e9,
      DAMAGE: 9e9,
      FOV: 1.5,
      SPEED: 8
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    GUNS: [
      {
        POSITION: [15, 12, 1, 0, 0, 0, 0]
      },
      {
        POSITION: [2, 12, 1.1, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.trap,
            g.block,
            g.op,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 1.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.block,
            {
              GOES_THROUGH_WALLS: !0
            }
          ]
        }
      }
    ]
  }),
  (exports.overCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Over Closer",
    PASS_THROUGH_WALLS: !0,
    COLOR: 3,
    SIZE: 40,
    SKILL: skillSet("0009990000"),
    BODY: {
      HEALTH: 9e9,
      REGEN: 9e9,
      DAMAGE: 9e9,
      FOV: 1.5,
      SPEED: 8
    },
    INDEPENDENT: !0,
    ACCEPTS_SCORE: !1,
    DRAW_HEALTH: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    MAX_CHILDREN: 8,
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.drone,
            g.over,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.drone,
            {
              GOES_THROUGH_WALLS: !0
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.drone,
            g.over,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.drone,
            {
              GOES_THROUGH_WALLS: !0
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.drone,
            g.over,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.drone,
            {
              GOES_THROUGH_WALLS: !0
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.drone,
            g.over,
            [0.5, 0.1, 0.1, 1, 10, 9e9, 10, 20.5, 1.5, 1, 10, 0.1, 1]
          ]),
          TYPE: [
            exports.drone,
            {
              GOES_THROUGH_WALLS: !0
            }
          ],
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0
        }
      }
    ]
  }),
  (exports.microCloser = {
    PARENT: [exports.genericTank],
    LABEL: "Arena Closer",
    PASS_THROUGH_WALLS: !0,
    ACCEPTS_SCORE: !1,
    CAN_GO_OUTSIDE_ROOM: !0,
    COLOR: 3,
    SIZE: 40,
    BODY: {
      HEALTH: 9e9 * base.HEALTH,
      REGEN: 1e3 * base.REGEN,
      DAMAGE: 100 * base.DAMAGE,
      FOV: 1.5
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion"],
    GUNS: [
      {
        POSITION: [20, 8, 1, 0, 0, 0, 0.333],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: [
            exports.bullet,
            {
              PASS_THROUGH_WALLS: !0
            }
          ]
        }
      },
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0.667],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: [
            exports.bullet,
            {
              PASS_THROUGH_WALLS: !0
            }
          ]
        }
      },
      {
        POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0]
      }
    ]
  }),
  (exports.nedflanders = {
    PARENT: [exports.genericTank],
    LABEL: "Ned Flanders",
    SIZE: 40,
    SHAPE: 999,
    BODY: {
      HEALTH: 9e9 * base.HEALTH,
      REGEN: 1e3 * base.REGEN,
      DAMAGE: 100 * base.DAMAGE
    },
    SKILL: setBuild("9999999999"),
    DRAW_HEALTH: !1,
    CONTROLLERS: ["nearestDifferentMaster", "minion"],
    GUNS: [
      {
        POSITION: [1, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 1, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: [
            exports.bible,
            {
              PASS_THROUGH_WALLS: !0
            }
          ]
        }
      }
    ]
  }),
  (exports.realned = {
    PARENT: [exports.genericTank],
    LABEL: "Ned Flanders",
    SHAPE: 999,
    SIZE: 24,
  }),
  (exports.greenthing = {
    PARENT: [exports.genericTank],
    COLOR: 123
  }),
  (exports.orangething = {
    PARENT: [exports.genericTank],
    COLOR: 25
  }),
  (exports.bluething = {
    PARENT: [exports.genericTank],
    COLOR: 10
  }),
  (exports.secretstuff = {
    PARENT: [exports.genericTank],
    SHAPE: 1001,
    CONTROLLERS: ["dontTurn"]
  }),
  (exports.nfpet = {
    PARENT: [exports.genericTank],
    NAME: "Cataclysm",
    PASS_THROUGH_WALLS: !1,
    SHAPE: 1010,
    ACCEPTS_SCORE: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    CONTROLLERS: ["hangOutNearMaster"],
    BODY: {
      HEALTH: 9e9,
      SHIELD: 9e9,
      DAMAGE: 0
    },
    GUNS: [
      {
        POSITION: [1, 8, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [40, 0.5, 1e-4, 3, 2, 2, 8, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: exports.cbullet
        }
      }
    ]
  }),
  (exports.bloodlust = {
    PARENT: [exports.genericTank],
    NAME: "Catastrophe",
    PASS_THROUGH_WALLS: !1,
    SHAPE: 1003,
    ACCEPTS_SCORE: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    CONTROLLERS: ["hangOutNearMaster", "mapTargetToGoal"],
    BODY: {
      HEALTH: 9e9,
      SHIELD: 9e9,
      DAMAGE: 9.99e101,
      SPEED: 30
    }
  }),
  (exports.overlordpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
      HEALTH: 9e9,
      SHIELD: 9e9,
      DAMAGE: 0
    },
    GUNS: [
      {
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SKIN: 1
        }
      },
      {
        POSITION: [13, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SKIN: 1
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.bluething
      }
    ]
  }),
  (exports.smashpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
      HEALTH: 9e9,
      SHIELD: 9e9,
      DAMAGE: 0
    },
    TURRETS: [
      {
        POSITION: [21.5, 0, 0, 0, 360, 0],
        TYPE: exports.smasherBody
      },
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.greenthing
      }
    ]
  }),
  (exports.wfpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
      HEALTH: 9e9,
      SHIELD: 9e9,
      DAMAGE: 0
    },
    GUNS: [
      {
        POSITION: [13, 8, 1, 0, 5.5, 0, 0],
        PROPERTIES: {
          SKIN: 1
        }
      },
      {
        POSITION: [13, 8, 1, 0, -5.5, 0, 0.5],
        PROPERTIES: {
          SKIN: 1
        }
      }
    ],
    TURRETS: [
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.orangething
      }
    ]
  }),
  (exports.ka2basic = {
    PARENT: [exports.basic],
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [0.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          AUTOFIRE: !0,
          TYPE: exports.overlordpet,
          MAX_CHILDREN: 1,
          MOTION_TYPE: "blue"
        }
      },
      {
        POSITION: [0.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          AUTOFIRE: !0,
          TYPE: exports.smashpet,
          MAX_CHILDREN: 1,
          MOTION_TYPE: "blue"
        }
      }
    ]
  }),
  (exports.hotheadpet = {
    PARENT: [exports.genericTank],
    INDEPENDENT: !0,
    CONTROLLERS: ["hangOutNearMaster"],
    PASS_THROUGH_WALLS: !0,
    BODY: {
      HEALTH: 9e9,
      SHIELD: 9e9,
      DAMAGE: 0
    },
    GUNS: [
      {
        POSITION: [12, 4, 1.4, 0, 5, 0, 0]
      },
      {
        POSITION: [18, 7, 1.4, 0, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.rainbowthing
      }
    ]
  }),
  (exports.jbbasic = {
    PARENT: [exports.developer],
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [0.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          AUTOFIRE: true,
          TYPE: exports.wfpet,
          MAX_CHILDREN: 1
        }
      },
      {
        POSITION: [0.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          AUTOFIRE: true,
          TYPE: exports.hotheadpet,
          MAX_CHILDREN: 1
        }
      }
    ]
  }),
  (exports.lrmbasic = {
    PARENT: [exports.developer],
    GUNS: [
      {
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic]),
          TYPE: exports.bullet
        }
      },
      {
        POSITION: [0.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          AUTOFIRE: true,
          TYPE: exports.motpet,
          MAX_CHILDREN: 1
        }
      },
      {
        POSITION: [0.5, 15, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 2, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          AUTOFIRE: true,
          TYPE: exports.acpet,
          MAX_CHILDREN: 1
        }
      }
    ]
  }),
  (exports.redthing = {
    PARENT: [exports.genericTank],
    SHAPE: 0,
    COLOR: 25
  }),
  (exports.flarefire = {
    PARENT: [exports.bullet],
    LABEL: "Malice Shard",
    BODY: {
      PENETRATION: 1,
      SPEED: 3.75,
      RANGE: 90,
      DENSITY: 1.25,
      HEALTH: 0.165,
      DAMAGE: 30,
      PUSHABILITY: 0.3
    },
    TURRETS: [
      {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: exports.redthing
      }
    ],
    FACING_TYPE: "smoothWithMotion",
    CAN_GO_OUTSIDE_ROOM: !0,
    HITS_OWN_TYPE: "never",
    DIE_AT_RANGE: !0
  }),
  (exports.motpetforme2 = {
    PARENT: [exports.developer],
    LABEL: "Juggernaut",
    BROADCAST_MESSAGE:
      "Screams echo around you as souls are released from the Eternal Juggernaut...",
    DANGER: 8,
    SHAPE: 1005,
    SIZE: 25,
    VALUE: Infinity,
    BODY: {
      HEALTH: 9.999e102,
      RESIST: 9.99e101,
      REGEN: 9.99e101,
      DAMAGE: 9.99e101,
      REGEN: 9.99e101,
      PUSHABILITY: 0,
      FOV: 0.75
    },
    GUNS: [
      {
        POSITION: [1, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 3, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: exports.bloodlust,
          AUTOFIRE: !0,
          MAX_CHILDREN: 1
        }
      },
      {
        POSITION: [1, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [15, 0.5, 1e-4, 3, 2, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: exports.nfpet,
          AUTOFIRE: !0,
          MAX_CHILDREN: 1
        }
      },
      {
        POSITION: [1, 4, 1.2, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [40, 0.5, 1e-4, 4, 2, 2, 8, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE: exports.cbullet
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 22.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 45, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 67.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 112.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 157.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 202.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 225, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 247.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 292.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 315, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      },
      {
        POSITION: [0.5, 3, 1, 0, 0, 337.5, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
          TYPE: exports.flarefire,
          MOTION_TYPE: "malice",
          ALT_FIRE: !0
        }
      }
    ]
  }),
    (exports.amogus = {
    PARENT: [exports.genericTank],
    LABEL: "Crewmate",
    SHAPE: 2121,
  }),
    (exports.rickrolled = {
    PARENT: [exports.genericTank],
    LABEL: "Rick Roll",
    SHAPE: 9e3,
  }),  
    (exports.ak47 = {
    PARENT: [exports.genericTank],
    LABEL: "AK-47",
    SHAPE: 1234,
      GUNS: [
      {
        POSITION: [1, 2, 1, 0, -5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [8, 0.5, 1e-4, 1, 1, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE:
            exports.bullet,
        }
      }, {
        POSITION: [1, 2, 1, 0, -5, 0, 1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            [8, 0.5, 1e-4, 1, 1, 2, 2, 4.5, 1, 1.25, 5, 1, 2]
          ]),
          TYPE:
            exports.bullet,
        }
      }
    ]
  }),
    (exports.imposter = {
    PARENT: [exports.genericTank],
    LABEL: "Imposter",
    SHAPE: 2121,
    GUNS: [{
        POSITION: [1, 5, 1, 0, -5, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, [4, 0.5, 1e-4, 4, 1, 999e9, 2, 4.5, 1, 1.25, 5, 1, 2]]),
          TYPE: exports.knife,
          LABEL: 'a Knife',
          ALT_FIRE: !0
        }
      }],
    TURRETS:[{
      POSITION: [10, 10, 0, 0, 0, 1],
      TYPE: exports.ak47
    }]
  }),
  (exports.brain = {
  PARENT: [exports.genericTank],
  SHAPE: 2222,
  }),
    (exports.bigbrain = {
    PARENT: [exports.basic],
    LABEL: 'Big Brain',
    TURRETS: [{
      POSITION: [18, 0, -12, -90, 0, 1],
      TYPE: exports.brain
    }]
  }),
  (exports.arenaAI = {
    PARENT: [exports.arenaCloser],
    CONTROLLERS: ["nearestDifferentMaster", "minion", "spinWhenIdle"],
    ACCEPTS_SCORE: !1,
    CAN_BE_ON_LEADERBOARD: !1,
    HITS_OWN_TYPE: "hard",
    BODY: {
      FOV: 10,
      SPEED: 2
    }
  }),
  (exports.bot = {
    AUTO_UPGRADE: "random",
    FACING_TYPE: "looseToTarget",
    BODY: {
      SIZE: 10
    },
    NAME: "",
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "fleeAtLowHealth",
      "botMoving"
    ],
    AI: {
      STRAFE: !0
    }
  }),
  (exports.soccerball = {
    PARENT: [exports.genericTank],
    LABEL: "Soccer Ball",
    SHAPE: 3434,
    SIZE: 25,
    TYPE: "miniboss",
    BODY: {
      HEALTH: 75e3,
      RESIST: 75e3,
      REGEN: 75e3,
      DAMAGE: 0,
      PUSHABILITY: 15
    }
  }),
  (exports.extirpator = {
    //I keep this and make duplicate for the new boss ok
    PARENT: [exports.miniboss],
    LABEL: "Extirpator",
    COLOR: 2,
    SHAPE: 0,
    SIZE: 25,
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        POSITION: [3, 10, 0, 18, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 36, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 54, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 72, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 90, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 108, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 126, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 144, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 162, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 180, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 198, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 216, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 234, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 252, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 270, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 288, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 306, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 324, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 342, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [3, 10, 0, 360, 100, 0],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [7, 5, 0, 0, 360, 1],
        TYPE: exports.preda
      },
      {
        POSITION: [7, 5, 0, 120, 360, 1],
        TYPE: exports.gunner
      },
      {
        POSITION: [7, 5, 0, 240, 360, 1],
        TYPE: exports.cruiser
      }
    ]
  }),
  (exports.exquisiter = {
    PARENT: [exports.miniboss],
    LABEL: "Exquisiter",
    COLOR: 2,
    CRAVES_ATTENTION: !0,
    BODY: {
      HEALTH: 3579,
      RESIST: 10,
      SHIELD: 10,
      REGEN: 10,
      PUSHABILITY: 0,
      FOV: 0.5
    },
    SIZE: 25,
    FACING_TYPE: "autospin",
    INVISIBLE: [0.08, 0.03],
    TURRETS: [
      {
        POSITION: [3, 10, 0, 18, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 36, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 54, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 72, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 90, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 108, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 126, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 144, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 162, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 180, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 198, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 216, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 234, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 252, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 270, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 288, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 306, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 324, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 342, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [3, 10, 0, 360, 100, 0],
        TYPE: exports.artillery2
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.ambusher
      }
    ]
  }),
  (exports.frostknight = {
    //For KA2//you may change the name to anything u want Thank you for making a tank for me, it looks epic! :3
    PARENT: [exports.genericTank],
    LABEL: "Frost Knight",
    VALUE: 9999999e999999,
    SIZE: 30,
    FACING_TYPE: "autospin",
    COLOR: 10,
    BODY: {
      HEALTH: 999999e999,
      DAMAGE: 999999e999,
      REGEN: 999999e999,
      RESIST: 999999e999
    },
    GUNS: [
      {
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 8
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 8
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 8
        }
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over, g.fallenOverlord]),
          TYPE: exports.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: !0,
          MAX_CHILDREN: 8
        }
      },
      {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [1, 12, 1, 15, 0, 0, 0],
        PROPERTIES: {
          MAX_CHILDREN: 2,
          SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [1, 12, 1, 15, 0, 90, 0],
        PROPERTIES: {
          MAX_CHILDREN: 2,
          SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [1, 12, 1, 15, 0, 270, 0],
        PROPERTIES: {
          MAX_CHILDREN: 2,
          SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
      },
      {
        POSITION: [4.5, 10, 1, 10.5, 0, 0, 0]
      },
      {
        POSITION: [1, 12, 1, 15, 0, 180, 0],
        PROPERTIES: {
          MAX_CHILDREN: 2,
          SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
          TYPE: exports.minion,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: !0,
          SYNCS_SKILLS: !0
        }
      },
      {
        POSITION: [3.5, 12, 1, 8, 0, 0, 0]
      }
    ],
    TURRETS: [
      {
        POSITION: [1, 6, 0, 18, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 36, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 54, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 72, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 90, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 108, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 126, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 144, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 162, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 180, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 198, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 216, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 234, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 252, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 270, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 288, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 306, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 324, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 342, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [1, 6, 0, 360, 100, 1],
        TYPE: exports.auto3gun
      },
      {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: exports.broad
      }
    ]
  }),
  (exports.lul = {
  PARENT: [exports.genericTank],
  LABEL: 'choose ur role',
  }),
  (exports.lul2 = {
  PARENT: [exports.genericTank],
  LABEL: 'dis is OP',
  }),
  (exports.edbody = {
  PARENT: [exports.genericTank],
  SHAPE: 12,
  LABEL: '',
  }),
  (exports.eventdev = {
  PARENT: [exports.genericTank],
  LABEL: 'Event Developer',
  LEVEL: 45,
  SHAPE: 12,
  FACING_TYPE: 'autospin',
  TURRETS: [{
    POSITION: [24.5, 0, 0, 0, 0, 0],
    TYPE: [exports.edbody, {INDEPENDENT: !0}]
  },{
    POSITION: [12, 0, 0, 0, 360, 1],
    TYPE: exports.anni
  }]
  }),
  (exports.eventdev.UPGRADES_TIER_1 = [exports.misc, exports.testbed, exports.sentries, exports.basic]),
  (exports.lul.UPGRADES_TIER_1 = [exports.amogus, exports.imposter]),
  (exports.lul2.UPGRADES_TIER_1 = [exports.rickrolled]),
  (exports.misc.UPGRADES_TIER_1 = [exports.mothership, exports.realned, exports.lul, exports.lul2, exports.ak47, exports.weirdspike, exports.soccerball, exports.bigbrain]),
  (exports.arenaClosers.UPGRADES_TIER_1 = [
    exports.arenaCloser,
    exports.microCloser,
    exports.flankCloser,
    exports.overCloser,
    exports.smashCloser,
    exports.fighterCloser
  ]),
  (exports.celestials.UPGRADES_TIER_1 = [
    exports.theiaLite,
    exports.zaphkielLite,
    exports.freyja,
    exports.paladin,
    exports.zaphkiel,
    exports.uriel,
    exports.cronus,
    exports.kronos,
    exports.gaea,
    exports.arkemines,
    exports.atlas,
    exports.helios
  ]),
  (exports.unfinished.UPGRADES_TIER_1 = []),
  (exports.dominators.UPGRADES_TIER_1 = [
    exports.destroyerDominator,
    exports.gunnerDominator,
    exports.builderDominator,
    exports.trapperDominator,
    exports.artyDominator
  ]),
  (exports.bosses.UPGRADES_TIER_1 = [
    exports.elite_destroyer,
    exports.elite_spawner,
    exports.elite_gunner,
    exports.elite_sprayer,
    exports.elite_battleship,
    exports.nestKeeper,
    exports.destructor,
    exports.eliteCruiser,
    exports.palisade,
    exports.skimboss,
    exports.summoner,
    exports.omegaocto,
    exports.hexaraider,
    exports.celestials,
    exports.bossesB
  ]);
exports.bossesB.UPGRADES_TIER_1 = [
  exports.fallenBooster,
  exports.fallenOverlord,
  exports.tatapo,
  exports.abomination,
  exports.conjure,
  exports.exquisiter,
  exports.guardian,
  exports.extirpator,
  exports.unnamedBoss
];
