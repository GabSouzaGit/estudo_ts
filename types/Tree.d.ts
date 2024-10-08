type Tree<T> = {
    value : T,
    childs : Tree<T> | null
}