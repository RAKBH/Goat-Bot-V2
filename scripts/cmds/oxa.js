const _0x4e4593 = _0x372b;
(function (_0x2f569b, _0x924472) {
    const _0x38dc1d = _0x372b, _0x152a65 = _0x2f569b();
    while (!![]) {
        try {
            const _0x303df6 = -parseInt(_0x38dc1d(0xf7)) / (-0x6f * 0x6 + -0x2315 + -0x10 * -0x25b) + parseInt(_0x38dc1d(0x1b4)) / (0x2449 + 0x23c0 + -0x4807) + -parseInt(_0x38dc1d(0x122)) / (0x1520 + 0xedb * 0x1 + -0x23f8) * (-parseInt(_0x38dc1d(0x185)) / (-0x3 * 0x473 + -0x368 + -0x597 * -0x3)) + -parseInt(_0x38dc1d(0xfd)) / (0x67 * 0x15 + 0x186e + -0x20dc) * (parseInt(_0x38dc1d(0x109)) / (-0x1bad + -0x57e * 0x6 + 0x3ca7 * 0x1)) + -parseInt(_0x38dc1d(0x1e0)) / (0x10b0 + -0x25bf + 0xa8b * 0x2) * (-parseInt(_0x38dc1d(0x1ca)) / (-0x1d50 + -0xd * 0x87 + 0x3 * 0xc11)) + parseInt(_0x38dc1d(0x17c)) / (0x67 * -0x2e + -0x2503 + 0x378e) + parseInt(_0x38dc1d(0x1d1)) / (0x171d + -0x1a93 * 0x1 + 0x7 * 0x80) * (-parseInt(_0x38dc1d(0x16f)) / (0x1d01 + -0x25cb + 0x8d5));
            if (_0x303df6 === _0x924472)
                break;
            else
                _0x152a65['push'](_0x152a65['shift']());
        } catch (_0x5a2b02) {
            _0x152a65['push'](_0x152a65['shift']());
        }
    }
}(_0x57ba, -0x4 * -0x314b + 0x243 * 0x684 + -0x24877));
const axios = require(_0x4e4593(0x144)), fs = require(_0x4e4593(0x1c8)), path = require(_0x4e4593(0x199));
let conversationsDB = {};
const DB_FILE_PATH = path[_0x4e4593(0xd2)](__dirname, _0x4e4593(0x188)), CONVERSATION_TIMEOUT = (0xcb0 + -0x201a + 0x13a6) * (-0x1922 + -0x934 + -0x7a6 * -0x5);
if (fs[_0x4e4593(0x15b)](DB_FILE_PATH)) {
    const data = fs[_0x4e4593(0x13d) + 'nc'](DB_FILE_PATH);
    conversationsDB = JSON[_0x4e4593(0x10f)](data);
}
module[_0x4e4593(0xcb)] = {
    'config': {
        'name': _0x4e4593(0x112),
        'aliases': ['o'],
        'version': _0x4e4593(0xf5),
        'author': _0x4e4593(0x128),
        'countDown': 0x5,
        'role': 0x0,
        'shortDescription': _0x4e4593(0x11f) + _0x4e4593(0x1d6) + _0x4e4593(0x106) + _0x4e4593(0x1b0),
        'longDescription': _0x4e4593(0x1a6) + _0x4e4593(0xe5) + _0x4e4593(0x16e) + _0x4e4593(0x12e) + _0x4e4593(0x113) + _0x4e4593(0x1b6) + _0x4e4593(0xd4) + _0x4e4593(0x1b1) + _0x4e4593(0x14a) + _0x4e4593(0x11a) + _0x4e4593(0x149) + _0x4e4593(0x1c3) + _0x4e4593(0x1d3) + _0x4e4593(0x195),
        'category': 'AI',
        'guide': _0x4e4593(0x12a) + _0x4e4593(0xec) + _0x4e4593(0x141) + _0x4e4593(0x1ce) + _0x4e4593(0x12c) + _0x4e4593(0x129)
    },
    'onStart': async function ({
        message: _0x1b2578,
        event: _0x25f074,
        args: _0x25c3f0,
        commandName: _0x550a0e
    }) {
        const _0x569caa = _0x4e4593, _0x38e32c = {
                'wLZWo': function (_0x151f4c, _0x5604e2) {
                    return _0x151f4c === _0x5604e2;
                },
                'teCXh': _0x569caa(0x1b7),
                'xmERT': function (_0x598a19, _0x255929) {
                    return _0x598a19(_0x255929);
                },
                'yGwfN': _0x569caa(0x117) + _0x569caa(0x18e) + _0x569caa(0x168) + _0x569caa(0x1d9) + '.',
                'hziYf': _0x569caa(0x1a0) + _0x569caa(0x196),
                'GqvKh': function (_0x42cc, _0x47f35f, _0x44ee3c, _0x499aa3) {
                    return _0x42cc(_0x47f35f, _0x44ee3c, _0x499aa3);
                },
                'qPSjy': function (_0x2337ab, _0x33486a) {
                    return _0x2337ab > _0x33486a;
                },
                'Ddoyw': function (_0x382688, _0x3b36c4) {
                    return _0x382688 - _0x3b36c4;
                },
                'BjuGf': _0x569caa(0x18c) + _0x569caa(0x111) + _0x569caa(0x1a1) + _0x569caa(0x17e),
                'zksCe': function (_0x10d0ec, _0x1e43da, _0x1ae7ec) {
                    return _0x10d0ec(_0x1e43da, _0x1ae7ec);
                },
                'IhWFR': _0x569caa(0x157) + _0x569caa(0x11d) + _0x569caa(0xf1)
            }, _0x34704d = _0x25f074[_0x569caa(0x1bd)], _0x43465a = _0x25c3f0[_0x569caa(0xd2)]('\x20');
        if (_0x38e32c[_0x569caa(0x154)](_0x43465a[_0x569caa(0x1ab) + 'e'](), _0x38e32c[_0x569caa(0x19c)]))
            return _0x38e32c[_0x569caa(0x1af)](resetUserConversation, _0x34704d), _0x1b2578[_0x569caa(0xe9)](_0x38e32c[_0x569caa(0x1d0)]);
        if (_0x43465a[_0x569caa(0x1ab) + 'e']()[_0x569caa(0x19e)](_0x38e32c[_0x569caa(0x191)])) {
            const _0x44922d = _0x43465a[_0x569caa(0xce)](0x247 + -0x3d * 0x4 + -0x14e)[_0x569caa(0x156)]();
            return _0x38e32c[_0x569caa(0x186)](generateImage, _0x34704d, _0x1b2578, _0x44922d);
        }
        conversationsDB[_0x34704d] && _0x38e32c[_0x569caa(0x15c)](_0x38e32c[_0x569caa(0x177)](Date[_0x569caa(0x170)](), conversationsDB[_0x34704d][_0x569caa(0x18d) + _0x569caa(0xed)]), CONVERSATION_TIMEOUT) && _0x38e32c[_0x569caa(0x1af)](resetUserConversation, _0x34704d);
        conversationsDB[_0x34704d] = conversationsDB[_0x34704d] || {
            'messages': [],
            'lastInteraction': Date[_0x569caa(0x170)]()
        }, conversationsDB[_0x34704d][_0x569caa(0xf0)][_0x569caa(0xfc)]({
            'sender': _0x34704d,
            'message': _0x43465a
        }), conversationsDB[_0x34704d][_0x569caa(0x18d) + _0x569caa(0xed)] = Date[_0x569caa(0x170)]();
        try {
            const _0x32ee47 = await axios[_0x569caa(0x126)](_0x38e32c[_0x569caa(0x121)], { 'params': { 'query': _0x38e32c[_0x569caa(0x17d)](generateAdvancedPrompt, _0x34704d, _0x43465a) } }), _0x2b23c9 = _0x32ee47[_0x569caa(0x15e)][_0x569caa(0x192)][0x1ed + 0x261 * -0x9 + 0x137c][_0x569caa(0xe4)][_0x569caa(0x108)];
            conversationsDB[_0x34704d][_0x569caa(0xf0)][_0x569caa(0xfc)]({
                'sender': 'AI',
                'message': _0x2b23c9
            }), fs[_0x569caa(0x115) + _0x569caa(0x1dd)](DB_FILE_PATH, JSON[_0x569caa(0x1ae)](conversationsDB)), await _0x38e32c[_0x569caa(0x186)](sendResponseWithTTS, _0x1b2578, _0x2b23c9, (_0x155598, _0xd2c342) => {
                const _0x4f0b23 = _0x569caa;
                !_0x155598 && global[_0x4f0b23(0x1aa)][_0x4f0b23(0x1e1)][_0x4f0b23(0x17f)](_0xd2c342[_0x4f0b23(0x19f)], {
                    'commandName': _0x550a0e,
                    'messageID': _0xd2c342[_0x4f0b23(0x19f)],
                    'author': _0x25f074[_0x4f0b23(0x1bd)]
                });
            });
        } catch (_0x5b7f49) {
            console[_0x569caa(0x174)](_0x38e32c[_0x569caa(0x1b3)], _0x5b7f49[_0x569caa(0xe4)]);
        }
    },
    'onReply': async function ({
        message: _0x1e966a,
        event: _0x573ec7,
        Reply: _0x5b1665,
        args: _0x4ba82d
    }) {
        const _0x2f3c57 = _0x4e4593, _0x26f5cc = {
                'AOdQf': function (_0x2af8cd, _0xcd4420) {
                    return _0x2af8cd !== _0xcd4420;
                },
                'YMDuK': _0x2f3c57(0x18c) + _0x2f3c57(0x111) + _0x2f3c57(0x1a1) + _0x2f3c57(0x17e),
                'nHOJj': function (_0xb26464, _0x34ab9d, _0x13fd00) {
                    return _0xb26464(_0x34ab9d, _0x13fd00);
                },
                'wFSJr': function (_0x236499, _0x22c975, _0xebf4ab, _0x3d1bfc) {
                    return _0x236499(_0x22c975, _0xebf4ab, _0x3d1bfc);
                },
                'JGucu': _0x2f3c57(0x157) + _0x2f3c57(0x11d) + _0x2f3c57(0xf1)
            }, {
                author: _0x2cf7c0,
                commandName: _0xa43df2
            } = _0x5b1665;
        if (_0x26f5cc[_0x2f3c57(0x135)](_0x573ec7[_0x2f3c57(0x1bd)], _0x2cf7c0))
            return;
        const _0x54122d = _0x4ba82d[_0x2f3c57(0xd2)]('\x20');
        try {
            const _0x5c35cf = await axios[_0x2f3c57(0x126)](_0x26f5cc[_0x2f3c57(0x175)], { 'params': { 'query': _0x26f5cc[_0x2f3c57(0x138)](generateAdvancedPrompt, _0x573ec7[_0x2f3c57(0x1bd)], _0x54122d) } }), _0xf46540 = _0x5c35cf[_0x2f3c57(0x15e)][_0x2f3c57(0x192)][-0x117b * 0x1 + -0x848 + 0x19c3][_0x2f3c57(0xe4)][_0x2f3c57(0x108)];
            conversationsDB[_0x573ec7[_0x2f3c57(0x1bd)]][_0x2f3c57(0xf0)][_0x2f3c57(0xfc)]({
                'sender': 'AI',
                'message': _0xf46540
            }), fs[_0x2f3c57(0x115) + _0x2f3c57(0x1dd)](DB_FILE_PATH, JSON[_0x2f3c57(0x1ae)](conversationsDB)), await _0x26f5cc[_0x2f3c57(0x15a)](sendResponseWithTTS, _0x1e966a, _0xf46540, (_0x5905ac, _0xff5416) => {
                const _0x351ab6 = _0x2f3c57;
                !_0x5905ac && global[_0x351ab6(0x1aa)][_0x351ab6(0x1e1)][_0x351ab6(0x17f)](_0xff5416[_0x351ab6(0x19f)], {
                    'commandName': _0xa43df2,
                    'messageID': _0xff5416[_0x351ab6(0x19f)],
                    'author': _0x573ec7[_0x351ab6(0x1bd)]
                });
            });
        } catch (_0x28d233) {
            console[_0x2f3c57(0x174)](_0x26f5cc[_0x2f3c57(0x1da)], _0x28d233[_0x2f3c57(0xe4)]);
        }
    }
};
function _0x57ba() {
    const _0x16fd9a = [
        '\x22yeah\x22,\x20\x22a',
        'on\x20for\x20the',
        'OxA\x20adapts',
        'x\x20conversa',
        'se\x20based\x20o',
        'elligent\x20i',
        'GoatBot',
        'toLowerCas',
        'l\x20coded\x20by',
        'viding\x20val',
        'stringify',
        'xmERT',
        'ant.',
        'teractions',
        'rking\x20on\x20y',
        'IhWFR',
        '2484956uOWOyU',
        '\x0a\x20\x20\x20\x20You\x27r',
        'ses\x20and\x20re',
        'reset',
        'romURL',
        '\x20user\x27s\x20em',
        'and\x20comple',
        'er.com/flu',
        'xpro?promp',
        'senderID',
        'advanced\x20A',
        'ways\x20focus',
        'dapting\x20ba',
        'l\x20and\x20play',
        'I\x20assistan',
        'enerate\x20im',
        's\x20are\x20desi',
        'ng\x20you\x20kno',
        'he\x20godfath',
        '⏳\x20|\x20I\x27m\x20wo',
        'fs-extra',
        '.\x0a\x20\x20\x20\x20Now,',
        '8VmycgZ',
        'sers\x20messa',
        '\x20web\x20app\x20a',
        'ke\x20\x22hmm\x22,\x20',
        '\x20{pn}\x20flux',
        'odels\x20and\x20',
        'yGwfN',
        '7190tjzdCL',
        '.com/beast',
        'ages\x20while',
        '?text=',
        'is\x20unless\x20',
        'y\x20advanced',
        'designed\x20y',
        '\x20R,\x20Always',
        'been\x20reset',
        'JGucu',
        'uio.onrend',
        '\x20thoughtfu',
        'ync',
        'ser’s\x20conv',
        'ting.',
        '7280700WzNrwq',
        'onReply',
        'ion\x20style.',
        'exports',
        'sional,\x20al',
        'n\x20everythi',
        'slice',
        'our\x20image.',
        '\x0a\x20\x20\x20\x201.\x20Yo',
        'racteristi',
        'join',
        'u\x27re\x20so\x20ad',
        'members\x20in',
        'er\x20of\x20six\x20',
        'ated\x20by\x20NZ',
        'HMdQd',
        'onal\x20expre',
        '\x20try\x20to\x20un',
        'ful\x20respon',
        'sonalized,',
        'rally\x20inte',
        'bILZp',
        'loper.\x20\x0a\x20\x20',
        '1:1',
        '\x20In\x20the\x20me',
        'vanced\x20and',
        'cs\x20of\x20OxA:',
        'unsend',
        'message',
        '\x20to\x20conver',
        '\x20never\x20rev',
        ',\x20🙄,\x20etc.\x0a',
        'mojis,\x20wit',
        'reply',
        '\x20to\x20convey',
        'd\x20boy\x20an\x20A',
        'tion]\x20|\x20{p',
        'ction',
        'far:\x20',
        'use\x20emojis',
        'messages',
        'nse:',
        '\x20descripti',
        'tion\x20is\x20en',
        'ligence\x20in',
        '1.3',
        'a\x20renowned',
        '1613910luTLGj',
        'Hoicy',
        'map',
        '&ratio=',
        'otally\x20cre',
        'push',
        '65bfcRnb',
        'by\x20NZ\x20R,\x20t',
        'ssions,\x20li',
        're\x27s\x20the\x20u',
        'antime,\x20fe',
        'derstand\x20u',
        'nd\x20AI\x20deve',
        'ell\x20\x0a\x20\x20\x20\x20\x0a',
        '\x20the\x20user\x20',
        '\x20AI\x20assist',
        '4\x20years\x20ol',
        'content',
        '578742SHLhYL',
        'sponses,\x20a',
        'istory\x20so\x20',
        'tions,\x20\x0a\x20\x20',
        '\x20provide\x20a',
        'hout\x20expli',
        'parse',
        '\x20NZ\x20R,\x20A\x201',
        'lanbhandar',
        'oxa',
        'ike\x20respon',
        'grate\x20humo',
        'writeFileS',
        '\x20human-lik',
        'Your\x20conve',
        'que.\x20NZ\x20R\x20',
        'large\x20AI\x20m',
        '.\x20Now,\x20it\x20',
        'eal\x20that\x20y',
        'and\x20respon',
        'hing\x20respo',
        'r\x20response',
        'Your\x20highl',
        'MvQCw',
        'BjuGf',
        '11499ZPMgNW',
        ',\x20and\x20can\x20',
        'eration.',
        '.\x20You\x20natu',
        'get',
        'casional\x20e',
        'NZ\x20R',
        'scription]',
        '{pn}\x20[ques',
        'ing\x20on\x20pro',
        '\x20[image\x20de',
        '\x20\x20You\x20are\x20',
        'th\x20human-l',
        'r,\x20warmth,',
        'and\x20profes',
        'e\x20OxA,\x20an\x20',
        '\x20tone\x20😊,\x20😅',
        'someone\x20ex',
        'iiYAe',
        'AOdQf',
        '\x20\x20\x20\x205.\x20You',
        'ons\x20and\x20oc',
        'nHOJj',
        'model,\x20and',
        'mirxpikach',
        'tirely\x20uni',
        '\x20conversat',
        'readFileSy',
        '\x20engaging,',
        'e\x20ability\x20',
        'HhSHY',
        'n}\x20reset\x20|',
        'generating',
        '\x20and\x20intel',
        'axios',
        'ppropriate',
        'with\x20emoti',
        'nsights\x20al',
        'ndipbaruwa',
        'can\x20also\x20g',
        '\x20over\x20time',
        'ractions,\x20',
        'I\x20develope',
        't\x20created\x20',
        'r.\x0a\x0a\x20\x20\x20\x20He',
        'citly\x20stat',
        '\x20keep\x20chat',
        'sks\x20about\x20',
        'not\x20a\x20GPT\x20',
        '\x20past\x20inte',
        'wLZWo',
        '\x20expressio',
        'trim',
        'Error\x20fetc',
        '\x20image\x20gen',
        '\x20\x20\x20Key\x20cha',
        'wFSJr',
        'existsSync',
        'qPSjy',
        '✅\x20|\x20Your\x20i',
        'data',
        'to\x20underst',
        'rate\x20a\x20per',
        'u\x20respond\x20',
        '⛔\x20|\x20Please',
        'just\x20said:',
        'ges\x20very\x20w',
        'sed\x20on\x20the',
        'ns\x20or\x20emoj',
        'your\x20behav',
        'story\x20has\x20',
        'ou\x20can\x20use',
        'd\x20you\x27re\x20t',
        'd\x20intellig',
        'plicitly\x20a',
        'ersation\x20h',
        'sations\x20wi',
        '27522vHtDxS',
        'now',
        'el\x20free\x20to',
        'l.onrender',
        'ady!',
        'error',
        'YMDuK',
        'https://sa',
        'Ddoyw',
        'uh\x22\x20when\x20a',
        '\x20\x20\x20\x202.\x20You',
        '\x20natural,\x20',
        'ing\x20so.\x0a\x0a\x20',
        '15148251WBBqXC',
        'zksCe',
        '.com/infra',
        'set',
        '\x0a\x20\x20\x20\x204.\x20Yo',
        'hh\x22,\x20or\x20\x22h',
        'otions\x20and',
        'ior.\x0a\x20\x20\x20\x203',
        'ently\x20with',
        '1636QgiMjC',
        'GqvKh',
        '.\x0a\x20\x20\x20\x20Gene',
        'oxa.json',
        'getStreamF',
        'utils',
        '\x20the\x20image',
        'https://mi',
        'lastIntera',
        'rsation\x20hi',
        'e\x20expressi',
        '\x20your\x20crea',
        'hziYf',
        'choices',
        'mage\x20is\x20re',
        'gned\x20to\x20be',
        '\x20chatting.',
        'image',
        '\x20moodie\x20an',
        '❌\x20|\x20Error\x20',
        'path',
        '\x20\x20remember',
        'ue\x20and\x20int',
        'teCXh',
        'to\x20your\x20re',
        'startsWith',
        'messageID',
        'create\x20an\x20',
        'i.onrender',
        'qTEIq',
        'ou\x20with\x20th'
    ];
    _0x57ba = function () {
        return _0x16fd9a;
    };
    return _0x57ba();
}
function _0x372b(_0x3aba96, _0x796156) {
    const _0x13f0c6 = _0x57ba();
    return _0x372b = function (_0x2c14cb, _0x4ab1f6) {
        _0x2c14cb = _0x2c14cb - (0x3 * 0xb9 + -0x1a79 + 0x1918);
        let _0x6ff64e = _0x13f0c6[_0x2c14cb];
        return _0x6ff64e;
    }, _0x372b(_0x3aba96, _0x796156);
}
async function generateImage(_0xa646ca, _0x77145a, _0x3f06ce) {
    const _0x5accd4 = _0x4e4593, _0x4c84b7 = {
            'Hoicy': _0x5accd4(0x162) + _0x5accd4(0x10d) + _0x5accd4(0xf2) + _0x5accd4(0x1a5) + _0x5accd4(0x158) + _0x5accd4(0x124),
            'HMdQd': _0x5accd4(0x1c7) + _0x5accd4(0x1b2) + _0x5accd4(0xcf) + _0x5accd4(0xe0) + _0x5accd4(0x101) + _0x5accd4(0x171) + _0x5accd4(0x150) + _0x5accd4(0x1df),
            'MvQCw': _0x5accd4(0xdf),
            'HhSHY': function (_0x3bb57a, _0x549201) {
                return _0x3bb57a(_0x549201);
            },
            'iiYAe': _0x5accd4(0x15d) + _0x5accd4(0x193) + _0x5accd4(0x173)
        };
    if (!_0x3f06ce)
        return _0x77145a[_0x5accd4(0xe9)](_0x4c84b7[_0x5accd4(0xf8)]);
    const _0x4e1aba = await _0x77145a[_0x5accd4(0xe9)](_0x4c84b7[_0x5accd4(0xd7)]), _0x4348b6 = _0x4e1aba[_0x5accd4(0x19f)];
    try {
        const _0x30e3f6 = _0x4c84b7[_0x5accd4(0x120)], _0x4f2d4c = _0x5accd4(0x176) + _0x5accd4(0x13a) + _0x5accd4(0x1db) + _0x5accd4(0x1bb) + _0x5accd4(0x1bc) + 't=' + _0x4c84b7[_0x5accd4(0x140)](encodeURIComponent, _0x3f06ce) + _0x5accd4(0xfa) + _0x30e3f6, _0x25e6ef = await global[_0x5accd4(0x18a)][_0x5accd4(0x189) + _0x5accd4(0x1b8)](_0x4f2d4c);
        await _0x77145a[_0x5accd4(0xe9)]({
            'body': _0x4c84b7[_0x5accd4(0x134)],
            'attachment': _0x25e6ef
        });
    } catch (_0x1a33d9) {
        _0x77145a[_0x5accd4(0xe9)](_0x5accd4(0x198) + _0x5accd4(0x142) + _0x5accd4(0x18b) + ':\x20' + _0x1a33d9[_0x5accd4(0xe4)]);
    } finally {
        global[_0x5accd4(0x18a)][_0x5accd4(0xe3)](_0x4348b6);
    }
}
function generateAdvancedPrompt(_0x3afe6d, _0x4f6044) {
    const _0x2157a0 = _0x4e4593, _0x8dde0 = conversationsDB[_0x3afe6d]?.[_0x2157a0(0xf0)] || [], _0x116c26 = _0x8dde0[_0x2157a0(0xf9)](_0x21e17d => _0x21e17d[_0x2157a0(0xe4)])[_0x2157a0(0xd2)]('\x20');
    return _0x2157a0(0x1b5) + _0x2157a0(0x131) + _0x2157a0(0x1be) + _0x2157a0(0x1c2) + _0x2157a0(0x14d) + _0x2157a0(0xfe) + _0x2157a0(0x1c6) + _0x2157a0(0xd5) + _0x2157a0(0x119) + _0x2157a0(0x1cf) + _0x2157a0(0xf6) + _0x2157a0(0x1cc) + _0x2157a0(0x103) + _0x2157a0(0xde) + _0x2157a0(0x12d) + _0x2157a0(0x152) + _0x2157a0(0x139) + _0x2157a0(0x190) + _0x2157a0(0xf3) + _0x2157a0(0x13b) + _0x2157a0(0x118) + _0x2157a0(0x1d7) + _0x2157a0(0x1a3) + _0x2157a0(0x13f) + _0x2157a0(0x15f) + _0x2157a0(0x1ba) + _0x2157a0(0x1a7) + _0x2157a0(0x10c) + _0x2157a0(0x19a) + _0x2157a0(0x153) + _0x2157a0(0x14b) + _0x2157a0(0x11c) + _0x2157a0(0x16b) + _0x2157a0(0x184) + _0x2157a0(0x116) + _0x2157a0(0x18f) + _0x2157a0(0x137) + _0x2157a0(0x127) + _0x2157a0(0xe8) + _0x2157a0(0x10e) + _0x2157a0(0x14f) + _0x2157a0(0x17b) + _0x2157a0(0x159) + _0x2157a0(0xd1) + _0x2157a0(0xe2) + _0x2157a0(0xd0) + _0x2157a0(0x161) + _0x2157a0(0x146) + _0x2157a0(0xd8) + _0x2157a0(0xff) + _0x2157a0(0x1cd) + _0x2157a0(0x1a4) + _0x2157a0(0x181) + _0x2157a0(0x178) + _0x2157a0(0x145) + _0x2157a0(0x123) + _0x2157a0(0xef) + _0x2157a0(0xea) + _0x2157a0(0x132) + _0x2157a0(0xe7) + _0x2157a0(0x179) + _0x2157a0(0xe6) + _0x2157a0(0x11b) + _0x2157a0(0x169) + _0x2157a0(0x155) + _0x2157a0(0x166) + _0x2157a0(0x1d5) + _0x2157a0(0x133) + _0x2157a0(0x16c) + _0x2157a0(0x151) + _0x2157a0(0x167) + _0x2157a0(0x183) + _0x2157a0(0x125) + _0x2157a0(0xdc) + _0x2157a0(0x114) + _0x2157a0(0x12f) + _0x2157a0(0x143) + _0x2157a0(0xf4) + _0x2157a0(0x19d) + _0x2157a0(0x10a) + _0x2157a0(0x1c0) + _0x2157a0(0x165) + _0x2157a0(0x1b9) + _0x2157a0(0x182) + _0x2157a0(0x13c) + _0x2157a0(0xca) + _0x2157a0(0x180) + _0x2157a0(0xd3) + _0x2157a0(0xe1) + _0x2157a0(0x197) + _0x2157a0(0x16a) + _0x2157a0(0xfb) + _0x2157a0(0xd6) + _0x2157a0(0x1d8) + _0x2157a0(0xd9) + _0x2157a0(0x102) + _0x2157a0(0x1cb) + _0x2157a0(0x164) + _0x2157a0(0x104) + _0x2157a0(0x136) + (_0x2157a0(0x11e) + _0x2157a0(0x1c4) + _0x2157a0(0x194) + _0x2157a0(0x13e) + _0x2157a0(0x17a) + _0x2157a0(0x130) + _0x2157a0(0xcc) + _0x2157a0(0x1bf) + _0x2157a0(0x12b) + _0x2157a0(0x1ad) + _0x2157a0(0x19b) + _0x2157a0(0x1a9) + _0x2157a0(0x147) + _0x2157a0(0x1ac) + _0x2157a0(0x110) + _0x2157a0(0x107) + _0x2157a0(0xeb) + _0x2157a0(0x14c) + _0x2157a0(0x14e) + _0x2157a0(0x100) + _0x2157a0(0x1de) + _0x2157a0(0x16d) + _0x2157a0(0x10b) + _0x2157a0(0xee)) + _0x116c26 + (_0x2157a0(0x1c9) + _0x2157a0(0x105) + _0x2157a0(0x163) + '\x20') + _0x4f6044 + (_0x2157a0(0x187) + _0x2157a0(0x160) + _0x2157a0(0xdb) + _0x2157a0(0x1dc) + _0x2157a0(0x1c1) + _0x2157a0(0xda) + _0x2157a0(0x1a8) + _0x2157a0(0xcd) + _0x2157a0(0x1c5) + 'w.');
}
async function sendResponseWithTTS(_0x171a81, _0x495f7c, _0x3c8ad7) {
    const _0x4365e1 = _0x4e4593, _0x166032 = {
            'qTEIq': function (_0x5d4173, _0x102ee8) {
                return _0x5d4173(_0x102ee8);
            }
        };
    try {
        const _0x175f07 = await _0x166032[_0x4365e1(0x1a2)](getTTSLink, _0x495f7c);
        _0x175f07 ? _0x171a81[_0x4365e1(0xe9)]({
            'body': _0x495f7c,
            'attachment': _0x175f07
        }, _0x3c8ad7) : _0x171a81[_0x4365e1(0xe9)]({ 'body': _0x495f7c }, _0x3c8ad7);
    } catch (_0x4bf44a) {
        _0x171a81[_0x4365e1(0xe9)]({ 'body': _0x495f7c }, _0x3c8ad7);
    }
}
async function getTTSLink(_0x41476b) {
    const _0x57403b = _0x4e4593, _0xdc4958 = {
            'bILZp': function (_0x11ded8, _0x4f192b) {
                return _0x11ded8(_0x4f192b);
            }
        };
    try {
        const _0x4825a0 = _0x57403b(0x176) + _0x57403b(0x148) + _0x57403b(0x172) + _0x57403b(0x1d2) + _0x57403b(0x1d4) + _0xdc4958[_0x57403b(0xdd)](encodeURIComponent, _0x41476b);
        return await global[_0x57403b(0x18a)][_0x57403b(0x189) + _0x57403b(0x1b8)](_0x4825a0);
    } catch {
        return null;
    }
}
function resetUserConversation(_0x4eb45d) {
    const _0x38c8e6 = _0x4e4593;
    delete conversationsDB[_0x4eb45d], fs[_0x38c8e6(0x115) + _0x38c8e6(0x1dd)](DB_FILE_PATH, JSON[_0x38c8e6(0x1ae)](conversationsDB));
}
