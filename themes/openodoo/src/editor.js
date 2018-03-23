//// Summernote

import 'summernote/dist/summernote-bs4';
import 'summernote/dist/lang/summernote-ru-RU';

/// Дать ответ на форуме
$('#post-reply_summernote').summernote({
    placeholder: 'Дайте ответ на вопрос',
    tabsize: 2,
    height: 200,
    lang: 'ru-RU',
    dialogsInBody: true,
    dialogsFade: true,
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
    codemirror: {                 // code mirror options
        mode: 'text/html',
        htmlMode: true,
        lineNumbers: true,
        theme: 'monokai'
    }
});