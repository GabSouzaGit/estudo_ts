/** Declaração global de tipos **/

// Tipos fixos 
type Color = 'red' |
'green' |
'yellow' |
'blue' |
'purple' |
'cyan';

type BitOctect = `${1|0}${1|0}${1|0}${1|0}${1|0}${1|0}${1|0}${1|0}`

// Estruturas de dados
type Matrix<T> = T[][]

type Tree<T> = {
    value : number,
    childs? : Tree<T>[]
}

type BinaryTree<T> = {
    node : T,
    left : BinaryTree<T> | null,
    right : BinaryTree<T> | null
}

type DoublyLinkedListType<T> = {
    previous : DoublyLinkedListType<T>| null,
    value : T,
    next : DoublyLinkedListType<T> | null
}

type LinkedListStructure<T> = {
    [value : string] : T | any
}
