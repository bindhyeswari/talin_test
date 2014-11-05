var test = {
    name: '',
    tags: '',
    questions: [],
    printToDiv: function (parent) {
        parent.innerHTML = '';
        var qs = this.questions;
        var block = document.createElement('div');
        for (var i = 0, len = qs.length; i < len; i++) {
            var div = document.createElement('div');
            div.innerHTML = qs[i].question;
            var ul = document.createElement('ul');
            for (var j = 0; j < 4; j++) {
                var li = document.createElement('li');
                li.innerHTML = qs[i].options[j];
                ul.appendChild(li);
            }
            block.appendChild(div);
            block.appendChild(ul);
            parent.appendChild(block);
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn_add_question').addEventListener('click', function () {
        var question = {
            question: document.querySelector('[placeholder="question"]').value,
            options: [  document.querySelector('[placeholder="correct answer"]').value,
                        document.querySelector('[placeholder="option 1"]').value,
                        document.querySelector('[placeholder="option 2"]').value,
                        document.querySelector('[placeholder="option 3"]').value
                        ] // first element is the answer
        };

        test.questions.push(question);


        test.printToDiv(document.getElementById('questions'));
        document.forms.question.reset();

        console.log(question);
    });

});





