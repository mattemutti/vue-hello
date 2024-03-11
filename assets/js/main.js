//console.log('funzia?');

 const { createApp } = Vue

 createApp({

 	data() {
 		return {
 			message: 'Buondì Vue',
			//imageRandom: ,


		}
	},

	methods: {

		linkImg: function() {
			return 'https://picsum.photos/200';
		}
	}


 }).mount('#app')


