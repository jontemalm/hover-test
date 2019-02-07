import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.languages.registerHoverProvider('csv', {
        provideHover(document, position, token) {
            vscode.window.showInformationMessage(position.toString());
            let xx = document.getText(document.getWordRangeAtPosition(position));
            return new vscode.Hover('I am a hover!');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
