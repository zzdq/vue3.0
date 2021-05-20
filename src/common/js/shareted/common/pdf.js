function shareted_jquery_pdf_export(content, file_name) {
  var doc = new jsPDF()

  // All units are in the set measurement for the document
  // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  doc.fromHTML(content, 15, 15, {
    'width': 170,
    'elementHandlers': {
      '#editor': function(element, renderer) {
        return true
      }
    }
  })

  if (file_name == undefined) {
    doc.save('data.pdf')
  } else {
    doc.save(file_name + '.pdf')
  }
}

function shareted_jquery_pdf_print(content, canvas, finish) {
  var doc = new jsPDF()

  doc.fromHTML(content, 15, 15, {
    'width': 170,
    'elementHandlers': {
      '#editor': function(element, renderer) {
        return true
      }
    }
  })

  PDFJS.getDocument(doc.binaryStringToUint8Array(doc.output())).then(function(pdf) {
    pdf.getPage(1).then(function(page) {
      var scale = 1.5
      var viewport = page.getViewport(scale)

      var context = canvas.getContext('2d')
      canvas.height = viewport.height
      canvas.width = viewport.width

      var renderContext = {
        canvasContext: context,
        viewport: viewport
      }
      page.render(renderContext)

      setTimeout(function() {
        if (finish != undefined) {
          finish(canvas)
        } else {
          shareted_jquery_pdf_print_finish(canvas)
        }
      }, 500)
    })
  })
}

function shareted_jquery_pdf_print_finish(canvas) {
  var win = window.open()
  win.document.write("<br><img src='" + canvas.toDataURL() + "'/>")
  setTimeout(function() {
    win.print()
  }, 500)
}
