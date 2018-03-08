import { CodeModExports } from '../models/CodeMod';
import {
    FunctionDeclaration,
    Printable,
    IfStatement,
    UnaryExpression,
    Expression,
    ArrowFunctionExpression,
    BlockStatement,
    ReturnStatement
} from 'ast-types';
import { Collection, JsCodeShift } from 'jscodeshift';

let codeMod: CodeModExports = function(fileInfo, api, options) {
    const j = api.jscodeshift;
    const src = fileInfo.ast;
    const pos = options.selection.endPos;

    const target = src.findNodeAtPosition(pos);
    let node = target.nodes()[0] as ArrowFunctionExpression;

    const returnStatement = (node.body as BlockStatement).body[0] as ReturnStatement;
    node.body = returnStatement.argument;

    let resultText = src.toSource();
    return resultText;
};

codeMod.canRun = function(fileInfo, api, options) {
    const j = api.jscodeshift;
    const src = fileInfo.ast;
    const pos = options.selection.endPos;
    const target = src.findNodeAtPosition(pos);
    const node = target.nodes()[0];

    return (
        j.ArrowFunctionExpression.check(node) &&
        j.BlockStatement.check(node.body) &&
        node.body.body.length === 1 &&
        j.ReturnStatement.check(node.body.body[0])
    );
};

codeMod.scope = 'cursor';

codeMod.title = 'Convert to shorthand arrow function';

codeMod.description = '';

codeMod.detail = '';

module.exports = codeMod;