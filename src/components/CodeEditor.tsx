import "./code-editor.css";
import "./syntax.css";
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import { useRef } from "react";
import codeshift from "jscodeshift";
import Highlighter from "monaco-jsx-highlighter";
import prettier from 'prettier';
import parser from "prettier/parser-babel";

interface CodeEditorProps {
    initialValue: string,
    onChange(value: string): void
}
 
const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
    const editorRef = useRef<any>();

    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor;
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        monacoEditor.getModel()?.updateOptions({ tabSize: 2});

        const highlighter = new Highlighter(
            // @ts-ignore
            window.monaco,
            codeshift,
            monacoEditor
        );

        highlighter.highLightOnDidChangeModelContent(
            () => {},
            () => {},
            undefined,
            () => {}
        );
    }

    const onFormClick = () => {
        const unformated = editorRef.current.getModel().getValue();


        const formated = prettier.format(unformated, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true
        }).replace(/\n$/, '');

        editorRef.current.setValue(formated);
    }

    return (
    <div className="editor-wrapper">
        <button 
        className="button button-format is-primary is-small"
        onClick={onFormClick}
        >
           Format
        </button>
        <MonacoEditor 
            editorDidMount={onEditorDidMount}
            value={initialValue}
            theme="dark"
            language="javascript"
            height="100%"
            options={{
                wordWrap: "on",
                fontSize: 16,
                minimap: { enabled: false },
                showUnused: false,
                folding: false,
                automaticLayout: true
            }}
        />
    </div>
    );
}

export default CodeEditor;