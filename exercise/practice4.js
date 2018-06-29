function m357(m,n) {
    let x;
    let a;
    if(m<n)
    {
        a = m;
        m = n;
        n = a;
    }
    for(x=n;x<=m;x++)
    {
        if(x%7==0||x%5==0||x%3==0)
        {
            console.log("%d",x);
        }
    }
}

m357(15,10);