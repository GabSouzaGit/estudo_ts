// É possivel mesclar dois ou mais tipos no Typescript
// Tente usar o ContentSize no index.ts

type Size = 'sm' | 'm' | 'l' | 'xl' | '2xl';
type Content = 'text' | 'box' | 'border' | 'margin' | 'padding';
type Color = 'red' | 'blue' | 'green';
type ContentSized = `${Color}-${Content}-${Size}`;

