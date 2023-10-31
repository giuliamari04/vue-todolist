const{createApp}=Vue;

createApp({
    data(){
        return{
           tasks:[
                {
                    text:'aaaa' ,
                    done: false,
                    id:1,
                },
                {
                    text:'bbbb' ,
                    done: false,
                    id:2,
                },
                {
                    text:'cccc' ,
                    done: true,
                    id:3,
                },
                {
                    text:'dddd' ,
                    done: false,
                    id:4,

                },
                {
                    text:'eeee' ,
                    done: true,
                    id:5,
                },
           ], 
           lastId:5,
           todotext:'',
           filtervalue:'tutto',
        }
    },
    methods:{
       removeTasks(index){
        this.tasks.splice(index,1)
       },

       addTask(){
        this.lastId++;
        const newTask =  {
            id: this.lastId,
            text:this.todotext,
            done:false,
        }
        this.tasks.unshift(newTask);
        this.todotext='';
       },

       invertDone(obj){
        obj.done=! obj.done;
       },
       filteredTasks(){
        return this.tasks.filter((task)=>{
            if(this.filtervalue==='fare' && !task.done){
                return true;
            }else if(this.filtervalue==='fatto' && task.done){
                return true;
            }else if(this.filtervalue==='tutto' ){
                return true;
            }
        })
       },
    },
    mounted(){
        
    }
}).mount('#app');