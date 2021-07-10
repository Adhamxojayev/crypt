let obj = {
    rand1 : function () {
        let  answer = ''
        for(let i = 0; i < this.count; i++){
            let random = (Math.random() * (122 -67) + 67) | 0
            let result = String.fromCharCode(random)
            answer += result
        }
        return answer
    },
    setup: function (rand){
        this.count = rand
    },
    crypt: function (str){
        this.sum = ''
        this.dup = ''
        for(let i = 0; i < str.length; i++){
            this.sum = str[i].charCodeAt().toString(2).padStart(8,0).split('')
            this.sum[this.sum.length-1] = this.sum[this.sum.length-1] == "0" ? "1" : "0";
            this.sum[this.sum.length-2] = this.sum[this.sum.length-2] == "0" ? "1" : "0";
            let res = parseInt(this.sum.join(''),2)
            let st = String.fromCharCode(res)
            this.dup += this.rand1() + st
        }
        console.log(this.dup)
    },
    decrypt: function (res){
        let finish = ''
        for(let i = this.count; i < res.length; i+=this.count+1){
            let ceo = res[i].charCodeAt().toString(2).padStart(8,0).split('')
            ceo[ceo.length-1] = ceo[ceo.length-1] == "0" ? "1" : "0"
            ceo[ceo.length-2] = ceo[ceo.length-2] == "0" ? "1" : "0"
            let num = parseInt(ceo.join(''),2)
            let str1 = String.fromCharCode(num)
            finish += str1
        }   
        console.log(finish);
    }
}
obj.setup(5)
obj.crypt('hello')
