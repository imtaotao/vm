import { VM } from './vm.js'

const flag = Symbol('garContext')

export function isContext(obj) {
  return obj[flag] === true
}

export function createContext(obj) {
  obj[flag] = true
  return obj
}

export function script(code, opts) {
  return new VM(code, opts)
}