const fs = require('fs')
const path = require('path')
const assert = require('chai').assert
const pug = require('pug')

const resolveFile = (name) => path.join(__dirname, `fixtures/${name}`)
const render = (name) => (pug.renderFile(resolveFile(name), {
  pretty: false
}))
const read = (name) => (fs
  .readFileSync(resolveFile(name))
  .toString()
  .replace(/\n/g, ''))

describe('container', () => {
  it('Should compile exactly the same HTML as in fixtures.', () => {
    assert.equal(read('container.html'), render('container.pug'))
    assert.equal(read('container.html'), render('container-c.pug'))
  })
})

describe('width', () => {
  it('Should compile exactly the same HTML as in fixtures.', () => {
    assert.equal(read('width.html'), render('width.pug'))
    assert.equal(read('width.html'), render('width-c.pug'))
  })
})

describe('offset', () => {
  it('Should compile exactly the same HTML as in fixtures.', () => {
    assert.equal(read('offset.html'), render('offset.pug'))
    assert.equal(read('offset.html'), render('offset-c.pug'))
  })
})

describe('alignment', () => {
  it('Should compile exactly the same HTML as in fixtures.', () => {
    assert.equal(read('alignment.html'), render('alignment.pug'))
  })
})

describe('distribution', () => {
  it('Should compile exactly the same HTML as in fixtures.', () => {
    assert.equal(read('distribution.html'), render('distribution.pug'))
  })
})

describe('reverse', () => {
  it('Should compile exactly the same HTML as in fixtures.', () => {
    assert.equal(read('reverse.html'), render('reverse.pug'))
  })
})

describe('reordering', () => {
  it('Should compile exactly the same HTML as in fixtures.', () => {
    assert.equal(read('reordering.html'), render('reordering.pug'))
  })
})
