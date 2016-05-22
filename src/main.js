var editor = CodeMirror(document.getElementById('editor'), {
    value: "<actions>aaa</actions>\n",
    lineNumbers: true,
    mode: 'xml',
    tabSize: 4,
    indentUnit: 4,
    theme: 'abcdef'
});
editor.autoFormatRange({line: 0, ch: 0, xRel: -1, outside: true},{line: 0, ch: 22, xRel: 1});
function getSelectedRange() {
    return {
        from: editor.getCursor(true),
        to: editor.getCursor(false)
    };
}

function autoFormatSelection() {
    var range = getSelectedRange();
    editor.autoFormatRange(range.from, range.to);
    console.log(range.from);
    console.log(range.to);
}
