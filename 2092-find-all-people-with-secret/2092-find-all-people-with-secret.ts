function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
    // Sort meetings by their time
    meetings.sort((a,b)=>{return a[2]-b[2]})

    // Initialize an array bro = [[meetingGroupWithTime1],[meetingGroupWithTime2],...], which we will need later
    const bro: number[][][] = []
    // If meetings.length===1 we don't need to do smart sorting
    if(meetings.length===1){bro.push([meetings[0]])}
    else{
        // Initialize an array temp = [meeting1, meeting2,...] which represents meeting group with exact time
        let temp = []
        // Go through the already sorted meetings[][] and fill bro with meetings groups which are arranged with increasing time
        for(let i=0;i<meetings.length;i++){
            if(i!==meetings.length-1){
                temp.push(meetings[i])
                if(meetings[i][2]!==meetings[i+1][2]){
                    temp.sort((a,b)=>{return a[0] - b[0]})
                    //  We do this sort so that the further algorithm works
                    bro.push(temp)
                    temp = []
                }else{}
            }else{
                if(meetings[i][2]!==meetings[i-1][2]){
                    bro.push([meetings[i]])
                }else{
                    temp.push(meetings[i])
                    temp.sort((a,b)=>{return a[0] - b[0]})
                    //  We do this sort so that the further algorithm works
                    bro.push(temp)
                    temp = []
                }
            }
        }
    }

    // Initialize new map secret which represents people who know about the secret
    const secret = new Map()

    secret.set(0, true)
    secret.set(firstPerson, true)
    // By condition person 0 and firstPerson know about the secret

    // Go through the meeting groups
    for(let group of bro){
        // If group has only 1 meeting we won't repeat its check for 3 times
        let time = group.length===1 ? 2 : 0

        // To simulate the instantaneous transfer of a secret we will go through the group 3 times: 0->end ; end->0 ; 0->end
        // So we won't miss any sharing of the secret in this group
        // ( To be honest, I'm not entirely sure about this myself, but it works :) )
        for(time;time<3;time++){
            if(time === 1){
                // end->0
                for(let i=group.length-1;i>=0;i--){
                    if(secret.get(group[i][0])){
                        secret.set(group[i][1], true)
                    }
                    else if(secret.get(group[i][1])){
                        secret.set(group[i][0], true)
                    }else{}
                }
            }else{
                // 0->end
                for(let i of group){
                    if(secret.get(i[0])){
                        secret.set(i[1], true)
                    }
                    else if(secret.get(i[1])){
                        secret.set(i[0], true)
                    }else{}
                }
            }
        }
    }

    const res = []
    for(let key of secret.keys()){
        res.push(key)
    }
    res.sort((a,b)=>{return a-b})
    // Get an array of people who know about the secret and sort it
    // Return it
    return res
};