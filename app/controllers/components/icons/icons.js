(function constructor() {
  $.currentPage.applyProperties({
    text: `${L('page')} ${$.args.currentPage} / ${$.args.totalPages}`,
  })

  _.each($.args.chunkedIcons, (keyValue) => {
    let [name, icon] = keyValue
    $.theIcons.add(Alloy.createController('components/icons/icon', { icon, name, fontFamily: $.args.fontFamily }).getView())
  })
}())
