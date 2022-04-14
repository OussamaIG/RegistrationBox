const app = Vue.createApp({
    data(){
        return{
            next: false,
            nexttwo: false,
            back: false,
            backtwo: false,
            password: "",
            code: "",
            notpassword: false,
            notcode: false,
            checked: false,
            notchecked: false,
            type: "password",
            show: false,
            id: "",
            nin: "",
            phone: "",
            styleid: false,
            stylenin: false,
            stylephone: false
        };
    },
    methods:{
        showpassword(){
            if(this.show === false){
                this.type = "text";
                this.show = true;
            }else{
                this.show = false;
                this.type = "password";
            }
            console.log(this.type);
        },
        clickNext(){       
            if(this.next === true){
                this.nexttwo = true;
                this.next = false;
            }
            else{
                this.next = true;
                this.nexttwo = false;
            }   
        },
        clickNext2(){        
            if(this.id != "" && this.nin != "" && this.phone != ""){
                if(this.next === true){
                    this.nexttwo = true;
                    this.next = false;
                }
                else if(this.next === false){
                    this.next = true;
                    this.nexttwo = false;
                }   
            }
            if(this.id != ""){
                this.styleid = false;
            }else if(this.id === ""){
                this.styleid = true;
            }
            if(this.nin != ""){
                this.stylenin = false;
            }else if(this.nin === ""){
                this.stylenin = true;
            }
            if(this.phone != ""){
                this.stylephone = false;
            }else if (this.phone === ""){
                this.stylephone = true;
            }
        },
        clickBack(){
            if(this.nexttwo === false){
                this.back = true;
                this.next = false;
            }
            else{
                this.nexttwo = false;
                this.next = true;
            }
        },
        getpassword(event){
            this.password = event.target.value;
        },
        getcode(event){
            this.code = event.target.value;
        },
        getnin(event){
            this.nin = event.target.value;
        },
        getid(event){
            this.id = event.target.value;
        },
        getphone(event){
            this.phone = event.target.value;
        },
        finish(){
           if(this.code != ""){
                this.notcode = false;
           }else if(this.code === ""){
               this.notcode = true;
           }
           if(this.password != ""){
               this.notpassword = false;
           }else if(this.password === ""){
               this.notpassword = true;
           }
           if(this.checked === true){
               this.notchecked = false;
           }else if(this.checked === false){
               this.notchecked = true;
           }
               
        },
        check(){
            if(this.checked === false){
                this.checked = true;
                this.notchecked = false;
            }
           else{
               this.checked = false;
               this.notchecked = true;
            }

        }
    },
    computed:{
        notifphone(){
            return{opacity1: this.stylephone};
        },
        colorboxphone(){
            return{notif: this.stylephone};
        },
        notifid(){
            return{opacity1: this.styleid};
        },
        colorboxid(){
            return{notif: this.styleid};
        },
        notifnin(){
            return{opacity1: this.stylenin};
        },
        colorboxnin(){
            return{notif: this.stylenin};
        },
        notifcode(){
            return[{opacity1: this.notcode}];
        },
        colorredcode(){
            return [{notif: this.notcode}];
        },
        notifpass(){
            return[{opacity1: this.notpassword}];
        },
        colorredpass(){
            return [{notif: this.notpassword}];
        },
        notifcheck(){
            return{opacity1: this.notchecked}
        },
        uptwo(){
            return[{opacity1: this.next}, {opacity0: this.nexttwo}];
        },
        upone(){
            return[{opacity0: this.next}, {opacity0: this.nexttwo}];
        },
        upthree(){
            return[{opacity0: this.next}, {opacity1:this.nexttwo}];
        },
        bluecircle(){
            return[{bluecircle: this.next}, {bluecircle: this.nexttwo}];
        },
        bluecircle2(){
            return{bluecircle: this.nexttwo};
        },
        colorline(){
            return[{blueline: this.next}, {blueline: this.nexttwo}];
        },
        colorline2(){
            return[{blueline: this.nexttwo}];
        },
        page1(){
            return[{hidden: this.next}, {hidden: this.nexttwo}];
        },
        page2(){
            return[{visible: this.next}, {hidden: this.nexttwo}];
        },
        page3(){
            return[{hidden: this.next}, {visible: this.nexttwo}];
        },
        backbutton(){
            return[{back: this.next}, {back: this.nexttwo}, {backhidden: this.backtwo}];
        },
        _seconds: () => 1000,
        _minutes(){
            return this._seconds * 60;
        }   
    }

});

app.mount("#box");