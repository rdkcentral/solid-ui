import type { KeyboardFormat } from './Keyboard.types.js';

const dialpad = {
  default: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']]
};

const dialpadExtended = {
  default: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0'],
    [
      {
        title: 'Delete',
        size: 'lg',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ]
  ]
} satisfies KeyboardFormat; // fixes type issue when assigned to KeyboardBase.formats

const email: KeyboardFormat = {
  uppercase: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      '@',
      {
        title: 'áöû',
        size: 'md',
        toggle: 'accents',
        announce: 'accents, button',
        keyId: 'accents'
      }
    ],
    [
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      { title: '_', announce: 'underscore, button' },
      {
        title: 'shift',
        size: 'md',
        toggle: 'default',
        announce: 'shift off, button',
        keyId: 'shift'
      }
    ],
    [
      { title: '.com', announce: 'dot, com', size: 'md' },
      { title: '.net', announce: 'dot, net', size: 'md' },
      { title: '.edu', announce: 'dot, edu', size: 'md' },
      { title: '.org', announce: 'dot, org', size: 'md' },
      { title: '.co', announce: 'dot, co', size: 'md' },
      { title: '.uk', announce: 'dot, uk', size: 'md' }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  default: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      '@',
      {
        title: 'áöû',
        size: 'md',
        toggle: 'accents',
        announce: 'accents, button',
        keyId: 'accents'
      }
    ],
    [
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      { title: '_', announce: 'underscore, button' },
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      {
        title: 'shift',
        size: 'md',
        toggle: 'uppercase',
        announce: 'shift on, button',
        keyId: 'shift'
      }
    ],
    [
      { title: '.com', announce: 'dot, com', size: 'md' },
      { title: '.net', announce: 'dot, net', size: 'md' },
      { title: '.edu', announce: 'dot, edu', size: 'md' },
      { title: '.org', announce: 'dot, org', size: 'md' },
      { title: '.co', announce: 'dot, co', size: 'md' },
      { title: '.uk', announce: 'dot, uk', size: 'md' }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  accents: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'ä',
      'ë',
      'ï',
      'ö',
      'ü',
      'ÿ',
      'à',
      'è',
      'ì',
      'ò',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'ù',
      'á',
      'é',
      'í',
      'ó',
      'ú',
      'ý',
      'â',
      'ê',
      '@',
      {
        title: 'abc',
        size: 'md',
        toggle: 'default',
        announce: 'alpha mode, button'
      }
    ],
    [
      'î',
      'ô',
      'û',
      'ã',
      'ñ',
      { title: '_', announce: 'underscore, button' },
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      {
        title: 'shift',
        size: 'xl',
        toggle: 'accentsUpper',
        announce: 'shift off, button',
        keyId: 'shift'
      }
    ],
    [
      { title: '.com', announce: 'dot, com', size: 'md' },
      { title: '.net', announce: 'dot, net', size: 'md' },
      { title: '.edu', announce: 'dot, edu', size: 'md' },
      { title: '.org', announce: 'dot, org', size: 'md' },
      { title: '.co', announce: 'dot, co', size: 'md' },
      { title: '.uk', announce: 'dot, uk', size: 'md' }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  accentsUpper: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'Ä',
      'Ë',
      'Ï',
      'Ö',
      'Ü',
      'Ÿ',
      'À',
      'È',
      'Ì',
      'Ò',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'Ù',
      'Á',
      'É',
      'Í',
      'Ó',
      'Ú',
      'Ý',
      'Â',
      'Ê',
      '@',
      {
        title: 'abc',
        size: 'md',
        toggle: 'default',
        announce: 'alpha mode, button'
      }
    ],
    [
      'Î',
      'Ô',
      'Û',
      'Ã',
      'Ñ',
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      { title: '_', announce: 'underscore, button' },
      {
        title: 'shift',
        size: 'xl',
        toggle: 'accents',
        announce: 'shift off, button',
        keyId: 'shift'
      }
    ],
    [
      { title: '.com', announce: 'dot, com', size: 'md' },
      { title: '.net', announce: 'dot, net', size: 'md' },
      { title: '.edu', announce: 'dot, edu', size: 'md' },
      { title: '.org', announce: 'dot, org', size: 'md' },
      { title: '.co', announce: 'dot, co', size: 'md' },
      { title: '.uk', announce: 'dot, uk', size: 'md' }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  symbols: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      { title: '!', announce: 'exclamation, button' },
      '@',
      '#',
      '$',
      '%',
      { title: '^', announce: 'caret circumflex, button' },
      '&',
      '*',
      { title: '(', announce: 'open parenthesis, button' },
      { title: ')', announce: 'close parenthesis, button' },
      {
        title: 'abc',
        size: 'md',
        toggle: 'default',
        announce: 'alpha mode, button'
      }
    ],
    [
      { title: '{', announce: 'open brace, button' },
      { title: '}', announce: 'close brace, button' },
      { title: '[', announce: 'open bracket, button' },
      { title: ']', announce: 'close bracket, button' },
      { title: ';', announce: 'semicolon, button' },
      { title: '"', announce: 'doublequote, button' },
      { title: ',', announce: 'comma, button' },
      { title: '|', announce: 'vertical bar, button' },
      { title: '\\', announce: 'backslash, button' },
      { title: '/', announce: 'forwardslash, button' },
      {
        title: 'áöû',
        size: 'md',
        toggle: 'accents',
        announce: 'accents, button',
        keyId: 'accents'
      }
    ],
    [
      { title: '<', announce: 'less than, button' },
      { title: '>', announce: 'greater than, button' },
      { title: '?', announce: 'question mark, button' },
      { title: '=', announce: 'equal sign, button' },
      { title: '`', announce: 'grave accent, button' },
      { title: '~', announce: 'tilde, button' },
      { title: '_', announce: 'underscore, button' },
      { title: ':', announce: 'colon, button' },
      { title: '-', announce: 'dash, button' },
      { title: '+', announce: 'plus sign, button' }
    ],
    [
      { title: '.com', announce: 'dot, com', size: 'md' },
      { title: '.net', announce: 'dot, net', size: 'md' },
      { title: '.edu', announce: 'dot, edu', size: 'md' },
      { title: '.org', announce: 'dot, org', size: 'md' },
      { title: '.co', announce: 'dot, co', size: 'md' },
      { title: '.uk', announce: 'dot, uk', size: 'md' }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ]
};
const fullscreen: KeyboardFormat = {
  letters: [
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      {
        title: '#@!',
        size: 'lg',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      },
      {
        title: 'Space',
        size: 'lg',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      },
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
  ],
  symbols: [
    [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      {
        title: 'ABC',
        size: 'lg',
        toggle: 'letters',
        announce: 'caps on, button'
      },
      {
        title: 'Space',
        size: 'lg',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      },
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ],
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      { title: '!', announce: 'exclamation, button' },
      '@',
      '#',
      '$',
      '%',
      { title: '^', announce: 'caret circumflex, button' },
      '&',
      '*',
      { title: '(', announce: 'open parenthesis, button' },
      { title: ')', announce: 'close parenthesis, button' },
      { title: '`', announce: 'grave accent, button' },
      '~',
      '_',
      '.',
      '-',
      '+'
    ]
  ]
};
const numbers: KeyboardFormat = {
  default: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']]
};

const qwerty: KeyboardFormat = {
  uppercase: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      '@',
      {
        title: 'áöû',
        size: 'md',
        toggle: 'accents',
        announce: 'accents, button',
        keyId: 'accents'
      }
    ],
    [
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      { title: '_', announce: 'underscore, button' },
      {
        title: 'shift',
        size: 'md',
        toggle: 'default',
        announce: 'shift off, button',
        keyId: 'shift'
      }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  default: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      '@',
      {
        title: 'áöû',
        size: 'md',
        toggle: 'accents',
        announce: 'accents, button',
        keyId: 'accents'
      }
    ],
    [
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      { title: '_', announce: 'underscore, button' },
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      {
        title: 'shift',
        size: 'md',
        toggle: 'uppercase',
        announce: 'shift on, button',
        keyId: 'shift'
      }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  accents: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'ä',
      'ë',
      'ï',
      'ö',
      'ü',
      'ÿ',
      'à',
      'è',
      'ì',
      'ò',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'ù',
      'á',
      'é',
      'í',
      'ó',
      'ú',
      'ý',
      'â',
      'ê',
      '@',
      {
        title: 'abc',
        size: 'md',
        toggle: 'default',
        announce: 'alpha mode, button'
      }
    ],
    [
      'î',
      'ô',
      'û',
      'ã',
      'ñ',
      { title: '_', announce: 'underscore, button' },
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      {
        title: 'shift',
        size: 'xl',
        toggle: 'accentsUpper',
        announce: 'shift off, button',
        keyId: 'shift'
      }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  accentsUpper: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      'Ä',
      'Ë',
      'Ï',
      'Ö',
      'Ü',
      'Ÿ',
      'À',
      'È',
      'Ì',
      'Ò',
      {
        title: '#@!',
        size: 'md',
        toggle: 'symbols',
        announce: 'symbol mode, button',
        keyId: 'symbols'
      }
    ],
    [
      'Ù',
      'Á',
      'É',
      'Í',
      'Ó',
      'Ú',
      'Ý',
      'Â',
      'Ê',
      '@',
      {
        title: 'abc',
        size: 'md',
        toggle: 'default',
        announce: 'alpha mode, button'
      }
    ],
    [
      'Î',
      'Ô',
      'Û',
      'Ã',
      'Ñ',
      { title: '.', announce: 'period, button' },
      { title: '-', announce: 'dash, button' },
      { title: '_', announce: 'underscore, button' },
      {
        title: 'shift',
        size: 'xl',
        toggle: 'accents',
        announce: 'shift off, button',
        keyId: 'shift'
      }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ],
  symbols: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ],
    [
      { title: '!', announce: 'exclamation, button' },
      '@',
      '#',
      '$',
      '%',
      { title: '^', announce: 'caret circumflex, button' },
      '&',
      '*',
      { title: '(', announce: 'open parenthesis, button' },
      { title: ')', announce: 'close parenthesis, button' },
      {
        title: 'abc',
        size: 'md',
        toggle: 'default',
        announce: 'alpha mode, button'
      }
    ],
    [
      { title: '{', announce: 'open brace, button' },
      { title: '}', announce: 'close brace, button' },
      { title: '[', announce: 'open bracket, button' },
      { title: ']', announce: 'close bracket, button' },
      { title: ';', announce: 'semicolon, button' },
      { title: '"', announce: 'doublequote, button' },
      { title: ',', announce: 'comma, button' },
      { title: '|', announce: 'vertical bar, button' },
      { title: '\\', announce: 'backslash, button' },
      { title: '/', announce: 'forwardslash, button' },
      {
        title: 'áöû',
        size: 'md',
        toggle: 'accents',
        announce: 'accents, button',
        keyId: 'accents'
      }
    ],
    [
      { title: '<', announce: 'less than, button' },
      { title: '>', announce: 'greater than, button' },
      { title: '?', announce: 'question mark, button' },
      { title: '=', announce: 'equal sign, button' },
      { title: '`', announce: 'grave accent, button' },
      { title: '~', announce: 'tilde, button' },
      { title: '_', announce: 'underscore, button' },
      { title: ':', announce: 'colon, button' },
      { title: '-', announce: 'dash, button' },
      { title: '+', announce: 'plus sign, button' }
    ],
    [
      {
        title: 'Clear',
        size: 'lg',
        keyId: 'clear',
        announce: 'clear, button'
      },
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Done',
        size: 'lg',
        keyId: 'done',
        announce: 'done, button'
      }
    ]
  ]
};
const search: KeyboardFormat = {
  uppercase: [
    ['A', 'B', 'C', 'D', 'E', 'F'],
    ['G', 'H', 'I', 'J', 'K', 'L'],
    ['M', 'N', 'O', 'P', 'Q', 'R'],
    ['S', 'T', 'U', 'V', 'W', 'X'],
    [
      'Y',
      'Z',
      { title: '1', keyId: 'number' },
      { title: '2', keyId: 'number' },
      { title: '3', keyId: 'number' },
      { title: '4', keyId: 'number' }
    ],
    [
      { title: '5', keyId: 'number' },
      { title: '6', keyId: 'number' },
      { title: '7', keyId: 'number' },
      { title: '8', keyId: 'number' },
      { title: '9', keyId: 'number' },
      { title: '0', keyId: 'number' }
    ],
    [
      {
        title: 'Space',
        size: 'xl',
        keyId: 'space',
        announce: 'space, button'
      },
      {
        title: 'Delete',
        size: 'md',
        keyId: 'delete',
        announce: 'delete, button'
      }
    ]
  ]
};
const simple: KeyboardFormat = {
  default: [
    [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      {
        title: 'Delete',
        size: 'md'
      }
    ],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    [
      {
        title: 'Clear',
        size: 'lg'
      },
      {
        title: 'Space',
        size: 'xl'
      },
      {
        title: 'Done',
        size: 'lg'
      }
    ]
  ]
};

export default {
  dialpad,
  dialpadExtended,
  email,
  fullscreen,
  numbers,
  qwerty,
  search,
  simple
};
