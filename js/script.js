var app = new Vue({
  el: "#app",
  data: {
      array: [],
      text: "",
  },
  methods:{
      addItem(){
          this.text = document.querySelector('.textArea').value;
          if (this.text.length > 0) this.array.push(this.text);
          this.text = "";
      },
      clearItem(){
          let li = document.querySelectorAll('.listitem');
          for(let x = 0; li.length > x; x++){
            if(li[x].style.backgroundColor === "rgb(21, 173, 61)") this.array.splice(x,1);
          }
      },
      redBack(item){
          let li = document.querySelectorAll('.listitem')[item];
          li.style.backgroundColor = '#15ad3d';
      },
  }
});
