elem = () => {return document.getElementsByClassName("gLFyf")[0].value}
document.getElementById('tsf').addEventListener("submit", function(e) {
        const mVal = elem();
        console.log(mVal);
        if (mVal.includes('death')) {
        	alert('everything ok?');
        } else {
        	alert('lookin good!');
        }
});