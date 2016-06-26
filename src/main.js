import { PDFJS } from 'pdfjs-dist'
import 'pdfjs-dist/web/compatibility'
import 'pdfjs-dist/web/pdf_viewer.css'
import 'pdfjs-dist/web/pdf_viewer'

PDFJS.disableWorker = true
PDFJS.disableTextLayer = true

document.addEventListener('dragover', (e) => {
  e.preventDefault()
  document.body.classList.add('droppable')
})

document.addEventListener('dragleave', (e) => {
  if (e.target === document.documentElement || e.target === document.body) {
    document.body.classList.remove('droppable')
  }
})

document.addEventListener('drop', (e) => {
  e.preventDefault()
  document.body.classList.remove('droppable')
  loadPDF(e.dataTransfer.files[0])
})

let container = document.querySelector('#viewerContainer')
let pdfViewer = new PDFJS.PDFViewer({ container })
container.addEventListener('pagesinit', () => {
  pdfViewer.currentScaleValue = 'page-width'
})
window.addEventListener('resize', () => {
  pdfViewer.currentScaleValue = 'page-width'
})

async function loadPDF(pdf) {
  pdf = await PDFJS.getDocument(await readFile(pdf))
  window.pdf = pdf
  pdfViewer.setDocument(pdf)
  document.body.classList.add('loaded')
}

function readFile(file) {
  return new Promise(function(resolve, reject) {
    let fileReader = new FileReader()
    fileReader.onload = async function() {
      let data = new Uint8Array(this.result)
      resolve(data)
    }
    fileReader.readAsArrayBuffer(file)
  })
}
