function commonFactor(m,n){
    let a;
    let b;
    if(m<n)
    {
        a = m;
        m = n;
        n = a;
    }
    for(let i=1;i<=n;i++)
    {
        if(m%i==0&&n%i==0) b = i;
    }
    return b;
}

b = commonFactor(50,100);
console.log("%d",b);

function commonFactor(m,n){
    let max = Math.max(m,n)
    for(let i=1;i<=max;i++)
    {
        if(m%i==0&&n%i==0) b = i;
    }
    return b;
}
