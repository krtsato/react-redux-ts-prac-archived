import {Todos, DispFilter, DispFilterLiteral} from "./types"

export const getVisibleTodos = (todos: Todos, dispFilter: DispFilter): Todos => {
  switch (dispFilter) {
    case DispFilterLiteral.showAll:
      return todos
    case DispFilterLiteral.showCompleted:
      return todos.filter(todo => todo.wasCompleted)
    case DispFilterLiteral.showActive:
      return todos.filter(todo => !todo.wasCompleted)
    default: {
      const _exhaustion: never = dispFilter
      throw new Error(`Unknown filter: ${dispFilter}`)
    }
  }
}
