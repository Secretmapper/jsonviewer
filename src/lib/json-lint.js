// Modified from CodeMirror json-lint

import CodeMirror from 'codemirror'
import jsonlint from 'jsonlint'

CodeMirror.registerHelper('lint', 'json', function (text) {
  var found = []

  jsonlint.parser.parseError = jsonlint.parser.lexer.parseError = jsonlint.parseError = function (str, hash) {
    var loc = hash.loc
    found.push({
      from: CodeMirror.Pos(loc.first_line - 1, loc.first_column),
      to: CodeMirror.Pos(loc.last_line - 1, loc.last_column),
      message: str
    })
  }
  try {
    jsonlint.parse(text)
  } catch (e) {}

  return found
})
