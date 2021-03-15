

```log

```

```javascript

this.style({
    transform: 'rotate(' + 10 +'deg) scale(0.6, 0.6) matrix(1, 0, 0, 1, 0, 0)'
});


Transform.element(this.element, [
    'rotate(' + 10 +'deg)',
    'scale(0.6, 0.6)',
    'matrix(1, 0, 0, 1, 0, 0)',
]);


const trs = Transform(this.element);

trs.method('translate', ['-25px', '-25px']);
trs.method('scale', [0.8, 0.8]);
trs.method('rotate', '10deg');
trs.introduce();

```
