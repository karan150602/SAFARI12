$('.ui.form').form({
    fields: {
        name: {
            identifier: 'from_fname',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter your name',
                },
            ],
        },
        email: {
            identifier: 'from_email',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter your email',
                },
            ],
        },
        message: {
            identifier: 'message',
            rules: [
                {
                    type: 'empty',
                    prompt: 'Please enter your message',
                },
            ],
        },
    },
});

var $form = $('.ui.form form'),
    fname = $form.form('get value', 'from_fname'),
    lanme = $form.form('get value', 'from_lname'),
    email = $form.form('get value', 'from_email'),
    message = $form.form('get value', 'message');

window.onload = function () {
    emailjs.init('user_P1uyuwBbgzFz4afB7QMvF');
    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formElem = document.querySelector('form');
        // construct a FormData object, which fires the formdata event

        // Get the form data from the event object
        let data = new FormData(formElem);
        from_fname1 = document.getElementById('txtfname').value;
        from_lname1 = document.getElementById('txtlname').value;
        from_email1 = document.getElementById('txtemail').value;
        message1 = document.getElementById('txtmessage').value;

        var templateParams = {
            from_name: from_fname1,
            from_lame: from_lname1,
            from_email: from_email1,
            to_name: 'Botswana Safaris',
            message: message1,
        };

        if (from_fname1 != '' && from_email1 != '' && message != '') {
            emailjs.send('service_jyqlb78', 'template_wxnqq8d', templateParams).then(
                function (response) {
                    console.log(response);
                    document.getElementById('successmsg').style.display = 'block';
                    document.getElementById('successmsg').innerHTML = 'Email sent successfully';
                    document.getElementById('txtfname').value = '';
                    document.getElementById('txtlname').value = '';
                    document.getElementById('txtemail').value = '';
                    document.getElementById('txtmessage').value = '';
                },
                function (error) {
                    console.log('FAILED...', error);
                },
            );
        }
    });
};
