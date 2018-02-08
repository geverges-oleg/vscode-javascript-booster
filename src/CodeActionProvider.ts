
/* 
    context.subscriptions.push(
        vscode.languages.registerCodeActionsProvider(
            ['typescript', 'typescriptreact', 'javascript', 'javascriptreact'],
            new MyCodeActionProvider()
        )
    );
*/

import * as vscode from 'vscode';

export class MyCodeActionProvider implements vscode.CodeActionProvider {
    public provideCodeActions(
        document: vscode.TextDocument,
        range: vscode.Range,
        context: vscode.CodeActionContext,
        token: vscode.CancellationToken
    ): Thenable<vscode.Command[]> {
        console.log('code action checker!');
        return Promise.resolve([
            {
                title: 'Code Action 1',
                tooltip: 'Code Action 1 Tooltip',
                command: 'extension.sayCodeAction',
                arguments: [
                    'foo',
                    {
                        a: 2
                    }
                ]
            }
        ] as vscode.Command[]);
        /* let promises = context.diagnostics.map(diag => {
			// When a name is not found but could refer to a package, offer to add import
			if (diag.message.indexOf('undefined: ') === 0) {
				let [_, name] = /^undefined: (\S*)/.exec(diag.message);
				return listPackages().then(packages => {
					let commands = packages
						.filter(pkg => pkg === name || pkg.endsWith('/' + name))
						.map(pkg => {
							return {
								title: 'import "' + pkg + '"',
								command: 'go.import.add',
								arguments: [pkg]
							};
						});
					return commands;
				});
			}
			return [];
		});

		return Promise.all(promises).then(arrs => {
			let results = {};
			for (let segment of arrs) {
				for (let item of segment) {
					results[item.title] = item;
				}
			}
			let ret = [];
			for (let title of Object.keys(results).sort()) {
				ret.push(results[title]);
			}
			return ret;
		}); */
    }
}
