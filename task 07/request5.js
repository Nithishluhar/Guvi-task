var request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.com/v3.1/all', true)
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0]==="LBP")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0])
            }
        }
    }