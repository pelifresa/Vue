const app = new Vue({
	 el: '#app',
	 data: {
	 	titulo: 'GYM',
	 	tareas:[],
	 	nuevaTarea: ''
	 },
	 methods:{
	 	agregarTarea: function(){
	 		console.log('diste click', this.nuevaTarea);
	 		this.tareas.push({
	 			nombre: this.nuevaTarea,
	 			estado: false
	 		});
	 		this.nuevaTarea='';
	 	},
	 	editarTarea: function(index){
	 		this.tareas[index].estado = true;
	 	},
	 	eliminar: function(index){
	 		this.tareas.splice(index, 1);
	 	}
	 }
});