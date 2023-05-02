/**
 * Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called.
 * As in "execute this function only if 100 milliseconds have passed without it being called."
 *
 * @method debounce
 * @access public
 * @param {function} callback
 * @param {integer} delay
 * @returns {function}
 * @example
 * import { debounce } from "path/to/utils.js"
 *
 * document.body.addEventListener('scroll', debounce(
 *    () => {
 *      // Your code here
 *      // Executed 50ms after the user stops to scroll
 *    }, 50
 * ))
 */
export const debounce = (callback, delay) => {
  let timer
  return (...args) => {
    // eslint-disable-next-line no-undef
    const context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(context, args)
    }, delay)
  }
}

/**
 * Throttling enforces a maximum number of times a function can be called over time.
 * As in "execute this function at most once every 100 milliseconds."
 *
 * @method throttle
 * @access public
 * @param {function} callback
 * @param {integer} delay
 * @returns {function}
 * @example
 * import { throttle } from "path/to/utils.js"
 *
 * document.body.addEventListener('scroll', throttle(
 *    () => {
 *      // Your code here
 *      // Executed everey 50ms during scrolling
 *    }, 50
 * ))
 */
export const throttle = (callback, delay) => {
  let last
  let timer
  // eslint-disable-next-line func-names
  return (...args) => {
    const context = this
    const now = +new Date()
    // eslint-disable-next-line prefer-rest-params
    if (last && now < last + delay) {
      // le délai n'est pas écoulé on reset le timer
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        callback.apply(context, args)
      }, delay)
    } else {
      last = now
      callback.apply(context, args)
    }
  }
}
