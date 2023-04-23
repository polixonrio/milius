<script>
	import emailjs from '@emailjs/browser';
  
	function sendEmail(e) {
	  emailjs.sendForm('service_emnijef', 'template_5n7sw6e', e.target, 'PO4SGN1segw-mSYR5')
		.then((result) => {
			console.log('SUCCESS!', result.text);
		}, (error) => {
			console.log('FAILED...', error.text);
		});
	}
  </script>
  
  <form class="mt-36" on:submit|preventDefault={sendEmail}>
	<label>Name</label>
	<input type="text" name="user_name">
	<label>Email</label>
	<input type="email" name="user_email">
	<label>Message</label>
	<textarea name="message"></textarea>
	<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><input type="submit" value="Send"></button>
	

  </form>