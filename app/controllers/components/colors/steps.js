(function constructor() {
  const color = $model.get('color')
  const shades = require('purgetss.colors')[color]

  $.solid.applyProperties(Alloy.createStyle('index', { classes: `bg-${color}-500` }))

  _.each(shades, (shade, key) => {
    if (key === 'default') { return }
    $[`step_${key}_lbl`].backgroundColor = shade
  })
}())
