
    document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);








    function copyValue() {
        let value=document.getElementById('textarea').value;
            
        if (value) {
          let copyText = value;
          let selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value = copyText;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
          message = ('Address Copied Successfully !!');
            type = 'success'
        validate_msg1(type,message)
        }
        }






	function validate_msg(type, message) {

		if (type == 'success') {
			var success_text = message;
			Lobibox.notify('success', {
				title: 'Success',
				continueDelayOnInactiveTab: false,
				pauseDelayOnHover: true,
				sound: false,
				position: 'right top',
				msg: success_text,
			});

		}
		if (type == 'error') {
			var error_text = message
			Lobibox.notify('error', {
				title: 'Error',
				continueDelayOnInactiveTab: false,
				pauseDelayOnHover: true,
				sound: false,
				position: 'right top',
				msg: error_text
			});
		}
	}


    function validate_msg1(type, message) {

        if (type == 'success') {
            var success_text = message;
            Lobibox.notify('success', {
                title: 'Success',
                continueDelayOnInactiveTab: false,
                pauseDelayOnHover: true,
                sound: false,
                position: 'right top',
                width: 'auto',
                msg: success_text,
                icon: false,
            });
    
        }
        if (type == 'error') {
            var error_text = message
            Lobibox.notify('error', {
                title: 'Error',
                continueDelayOnInactiveTab: false,
                pauseDelayOnHover: true,
                sound: false,
                position: 'right top',
                msg: error_text
            });
        }
    }









