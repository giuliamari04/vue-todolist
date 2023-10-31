const{createApp}=Vue;

createApp({
    data(){
        return{
           tasks:[
                {
                    text:'prendere una candela' ,
                    done: false,
                    id:1,
                },
                {
                    text:'far bruciare un po\'di incenso' ,
                    done: false,
                    id:2,
                },
                {
                    text:'fare un cerchio di sale' ,
                    done: false,
                    id:3,
                },
                {
                    text:'prendere una scopa saggina' ,
                    done: false,
                    id:4,

                },
                {
                    text:'Prendere foglie di alloro' ,
                    done: false,
                    id:5,
                },
                {
                    text:'Prendere foglio di carta e penna' ,
                    done: true,
                    id:6,
                },
                {
                    text:'preparare calderone' ,
                    done: true,
                    id:7,
                },
                {
                    text:'Prendere accendino o fiammiferi' ,
                    done: false,
                    id:7,
                },
           ], 
           lastId:5,
           todotext:'',
           filtervalue:'tutto',
           showSpooky:false,
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
        setTimeout(() => {
            this.showSpooky = true;
          }, 3000); 
        
    }
}).mount('#app');