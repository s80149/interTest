const convertObj = {
    allArray : [],
    convertObj : function(inputObj){
        var result = {};
        if(Object.values(inputObj).length === 1)
        {
            this.allArray.push(Object.keys(inputObj)[0]);
            let tmpVal = Object.values(inputObj)[0];
            if(typeof(tmpVal)==="object")
            {    
                let tmp = this.convertObj(tmpVal);
                result[this.allArray.shift()] = tmp;      
            }
            else
            {
                this.allArray.push(Object.values(inputObj)[0]);
                let val = this.allArray.shift();
                let vkey = this.allArray.shift();
                result[vkey] = val;
            }
        }  
        else
        {
            result = "Error inputObj not in rule!"
        }  
        return result;
    }
};

module.exports = convertObj;