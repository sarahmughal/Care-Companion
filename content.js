elem = () => {return document.getElementsByClassName("gLFyf")[0].value}
document.getElementById('tsf').addEventListener("submit", function(e) {
        const mVal = elem();
        console.log(mVal);
        if (mVal.includes('calories in')) {
        	alert("Hello! We're concerned that you may be focused on calorie counts, which can be a symptom of an eating disorder. We care about you, so please reach out to the eating disorder hotline if you need help: (800) 931-2237");
        } else if (mVal.includes('kill myself')) {
        	alert("Hi there! We wanted to make sure you're doing OK. If you'd like to talk to someone, the suicide prevention hotline is always available: 1-800-273-8255");
                } else if (mVal.includes('I am overwhelmed')) {
        	alert("Hi there! We wanted to make sure you're doing OK. If you'd like to talk to someone, the crisis hotline is always available: 1-800-273-8255 and behavioral health services line can be called at 1-800-686-0101");
        } else if (mVal.includes('binge eating')) {
        	alert("Hello! We're concerned that you may be focused on calorie counts, which can be a symptom of an eating disorder. We care about you, so please reach out to the eating disorder hotline if you need help: 1-800-931-2237");
        } else if (mVal.includes('I feel lonely')) {
        	alert("Hi there! We just wanted to check in to make sure you're doing ok and just know that there are always people who care about you and want to help support you, reach out at 1-800-273-8255 or suicidepreventionlifeline.org/chat");
        }  else if (mVal.includes('no one cares')) {
       		alert("Hi! We wanted to make sure you are doing okay. If you are feeling low and need someone to talk to, you can call  you can call this hotline: 1 (800) 273-8255 or text “ANSWER” to 839863");
        } else if (mval.includes('I'm worthless'))	{
	        alert("Hi! We wanted to make sure you are doing okay. If you are feeling low and need someone to talk to, you can call this hotline: 1 (800) 273-8255 or text “ANSWER” to 839863");
         } else if (mval.includes('I want to drop out of school'))	{
		alert("Hi! We wanted to make sure you are doing okay. If you are feeling low, please call 1 (800) 273-8255 or text “ANSWER” to 839863");
        };
    });
