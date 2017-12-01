$(document).ready(function () {

    $("#signup").click(function () {

                
		$("#message").html('');
                 var user = new Object();
                 user.name = $('#name').val();
                 user.email = $('#email').val();
                 user.regno = $('#regno').val();
                 user.phone = $('#phone').val();
                 user.password = $('#password').val();

                 $.ajax({

                     url: 'https://ccs.csivit.com/signup',

                     type: 'POST',

                     dataType: 'json',

                     data: user,

                     success: function (data, textStatus, xhr) {

                         console.log(data);
			$('form input').val("");
			$('#message').html(data.message);

                     },

                     error: function (xhr, textStatus, errorThrown) {

                         console.log('Error in Operation');

            }
        });
    });
        $('#form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                        stringLength: {
                        min: 3,
                        message: 'Please enter valid name'
                    },
                        notEmpty: {
                        message: 'Please supply your first name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your email address'
                    },
                    emailAddress: {
                        message: 'Please supply a valid email address'
                    }
                }
            },
            regno: {
                validators: {
                    regexp: {
                        regexp: /^(1)(7)(.)(.)(.)(\d)(\d)(\d)(\d)$/,
                        message: 'Please enter a valid registration number'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please supply your phone number'
                    },
                    stringLength: {
                        min: 10,
                        max: 10,
                        message: 'Please enter a valid phone number'

                    }
                }
            },
            password: {
                validators: {
                     stringLength: {
                        min: 8,
                        message: 'Atleast 8 characters'
                    },
                    notEmpty: {
                        message: 'Please supply your password'
                    }
                }
            },
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });

});