let totalPages
let chunkedIcons
let selectedIcon
let keyValueArray
let currentPage = 0
let isLoading = false
let fontClasses = require('purgetss.fonts').icons.bi
const invertedIconObject = {}

const font = require('purgetss.fonts')
const colors = require('purgetss.colors')
const fontFamily = font.family.bi
const iconsPerPage = Alloy.isHandheld ? 60 : 120

$.index.open()
$.activityindicatorColors.show()
$.codeSampleCard.draggable($.codeSample)

function doPostlayout() {
  $.icons.removeEventListener('postlayout', doPostlayout)

  for (const key in fontClasses) {
    const value = fontClasses[key]
    invertedIconObject[value] = key
  }

  _.defer(() => {
    Alloy.Collections.colors.reset([
      { color: 'blue', hex: colors.blue.default, ratio1: '4.50', ratio2: '4.50', ratio3: '4.66' },
      { color: 'indigo', hex: colors.indigo.default, ratio1: '7.18', ratio2: '7.18', ratio3: '2.92' },
      { color: 'purple', hex: colors.purple.default, ratio1: '6.51', ratio2: '6.51', ratio3: '3.22' },
      { color: 'pink', hex: colors.pink.default, ratio1: '4.50', ratio2: '4.50', ratio3: '4.66' },
      { color: 'red', hex: colors.red.default, ratio1: '4.52', ratio2: '4.52', ratio3: '4.63' },
      { color: 'orange', hex: colors.orange.default, ratio1: '8.17', ratio2: '2.57', ratio3: '8.17' },
      { color: 'yellow', hex: colors.yellow.default, ratio1: '12.8', ratio2: '1.63', ratio3: '12.8' },
      { color: 'green', hex: colors.green.default, ratio1: '4.53', ratio2: '4.53', ratio3: '4.63' },
      { color: 'teal', hex: colors.teal.default, ratio1: '9.86', ratio2: '2.12', ratio3: '9.86' },
      { color: 'cyan', hex: colors.cyan.default, ratio1: '10.7', ratio2: '1.95', ratio3: '10.7' },
      { color: 'gray', hex: colors.gray.default, ratio1: '10.1', ratio2: '2.07', ratio3: '10.1' }
    ])

    $.activityindicatorColors.hide()

    keyValueArray = Object.entries(font.icons.bi)
    // keyValueArray = Object.entries(font.icons.bi).sort((a, b) => a[0].localeCompare(b[0]))
    chunkedIcons = _.chunk(keyValueArray, iconsPerPage)
    totalPages = chunkedIcons.length

    loadIcons()
  })
}

function keepLoading(event) {
  if (!isLoading) {
    if (event.source.rect.height + event.y >= event.contentSize.height) {
      isLoading = true
      loadIcons()
    }
  }
}

function loadIcons() {
  $.theIcons.add(Alloy.createController('components/icons/icons', {
    currentPage: currentPage + 1, totalPages, chunkedIcons: chunkedIcons[currentPage], fontFamily
  }).getView())

  currentPage++

  if (currentPage >= totalPages) {
    $.activityindicator.hide()
    $.theIconsScrollView.remove($.activityindicator)
    $.theIconsScrollView.removeEventListener('scroll', keepLoading)
  }

  isLoading = false
}

function showIcon({ source }) {
  if (source.type === 'icon') {
    if (selectedIcon) {
      selectedIcon.applyProperties({ backgroundColor: 'transparent' })
    }
    $.codeSample.updateText(`<Label class="bi ${invertedIconObject[source.text]}" />`)
    $.codeSample.updateTitle(convertAndCapitalizeWords(invertedIconObject[source.text]))
    $.codeSample.show()

    selectedIcon = source.parent
    selectedIcon.applyProperties({ backgroundColor: '#e0cffc' })
  }
}

function convertAndCapitalizeWords(inputString) {
  const words = inputString.replace(/bi-/g, ' ').replace(/-/g, ' ').split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
  }

  return words.join(' ')
}
