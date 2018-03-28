/*$ { fixture: 'should-trigger-at-declaration', expected: true } $*/

let a = 'foo', b = 'bar'; /*# { pos: 3 } #*/

/*$ { fixture: 'should-trigger-at-declarator', expected: true } $*/

let b = 'bar'; /*# { pos: 6 } #*/

/*$ { fixture: 'should-trigger-at-const-as-well', expected: true } $*/

const a = 'foo'; /*# { pos: 9 } #*/

/*$ { fixture: 'should-not-trigger-at-init', expected: false } $*/

let a = 'bar'; /*# { pos: 11 } #*/

/*$ { fixture: 'should-not-trigger-when-no-init', expected: false } $*/

let a; /*# { pos: 5 } #*/
