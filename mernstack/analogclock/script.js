
setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hRotation=30*htime + mtime/2;
    mRotation=6*mtime;
    sRotation=6*stime;

    let hour = document.getElementById("hour");
    let minuite = document.getElementById("minuite");  // Keep "minuite" if ID remains the same
    let second = document.getElementById("second");


    hour.style.transform=`rotate(${hRotation}deg)`;
    minuite.style.transform=`rotate(${mRotation}deg)`;
    second.style.transform=`rotate(${sRotation}deg)`;
},1000);