const cl = console.log;



const hrCall = (skill) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(skill.toLowerCase().includes("angular")){
                resolve(Candidate is selected for first round);
            }else{
                reject(Candidate does not match Criteria);
            }
        }, 1000);
    })
}

const firstRound = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() >= 0.3 ? false : true;
            if(!err){
                resolve(Candidate cleard first Round);
            }else{
                reject(Candidate struggling with basic Questions);
            }
        }, 1000);
    })
}

const secondRound = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() >= 0.3 ? false : true;
            if(!err){
                resolve(Candidate cleared Second Round);
            }else{
                reject(Candidate struggling to write code);
            }
        }, 1000);
    })
}

const mlRound = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let err = Math.random() >= 0.3 ? false : true;
            if(!err){
                resolve("Candidate cleard ML Round");
            }else{
                reject("Candidate is inexperienced");
            }
        }, 300);
    })
}

const finalHRCall = () => {
    cl( "Salary Negotiation Call");
}

hrCall("angular")
                .then(res => {
                    cl(res);
                    return firstRound();
                })
                .then(res => {
                    cl(res);
                    return secondRound();
                })
                .then(res => {
                    cl(res);
                    return mlRound();
                })
                .then(res => {
                    cl(res);
                    finalHRCall();
                })
                .catch(err => {
                    cl(err);
                })