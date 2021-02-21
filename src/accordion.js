(function (window) {
  let uniqueId = 0

  const Accordion = function Accordion (selectorOrElement, userOptions) {
    const _this5 = this
    const _this = this
    let eventsAttached = false

    // Break the array with the selectors
    if (Array.isArray(selectorOrElement)) {
      if (selectorOrElement.length) {
        return selectorOrElement.map(function (single) {
          return new Accordion(single, userOptions)
        })
      }

      return false
    }

    const core = {
      init: function init () {
        const _this2 = this
        const defaults = {
          duration: 600, // animation duration in ms {number}
          ariaEnabled: true, // add ARIA elements to the HTML structure {boolean}
          collapse: true, // allow collapse expanded panel {boolean}
          showMultiple: false, // show multiple elements at the same time {boolean}
          openOnInit: [], // show accordion elements during initialization {array}
          elementClass: 'ac', // element class {string}
          triggerClass: 'ac-trigger', // trigger class {string}
          panelClass: 'ac-panel', // panel class {string}
          activeClass: 'is-active', // active element class {string}
          beforeOpen: function beforeOpen () { }, // calls before the item is opened {function}
          onOpen: function onOpen () { }, // calls when the item is opened {function}
          beforeClose: function beforeClose () { }, // calls before the item is closed {function}
          onClose: function onClose () { } // calls when the item is closed {function}
        }

        // Extend default options
        this.options = Object.assign(defaults, userOptions)
        const _this$options = this.options
        const elementClass = _this$options.elementClass
        const openOnInit = _this$options.openOnInit
        const isString = typeof selectorOrElement === 'string'

        this.container = isString ? document.querySelector(selectorOrElement) : selectorOrElement
        this.elements = Array.from(this.container.childNodes).filter(function (el) {
          return el.classList && el.classList.contains(elementClass)
        })

        this.firstElement = this.elements[0]
        this.lastElement = this.elements[this.elements.length - 1]
        this.currFocusedIdx = 0

        this.elements.map(function (element, idx) {
          // When JS is enabled, add the class to the element
          element.classList.add('js-enabled')

          _this2.generateIDs(element)
          _this2.setARIA(element)
          _this2.setTransition(element)

          uniqueId++
          return openOnInit.includes(idx) ? _this2.showElement(element, false) : _this2.closeElement(element, false)
        })

        _this.attachEvents()
      },

      setTransition: function setTransition (element) {
        const clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false
        const _this$options2 = this.options
        const duration = _this$options2.duration
        const panelClass = _this$options2.panelClass
        const el = element.querySelector('.'.concat(panelClass))
        const transition = isWebkit('transitionDuration')

        el.style[transition] = clear ? null : ''.concat(duration, 'ms')
      },

      generateIDs: function generateIDs(element) {
        const _this$options3 = this.options
        const triggerClass = _this$options3.triggerClass
        const panelClass = _this$options3.panelClass
        const trigger = element.querySelector('.'.concat(triggerClass))
        const panel = element.querySelector('.'.concat(panelClass))

        element.setAttribute('id', 'ac-'.concat(uniqueId))
        trigger.setAttribute('id', 'ac-trigger-'.concat(uniqueId))
        panel.setAttribute('id', 'ac-panel-'.concat(uniqueId))
      },

      removeIDs: function removeIDs(element) {
        const _this$options4 = this.options
        const triggerClass = _this$options4.triggerClass
        const panelClass = _this$options4.panelClass
        const trigger = element.querySelector('.'.concat(triggerClass))
        const panel = element.querySelector('.'.concat(panelClass))

        element.removeAttribute('id')
        trigger.removeAttribute('id')
        panel.removeAttribute('id')
      },

      setARIA: function setARIA(element) {
        const _this$options5 = this.options
        const ariaEnabled = _this$options5.ariaEnabled
        const triggerClass = _this$options5.triggerClass
        const panelClass = _this$options5.panelClass
        if (!ariaEnabled) return

        const trigger = element.querySelector('.'.concat(triggerClass))
        const panel = element.querySelector('.'.concat(panelClass))

        trigger.setAttribute('role', 'button')
        trigger.setAttribute('aria-controls', 'ac-panel-'.concat(uniqueId))
        trigger.setAttribute('aria-disabled', false)
        trigger.setAttribute('aria-expanded', false)

        panel.setAttribute('role', 'region')
        panel.setAttribute('aria-labelledby', 'ac-trigger-'.concat(uniqueId))
      },

      updateARIA: function updateARIA(element, _ref) {
        const ariaExpanded = _ref.ariaExpanded
        const ariaDisabled = _ref.ariaDisabled
        const _this$options6 = this.options
        const ariaEnabled = _this$options6.ariaEnabled
        const triggerClass = _this$options6.triggerClass
        if (!ariaEnabled) return

        const trigger = element.querySelector('.'.concat(triggerClass))
        trigger.setAttribute('aria-expanded', ariaExpanded)
        trigger.setAttribute('aria-disabled', ariaDisabled)
      },

      removeARIA: function removeARIA (element) {
        const _this$options7 = this.options
        const ariaEnabled = _this$options7.ariaEnabled
        const triggerClass = _this$options7.triggerClass
        const panelClass = _this$options7.panelClass
        if (!ariaEnabled) return

        const trigger = element.querySelector('.'.concat(triggerClass))
        const panel = element.querySelector('.'.concat(panelClass))

        trigger.removeAttribute('role')
        trigger.removeAttribute('aria-controls')
        trigger.removeAttribute('aria-disabled')
        trigger.removeAttribute('aria-expanded')

        panel.removeAttribute('role')
        panel.removeAttribute('aria-labelledby')
      },

      focus: function focus (e, element) {
        e.preventDefault()
        const triggerClass = this.options.triggerClass
        const trigger = element.querySelector('.'.concat(triggerClass))
        trigger.focus()
      },

      focusFirstElement: function focusFirstElement (e) {
        this.focus(e, this.firstElement)
        this.currFocusedIdx = 0
      },

      focusLastElement: function focusLastElement (e) {
        this.focus(e, this.lastElement)
        this.currFocusedIdx = this.elements.length - 1
      },

      focusNextElement: function focusNextElement (e) {
        const nextElIdx = this.currFocusedIdx + 1
        if (nextElIdx > this.elements.length - 1) return this.focusFirstElement(e)

        this.focus(e, this.elements[nextElIdx])
        this.currFocusedIdx = nextElIdx
      },

      focusPrevElement: function focusPrevElement (e) {
        const prevElIdx = this.currFocusedIdx - 1
        if (prevElIdx < 0) return this.focusLastElement(e)

        this.focus(e, this.elements[prevElIdx])
        this.currFocusedIdx = prevElIdx
      },

      showElement: function showElement (element) {
        const calcHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
        const _this$options8 = this.options
        const panelClass = _this$options8.panelClass
        const activeClass = _this$options8.activeClass
        const collapse = _this$options8.collapse
        const beforeOpen = _this$options8.beforeOpen
        const panel = element.querySelector('.'.concat(panelClass))
        const height = panel.scrollHeight

        element.classList.add(activeClass)
        if (calcHeight) beforeOpen(element)

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            panel.style.height = calcHeight ? ''.concat(height, 'px') : 'auto'
          })
        })

        this.updateARIA(element, { ariaExpanded: true, ariaDisabled: !collapse })
      },

      closeElement: function closeElement (element) {
        const calcHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
        const _this$options9 = this.options
        const panelClass = _this$options9.panelClass
        const activeClass = _this$options9.activeClass
        const beforeClose = _this$options9.beforeClose
        const panel = element.querySelector('.'.concat(panelClass))
        const height = panel.scrollHeight

        element.classList.remove(activeClass)

        if (calcHeight) {
          beforeClose(element)

          // Animation [X]px => 0
          requestAnimationFrame(function () {
            panel.style.height = ''.concat(height, 'px')

            requestAnimationFrame(function () {
              panel.style.height = 0
            })
          })

          this.updateARIA(element, { ariaExpanded: false, ariaDisabled: false })
        } else {
          // Hide element without animation 'auto' => 0
          panel.style.height = 0
        }
      },

      toggleElement: function toggleElement (element) {
        const _this$options10 = this.options
        const activeClass = _this$options10.activeClass
        const collapse = _this$options10.collapse
        const isActive = element.classList.contains(activeClass)

        if (isActive && !collapse) return
        return isActive ? this.closeElement(element) : this.showElement(element)
      },

      closeElements: function closeElements () {
        const _this3 = this
        const _this$options11 = this.options
        const activeClass = _this$options11.activeClass
        const showMultiple = _this$options11.showMultiple
        if (showMultiple) return
        // eslint-disable-next-line
        this.elements.map(function (element, idx) {
          const isActive = element.classList.contains(activeClass)

          if (isActive && idx !== _this3.currFocusedIdx) {
            _this3.closeElement(element)
          }
        })
      },

      handleClick: function handleClick (e) {
        const _this4 = this
        const target = e.currentTarget
        // eslint-disable-next-line
        this.elements.map(function (element, idx) {
          if (element.contains(target) && e.target.nodeName !== 'A') {
            _this4.currFocusedIdx = idx

            _this4.closeElements()
            _this4.focus(e, element)
            _this4.toggleElement(element)
          }
        })
      },

      handleKeydown: function handleKeydown (e) {
        const KEYS = {
          ARROW_UP: 38,
          ARROW_DOWN: 40,
          HOME: 36,
          END: 35
        }

        switch (e.keyCode) {
          case KEYS.ARROW_UP:
            return this.focusPrevElement(e)

          case KEYS.ARROW_DOWN:
            return this.focusNextElement(e)

          case KEYS.HOME:
            return this.focusFirstElement(e)

          case KEYS.END:
            return this.focusLastElement(e)

          default:
            return null
        }
      },

      handleTransitionEnd: function handleTransitionEnd (e) {
        if (e.propertyName !== 'height') return
        const _this$options12 = this.options
        const onOpen = _this$options12.onOpen
        const onClose = _this$options12.onClose
        const panel = e.currentTarget
        const height = parseInt(panel.style.height)
        const element = this.elements.find(function (element) {
          return element.contains(panel)
        })

        if (height > 0) {
          panel.style.display = 'auto'
          onOpen(element)
        } else {
          onClose(element)
        }
      }
    }

    this.attachEvents = function () {
      if (eventsAttached) return
      const _core$options = core.options
      const triggerClass = _core$options.triggerClass
      const panelClass = _core$options.panelClass

      core.handleClick = core.handleClick.bind(core)
      core.handleKeydown = core.handleKeydown.bind(core)
      core.handleTransitionEnd = core.handleTransitionEnd.bind(core)
      // eslint-disable-next-line
      core.elements.map(function (element) {
        const trigger = element.querySelector('.'.concat(triggerClass))
        const panel = element.querySelector('.'.concat(panelClass))

        trigger.addEventListener('click', core.handleClick)
        trigger.addEventListener('keydown', core.handleKeydown)
        panel.addEventListener('webkitTransitionEnd', core.handleTransitionEnd)
        panel.addEventListener('transitionend', core.handleTransitionEnd)
      })

      eventsAttached = true
    }

    this.detachEvents = function () {
      if (!eventsAttached) return
      const _core$options2 = core.options
      const triggerClass = _core$options2.triggerClass
      const panelClass = _core$options2.panelClass
      // eslint-disable-next-line
      core.elements.map(function (element) {
        const trigger = element.querySelector('.'.concat(triggerClass))
        const panel = element.querySelector('.'.concat(panelClass))

        trigger.removeEventListener('click', core.handleClick)
        trigger.removeEventListener('keydown', core.handleKeydown)
        panel.removeEventListener('webkitTransitionEnd', core.handleTransitionEnd)
        panel.removeEventListener('transitionend', core.handleTransitionEnd)
      })

      eventsAttached = false
    }

    this.toggle = function (elIdx) {
      const el = core.elements.find(function (_, idx) {
        return idx === elIdx
      })
      if (el) core.toggleElement(el)
    }

    this.open = function (elIdx) {
      const el = core.elements.find(function (_, idx) {
        return idx === elIdx
      })
      if (el) core.showElement(el)
    }

    this.openAll = function () {
      core.elements.map(function (element) {
        return core.showElement(element, false)
      })
    }

    this.close = function (elIdx) {
      const el = core.elements.find(function (_, idx) {
        return idx === elIdx
      })
      if (el) core.closeElement(el)
    }

    this.closeAll = function () {
      core.elements.map(function (element) {
        return core.closeElement(element, false)
      })
    }

    this.destroy = function () {
      _this5.detachEvents()
      _this5.openAll()
      // eslint-disable-next-line
      core.elements.map(function (element) {
        core.removeIDs(element)
        core.removeARIA(element)
        core.setTransition(element, true)
      })

      eventsAttached = true
    }

    const isWebkit = function isWebkit (property) {
      if (typeof document.documentElement.style[property] === 'string') {
        return property
      }

      property = capitalizeFirstLetter(property)
      property = 'webkit'.concat(property)

      return property
    }

    const capitalizeFirstLetter = function capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    core.init()
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Accordion
  } else {
    window.Accordion = Accordion
  }
})(window)
