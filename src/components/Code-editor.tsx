
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import { useRef } from "react";
import codeshift from "jscodeshift";
import Highlighter from "monaco-jsx-highlighter";


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

        //highlighter.
    }

    return (<div>
        <MonacoEditor 
            editorDidMount={onEditorDidMount}
            value={initialValue}
            theme="dark"
            language="javascript"
            height="100%"
            options={{
                wordWrap: "on",
                fontSize: 16
            }}
        />
    </div>);
}

export default CodeEditor;