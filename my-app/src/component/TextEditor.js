import { draftToHtml } from "draft-html";
import { EditorState, convertToRaw } from 'draft-js';
import React, { useState } from 'react'

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    let textToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    return (
        <div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={setEditorState}
                //ツールバーを日本語表記に
                localization={{
                    locale: 'ja',
                }}
                placeholder='ここに入力してください'
                mention={{
                    separator: '',
                    trigger: '@',
                    suggestions: [
                        {text: '田中太郎', value: '田中太郎', url: 'tanakataro'},
                        {text: '鈴木花子', value: '鈴木花子', url: 'suzukihanako'},
                        {text: '山田太郎', value: '山田太郎', url: 'yamadataro'},
                    ],
                }}
                //ハッシュタグ
                hashtag={{
                    separator: '',
                    trigger: '#',
                }}
                //ツールバーの表示を限定
                toolbar={{
                    options: ['inline', 'blockType']
                }}
            />
            <div>
                <textarea rows='30' cols='100' disabled value={textToHtml}></textarea>
            </div>
        </div>
    )
}

export default TextEditor