elem = () => {return document.getElementsByClassName("gLFyf")[0].value}
document.getElementById('tsf').addEventListener("submit", function(e) {
        const mVal = elem();
        console.log(mVal);
        if (mVal.includes('calories in')) {
        	alert("Hello! We're concerned that you may be focused on calorie counts, which can be a symptom of an eating disorder. We care about you, so please reach out to the eating disorder hotline if you need help: (800) 931-2237");
        } else if (mVal.includes('kill myself')) {
        	alert("Hi there! We wanted to make sure you're doing OK. If you'd like to talk to someone, the suicide prevention hotline is always available: 1-800-273-8255");
        };
    });
